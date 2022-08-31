import { Typography } from "@mui/material";
import AppBar from "../../components/AppBar";

function Sobre() {
  return (
    <>
      <AppBar />
      <Typography
        variant='h4'
        gutterBottom
        sx={{
          mt: "500px",
          textAlign: "center",
          backgroundColor: "#1976D2",
          color: "white",
        }}
      >
        Trabalho final de módulo Front-End III realizado por Lucas R. Silveira
        &copy;2022
      </Typography>
    </>
  );
}

export default Sobre;
