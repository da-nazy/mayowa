import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Whatyoudo from "./Whatyoudo";
import Chooseyourplan from "./Chooseyourplan";
import {makeStyles} from '@mui/material'
import {Route,Routes,useRouteMatch,Switch} from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';
//<Whatyoudo/>
  

function UserOperation() {
  const steps = ["", "", "",""];
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
    
    <div style={{width: "55%"  }}>
      <div style={{display:'flex',flexDirection:'row'}}>
        {currentStep===1?<div onClick={()=>setStep(0)} style={{ paddingTop:40,display:'flex',flexDirection:'row',width:'20%',justifyContent:'center'}}><i style={{color:'#BF1559'}}><FaArrowLeft/> </i><h5 style={{margin:0,color:'#BF1559',paddingLeft:5}}>Back</h5></div>
      :null}
       <div style={{paddingTop:40,width:'80%',margin:'0 auto'}}>
        <Box sx={{ width: "80%",margin:'0 auto'}}>
          <Stepper activeStep={currentStep} sx={{iconColor:'red'}}>
            {steps.map((label) => (
              <Step key={label} sx={{iconColor:'red'}}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
      </div>
     
      {choose()}
      
    </div>
   
    
  )
}

export default UserOperation;
