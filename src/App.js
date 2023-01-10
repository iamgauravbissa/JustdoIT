import './App.css';
import Header from './Components/HeaderComponent';
import Input from './Components/InputComponent';
import ToDoSection from './Components/ToDoSection';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='container'>
      <Input></Input>
      <ToDoSection></ToDoSection>
      </div>
    </div>
  );
}

export default App;
