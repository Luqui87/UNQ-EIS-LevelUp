import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { getImage } from './functions';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    margin:10,
  },
  column1:{
    flexDirection: 'row',
    height: 450,
  },
  personajeCard: {
    margin: 10,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    backgroundColor: '#FF3737',
    color: 'white',
    marginTop: 10,
    width: 300
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  imagen:{
    width: 200,
  },
  info:{
    marginTop: 100,
    flexDirection: 'column',
    alignItems: 'center',
    width: 400
  },
  stats:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  stat:{
    width: '10em',
    textAlign : 'center',
  },
  valor:{
    backgroundColor: '#FF3737',
    height: 40,
    fontSize: 30,
    marginTop: 3,
    marginLeft: 27,
    width: 50,
  }
});

// Create Document Component
const PersonajePDF = ({personaje}) => (
        <Document>
            <Page size="A4" style={styles.page}>
            <View style={styles.column1}>
                <View style={styles.personajeCard}>
                    <Text style={{marginBottom: 10,}}>Thorfinn "El Pacifista"</Text>
                    <Image style={styles.imagen} src={getImage(personaje.race, personaje.img)}/>
                    <Text style={{marginTop:15}}>Raza: {personaje.race}</Text>
                    <Text style={{marginTop:15}}>Clase: {personaje.class}</Text>
                    <Text style={{marginTop:15}}>Alineación:{personaje.alignment}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={{fontSize:30}}>Stats</Text>
                    <View style={styles.stats}>
                        <View style={styles.stat}>
                            <Text>Fuerza</Text>
                            <Text style={styles.valor}>{personaje.strength}</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text>Agilidad</Text>
                            <Text style={styles.valor}>{personaje.dexterity}</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text>Constitución</Text>
                            <Text style={styles.valor}>{personaje.constitution}</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text>Integligencia</Text>
                            <Text style={styles.valor}>{personaje.intelligence}</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text>Sabiduría</Text>
                            <Text style={styles.valor}>{personaje.wisdom}</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text>Carisma</Text>
                            <Text style={styles.valor}>{personaje.charisma}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={{fontSize:30, textAlign:'center'}}>Backstory</Text>
            <Text style={{padding:20}}>
            {personaje.biography}
            </Text>
            </Page>
        </Document>
);

export default PersonajePDF;