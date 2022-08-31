import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AppBar from "../../components/AppBar";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  criarTask,
  CriarTask,
  selectAll,
} from "../../store/modules/tasks/TasksSlice";

const Tasks: React.FC = () => {
  const taskRedux = useAppSelector(selectAll);

  const [description, setDescription] = useState<string>("");
  const [detail, setDetail] = useState<string>("");

  const dispatch = useAppDispatch();

  function cadastrarTarefa() {
    const tarefa: CriarTask = {
      description: description,
      detail: detail,
    };
  }

  return (
    <>
      <AppBar />
      <Grid container spacing={2}>
        <>
          <Grid item xs={12} sm={12} sx={{ mt: "200px" }}>
            <TextField
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              label='Digite uma tarefa'
              fullWidth
              color='primary'
              focused
              variant='standard'
              sx={{ backgroundColor: "lightBlue" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              label='Digite o detalhe da tarefa'
              fullWidth
              color='primary'
              variant='standard'
              sx={{ backgroundColor: "lightBlue" }}
            />
          </Grid>
          <Button
            onClick={cadastrarTarefa}
            variant='contained'
            sx={{ ml: "500px", mt: "10px" }}
          >
            Cadastrar
          </Button>
        </>
      </Grid>
    </>
  );
};

export default Tasks;
