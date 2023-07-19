import React from "react";
import { Typography, Stack } from "@mui/material";
import CustomBox from "./CustomBox";
import Exercice from "./Exercice";

function App() {
  return (
    <React.Fragment>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomBox whiteBox responsive centered sx={{ width: "100%" }}>
          <Exercice />
        </CustomBox>
      </Stack>
    </React.Fragment>
  );
}

export default App;
