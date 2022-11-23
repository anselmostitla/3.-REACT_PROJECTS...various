// import logo from './logo.svg';
import "./App.css";
import { Testimonial } from "./components/Testimonial";
import { people } from "./data/people";

function App() {

  const putData = () => {
    const testimonials = [];
    for (var i = 0; i<3; i++){
      testimonials.push(
        <Testimonial
        nombre={people[i].nombre}
        pais={people[i].pais}
        imagen={people[i].imagen}
        cargo={people[i].cargo}
        empresa={people[i].empresa}
        testimonio={people[i].testimonio}
        />
      )
    }  
    return testimonials; 
  }

  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>

        {people.map((i) => (
          <Testimonial
            nombre={i.nombre}
            pais={i.pais}
            imagen={i.imagen}
            cargo={i.cargo}
            empresa={i.empresa}
            testimonio={i.testimonio}
          />
        ))}

        {
          putData()
        }
          
        
      </div>
    </div>
  );
}

export default App;
