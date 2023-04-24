import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodosLoading } from '../TodosLoading';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { v4 as uuid } from 'uuid';

function App() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
		totalTodos, 
    completedTodos,
    searchValue, 
		setSearchValue,
		addTodo,
	} = useTodos();

	return (
		<React.Fragment>
			<Header />
			<TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
			<TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
        />

			<TodoList>
				{error && <TodosError />}
				{loading && <TodosLoading />}
				{!loading && !searchedTodos.length && <EmptyTodos />}

				{searchedTodos.map(todo => (
					<TodoItem
						key={uuid()}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			{!!openModal && (
				<Modal>
					<TodoForm 
						addTodo={addTodo}
						setOpenModal={setOpenModal}
					/>
				</Modal>
			)}

			<CreateTodoButton setOpenModal={setOpenModal} />

			<Footer />
		</React.Fragment>
	);
}

export default App;
