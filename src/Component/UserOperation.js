import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Whatyoudo from "./Whatyoudo";
import Chooseyourplan from "./Chooseyourplan";

import {Route,Routes,useRouteMatch,Switch} from 'react-router-dom';

//<Whatyoudo/>
const styles = theme => ({
    root: {
      width: "90%"
    },
    button: {
      marginRight: theme.spacing.unit
    },
    instructions: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit
    },
    stepIcon: {
      color: "pink"
    }
  });

function UserOperation() {
  const steps = ["", "", ""];
  const  [currentStep,setCurrentStep] = useState(0);

  const{path,url}=useRouteMatch();
console.log(path,url) // will return the param tab
const choose=()=>{

}
  return (
    
    <div style={{width: "55%" }}>
      <div style={{paddingTop:40}}>
        <Box sx={{ width: "50%",margin:'0 auto' }}>
          <Stepper activeStep={currentStep} >
            {steps.map((label) => (
              <Step key={label} style={{color:'red'}}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>

       <Switch>
         <Route path={`${path}/`} component={Whatyoudo} exact/>
         <Route path={`${path}/chooseyourplan`} component={Chooseyourplan}/>
       
       </Switch>
    </div>
   
    
  )
}

export default UserOperation;
