import './App.css';
import Header from './Components/HeaderComponent';
import ToDoListApp from './Components/ToDoListAppSection';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='container'>
      <ToDoListApp></ToDoListApp>
      </div>
    </div>
  );
}

export default App;
