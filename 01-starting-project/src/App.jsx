// Images should be imported instead of directly referenced
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';            // Must use curly braces b/c it is a named export, not default

// Randomize Dynamic text
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Function name MUST start with capital letter so that it can be executed simply by using the function name as a HTML tag
function Header() {
  // Good practice to set to variable and use variable later
  const description = reactDescriptions[genRandomInt(2)];

  return (    
    <header>
      {/* Should not reference images directly <img src="src/assets/react-core-concepts.png" /> */}
      {/* Should reference dynamically by importing the images (see above) */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* Function to output a dynamic value */}
        {/* Instead of variable, could have simply done {reactDescriptions[genRandomInt(2)]}*/}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// Usings a single parameter (commonly called props - properties) is how we pass in values from attributes in tag
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      {/* Use Header tag to call Header function */}
      <Header />
      <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
          <ul>
            {/*  This is an example of explicit use of data for the properites/attributes of the CoreConcept tag
            <CoreConcept title="Components" description="The core UI building block" image={componentsImg} />
            <CoreConcept title="Props" description="Passing property values to function" image={componentsImg} />
            <CoreConcept title="JSX" description="Javascript Extension" image={componentsImg} />
            */}
            {/*  This is an example of using table driven data (from data.js) 
            <CoreConcept 
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description} 
              image={CORE_CONCEPTS[0].image} 
            />
            <CoreConcept 
              title={CORE_CONCEPTS[1].title} 
              description={CORE_CONCEPTS[1].description} 
              image={CORE_CONCEPTS[1].image} 
            />
            <CoreConcept 
              title={CORE_CONCEPTS[2].title} 
              description={CORE_CONCEPTS[2].description} 
              image={CORE_CONCEPTS[2].image} 
            />
            <CoreConcept 
              title={CORE_CONCEPTS[3].title} 
              description={CORE_CONCEPTS[3].description} 
              image={CORE_CONCEPTS[3].image} 
            />
            */}
            {/* This is an example of using the map function*/}
            {CORE_CONCEPTS.map((cc) => (
              <CoreConcept title={cc.title} description={cc.description} image={cc.image} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
