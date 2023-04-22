import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { getImage } from './functions';

// Create styles
const styles = StyleSheet.create({
  
  page: {
    flexDirection: 'row',
    backgroundColor:'#E0C9A6',
    padding: '10px',
    width: '100vw',
  },
  personajeCard: {
    backgroundColor: '#B3A084',
    marginTop: '20px',
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    width: '60%',
    height: '95%'
  },
  imagen:{
    width: '100%',
    borderRadius: '15px'
  },
  stat:{
    marginTop: '5px',
    width: '63%',
    textAlign : 'center',
    border: '1px solid black',
    borderRadius: '10px'
  },
  valor:{
    fontSize:'35px'
  },
  backstory:{
    flexDirection:'column',
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    fontSize:'20px',
    paddingTop: '20px',
    margin:'5px'
  },
});

// Create Document Component
const PersonajePDF = ({personaje}) => (
  <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.personajeCard}>
          <Text style={{marginBottom: 10,}}>{personaje.fullname}</Text>
          <Image style={styles.imagen} src={getImage(personaje.race, personaje.img)}/>
          <Text style={{marginTop:15}}>Raza: {personaje.race}</Text>
          <Text style={{marginTop:15}}>Clase: {personaje.class}</Text>
          <Text style={{marginTop:15}}>Alineación:{personaje.alignment}</Text>

          <View style={styles.stat}>
            <Text style={styles.valor}>{personaje.strength}</Text>
            <Text>Fuerza</Text>
          </View>
          <View style={styles.stat}>
              <Text style={styles.valor}>{personaje.dexterity}</Text>
              <Text>Agilidad</Text>
          </View>
          <View style={styles.stat}>
              <Text style={styles.valor}>{personaje.constitution}</Text>
              <Text>Constitución</Text>
          </View>
          <View style={styles.stat}>
              <Text style={styles.valor}>{personaje.intelligence}</Text>
              <Text>Integligencia</Text>
          </View>
          <View style={styles.stat}>
              <Text style={styles.valor}>{personaje.wisdom}</Text>
              <Text>Sabiduría</Text>
          </View>
          <View style={styles.stat}>
              <Text style={styles.valor}>{personaje.charisma}</Text>
              <Text>Carisma</Text>
          </View>
        </View>

        <View style={styles.backstory}>
            <Text style={{fontSize:'40px',}}>Backstory</Text>
            <Text style={{paddingTop:'10px',}}>
            {personaje.biography}
            </Text>
        </View>
      
      </Page>
  </Document>
);

export default PersonajePDF;