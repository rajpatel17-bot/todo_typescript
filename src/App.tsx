import './App.css';
import TodoList from './container/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  return (
    <div className="App">
      <TodoList />
      <AddTodoForm />
    </div>
  );
}

export default App;
