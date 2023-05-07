
import { Dropdown } from 'react-native-element-dropdown';
import { View, Text,FlatList,StyleSheet,Pressable,TextInput, Platform } from 'react-native'
import React, {useState,useEffect}from 'react'
import {firebase} from '../../firebase-config'
import { QuerySnapshot,query, where,collection} from 'firebase/firestore';
import MapView,{Marker} from 'react-native-maps';
import { SelectList } from 'react-native-dropdown-select-list';




const HomeScreen = ({ navigation }) => {


    const [users, setUsers] = useState([]); 
    const [users1, setUsers1] = useState([]); 
    const [SearchArea, setSearchArea] = useState([]); 
    const [value, setValue] = useState({ latitude:  10.849409, longitude: 106.753706});
    const [coordination, setCoordination] = useState(null);
    const citiesRef = firebase.firestore() .collection('Barber');
  
    const [isFocus, setIsFocus] = useState(false);
    const todoRef1 = firebase.firestore().collection('Barber')
  
    const todoRef = firebase.firestore().collection('Area')
  
    useEffect( () =>{
      const loadData = async () => {
      todoRef
      .onSnapshot(
          QuerySnapshot =>{
              const users1=[]
              QuerySnapshot.forEach((doc)=>{
                  const{latitude,longitude,name,value,area}=doc.data()
                  users1.push({
                      id:doc.id,
                      name,
                      value,
                      latitude,
                      longitude,
                      area,
                  })
              })
              setUsers1(users1)
          }
      )}
      loadData();
  },[])
 

  // useEffect( () =>{
    const loadData = async (area) => {
      console.log('2222222222222',area)
      citiesRef
      .where('area','==',`${area}`).onSnapshot(
        QuerySnapshot =>{
        QuerySnapshot.forEach((doc)=>{
        const{latitude,longitude,name,value,area}=doc.data()
          SearchArea.push({
            id:doc.id,
            name,
            value,
            latitude,
            longitude,
            area,
          })
        })
       setSearchArea(SearchArea)
       
      }
      
      )
 
    }
  //   loadData();
  // },[])


  
//  SELECT Barber.latitude, Barber.longitude, Barber.name, Barber.rate
// FROM Area
// RIGHT JOIN Barber
// ON Area.area = Barber.area
// ORDER BY Area.area;
  
  useEffect( () =>{
    const loadData = async () => {
    todoRef1
    .onSnapshot(
        QuerySnapshot =>{
            const users=[]
            QuerySnapshot.forEach((doc)=>{
                const{latitude,longitude,name,value,area}=doc.data()
                users.push({
                    id:doc.id,
                    name,
                    value,
                    latitude,
                    longitude,
                    area,
                })
            })
            setUsers(users)
          
        }
    )}
    loadData();
  },[])
  
  
    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.name, isFocus && { color: 'blue' }]}>
          </Text>
        );
      }
      return null;
    };
    
  
    const map1 = new Map(
      SearchArea.map(obj => {
        return [obj.latitude, obj.longitude];
      }),
      
    );
    console.log('2222222222222',map1)


    return (
        <View style={styles.container}>
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={users1}
            search
            maxHeight={200}
            labelField="name"
            valueField="value"
            placeholder={!isFocus ? 'Barber Address' : '...'}
            searchPlaceholder="Search..."
            value={users1}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setIsFocus(false);
              setCoordination({
            latitude: item?.latitude,
            longitude: item?.longitude,
            latitudeDelta: 0.007,
            longitudeDelta: 0.007,
            
          })
            loadData(item?.area) 
            console.log("1111111",item.area);
              // TODO : function handle area ??
            }
            
            }
            
          />
          
    
            <MapView style={styles.map}
            region={coordination}
          
           >
            {SearchArea.length > 0 &&
              SearchArea.map((map1, index) => {
               return(
                <Marker
                key={index}
                title={map1.name}
                description={map1.name} 
                coordinate = {{latitude: map1.latitude,
               longitude:map1.longitude}}
                ></Marker>
                );})
                }
           </MapView>
          
        </View>
      );
    };



    const styles = StyleSheet.create({
        container: {
          backgroundColor: 'white',
        },
        containermap: {
          flex: 1,
        },
        map: {
          width: '100%',
          height: '100%',
        },
        dropdown: {
          height: 50,
          borderColor: 'gray',
          borderWidth: 0.5,
          borderRadius: 8,
          paddingHorizontal: 8,
        },
        icon: {
          marginRight: 5,
        },
        label: {
          position: 'absolute',
          backgroundColor: 'white',
          left: 22,
          top: 8,
          zIndex: 999,
          paddingHorizontal: 8,
          fontSize: 14,
        },
        placeholderStyle: {
          fontSize: 16,
        },
        selectedTextStyle: {
          fontSize: 16,
        },
        iconStyle: {
          width: 20,
          height: 20,
        },
        inputSearchStyle: {
          height: 40,
          fontSize: 16,
        },
      });

export default HomeScreen;