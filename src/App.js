import Home from './Components/Home';
import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

const App = () =>  (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
)


export default App;
