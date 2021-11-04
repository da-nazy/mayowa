import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Whatyoudo from "./Whatyoudo";
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
  return (
    <div style={{width: "45%" }}>
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
      <Whatyoudo/>
    </div>
  );
}

export default UserOperation;
