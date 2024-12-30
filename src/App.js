import './App.css';
import Class1 from './Components/ClassComps/Class1';
import Greet from './Components/FuncComps/Func1';
import Greet2 from './Components/FuncComps/Func2';
import Jsx1 from './Components/ClassComps/jsx';
import Message from './Components/Message';
import SetState from './Components/ClassComps/SetState';
function App() {
  return (
    <div className="App">
      <Greet name="Venkat"/>
      <Greet2 name="Sreeja"><h1> hello world</h1></Greet2>
      <Class1 name="Siriyala"/>
      <Jsx1 />
      <Message />
      <SetState />
    </div>
  );
}

export default App;
