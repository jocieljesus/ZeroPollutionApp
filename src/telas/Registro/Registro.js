import {Image, StyleSheet,View} from 'react-native';

import registro1 from '../../../assets/img/lixo-garrafa.jpg';
import registro2 from '../../../assets/img/poluicao-agua.jpeg';
import registro3 from '../../../assets/img/poluicao-ar.jpg';
import registro4 from '../../../assets/img/poluicao-terra.jpg';
import registro5 from '../../../assets/img/poluicao-rio.jpg';
import registro6 from '../../../assets/img/lixo-terra.jpg';
import registro7 from '../../../assets/img/lixo-estrada.jpg';
import local from '../../../assets/icons/local.png';
import Texto from '../../componentes/Texto';
import Imagens from '../Registro/componentes/Imagens'



export default function Resgistro(){
    return <View>
                <Imagens/>
                <View style={ styles.registros}>
                    <Texto style={styles.descricao}> Garrafa Pet Descartada no Rio </Texto>
                    <View style={styles.endLocal}>
                        <Image source={local}  style={styles.local}/>
                        <Texto style={styles.endereco}> 
                            Av Ayrton Senna, 1850, Mangabeira,{'\n'}Feira de Santana - Bahia 
                        </Texto>
                    </View>
                </View>
            </View>    
}

const styles = StyleSheet.create({
   
    registros:{
        paddingVertical: 8,
        paddingHorizontal:16

    },
   
    descricao:{
        fontSize: 20,
        lineHeight: 40,
        textAlign: "center",
        fontWeight: 'bold'
    },
    endereco:{
        fontSize: 15,
    },
    local:{
        width: 38,
        height: 38,
    },
    endLocal:{
        flexDirection: "row",
        gap: 10,
    }
})

