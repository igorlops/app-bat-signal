import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    content: {
        display:'flex',
        flexDirection:'column',
        alignItems: 'flex-start',
        width:'100%',
        paddingHorizontal:'10%',
        justifyContent:'flex-start',
        height:'100%'
    },
    sectionImg: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        width:'100%',
        padding:0,
        margin:0,
    },
    logo: {
        width:100,
        objectFit:'contain',
        height:150
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    formContent: {
        display:'flex',
        flexDirection:'column',
        gap:20,
        justifyContent:'flex-start',
        width:'100%',
        paddingHorizontal:'10%',

    },
    textLabel: {
        textAlign:'left',
        fontSize:20
    },
    inputText: {
        borderColor: '#a4a4a4',
        borderWidth:2,
        paddingVertical: 10,
        paddingHorizontal:20,
        borderRadius:7,
        width:'100%',
        fontSize:20
    },
    inputTextArea: {
        borderColor: '#a4a4a4',
        borderWidth:2,
        paddingVertical: 10,
        paddingHorizontal:20,
        borderRadius:7,
        width:'100%'
    },
    btnSubmit: {
        backgroundColor: '#666',
        color:'#fff',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:7,
        width:'100%',
        textAlign:'center'
    }
});