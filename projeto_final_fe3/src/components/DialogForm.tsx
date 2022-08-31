import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useAppDispatch } from "../store/hooks";
import React, { useState } from "react";
import { login, LoginUser } from "../store/modules/user/UserSlice";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  function fazerLogin() {
    const usuario: LoginUser = {
      name: name,
      pass: pass,
    };

    dispatch(login(usuario));
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
        sx={{ mt: "200px", ml: "600px" }}
      >
        Faça seu Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para entrar nesse site coloque seu E-mail e sua Senha cadastrada!
          </DialogContentText>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label='Digite seu E-mail'
            fullWidth
            color='primary'
            focused
          />
          <TextField
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            label='Digite sua senha cadastrada'
            fullWidth
            color='primary'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={fazerLogin}>Continuar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
