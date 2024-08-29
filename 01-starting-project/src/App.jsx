// Images should be imported instead of directly referenced
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

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
            <CoreConcept title="Components" description="The core UI building block" image={componentsImg} />
            <CoreConcept title="Props" description="Passing property values to function" image={componentsImg} />
            <CoreConcept title="JSX" description="Javascript Extension" image={componentsImg} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
