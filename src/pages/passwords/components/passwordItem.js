import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Pressable } from 'react-native';


export default function PasswordItem({data,removePassword}) {

    return(
        <Pressable onLongPress={removePassword} style={styles.container} >
            <Text style={styles.text}>
                {data}
            </Text>
        </Pressable>
    )


}


const styles = StyleSheet.create({

    container:{
        backgroundColor:"#6B6D70",
        padding:14,
        width:"100%",
        marginBottom:14,
        borderRadius:8,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    text:{
        color:"#FFF"
    }
})
