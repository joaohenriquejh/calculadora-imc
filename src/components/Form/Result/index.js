import {Text, View} from 'react-native';
import styles from "./style";

export default function Result(props) {
    let cor 
    if (props.IMC < 18.5) {
        cor = styles.corPBaixo
    } else if (props.IMC >= 18.5 && props.IMC < 24.9) {
        cor = styles.corPNormal
    } else if (props.IMC >= 25 && props.IMC < 29.9) {
        cor = styles.corSobreP
    } else if (props.IMC >= 30 && props.IMC < 34.9) {
        cor = styles.corObesidade
    } else if (props.IMC >= 35 && props.IMC < 39.9) {
        cor = styles.corObesidadeS
    } else {
        cor = styles.corObesidadeM
    }

    return(
        <View style={styles.resultadoImc}>
            <Text style={styles.informacao}>Classificação:</Text>
            <Text style={styles.IMC}>{props.IMC}</Text>
            <Text style={[styles.mensagemResultado, cor]}>{props.mensagemResultado}</Text>
        </View>
    );
}