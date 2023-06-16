
import './inicio.css'

export const Inicio = () => {
    const image = require(`../../resources/banner/banner_1.png`);

   const handleClickScroll = (id) =>{
    const element = document.getElementById(id);
    if (element){
        element.scrollIntoView({behavior:'smooth'})
    }
   } 

    return(
    <main className="inicio">
        <img alt='Portada del manual de monstruos'src={image}/>
        <div className='botonesInicio'>
            <button className='button-red' onClick={() => handleClickScroll("Que-es-D&D")}>
                ¿Qué es D&D?
            </button>
            <button className='button-red' onClick={() => handleClickScroll("Como-se-juega")}>
                ¿Cómo se juega?
            </button>
            <button className='button-red'onClick={() => handleClickScroll("Dungeon-Master")}>
                ¿Cómo ser DM?
            </button>
        </div>
        
        <section id="Que-es-DnD" >
            <h2>¿Qué es Dungeons & Dragons?</h2>
            <p>
                En Dungeons & Dragons, los jugadores forman un grupo de aventureros que exploran mundos de fantasía mientras se embarcan
                en misiones épicas y aumentan su experiencia. El Dungeon Master (a quien también se conoce como DM) es tanto el árbitro como el narrador del juego. 
                En D&D no se gana ni se pierde, al menos no en el sentido convencional de estas palabras.
            </p>
            <p>
                La base de D&D es que se trata de un juego basado en la narración. Los dados solo te ayudan a avanzar. Todo depende de tus decisiones,
                desde tu aspecto o tus acciones a qué sucederá a continuación.
            </p>
            <p>
                La creatividad colectiva de una partida de D&D da pie a historias que contarás una y otra vez, desde sucesos legendarios a incidentes 
                absurdos que te harán reír años después.
            </p>
        </section>

        <hr></hr>

        <section id="Como-se-juega">
            <h2>¿Cómo se juega?</h2>
            <p>
            En D&D, cada jugador crea un personaje heroico que lo representa en el juego. Puede ser una habilidosa guerrera, un clérigo devoto, una pícara mortífera, un mago lanzador de conjuros ¡o incluso algo totalmente distinto!
            </p>
            <p>
            Juntos, el Dungeon Master (o DM) y los jugadores crean una historia emocionante en la que sus valientes aventureros se enfrentan a peligros letales. Incluso si el grupo no consigue terminar la aventura con éxito, los buenos ratos y los recuerdos consiguen que todo el mundo gane.
            </p>
            <iframe width="70%" height="600" src="https://www.youtube.com/embed/eJFqtOQ6vTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
        
        <hr></hr>
        <section id="Dungeon-Master">
            <h2>¿Cómo ser Dungeon Master?</h2>
            <p>
            En Dungeons & Dragons, una persona actúa como Dungeon Master (o DM), el narrador principal y árbitro del juego. El DM dirige la aventura para los jugadores, que se enfrentan a las dificultades y deciden qué caminos explorar.
            </p>
            <p>
            El DM describe las ubicaciones y criaturas de una aventura y los jugadores deciden lo que quieren que hagan sus personajes. A continuación, combinando su imaginación y las reglas del juego, el DM determina el resultado de las acciones de los aventureros y describe lo que les pasa.
            </p>
            <p>
            D&D es un juego infinitamente flexible, ya que el DM puede improvisar para responder a cualquier cosa que intenten hacer los jugadores, por lo que cada aventura puede ser emocionante e inesperada.
            </p>


        </section>
    </main>)
}

export default Inicio;