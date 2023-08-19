import Card from "../components/card";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.h3,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Picker() {
  const [series, setSeries] = useState(null);
  const [winner, setWinner] = useState(null);
  const [won, setWon] = useState(null);
  const handleWinner = (value) => {
    setWinner(value);
    console.log("Value",value)
    if (value.won != null) {
      setWon(value);
    }
  };

  const getSeries = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/bracket/bout");
      setSeries(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSeries();
  }, [winner]);

  return (
    <>
      {series != null ? (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Item>Series Picker</Item>
            </Grid>
            <Grid xs={6}>
              <Item>Round {series.round} </Item>
            </Grid>
            <Grid xs={6}>
              <Item> Match : {series.matchNumber}</Item>
            </Grid>
            {won == null ? (
              <>
                <Grid xs={6}>
                  <Card
                    data={series.entry1.entry}
                    matchNumber={series.matchNumber}
                    round={series.round}
                    setWinner={handleWinner}
                  />
                </Grid>
                <Grid xs={6}>
                  <Card
                    data={series.entry2.entry}
                    matchNumber={series.matchNumber}
                    round={series.round}
                    setWinner={handleWinner}
                  />
                </Grid>
              </>
            ) : (
              <>
                <Grid xs={12}>
                  <Card
                    data={series.winner.entry}
                    matchNumber={series.matchNumber}
                    round={series.round}
                    setWinner={handleWinner}
                  />
                </Grid>
              </>
            )}

            <Grid xs={12}></Grid>
          </Grid>
        </Box>
      ) : (
        <>Hello Worlds</>
      )}
    </>
  );
}

export default Picker;
