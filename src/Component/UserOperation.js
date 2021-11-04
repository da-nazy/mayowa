import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

function UserOperation() {
  const steps = ["njh", "", ""];
  const  currentStep = useState(1);
  return (
    <div style={{ border: "1px solid black", width: "45%" }}>
      <div>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={currentStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
    </div>
  );
}

export default UserOperation;
