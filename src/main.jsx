import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App/App';
import './index.css';

// function AppUi(props) {
//   return (
//     <h1>¡{props.saludo}, {props.nombre}!</h1>
//   );
// }

// function withSaludo(saludo) {
//   return function WrappedComponentWithSaludo(WrappedComponent) {
//     return function ComponenteDeVerdad(props) {
//       return (
//         <React.Fragment>
//           <WrappedComponent {...props} saludo={saludo} />
//           <p>We are accompanying the WrappedComponent</p>
//         </React.Fragment>
//       );
//     }
//   }
// }

// const AppWithSaludo = withSaludo('Wenas')(AppUi);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <AppWithSaludo nombre="Juanita" /> */}
		<App />
	</React.StrictMode>
);
