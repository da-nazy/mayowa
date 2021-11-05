import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Whatyoudo from "./Whatyoudo";
import Chooseyourplan from "./Chooseyourplan";
import {makeStyles} from '@mui/material'
import {Route,Routes,useRouteMatch,Switch} from 'react-router-dom';

//<Whatyoudo/>
  

function UserOperation() {
  const steps = ["", "", ""];
  const  [currentStep,setCurrentStep] = useState(0);
  const [toggleScreen,setToggleScreen]=useState(true);

  const{path,url}=useRouteMatch();
console.log(path,url); // will return the param tab
  const setStep=(e)=>{
    setCurrentStep(e)
    setToggleScreen(!toggleScreen)
  }
const choose=()=>{
if(toggleScreen){
  return(
    
    <Whatyoudo changeScreen={()=>setStep(1)}  />
  )
}else{
  return(
  
    <Chooseyourplan changeScreen={()=>setStep(0)} />
  )
}
}
  return (
    
    <div style={{width: "55%" }}>
      <div style={{paddingTop:40}}>
        <Box sx={{ width: "50%",margin:'0 auto'}}>
          <Stepper activeStep={currentStep} sx={{iconColor:'red'}}>
            {steps.map((label) => (
              <Step key={label} sx={{iconColor:'red'}}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
        {choose()}
    </div>
   
    
  )
}

export default UserOperation;
