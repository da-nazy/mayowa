
import './App.css';
import Sidebar from './Component/Sidebar';
import Ordersummary from './Component/Ordersumary';
import UserOperation from './Component/UserOperation';
function App() {
  return (
    <div className="App" >
      <Sidebar/>
      <Ordersummary/>
      <UserOperation/>
    </div>
  );
}

export default App;
