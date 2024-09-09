
// This will take in a function delegate via the onSelect property
export default function TabButton({children, onSelect}) {
    return (
      <li>
        <button onClick={onSelect}>{children}</button>
      </li>
    );
}



// This approach in lue of using the .childern, is to use a property call 'label'
// Then use the component as <TabButton label='Components' />
/*
export default function TabButton({label}) {
    return (
      <li>
        <button>{label}</button>
      </li>
    );
}
*/

/*
export default function TabButton(props) {
    // A function can be defined within a function, such that it can only be accessible within the function 
    function clickHandler() {
        console.log('Hello World from clickHandler');
    }

    // The props.children is the text between the openning and closing TabButton Tags
    // Note: the onClick issues a function delegate and therefore does not use paranethesis 
    return (
      <li>
        <button onClick={clickHandler}>{props.children}</button>
      </li>
    );
}
*/
