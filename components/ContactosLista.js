import { StatusBar } from 'expo-status-bar';
import { useState, prevState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput, Image } from 'react-native';

//Componentes.
import PeopleCard from './PeopleCard.js'

const ContactosLista = () => {

   let misContactos= [
        {nombreContacto:"Guillermo", telefono:"1159149165", foto:'./assets/persona1.png'},
        {nombreContacto:"Alejandro", telefono:"2224535049",foto:'./assets/persona1.png'},
        {nombreContacto:"Luis", telefono:"11565432125", foto:'./assets/persona1.png'},
        {nombreContacto:"Rewq", telefono:"1122222222", foto:'./assets/persona1.png'}
        ]
    // Estados:
    
    //Lista
    const [listado,setListado]= useState(misContactos) 

    /*function updateListaContactos(nuevoNombre,nuevoTelefono){
        //setListado(prevState => [...prevState,{nombreContacto:nombreIngresado, Apellido:"Cooper",telefono:telefonoIngresado}])
        //setListado(prevState => [...prevState,{nombreContacto:nombreIngresado, Apellido:"Cooper",telefono:telefonoIngresado}])
        setListado(prevState => [...prevState,{nombreContacto:nuevoNombre, Apellido:"Cooper",telefono:nuevoTelefono}])
      }
    */
    const eliminarContactos = () => {
      misContactos.pop()
      
      //nuevo_array= [...misContactos]//[{nombreContacto:"ramon", Apellido:"Cooper",telefono:"35555"}]
      //setListado(() =>nuevo_array)
      console.log(misContactos)
      }

    return (

        <FlatList 
        style={styles.listadoStyle}
        data={listado}
        renderItem={ ({item}) => <PeopleCard nombre={item.nombreContacto}
                                             telefono={item.telefono} 
                                             unaFuncion={eliminarContactos}
                                             />} 
        keyExtractor={item => item.nombreContacto}/>
    )

}

export default ContactosLista;


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