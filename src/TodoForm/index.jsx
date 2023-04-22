import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
	const [newTodoValue, setNewTodoValue] = React.useState('');
	const { addTodo, setOpenModal } = React.useContext(TodoContext);

	const onChange = event => {
		setNewTodoValue(event.target.value);
	};
	const onCancel = () => {
		setOpenModal(false);
	};
	const onSubmit = event => {
		event.preventDefault();
		if (newTodoValue.length <= 0) return;
		addTodo(newTodoValue);
		setOpenModal(false);
		setNewTodoValue('');
	};

	function onEnter(event) {
		if (event.keyCode === 13) {
			console.log('Enter key pressed');
			onSubmit(event);
		} else if (event.keyCode === 27) {
			console.log('Escape key pressed');
			setOpenModal(false);
		}
	}

	return (
		<form onSubmit={onSubmit}>
			<label>Write your new TO-DO</label>
			<textarea
				value={newTodoValue}
				onChange={onChange}
				onKeyDown={onEnter}
				placeholder='Write here'
			/>
			<div className='TodoForm-buttonContainer'>
				<button
					type='button'
					className='TodoForm-button TodoForm-button--cancel'
					onClick={onCancel}
				>
					Cancel
				</button>
				<button type='submit' className='TodoForm-button TodoForm-button--add'>
					Add
				</button>
			</div>
		</form>
	);
}

export { TodoForm };
