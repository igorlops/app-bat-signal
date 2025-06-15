import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    content: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        gap:20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    btnSubmit: {
        backgroundColor: '#666',
        color:'#fff',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:7,
        width:'100%',
        textAlign:'center'
    },
    logo: {
        borderWidth:2,
        borderColor:'#333',
        borderRadius:999,
        padding:15,
        width:150,
        objectFit:'contain',
        height:150,
    },
    textTitle: {
        fontSize:25,
        fontWeight:800
    }
});