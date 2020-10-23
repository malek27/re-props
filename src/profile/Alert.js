import React from 'react'

const Alert = props => {
    console.log(`props:`, props.name);
    return (
      <button onClick={() => props.alertMyInput(`My name is Malek `)}>
        ClickMe
      </button>
    );
   };
   export default Alert