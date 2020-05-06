import React, { useState, useEffect} from 'react';
import { StyleSheet, View,Text } from 'react-native';
import Header from './components/Header';
import GlobalCases from './screens/GlobalCases';
import SpecificCases from './screens/SpecificCases';

export default function App() {
  
  const [state,setState] = useState([]);
  const [stateCountry,setStateCountry] = useState([]);
  const [country,setCountry] = useState("");
 
  const stateDataGlobal = (dataApi) => {
    setState(dataApi);
  };

  const stateDataCountries = (dataApi) => {
    setStateCountry(dataApi);
  };

  
  const startCountry = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  const changeView = (blankCountry)=>{
    setCountry(blankCountry)
  }

  const getData = async () => {
    let response = await fetch("https://api.covid19api.com/summary");
    let datos = await response.json();
    let dataGlobal = datos.Global;
    let dataCountries = datos.Countries;
    stateDataGlobal(dataGlobal);
    stateDataCountries(dataCountries);
    console.log("oso");
  };

  useEffect(() => {
    getData();
  },[]);


  const dataGlobal = state;
  const dataCountries = stateCountry;

  let content = null;
 
  if(country !="" ){
    dataCountries.map((item, key) => {
        if (item.Country.indexOf(country) === -1) {
            return;
        }
        content = <SpecificCases key={key} Countries={item} onChangeView={changeView} />
    })
  }else{
    content = <GlobalCases global={dataGlobal} countries={dataCountries} onViewCountry={startCountry}/>;
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
