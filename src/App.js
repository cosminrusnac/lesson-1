import logo from './logo.svg';
import './App.css';
import Summoning from './components/Summoning.js';
import Magic from './components/Magic.js';
import Magic1 from './components/Magic1.js';
import $ from "jquery";
import PropsComponent from './components/Props.js'
import Toggle from './components/Form.js';
import Clock from './components/Clock.js';
import Hogwartsletter from './components/Hogwartsletter.js'


function App() {
  return (
    <div>
    {/* <Summoning />;
    <Magic />;
    <Magic1 /> */}
    {/* <Summoning name='name1' potions='ab1'/>
    <Summoning name='name2' potions='ab2'/>
    <Summoning name='name3' potions='ab3'/>
    <Toggle /> */}
    {/* <Clock date={new Date()} /> */}
    <Hogwartsletter />
    </div>
   
    )
}

export default App;
