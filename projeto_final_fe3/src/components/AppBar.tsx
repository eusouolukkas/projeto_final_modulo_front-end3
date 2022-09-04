import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
            Lista de Tarefas
          </Typography>
          <Link
            underline='none'
            href='/'
            variant='h4'
            sx={{ mr: "20px", color: "white" }}
          >
            Início
          </Link>
          <Link
            underline='none'
            href='/tasklist'
            variant='h4'
            sx={{ mr: "20px", color: "white" }}
          >
            Tasklist
          </Link>
          <Link
            underline='none'
            variant='h4'
            href='/sobre'
            sx={{ color: "white" }}
          >
            Sobre
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
