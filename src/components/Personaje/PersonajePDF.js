import { Page, Text, View, Document, StyleSheet, Image, PDFViewer } from '@react-pdf/renderer';

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
    width: '30%',
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
const PersonajePDF = () => (
        <Document>
            <Page size="A4" style={styles.page}>
            <View style={styles.column1}>
                <View style={styles.personajeCard}>
                    <Text style={{marginBottom: 10,}}>Thorfinn "El Pacifista"</Text>
                    <Image style={styles.imagen} src="/manuales/manual-monstruos.jpg"/>
                    <Text style={{marginTop:15}}>Raza: Humano</Text>
                    <Text style={{marginTop:15}}>Clase: Vikingo</Text>
                    <Text style={{marginTop:15}}>Origen: Tierras Nordicas</Text>
                    <Text style={{marginTop:15}}>Alineación: Lawful Neutral</Text>
                </View>
                <View style={styles.info}>
                    <Text style={{fontSize:30}}>Stats</Text>
                    <View style={styles.stats}>
                        <View style={styles.stat}>
                            <Text>Fuerza</Text>
                            <Text style={styles.valor}>10</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text>Fuerza</Text>
                            <Text style={styles.valor}>10</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text>Fuerza</Text>
                            <Text style={styles.valor}>10</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text>Fuerza</Text>
                            <Text style={styles.valor}>10</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text>Fuerza</Text>
                            <Text style={styles.valor}>10</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text>Fuerza</Text>
                            <Text style={styles.valor}>10</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={{fontSize:30, textAlign:'center'}}>Backstory</Text>
            <Text style={{padding:20}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed urna enim. Ut sed sagittis tortor. Phasellus tristique arcu consectetur diam dignissim, et bibendum massa imperdiet. Suspendisse eros mi, vehicula ut molestie at, consectetur in sem. Vestibulum malesuada elit ex, a condimentum risus iaculis eget. Morbi ut malesuada risus, sed porttitor metus. Donec quis scelerisque dolor. Suspendisse ac porttitor diam, vitae ultricies magna. Sed scelerisque dictum ullamcorper. Duis viverra est vitae ante ullamcorper, sit amet dapibus dui fringilla. Vivamus at lorem ut ligula eleifend ornare sed vitae lorem. Pellentesque eget porta arcu.

            Duis pretium nulla et imperdiet pulvinar. Mauris malesuada lacinia dui, nec iaculis mauris elementum ac. Ut vel facilisis felis, a condimentum ex. Aenean placerat ac dui eu ultricies. Nulla augue ipsum, varius et leo vitae, posuere vestibulum turpis. Morbi et lorem justo. Cras sollicitudin condimentum eros, vel finibus enim lacinia id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id interdum massa, sit amet suscipit nulla. Ut arcu eros, hendrerit quis eleifend sit amet, fringilla eget urna. Fusce quis mauris aliquet, consequat velit nec, dignissim turpis.

            Sed convallis ipsum mollis pulvinar venenatis. Ut commodo ipsum id neque malesuada, in tincidunt mauris consectetur. Suspendisse dignissim sit amet ex bibendum ultricies. Nulla a mi sit amet metus efficitur consectetur quis eget erat. Aliquam ornare urna sed ligula convallis interdum. Curabitur arcu tellus, porttitor quis risus ac, blandit hendrerit urna. Vestibulum varius odio mauris, sed cursus tellus volutpat sit amet. Nullam sem lectus, hendrerit non nunc pharetra, viverra tincidunt justo. Mauris tincidunt elit sed purus gravida sagittis. Fusce lectus enim, hendrerit ac imperdiet at, efficitur in ipsum. Pellentesque ut laoreet nisi, sed lobortis lorem. In hac habitasse platea dictumst. Sed vel elementum metus, vitae posuere est. Cras sed est nec felis interdum suscipit. Aenean libero orci, gravida at quam non, ornare feugiat turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

            </Text>
            </Page>
        </Document>
);

export default PersonajePDF;