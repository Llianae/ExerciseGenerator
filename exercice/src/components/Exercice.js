import {
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  AlertTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";

function Exercice() {
  const max = 100;
  const min = -100;
  const signArray = ["+", "-", "*", "/"];

  const [yourAnswer, setYourAnswer] = useState(0);
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [alert, setAlert] = useState();

  useEffect(() => {
    setNumberOne(randomIntFromInterval(min, max));
    setNumberTwo(randomIntFromInterval(min, max));
  }, [min, max, setNumberOne, setNumberTwo]);

  const handleClick = () => {
    let answer = numberOne + numberTwo;
    if (parseInt(yourAnswer) === parseInt(answer)) {
      setAlert(
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Correct! <strong>Try again with another exercise.</strong>
        </Alert>
      );
      setNumberOne(randomIntFromInterval(min, max));
      setNumberTwo(randomIntFromInterval(min, max));
    } else {
      setAlert(
        <Alert severity="error">
          <AlertTitle>Incorrect</AlertTitle>
          Incorrect, <strong>try again!</strong>
        </Alert>
      );
    }
  };

  return (
    <React.Fragment>
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {" "}
          {numberOne}+{numberTwo}
        </Typography>
        <TextField
          id="answer"
          label="Answer"
          variant="outlined"
          onChange={(event) => {
            setYourAnswer(event.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={() => {
            handleClick();
          }}
        >
          Submit
        </Button>
        {alert}
      </Stack>
    </React.Fragment>
  );
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Exercice;
