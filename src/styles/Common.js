import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498ab',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#fff'
    },
    registerTitleText: {        
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 30,
        textAlign: 'center'
    },
    formContainer: {
        padding: 20,
        flexGrow: 1,
        justifyContent: 'center'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,.2)',
        marginBottom: 15,
        color: '#fff',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        marginTop: 10,
        marginBottom: 10
      },
    buttonText:{
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
      }
})



export default common;