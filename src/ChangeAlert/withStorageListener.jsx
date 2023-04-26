import React from 'react';

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);
    
    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('There have been changes in TODOS_V1');
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };

    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShow}
      />
    );
  }
}

export { withStorageListener };




// import React from 'react';
// import { useState } from 'react';

// function WithStorageListener(WrappedComponent) {
//   return function WrappedComponentWithStorageListener(props) {
//     const [storageChange, setStorageChange] = useState(false)

//     return(
//       <WrappedComponent 
//         show={storageChange}
//         toggleShow={setStorageChange}
//       />
//     )
//   }
// }

// export {WithStorageListener};


