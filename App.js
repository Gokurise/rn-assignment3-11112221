
import { SafeAreaView, ScrollView, StyleSheet, Text, View,Image, TextInput, FlatList } from 'react-native';
const stat=[
{id:0,
  name:'Exercise',
  text:'12 task',
  image:require("./assets/s.png")},
  {id:1,
    name:'Study',
    text:'12 task',
    image:require("./assets/desk.png")},
    {id:2,
      name:'Code',
      text:'12 task',
      image:require("./assets/desk.png")},
      {id:3,
        name:'travel',
        text:'12 task',
        image:require("./assets/desk.png")},
        {id:4,
          name:'cook',
          text:'12 task',
          image:require("./assets/desk.png")},
          {id:5,
            name:'Dance',
            text:'12 task',
            image:require("./assets/desk.png")},
            {id:6,
              name:'Cloth',
              text:'12 task',
              image:require("./assets/desk.png")},
  

];
const data=[
  {id:0,
    name:'Mobile Development',
    },
    {id:1,
      name:'Web Development',
     },
      {id:2,
        name:'Push-ups',
        },
        {id:3,
          name:'Javascript',
         },
          {id:4,
            name:'Python',
           },
            {id:5,
              name:'Java',
              },
              {id:6,
                name:'PHP Development',
               },
    
               {id:7,
                name:'Study',
                },
                {id:8,
                  name:'C++',
                 },
                  {id:9,
                    name:'C -sharp',
                    },
                    {id:10,
                      name:'Dot',
                     },
                      {id:11,
                        name:'Kotlin',
                       },
                        {id:12,
                          name:'Django',
                          },
                          {id:13,
                            name:'React',
                           },
                           {id:14,
                            name:'Microsoft Training',
                           },
                           
]



export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <ScrollView  >
    <View  style={styles.overview} >
      <View>
      <Text style={styles.textedit}>Hello , Devs</Text>
      <Text >14 tasks today</Text>

      </View>
      <View>
        <Image source={require('./assets/p.png')}/>
      </View>
    
    </View>
    <View  style={styles.overview} >
        <View style={styles.search}>
        <Image source={require('./assets/Vector.png')}/>
        <TextInput style={styles.Textin} placeholder='Search'/>
        </View>
        <View>
        <Image source={require('./assets/Filter.png')}/>
        </View>


      
      </View>
      <View>
        <Text style={styles.Cat}>Categories</Text>
      </View>
     
     <View>
     <FlatList 
     data={stat}
     keyExtractor={item=>item.id.toString()}
     renderItem={({item})=>(
      <View style={{backgroundColor:'white', borderRadius:10, padding:15, fontSize:'Bold', fontWeight:'bold'
      }}>
        <View>
        <Text style={{fontWeight:'bold', fontSize:'15'}}>{item.name}</Text>
        <Text>{item.text}</Text>
        </View>
        <View>
 
        <Image source={item.image}/>
        </View>
      </View>





  )}
  horizontal
  contentContainerStyle={{columnGap:14}}/>

 
     </View>
     <View>
      <Text style={styles.Cat}>Ongoing Tasks</Text>
     </View>

     <View>
     <FlatList 
     data={data}
     keyExtractor={item=>item.id.toString()}
     renderItem={({item})=>(
      <View style={{backgroundColor:'white', borderRadius:25, padding:50
      }}>
        <View>
        <Text style={{fontWeight:'bold', fontSize:15}}>{item.name}</Text>
       
        </View>
       
      </View>





  )}

  contentContainerStyle={{rowGap:14}}/>

 
     </View>
      
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    flexDirection:'row',
   
    
  },
  textedit:{
    fontSize:40,
    fontWeight:'bold',
    
  },
  overview:{
   display:'flex' ,
   justifyContent:'space-between',
   flexDirection:'row', 
   padding:15,
   flex:1
  },
   Textin:{
    width:273,
    marginLeft:10,
   
    
    
   },
   search:{
    display:"flex",
    
    flexDirection:"row",
    alignItems:'center',
    padding:'10',
    backgroundColor:'white',
    borderRadius:10,
    borderColor:'#F7F0E8',
   },
   Cat:{
    display:'flex' ,
    justifyContent:'space-between',
    flexDirection:'row', 
    padding:15,
    flex:1,
    fontSize:20,

   }
});
