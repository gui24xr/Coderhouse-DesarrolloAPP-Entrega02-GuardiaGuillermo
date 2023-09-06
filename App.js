import { StatusBar } from 'expo-status-bar';
import { useState, prevState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput, Image, Modal } from 'react-native';

//Componentes.
import PeopleCard from './components/PeopleCard.js'
import ContactosLista from './components/ContactosLista.js';
import {setListado} from './components/ContactosLista.js';


 let misContactos= [
        {nombreContacto:"Guillermo", telefono:"1159149165", foto:'./assets/persona1.png'},
        {nombreContacto:"Alejandro", telefono:"2224535049",foto:'./assets/persona1.png'},
        {nombreContacto:"Luis", telefono:"11565432125", foto:'./assets/persona1.png'},
        {nombreContacto:"Rewq", telefono:"1122222222", foto:'./assets/persona1.png'}
    ] 


export default function App() {
  
  //-- ESTADOS ------------------------------------------------------------------------------
  //Textinput
 const [nombreIngresado,setNombreIngresado] = useState()
 const [telefonoIngresado,setTelefonoIngresado] = useState()
 const [modalVisible, setModalVisible] = useState(false);
 
//Modifico la lista a travez del useStaste.
const capturarNombreIngresado= text => {setNombreIngresado(text)}
const capturarTelefonoingresado= text => {setTelefonoIngresado(text)}

const updateListaContactos = (nuevoNombre,nuevoTelefono)=>{
  //setListado(prevState => [...prevState,{nombreContacto:nombreIngresado, Apellido:"Cooper",telefono:telefonoIngresado}])
  //setListado(prevState => [...prevState,{nombreContacto:nombreIngresado, Apellido:"Cooper",telefono:telefonoIngresado}])
  setListado(prevState => [...prevState,{nombreContacto:nuevoNombre, Apellido:"Cooper",telefono:nuevoTelefono}])

}



  return (
    <View style={styles.container}>
    
      <ContactosLista />
      
      <TextInput
          style={styles.inputBox}
          placeholder='Ingresar nombre.' 
          value={nombreIngresado}
          onChangeText={capturarNombreIngresado}/>

        <TextInput
          style={styles.inputBox}
          placeholder='Ingresar telefono.' 
          value={telefonoIngresado}
          onChangeText={capturarTelefonoingresado}/>

          <Button  title="Agregar contacto" onPress={updateListaContactos} />

          <Modal 
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {Alert.alert('Modal has been closed.');
                                        setModalVisible(!modalVisible);}}>
                <View>  
                    <Text>Hola</Text>
                </View>
          </Modal>

          <Button  title="Modal" onPress={()=>setModalVisible(!modalVisible)} />
          <Button  title="Capturados" onPress={()=>{console.log(nombreIngresado);console.log(telefonoIngresado)}} />
          <Button  title="Actualizar lista" onPress={()=>{updateListaContactos(nombreIngresado,telefonoIngresado)}} />

    </View>
        

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    //justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  item_lista:{
    width: '100%',
    
    backgroundColor: '#2471A3',
    fontWeight: 'bold',
    borderColor: "#FFFFFF",
    color: "#FFFFFF",
  },
  inputBox:{
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderRadius: 10,
    width: '90%',
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
  },
  listadoStyle:{
    width: '80%',
    height: '65%',
    backgroundColor: '#FFFFFF',
    flexGrow:0,
    alignContent: 'center',
    
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    
  },

  




});
