import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    name:"Project1",
    Desc:"lorem ipsum 40",
    pic:' https://metagroupafrica.com/wp-content/uploads/2020/08/shutterstock_1186976332-1536x1024.jpg'
},
{
    name:"Project1",
    Desc:"lorem ipsum 40",
    pic:'https://metagroupafrica.com/wp-content/uploads/2020/11/shutterstock_141530473-1536x1024.jpg'
},
{
    name:"Project1",
    Desc:"lorem ipsum 40",
    pic:'https://metagroupafrica.com/wp-content/uploads/2020/08/shutterstock_1186976332-1536x1024.jpg'
},
{
    name:"Project1",
    Desc:"lorem ipsum 40",
    pic:'https://www.shivconstruction.co.ke/wp-content/uploads/2017/02/machinery.jpg'
},
{
    name:"Project1",
    Desc:"lorem ipsum 40",
    pic:'https://www.shivconstruction.co.ke/wp-content/uploads/2017/02/machinery.jpg'
},
{
    name:"Project1",
    Desc:"lorem ipsum 40",
    pic:'https://www.shivconstruction.co.ke/wp-content/uploads/2017/02/machinery.jpg'
},


 
];

const Slider=()=> {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth:"100vw",flexGrow: 1 ,marginTop:"-160px"}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.Desc}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 600,
                  display: 'block',
                  maxWidth: "100vw",
                  imageFit:"cover",
                  width: '100%',
                }}
                src={step.pic}
                alt={step.name}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Slider
