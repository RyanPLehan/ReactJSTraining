// Images should be imported instead of directly referenced
import {useState} from 'react';
import componentsImg from './assets/components.png';
//import { CORE_CONCEPTS } from './data.js';            // Must use curly braces b/c it is a named export, not default
import { CORE_CONCEPTS } from './data-with-examples.js';
import { EXAMPLES } from './data-with-examples.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


// Not allowed.  Violates Hook Rule #1
// const [val, setVal] = useState(0)

function App() {
  // 2 Rules for using react hooks
  // 1. Only call Hooks inside of Component functions
  // 2.  Only call Hooks on the top level

  // useState yields an array with exactly 2 elements (value and function delegate to set value)
  //  const stateArray = useState("Please click a button");
  // (using array destructing to store both elements into separate const identifies)
  const [selectedTopic, setSelectedTopic] = useState("components");  // setting initial state value
  //  --------^ (Current State Value - provided by react)
  //  ------------------------^ (State updating function - updates the sotred value AND tells React to re-execute component


  // Not allowed.  Violates Hook Rule #2
  // if (someCondition) { const [val, setVal] = useState(0); }

  // Using a variable to set dynamic content does not work.
  // Need to use hook
  let tabContent = "Please click a button";

  function buttonSelectHandler(selectedButton) {
    // selectedButton would be 'components', 'jsx', 'props' or 'state'
    console.log(selectedButton);

    // Even after setting this variable to a different value, React does not update the content display
    // This is because React will display only initial values, therefore, we must tell React to update/re-display the new content.
    //tabContent = selectedButton;


    // Use State (useState hook) to tell react to update/re-display the new content.
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);   // Will not see update b/c the update will occur after the function has completed executing
  }

  console.log("APP COMPONENT IS RENDERING");

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
          {/* this does not work {tabContent} */}
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
