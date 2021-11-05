

import Home from './Home';
import NotFound
 from './Component/NotFound';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
    <Switch>
    <Route path='/' component={Home} exact />
    <Route component={NotFound}/>
        </Switch>
   </BrowserRouter>
  );
}

export default App;
