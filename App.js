import React, { useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GlobalCases from './screens/GlobalCases';
import SpecificCases from './screens/SpecificCases';

export default function App() {
  
  const [state,setState] = useState({data: []});
  const [country,setCountry] = useState({data: []});
 
  const stateData = (dataApi) => {
    setState({ data: dataApi });
  };

  const getData = async () => {
    let response = await fetch("https://api.covid19api.com/summary");
    let data = await response.json();
    stateData(data);
  };

  useEffect(() => {
    getData();
    console.log("oso");
  },[]);

  const startCountry = (selectedCountry) => {
    setCountry({data: selectedCountry});
  };

  const changeView = (blankCountry)=>{
    setCountry({data: blankCountry})
  }

  const { data } = state;
  const Countries = data.Countries;
  console.log(country);

  let content = <GlobalCases covid={data} onViewCountry={startCountry}/>;

  if(country.data !=""){
    Countries.map((item, key) => {
        if (item.Country.indexOf(country.data) === -1) {
            return;
        }
        content = <SpecificCases key={key} Countries={item} onChangeView={changeView} />
    })
  }else{
    content = <GlobalCases covid={data} onViewCountry={startCountry}/>;
  }

  return (
    <View style={styles.container}>
    <Header title="COVID-19" />
    {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
