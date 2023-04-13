import './manuales.css'

export const Manuales = () => {
  return (
    <main>
        <div className="container-manuales">
            <div className="manual">
                <img className='portada' alt='Portada del manual del jugador' src="/manuales/manual-jugador.jpg"/>
                <h2>Manual de jugador</h2>
            </div>
            <div className="manual">
            <img className='portada' alt='Portada de la guía del dungeon master' src='/manuales/manual-dm.jpg'/>
                <h2>Guía del dungeon Master</h2>
            </div>
            <div className="manual">
                <img className='portada' alt='Portada del manual de monstruos' src='/manuales/manual-monstruos.jpg'/>
                <h2>Manual de monstruos</h2>
            </div>
        </div>
    </main>
  );
};

export default Manuales;
