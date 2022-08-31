import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
            Tasklist
          </Typography>
          <Button variant='contained' href='/' sx={{ mr: "20px" }}>
            Início
          </Button>
          <Button variant='contained' href='/tasklist' sx={{ mr: "20px" }}>
            Tasklist
          </Button>
          <Button variant='contained' href='/sobre'>
            Sobre
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
