import './App.css';
import Sidebar from "./Component/Sidebar";
import Ordersumary from "./Component/Ordersumary";
import UserOperation from "./Component/UserOperation";
import EmployeContextProvider from './DataProvider/Employee';
function Home() {
    return (
       <EmployeContextProvider>
          <div className="App">
        <Sidebar/>
      <Ordersumary/>
      <UserOperation/>
        </div>
       </EmployeContextProvider>
    )
}

export default Home
