import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Card(series) {
  console.log(series)
  const selectWinner = async (s)=>{
    var serie = series.data
    const { data } = await axios.post(`http://localhost:3001/bracket/bout/${series.round}/${series.matchNumber}`, {winner:serie});
    series.setWinner(data)
  }

  
  return (
    <Stack spacing={2} >
      <Item >{series.data.name} </Item>
      <Item><iframe
          width="480"
          height="315"
          src={series.data.url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe></Item>
      <Item>{series.data.description}</Item>
      <Item>
        <Button onClick={selectWinner} variant="contained">Select</Button>
      </Item>
    </Stack>
  );
}
