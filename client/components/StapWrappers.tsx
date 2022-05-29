import { Container, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';

interface StapWrapperProps {
  activeStep: number;
}

const steps = ['Step 1', 'Step 2', 'Step 3'];

const StapWrapper: React.FC<StapWrapperProps> = ({
  activeStep = 1,
  children,
}) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => {
          <Step key={step}>
            <StepLabel>{step}</StepLabel>;
          </Step>;
        })}
      </Stepper>
    </Container>
  );
};

export default StapWrapper;
