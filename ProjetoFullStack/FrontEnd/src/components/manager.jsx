// BIBLIOTECAS
import React from "react";
import { Link as RouterLink } from "react-router-dom";

// FRAMEWORKS - MATERIAL UI
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Grid,
  Paper,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const theme = createTheme();

export default function Manager() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom:'30px'
          }}
        >
          <Typography component="h1" variant="h4" gutterBottom fontFamily='signika'>
            <b>Gerenciador</b>
          </Typography>

          <Grid container spacing={2} justifyContent="center">         
            <Grid item xs={12} sm={10} md={8}>
              <Paper elevation={6} sx={{ padding: 1 }}>
                <Typography variant="h5" gutterBottom fontFamily='signika'>
                  Usuário
                </Typography>
                <Box display="flex" justifyContent="space-around">
                  <Button
                    component={RouterLink}
                    to="/criarusuario"
                    variant="contained"
                    color="primary"
                  >
                    Cadastrar
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/buscarusuario"
                    variant="contained"
                    color="primary"
                  >
                    Pesquisar
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
