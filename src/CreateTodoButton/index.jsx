// import React from 'react';
// import './CreateTodoButton.css';

// function CreateTodoButton(props) {
//   const onClickButton = () => {
//     props.setOpenModal(prevState => !prevState);
//   };

//   return (
//     <button
//       className="CreateTodoButton"
//       onClick={onClickButton}
//     >
//       +
//     </button>
//   );
// }

// export { CreateTodoButton };

import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ openModal, setOpenModal }) {
	const handleClick = () => {
		setOpenModal(!openModal);
	};

	return (
		<button
			className={`TodoButton ${openModal && 'TodoButton__open'}`}
			onClick={handleClick}
		>
			Add to-do +
		</button>
	);
}

export { CreateTodoButton };
