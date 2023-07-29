import './App.css';
import Count from './components/count'
import DeleteTask from './components/deletetask'
import Input from './components/input';
import List from './components/list'

const App = () => {
  
  return (
    <div className="container">
      <h1>Taks List</h1>
      <div className="App">
        <Input inputValue={Input} DeleteTask={DeleteTask}/>
        <List />
      </div>
    </div>
  );
}

export default App;
