
import { StatusBar } from 'expo-status-bar';
import { useState, prevState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput, Image } from 'react-native';


const PeopleCard = (props, {un_parametro}) =>{

    return (
      <View style={styles.cardContainer}>
        <View style={styles.fotoContainer}>
        <Image source={require('../assets/persona1.png')} style={styles.fotos} />
        </View>
        <View style={styles.datosContainer}>
            <Text style={ styles.textCard}>{props.nombre}</Text>
            <Text style={ styles.textCard}>{props.telefono}</Text>
            <Button title="Eliminar" onPress={props.unaFuncion} />
            
        </View>
      </View>
    )
  }

  export default PeopleCard;

  const styles = StyleSheet.create({
    

  
    //Persona Card:
    cardContainer:{
      backgroundColor: '#4169E1',
      width: '100%',
      borderRadius: 11,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      fontWeight: 'bold',
      marginTop: 5,
      marginBottom: 5,
      paddingTop: 5,
      paddingBottom: 5,
  
    },
    fotos:{
      width: 55,
      height: 55,
      alignSelf: 'stretch',
      backgroundColor: '#00000000',
      alignItems: 'flex-start',

    },
    fotoContainer:{
      backgroundColor: '#3CB371',
      width: '10%',
      alignItems: 'center',
      justifyContent: 'flex-start',
  
    },
    datosContainer:{
      flexDirection: 'column',
  
      
  
    },
    textCard:{
      color: '#FFFFFF',
      
      marginBottom: 5,
      
  
    },
  
  
  
  
  });
  