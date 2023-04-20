//login
/*
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [ligar, setLigar] = useState (true);
  const [Cadastrar, setCadastrar] = useState ('Cadastre-se');
   
  const clicarBotao = () =>{
    setLigar(!ligar);
  if (ligar == false){
    
  }else if (ligar == true){
   
  }
   }

  const handleLogin = () => {
    console.log('Email: ', email);
    console.log('Senha: ', senha);
    
  };

  return (
    
    <View style={styles.container}>
     
   
   <View style={styles.container3}>
   <MaterialCommunityIcons name="book-open-page-variant" size={40} color="black" />
   <Text style={styles.titulo}>BookTime</Text> 
   
     </View>

      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <AntDesign name="mail" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          leftIcon={<AntDesign name="mail" size={24} color="black" />}
        />
      </View>
      <View style={styles.inputContainer}>
        <AntDesign name="lock" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          leftIcon={<AntDesign name="mail" size={24} color="black" />}
        />
         </View>
        
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      
      <Button
     title = { Cadastrar }
     onPress = {clicarBotao}
     />

         
        {
          ligar ?
          <Text></Text>
          :
        <View style={styles.container2}>    
        <Text style={styles.chat1}></Text>  
       
        </View>
        }
     
      
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: 10,
    width: '100%',
  },
  input: {
    flex: 1,
    marginLeft: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 3,
    paddingHorizontal: 24,
    marginBottom:10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container3: {
  
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#e0d517',
    width:500,
    borderRadius: 10,
    marginBottom:40,
    marginTop:8,
    height:100,
  },
  titulo: {
    fontSize: 30,
    marginLeft: 30,
   }
});
*/
// tela cadastro
/*
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [CEP, setCEP] = useState('');
  const [CPF, setCPF] = useState('');
  const [Telefone, setTelefone] = useState('');
  const [ligar, setLigar] = useState (true);
  const [Cadastrar, setCadastrar] = useState ('Cadastrar');
   
  const clicarBotao = () =>{
    setLigar(!ligar);
  if (ligar == false){
    
  }else if (ligar == true){
   
  }
   }

  const handleLogin = () => {
    console.log('Email: ', email);
    console.log('Senha: ', senha);
    console.log('CEP: ', CEP);
    console.log('Telefone: ', Telefone);
    console.log('CPF: ', CPF);
  };

  return (
    
    <View style={styles.container}>
     
   
   <View style={styles.container3}>
   <MaterialCommunityIcons name="book-open-page-variant" size={40} color="black" />
   <Text style={styles.titulo}>BookTime</Text> 
   
     </View>

      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.inputContainer}>
        <AntDesign name="mail" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          leftIcon={<AntDesign name="mail" size={24} color="black" />}
        />
      </View>
      <View style={styles.inputContainer}>
        <AntDesign name="lock" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          leftIcon={<AntDesign name="mail" size={24} color="black" />}
        />
         </View>
         <View style={styles.inputContainer}>
         <AntDesign name="idcard" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={CPF}
          onChangeText={setCPF}
          keyboardType='numeric'
          secureTextEntry
          leftIcon={<AntDesign name="mail" size={24} color="black" />}
        />
         </View>
        <View style={styles.inputContainer}>
        <AntDesign name="home" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          value={CEP}
          onChangeText={setCEP}
          keyboardType="numeric"
          autoCapitalize="none"
          leftIcon= {<AntDesign name="home" size={24} color="black" />}
          />
      

      </View>
       
      <View style={styles.inputContainer}>
      <AntDesign name="phone" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="+55 (DDD) xxxx-xxxx"
          value={Telefone}
          onChangeText={setTelefone}
          keyboardType="numeric"
          autoCapitalize="none"
          leftIcon= {<AntDesign name="phone" size={24} color="black" />}
          />
      

      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      
      <Button
     title = { Cadastrar }
     onPress = {clicarBotao}
     />

         
        {
          ligar ?
          <Text></Text>
          :
        <View style={styles.container2}>    
        <Text style={styles.chat1}>Você foi cadastrado</Text>  
       
        </View>
        }
     
      
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: 10,
    width: '100%',
  },
  input: {
    flex: 1,
    marginLeft: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 3,
    paddingHorizontal: 24,
    marginBottom:10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container3: {
  
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#e0d517',
    width:500,
    borderRadius: 10,
    marginBottom:40,
    marginTop:8,
    height:100,
  },
  titulo: {
    fontSize: 30,
    marginLeft: 30,
   }
});
*/
//tela catalogo
/*
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';

import {useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 




export default function App() {




const [numeros, setNumeros] = useState([

{numero: 'Suspense', key: 1 },

{numero: 'Romance', key: 2 },

{numero: 'Geek', key: 3 },

{numero: 'Científico', key: 4 },

{numero: 'Contos', key: 5 },

{numero: 'Biografias', key: 6 },

{numero: 'Autoajuda', key: 7 },

{numero: 'Direito', key: 8 },

{numero: 'História', key: 9 },

{numero: 'Infantil', key: 10 },

{numero: 'LGBTQ+', key: 11 },

{numero: 'Ação', key: 12 },

{numero: 'HQS', key: 13 },

{numero: 'Religião', key: 14 },

{numero: 'Erótico', key: 15 },

{numero: 'Medicina', key: 16 },

])




 return (
 
  <View style={styles.container}>
     
   
  <View style={styles.container3}>
  <AntDesign name="bars" size={50} color="black" />
  <MaterialCommunityIcons name="book-open-page-variant" size={40} color="black" />
  <Text style={styles.titulo}>BookTime</Text> 
  <MaterialCommunityIcons name="account-circle" style={styles.icon} size={60} color="black" />
    </View>
   
    <View style={styles.container2}>

   

  <Text style={styles.titulo1}>Promoção do dia</Text> 
  <MaterialCommunityIcons name="sale" size={35} color="white" />

  </View>
  <View style={styles.container4}>
 <Text style={styles.titulo3}>Categorias :</Text> 
 
</View>
 <FlatList
 
 numColumns={2}
 keyExtractor={(item) => item.key}
 data={numeros}
 renderItem={({ item }) => (
   <TouchableOpacity 
 
   >
   <Text style={styles.quadrado}>{item.numero}</Text>
   </TouchableOpacity>
 )
 }
 />

 </View>
 );
}

 




const styles = StyleSheet.create({

container: {

flex: 1,

backgroundColor: '#fff',

 alignItems: 'center',

 justifyContent: 'center',
 },




quadrado:{
marginTop: 20,
 padding: 20,
paddingVertical: 40,
backgroundColor: '#1e81b0',
 fontSize: 24,
 margin: 2,
 textAlign: 'center',
 color:'white',
 width:200,


 },
 container3: {
  
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flexDirection: 'row',
  backgroundColor: '#e0d517',
  width:500,
  borderRadius: 10,
  marginBottom:40,
  marginTop:8,
  height:100,
},
titulo: {
  fontSize: 30,
  marginLeft:7,
  marginRight:5,
 },
 container2: {
  
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  backgroundColor: '#1e81b0',
  width:500,
  borderRadius: 10,
  marginBottom:20,
 
  height:200,
},
titulo1: {
  fontSize: 30,
  marginRight: 30,
  alignItems:'center',
  color:'white'
 },
 container4: {
  
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'row',
alignSelf:'flex-start'



 
},
titulo3:{
  color:'black',
  fontSize:40,
 
},

 
});
*/
//tela livros
/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native';


