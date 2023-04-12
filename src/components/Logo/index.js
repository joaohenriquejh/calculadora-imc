import { View, Image } from "react-native";
import styles from "./style";

export default function Logo() {
    return (
        <View style={styles.containerLogo}>
            <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
        </View>
    )
}