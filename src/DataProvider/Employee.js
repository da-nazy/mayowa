import React,{useContext,useReducer,createContext} from 'react';
import {employeeReducer} from './employeeReducer';
 export const  EmployeeContext=createContext();

const EmployeContextProvider=({children})=>{
    const[employee,dispatch]=useReducer(employeeReducer,{
        day:'',
        employementType:'',
        userMonthlyPay:'',
        averageMonthRevanue:'',

    })

    return(
        <EmployeeContext.Provider value={{employee,dispatch}}>
           {children}
        </EmployeeContext.Provider>
    )
}
export default EmployeContextProvider;