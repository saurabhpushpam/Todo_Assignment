import '../App.css';
import TodoList from './TodoList';
import Task from './Task';
import '../index.css';

function App() {
  return (
    <>
      <div className='top'>
        <TodoList></TodoList>
        <Task></Task>
      </div>

    </>
  );
}

export default App;