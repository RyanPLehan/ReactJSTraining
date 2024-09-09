// Images should be imported instead of directly referenced
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';            // Must use curly braces b/c it is a named export, not default
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  function buttonSelectHandler(selectedButton) {
    // selectedButton would be 'components', 'jsx', 'props' or 'state'
    console.log(selectedButton);
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => buttonSelectHandler('components')}>Components</TabButton>
            <TabButton onSelect={() => buttonSelectHandler('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => buttonSelectHandler('props')}>Props</TabButton>
            <TabButton onSelect={() => buttonSelectHandler('state')}>State</TabButton>
          </menu>
          {/* Here is where the dynamic content will be displayed when a TabButton is clicked */}
        </section>
      </main>
    </div>
  );
}

export default App;
