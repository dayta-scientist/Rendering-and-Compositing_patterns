import React from 'react';
import { withStorageListener } from './useStorageListener';
import "./index.css"

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

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

export { ChangeAlert };



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