export default function App() {
  const [numeros, setNumeros] = useState([

    { numero: '1', key: 1 },
    { numero: '2', key: 2 },
    { numero: '3', key: 3 },
    { numero: '4', key: 4 },
    { numero: '5', key: 5 },
    { numero: '6', key: 6 },
    { numero: '7', key: 7 },
    { numero: '8', key: 8 },
    { numero: '9', key: 9 },
    { numero: '10', key: 10 },
    ])
  
  return (

    
     <ScrollView>
   
    <View style={styles.container3}>
    
    <MaterialCommunityIcons name="book-open-page-variant" size={40} color="black" />
    <Text style={styles.titulo}>BookTime</Text> 
    
      </View>
     
    <View>
    <View style={styles.container4}>
    
   
    <Text style={styles.titulo2}>Mais Vendidos :</Text> 
    
      </View>
     

    <FlatList
    horizontal={true}
      numColumns={1}
      keyExtractor={(item) => item.key}
      data={numeros}
      renderItem={({ item }) => (
        <TouchableOpacity 
        
        >
        <Text style={styles.quadrado}>{item.numero}</Text>
        </TouchableOpacity>
      )
      }
      />
      </View>
      <View style={styles.container5}>
    
   
    <Text style={styles.titulo2}>Melhor avaliados:</Text> 
    
      </View>
      <FlatList
    horizontal={true}
      numColumns={1}
      keyExtractor={(item) => item.key}
      data={numeros}
      renderItem={({ item }) => (
        <TouchableOpacity 
        
        >
        <Text style={styles.quadrado}>{item.numero}</Text>
        </TouchableOpacity>
      )
      }
      />
     
      
     </ScrollView>



     
  );
}
const styles = StyleSheet.create({
  quadrado: {
    marginTop: 8,
    padding: 80,
    paddingVertical: 50,
    backgroundColor: '#1e81b0',
    fontSize: 24,
    marginLeft:20,
    textAlign: 'center',
    color:'white',
    width:200,
    height:300,
    flexDirection:'column',
  },
  titulo: {
    fontSize: 30,
    marginLeft: 30,
   },
   container3: {

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#e0d517',
    width:420,
    borderRadius: 10,
    height:100,
    marginTop:20,

  },
  container4: {

    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop:8,
    width:300, 
  },
  titulo2: {
    fontSize: 30,
    marginBottom:20,
   },
}
)
  ;
  */