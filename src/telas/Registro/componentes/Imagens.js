import {  Dimensions, Image, StyleSheet } from "react-native";
import { Texto } from "../../../componentes/Texto"

import registro1 from '../../../../assets/img/lixo-garrafa.jpg';
import registro2 from '../../../../assets/img/poluicao-agua.jpeg';
import registro3 from '../../../../assets/img/poluicao-ar.jpg';
import registro4 from '../../../../assets/img/poluicao-terra.jpg';
import registro5 from '../../../../assets/img/poluicao-rio.jpg';
import registro6 from '../../../../assets/img/lixo-terra.jpg';
import registro7 from '../../../../assets/img/lixo-estrada.jpg';

const width = Dimensions.get('screen').width;

export default function Imagens() {
    return<>
        <Texto style={styles.titulo}>Descarte Incorreto</Texto>
        <Image source={registro1} style={styles.registro}/>
    </>
}

const styles = StyleSheet.create({
    registro:{
        
        fontFamily: "MontserratBold",
        width: "100%",
        height: 400 / 600 * width
    },
    titulo:{
        marginTop: 30,
        marginBottom: 10,
        width: "100%",
        textAlign: "center",
        fontSize: 30,
        lineHeight: 20,
        color: "black",
        padding: 16,
        fontWeight: 'bold'

    },
})