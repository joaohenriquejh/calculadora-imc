import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    resultadoImc: {
        marginBottom: 20,
    },

    informacao: {
        textAlign: 'center',
        fontSize: 10,
        marginBottom: 10,
    },

    IMC: {
        backgroundColor: '#DDD',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    mensagemResultado: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    corPBaixo: {
        backgroundColor: 'yellow',
    },

    corPNormal: {
        backgroundColor: 'green',
    },

    corSobreP: {
        backgroundColor: 'salmon', 
    },

    corObesidade: {
        backgroundColor: 'orange',
    },

    corObesidadeS: {
        backgroundColor: '#FF4500',
    },

    corObesidadeM: {
        backgroundColor: 'red',
    },
});

export default styles;