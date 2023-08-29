
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div>
      <h1>Página de Prueba React</h1>
      <Testimonio
      nombre='Emisario de Odin'
      pais='Escandinavia'
      imagen='bird'
      clase='Volador'
      color='Negro'
      testimonio='El cuervo grande, ​ anteriormente denominado cuervo común por la SEO, ​ es una especie de ave paseriforme de la familia Corvidae. Presente en casi todo el hemisferio septentrional, es la especie de córvido con la mayor superficie de distribución.' />;
    
    <Testimonio
      nombre= 'Firulais'
      pais= 'Inglaterra'
      imagen='dog'
      clase='Buscador'
      color= 'Negro y Marrón'
      testimonio='El perro, ​​​ llamado perro doméstico o can, ​ y en algunos lugares coloquialmente llamado chucho, ​ tuso, ​ choco, ​ entre otros; es un mamífero carnívoro de la familia de los cánidos, que constituye una especie del género Canis' />;
      
     <Testimonio
     nombre= 'Grizzly'
     pais ='Canadá'
     imagen = 'bear'
     clase = 'Guardian'
     color = 'Marrón'
     testimonio = 'El oso grizzly u oso gris es una de las subespecies del oso pardo más grandes del planeta, que suele vivir en las tierras altas del territorio norteamericano.'
      />;
     </div>
    </div>
  );
}

export default App;
