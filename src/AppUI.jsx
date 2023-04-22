import React from 'react';
import { TodoContext } from './TodoContext';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoForm } from './TodoForm';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from './Modal';
import { TodosError } from './TodosError';
import { EmptyTodos } from './EmptyTodos';
import { TodosLoading } from './TodosLoading';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

function AppUI() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal
	} = React.useContext(TodoContext);

	return (
		<React.Fragment>
			<Header />
			<TodoCounter />
			<TodoSearch />

			<TodoList>
				{error && <TodosError />}
				{loading && <TodosLoading />}
				{!loading && !searchedTodos.length && <EmptyTodos />}

				{searchedTodos.map(todo => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			{!!openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}

			<CreateTodoButton setOpenModal={setOpenModal} />

			<Footer />
		</React.Fragment>
	);
}

export { AppUI };
