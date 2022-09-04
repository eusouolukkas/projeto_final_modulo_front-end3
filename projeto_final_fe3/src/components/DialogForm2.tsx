import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useAppDispatch } from "../store/hooks";
import { createUser, CreateUser } from "../store/modules/user/UserSlice";

export default function FormDialog() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [Rpass, setRpass] = useState<string>("");

  const [open, setOpen] = React.useState(false);

  function cadastrarUsuario() {
    const usuario: CreateUser = {
      name: name,
      pass: pass,
      Rpass: Rpass,
    };

    dispatch(createUser(usuario));
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant='contained'
        onClick={handleClickOpen}
        sx={{ ml: "580px", mt: "5px" }}
      >
        Faça seu Cadastro
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cadastro</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Coloque um E-mail válido e uma Senha válida!
          </DialogContentText>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label='Digite seu E-mail'
            fullWidth
            color='primary'
          />
          <TextField
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            label='Digite uma senha válida'
            fullWidth
            color='primary'
          />
          <TextField
            value={Rpass}
            onChange={(e) => setRpass(e.target.value)}
            label='Digite novamente a senha'
            fullWidth
            color='primary'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={cadastrarUsuario} href='/'>
            Continuar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
