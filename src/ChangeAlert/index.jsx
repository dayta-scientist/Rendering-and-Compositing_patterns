import React from 'react';
import { withStorageListener } from './withStorageListener';
import "./index.css"

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className='div'>
        <p>There have been changes in another tab</p>
        <button className='Reload'
          onClick={toggleShow}
        >
          Reload information
        </button>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };



// import React from 'react';
// import { WithStorageListener } from './withStorageListener';

// function ChangeAlert({show,toggleShow}){
// 	if(show){return<p>There were changes</p>;
// } else {
// 	return null
// }
// }

// 	const ChangeAlertWithStorageListener=WithStorageListener(ChangeAlert);
	
// 	export{ChangeAlertWithStorageListener};