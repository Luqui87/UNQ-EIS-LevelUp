import './personaje.css';
export const Personaje = () => {
  
  const stats = [{tipo:'Fuerza', valor:'10'},{tipo:'Fuerza', valor:'10'},{tipo:'Fuerza', valor:'10'},{tipo:'Fuerza', valor:'10'},{tipo:'Fuerza', valor:'10'},{tipo:'Fuerza', valor:'10'}]


 
  return (
    <main>
      <div className="container-personaje">

      <div className="personaje-Card">
        <div className='box'>
          <h2>Thorfinn "El Pacifista"</h2>
          <img 
          alt='Portada del manual de monstruos'
          src='/manuales/manual-monstruos.jpg'/>
        
          <div className="info">
            <p>Raza: Humano</p>
            <p>Clase: Vikingo</p>
            <p>Origen: Tierras Nordicas</p>
            <p>Alineación: Lawful Neutral</p>
          </div>
        </div>

        <button>Descargar</button>
      </div>

      <div className="stats">
        <h2>Stats</h2>
        <ul>
          {stats?.map((stat) => (
          <li>
            <p>{stat.tipo}</p>
            <span>{stat.valor}</span>
          </li>
          ))}
        </ul>
      </div>
      
      <div className="backstory">
          <h2>Backstory</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed urna enim. Ut sed sagittis tortor. Phasellus tristique arcu consectetur diam dignissim, et bibendum massa imperdiet. Suspendisse eros mi, vehicula ut molestie at, consectetur in sem. Vestibulum malesuada elit ex, a condimentum risus iaculis eget. Morbi ut malesuada risus, sed porttitor metus. Donec quis scelerisque dolor. Suspendisse ac porttitor diam, vitae ultricies magna. Sed scelerisque dictum ullamcorper. Duis viverra est vitae ante ullamcorper, sit amet dapibus dui fringilla. Vivamus at lorem ut ligula eleifend ornare sed vitae lorem. Pellentesque eget porta arcu.

          Duis pretium nulla et imperdiet pulvinar. Mauris malesuada lacinia dui, nec iaculis mauris elementum ac. Ut vel facilisis felis, a condimentum ex. Aenean placerat ac dui eu ultricies. Nulla augue ipsum, varius et leo vitae, posuere vestibulum turpis. Morbi et lorem justo. Cras sollicitudin condimentum eros, vel finibus enim lacinia id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id interdum massa, sit amet suscipit nulla. Ut arcu eros, hendrerit quis eleifend sit amet, fringilla eget urna. Fusce quis mauris aliquet, consequat velit nec, dignissim turpis.

          Sed convallis ipsum mollis pulvinar venenatis. Ut commodo ipsum id neque malesuada, in tincidunt mauris consectetur. Suspendisse dignissim sit amet ex bibendum ultricies. Nulla a mi sit amet metus efficitur consectetur quis eget erat. Aliquam ornare urna sed ligula convallis interdum. Curabitur arcu tellus, porttitor quis risus ac, blandit hendrerit urna. Vestibulum varius odio mauris, sed cursus tellus volutpat sit amet. Nullam sem lectus, hendrerit non nunc pharetra, viverra tincidunt justo. Mauris tincidunt elit sed purus gravida sagittis. Fusce lectus enim, hendrerit ac imperdiet at, efficitur in ipsum. Pellentesque ut laoreet nisi, sed lobortis lorem. In hac habitasse platea dictumst. Sed vel elementum metus, vitae posuere est. Cras sed est nec felis interdum suscipit. Aenean libero orci, gravida at quam non, ornare feugiat turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          
          </p>
      </div>

    </div>
    </main>
  );
};
  
  export default Personaje;
  