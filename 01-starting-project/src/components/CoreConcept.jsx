import './CoreConcept.css';

// Usings a single parameter (commonly called props - properties) is how we pass in values from attributes in tag
export default function CoreConcept(props) {
    return (
      <li>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    );
}



// Alternatively, we can reference the individual property names, by the property name within curly braces
/*
export default function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
*/