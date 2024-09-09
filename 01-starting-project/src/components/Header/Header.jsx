import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

// Randomize Dynamic text
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


// Function name MUST start with capital letter so that it can be executed simply by using the function name as a HTML tag
export default function Header() {
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