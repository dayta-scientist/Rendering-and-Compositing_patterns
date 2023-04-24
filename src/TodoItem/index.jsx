import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
	return (
		<li className='TodoItem'>
			<span
				className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
				onClick={props.onComplete}
			>
				√
			</span>
			<p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
				{props.text} 
			</p>
			<span className='Icon Icon-delete' onClick={props.onDelete}>
				X
			</span>
		</li>
	);
}

export { TodoItem };

import { FiCheck, FiX } from 'react-icons/fi';

// function TodoItem(props) {

//   return (
//     <li className='TodoItem'>
//       <span
//       className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
//       onClick={props.onComplete}
//       >
//       <FiCheck />
//       </span>
//       <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
//         {props.text}
//       </p>
//       <span
//       className='Icon Icon-delete'
//       onClick={props.onDelete}
//       >
//       <FiX className='Fix'/>
//       </span>
//     </li>
//   );
// }

// export { TodoItem };
