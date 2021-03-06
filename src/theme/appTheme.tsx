import {StyleSheet} from 'react-native'
export const colors={
    primary:'#5856D6',

}

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20,

    },
    title:{
        fontSize:30,
        marginBottom: 10,
    },
    botonGrande:{
        width:80,
        height:80,
        backgroundColor:'red',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10
    },
    botonGrandeTexto:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    },
    avatarContainer:{
        alignItems:'center',
        marginTop:20
    },
    avatar:{
        width:100,
        height:100,
        borderRadius:100
    },
    menuContainer:{
      marginVertical:20,
      marginHorizontal:20,
    //   alignItems:'center'
    },
    menuBoton:{
        marginVertical:10
    },
    menuTexto:{
        fontSize:20
    },
    icon:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
