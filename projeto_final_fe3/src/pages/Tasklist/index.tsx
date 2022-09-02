import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AppBar from "../../components/AppBar";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addOne,
  CriarTask,
  LerTask,
  lerTask,
  removeOne,
  selectAll,
  updateOne,
} from "../../store/modules/tasks/TasksSlice";

const Tasks: React.FC = () => {
  const tarefasRedux = useAppSelector(selectAll);

  const [description, setDescription] = useState<string>("");
  const [detail, setDetail] = useState<string>("");

  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false);
  const [openEditar, setOpenEditar] = React.useState(false);

  const abrirModal = () => {
    setOpen(true);
  };

  const abrirModalEditar = () => {
    setOpenEditar(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDescription("");
    setDetail("");
  };

  const fecharModalEditar = () => {
    setOpenEditar(false);
    setDescription("");
    setDetail("");
  };

  function cadastrarTarefa() {
    const cadastrarTarefa: CriarTask = {
      description: description,
      detail: detail,
      id: "",
    };

    dispatch(addOne(cadastrarTarefa));

    setDescription("");
    setDetail("");
  }

  function excluirTarefa(description: string) {
    dispatch(removeOne(description));
  }

  function editarTarefa(item: LerTask) {
    setDescription(item.description + "");
    setDetail(item.detail + "");

    abrirModalEditar();
  }

  function atualizarTarefa() {
    dispatch(
      updateOne({
        id: description,
        changes: {
          description: description,
          detail: detail,
        },
      })
    );
  }

  function lerTarefa() {
    dispatch(
      lerTask(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJJZCI6IjQ2MDQ1M2VkLTJmNzYtNGE1ZC1hZGIwLTFkZWQyN2U1M2U2OCIsInVzZXJOYW1lIjoibHVjYXNAbHVjYXMuY29tIn0sImlhdCI6MTY2MjEzOTY3NSwiZXhwIjoxNjYyMTQzMjc1fQ.lxDPtZfZEL2FrwgrLSDU8BE1snBCHcVCmBBasWd33UE"
      )
    );
  }

  return (
    <>
      <AppBar />
      <React.Fragment>
        <Typography
          variant='h1'
          sx={{ mt: "50px", color: "white", ml: "50px", textAlign: "center" }}
        >
          Tarefas
        </Typography>
        <Button onClick={abrirModal} variant='contained'>
          Cadastrar Tarefa
        </Button>
        <Button onClick={lerTarefa} variant='contained'>
          Ler Tarefas
        </Button>
        {tarefasRedux.map((item: LerTask) => {
          return (
            <div key={item.description} className='mt-5'>
              <Typography sx={{ color: "white" }}>
                Descrição: {item.description}
              </Typography>
              <Typography sx={{ color: "white" }}>
                Detalhamento: {item.detail}
              </Typography>
              <Button onClick={() => editarTarefa(item)} variant='outlined'>
                Editar
              </Button>
              <Button
                onClick={() => excluirTarefa(item.description)}
                variant='outlined'
              >
                Excluir
              </Button>
            </div>
          );
        })}
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogTitle id='alert-dialog-title'>Cadastrar tarefa</DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                Para cadastrar uma tarefa, utilize o formulário abaixo.
              </DialogContentText>
              <Grid container spacing={2} className='mt-5'>
                <Grid item xs={12}>
                  <TextField
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    label='Digite a descrição'
                    fullWidth
                    color='primary'
                    focused
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                    label='Digite os detalhes'
                    fullWidth
                    color='primary'
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button variant='contained' onClick={() => cadastrarTarefa()}>
                Salvar
              </Button>
            </DialogActions>
          </Dialog>

          {/* MODAL DE EDITAR */}
          <Dialog
            open={openEditar}
            onClose={fecharModalEditar}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogTitle id='alert-dialog-title'>Editar tarefa</DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                Para editar uma tarefa, utilize o formulário abaixo.
              </DialogContentText>
              <Grid container spacing={2} className='mt-5'>
                <Grid item xs={12}>
                  <TextField
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    label='Digite a descrição'
                    fullWidth
                    color='primary'
                    focused
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                    label='Digite os detalhes'
                    fullWidth
                    color='primary'
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={fecharModalEditar}>Cancelar</Button>
              <Button variant='contained' onClick={() => atualizarTarefa()}>
                Atualizar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </React.Fragment>
    </>
  );
};

export default Tasks;
