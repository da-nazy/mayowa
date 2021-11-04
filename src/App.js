

import Home from './Home';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
    <Switch>
    <Route path='/' component={Home} exact />
        </Switch>
   </BrowserRouter>
  );
}

export default App;
