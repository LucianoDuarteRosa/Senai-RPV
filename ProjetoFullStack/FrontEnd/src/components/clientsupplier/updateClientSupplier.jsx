import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from '../login/authContext';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import DialogMessage from '../../../utils/dialogMessage';
import validator from '../../../utils/inputsValidator';

const theme = createTheme();

function UpdateClientSupplier() {
  const { logout } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    cnpj: "",
    cpfcnpj: "",
    zipcode: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    isclient: false,
    issupplier: false,
    isclientsupplier: false,
    typekey: "",
    pixkey: "",
    active: true
  });
  const [loading, setLoading] = useState(true);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogStatus, setDialogStatus] = useState('');
  const [dialogMessage, setDialogMessage] = useState('');

  const userToken = JSON.parse(localStorage.getItem('user')) || {};
  const token = userToken.token || "";

  useEffect(() => {
    const fetchClientSupplier = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/client/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const clientData = response.data[0];
        
        setFormData({
          name: clientData.ClientSupplierName,
          cpf: clientData.Cpf,
          cnpj: clientData.Cnpj,
          zipcode: clientData.ZipCode,
          address: clientData.Address,
          number: clientData.Number,
          complement: clientData.Complement,
          neighborhood: clientData.Neighborhood,
          city: clientData.City,
          state: clientData.State,
          phone: clientData.Phone,
          email: clientData.Email,
          isclient: Boolean(clientData.IsClient),
          issupplier: Boolean(clientData.IsSupplier),
          typekey: clientData.TypeKey,
          pixkey: clientData.PixKey,
          active: Boolean(clientData.Active)
        });
      } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 401) {
          logout();
        }
        const errorMessage = error.response?.data?.error || "Erro ao carregar cliente/fornecedor.";
        setDialogStatus('error');
        setDialogMessage(errorMessage);
        setDialogOpen(true);
      } finally {
        setLoading(false);
      }
    };

    fetchClientSupplier();
  }, [id, token]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      await axios.put(`http://localhost:3000/client/${id}`, { ...formData }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setDialogStatus('success');
      setDialogMessage("Cliente/Fornecedor atualizado com sucesso");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        logout();
      }
      const errorMessage = error.response?.data?.errors || "Erro ao atualizar cliente/fornecedor.";
      setDialogStatus('error');
      setDialogMessage(errorMessage);
    } finally {
      setDialogOpen(true);
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const handleVoltar = () => {
    navigate("/searchclient");
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="box-container">
        <CssBaseline />
        <Box className="box-manager-user">
          <Avatar className='avatar'>
            <AssignmentIndIcon className='avatar' />
          </Avatar>
          <Typography component="h1" variant="h5">
            Atualizar Cliente/Fornecedor
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Nome"
              name="name"
              autoComplete="nome"
              autoFocus
              value={formData.name || ''}
              onChange={handleChange}
              InputLabelProps={{
                sx: {
                  color: '#0303037e',
                  '&.Mui-focused': {
                    color: '#030303',
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#0303037e',
                  },
                  '&:hover fieldset': {
                    borderColor: '#0303037e',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#030303af',
                  },
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.active}
                  onChange={handleChange}
                  name="active"
                  sx={{
                    '&.Mui-checked': {
                      color: '#45a049',
                    },
                  }}
                />
              }
              label="Ativo"
            />
            <Box className="box-manager-button">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className='primary-button'
              >
                Salvar
              </Button>
              <Button
                fullWidth
                variant="contained"
                className='primary-button'
                onClick={handleVoltar}
              >
                Voltar
              </Button>
            </Box>
          </Box>
        </Box>
        <DialogMessage
          open={dialogOpen}
          onClose={handleCloseDialog}
          status={dialogStatus}
          message={dialogMessage}
        />
      </Container>
    </ThemeProvider>
  );
}

export default UpdateClientSupplier;
