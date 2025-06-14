import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    sectionImg: {

    },
    logo: {

    },
    content: {
        alignItems: 'center',
        backgroundColor:'blue'
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
        alignItems:'center',
        backgroundColor:'#f4f4f4'
    },
    inputText: {
        borderColor: '#a4a4a4',
        borderWidth:2,
        paddingVertical: 10,
        paddingHorizontal:20,
        borderRadius:7,
        width:'100%'

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
        width:'100%'
    }
});