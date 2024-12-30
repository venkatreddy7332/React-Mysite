import './App.css';
import Class1 from './Components/ClassComps/Class1';
import Greet from './Components/FuncComps/Func1';
import Greet2 from './Components/FuncComps/Func2';
import Jsx1 from './Components/ClassComps/jsx';
import Message from './Components/Message';
import SetState from './Components/ClassComps/SetState';
import Destrucutring from './Components/ClassComps/Destrucutring';
import Destrucutring1 from './Components/FuncComps/Destrucutring';
import Handling from './Components/FuncComps/Handling';
import Handling1 from './Components/ClassComps/Handling';
import BindingEventHandling from './Components/ClassComps/BindingEventHandling';
function App() {
  return (
    <div className="App">
      <BindingEventHandling />
      {/* <Handling />
      <Handling1 /> */}
      {/* <Greet name="Venkat"/>
      <Greet2 name="Sreeja"><h1> hello world</h1></Greet2>
      <Class1 name="Siriyala"/>
      <Jsx1 />
      <Message />
      <SetState />
      <Destrucutring name="venkatreddy" desig="developer" />
      <Destrucutring1 name="venkatreddy" desig="developer" /> */}
    </div>
  );
}

export default App;
