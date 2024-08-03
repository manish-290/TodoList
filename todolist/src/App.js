
import './App.css';
import TodoList from './components/todoList';

function App() {
  return (
    <div className='min-h-screen bg-gray-300 flex items-center justify-center'>
      {/* <h1 className='text-4xl font-bold text-blue-500'>I integrated the tailwind css</h1> */}
    <TodoList/>
    </div>
  );
}

export default App;
