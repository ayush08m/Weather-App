import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
import { theme } from "../theme";
import { CalendarDaysIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { CalendarIcon, MapPinIcon } from "react-native-heroicons/solid";
import {debounce, set} from 'lodash';
import { useCallback,useEffect} from "react";
import { fetchLocations, fetchWheatherForecast } from "../api/wheather";
import { weatherImages } from "../contants/index";


const HomeScreen = () => {
  const [showSearch, toggleSearch] = React.useState(false);
  const [locations,setLocations]=React.useState([]);
  const [weather, setWeather]=React.useState({});

  const handleLocation=(loc)=>{
    console.log('location: ',loc);
    setLocations([]);
    toggleSearch(false);
    fetchWheatherForecast({
      cityName: loc.name,
    days:'7'
  }).then(data=>{
    setWeather(data);
     console.log('got forecast: ',data);
  })
  }

  const handleSearch = value=>{
    // console.log('value: ',value)
    // fetch locations
    if(value.length>2){
      fetchLocations({cityName: value}).then(data=>{
        // console.log('got locations: ',data);
        setLocations(data);
      })
    }
  }

  useEffect(()=>{
    fetchMyWheatherData()
  },[]);

  const fetchMyWheatherData= async()=>{
    fetchWheatherForecast({
      cityName: 'New York',
    days:'7'
    }).then(data=>{
      setWeather(data);
    })
  }




  const handleTextDebounce= useCallback(debounce(handleSearch, 1200),[]);

  const {current,location} = weather;

  return (
    <View style={tw`flex-1 relative`}>
      <StatusBar style="light" />
      <Image
        blurRadius={80}
        source={require("../assets/bg.png")}
        style={tw`absolute h-full w-full`}
      />
      <SafeAreaView style={tw`flex flex-1`}>
        {/* seach section */}
        <View style={[{ height: "7%" }, tw`mx-4 relative z-50`]}>
          <View
          
            style={[
              tw`flex-row justify-end items-center rounded-full `,
              { backgroundColor: showSearch? theme.bgWhite(0.2):'transparent'}
            ]}
          >
            {showSearch ? (
              <TextInput
                onChangeText={handleTextDebounce}
                placeholder="Search city"
                placeholderTextColor={"lightgray"}
                style={tw`flex-1 pl-6 pb-1 h-12 text-base text-white`}
              />
            ) : null
            }
            <TouchableOpacity
                onPress={() => toggleSearch(!showSearch)}
              style={[
                tw` p-3 rounded-full m-1 mr-1`,
                { backgroundColor: theme.bgWhite(0.3) },
              ]}
            >
              <MagnifyingGlassIcon size={25} color="white" />
            </TouchableOpacity>
          </View>
          {
            locations.length>0 && showSearch?(
                <View style={tw`absolute w-full bg-gray-300 top-16 rounded-xl`}>
                    {
                        locations.map((loc, index)=>{
                            let showBorder= index+1 != locations.length;
                            let borderClass = showBorder? 'border-b-2 border-b-gray-400':'';
                            return(
                                <TouchableOpacity
                                onPress={()=> handleLocation(loc)}
                                key={index}
                                style={tw`flex-row items-center border-0 p-3 px-4 mb-1 border-b-2 border-b-gray-400`}
                                >
                                    <MapPinIcon size={25} color="gray"/>
                                    <Text style={tw`text-black text-lg ml-2`}>{loc?.name}, {loc?.country}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            ):null
          }
        </View>
        {/* forecast section */}
        <View style={tw`mx-4 flex justify-around flex-1 mb-2`}>
          {/* location */}
          <Text style={tw`text-white text-center text-4xl font-bold`}>
            {location?.name},
             <Text style={tw`text-lg font-semibold text-gray-300`}>
              {" "+location?.country}
             </Text>
          </Text>
          {/* weather image */}
          <View style={tw`flex-row justify-center`}>
            <Image
             source={weatherImages[current?.condition?.text]}
              style={tw`w-52 h-52 `}
             
            />
          </View>
          {/* degree-celsius */}
          <View style={tw`space-y-2`}>
            <Text style={tw`text-center font-bold text-white text-6xl ml-5`}>
              {current?.temp_c}&#176;
            </Text>
             <Text style={tw`text-center text-white text-xl tracking-widest`}>
              {current?.condition?.text}
            </Text>
          </View>
          {/* other stats */}
          <View style={tw`flex-row justify-between mx-4`}>
            <View style={tw`flex-row space-x-2 items-center`}>
              <Image
                source={require('../assets/wind.png')}
                style={tw`w-6 h-6`}
              />
              <Text style={tw`text-white font-semibold text-base ml-1`}>
                 {current?.wind_kph}km
              </Text>
            </View>
            <View style={tw`flex-row space-x-2 items-center`}>
              <Image
                source={require('../assets/drop.png')}
                style={tw`w-6 h-6`}
              />
              <Text style={tw`text-white font-semibold text-base ml-1`}>
                 {current?.humidity}%
              </Text>
            </View>
            <View style={tw`flex-row space-x-2 items-center`}>
              <Image
                source={require('../assets/sun.png')}
                style={tw`w-6 h-6`}
              />
              <Text style={tw`text-white font-semibold text-base ml-1`}>
                 6:05 AM
              </Text>
            </View>
          </View>
        </View>

        {/* forecast for next-day */}
        <View style={tw`mb-2 space-y-3`}>
          <View style={tw`flex-row items-center mx-5 space-x-2`}>
            <CalendarDaysIcon size="22" color="white" style={tw`mb-3`}/>
            <Text style={tw`text-white text-base ml-2 mb-3`}>
              Daily Forecast
            </Text>
          </View>
          <ScrollView horizontal contentContainerStyle={{paddingHorizontal:15}} showsHorizontalScrollIndicator={false}>
            {
              weather?.forecast?.forecastday?.map((item, index)=>{
                let date = new Date(item.date);
                let options= {weekday:'long'};
                let dayName = date.toLocaleDateString('en-US', options);
                dayName = dayName.split(',')[0];
                return(
                  <View 
                    key={index}
                    style={[tw`flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4`,{backgroundColor: theme.bgWhite(0.15)}]}>
                    <Image source={weatherImages[item?.day?.condition?.text]}
                    style={tw`h-11 w-11`}
                    /> 
                    <Text style={tw`text-white`}>
                      {dayName}
                    </Text> 
                    <Text style={tw`text-white text-xl font-semibold`}>
                      {item?.day?.avgtemp_c}&#176;
                    </Text> 
                  </View>
                )
              })
            }
            
            


          </ScrollView>
        </View>

      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
