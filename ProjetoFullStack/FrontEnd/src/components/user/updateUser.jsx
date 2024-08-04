import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import DialogMessage from '../../../utils/dialogMessage';
import validator from '../../../utils/inputsValidator';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const theme = createTheme();

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    UserName: '',
    UserEmail: '',
    Active: false,
    IdProfile: '' // Atualiza para o nome correto da coluna
  });
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState([]); // Estado para armazenar os perfis

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogStatus, setDialogStatus] = useState('');
  const [dialogMessage, setDialogMessage] = useState('');

  const userToken = JSON.parse(localStorage.getItem('user')) || {};
  const token = userToken.token || "";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const userData = response.data[0];
        setUser({
          UserName: userData.UserName,
          UserEmail: userData.UserEmail,
          Active: Boolean(userData.Active),
          IdProfile: userData.IdProfile || '' // Corrige o nome da propriedade
        });
      } catch (error) {
        const errorMessage = error.response?.data?.error || "Erro ao carregar usuário";
        setDialogStatus('error');
        setDialogMessage(errorMessage);
        setDialogOpen(true);
      } finally {
        setLoading(false);
      }
    };

    const fetchProfiles = async () => {
      try {
        const response = await axios.get('http://localhost:3000/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setProfiles(response.data);
      } catch (error) {
        console.error("Error fetching profiles", error);
      }
    };

    fetchUser();
    fetchProfiles();
  }, [id, token]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setUser({ ...user, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const errors = [];

      const testName = validator.allValidator(user.UserName, 2, 15);
      const testEmail = validator.emailValidator(user.UserEmail);
      const testActive = validator.booleanValidator(user.Active);

      if (testName !== true) {
        errors.push(testName);
      }
      if (testEmail !== true) {
        errors.push(testEmail);
      }
      if (testActive !== true) {
        errors.push(testActive);
      }

      if (errors.length > 0) {
        setDialogStatus('error');
        setDialogMessage(errors.join('\n'));
        return;
      }

      await axios.put(`http://localhost:3000/user/${id}`, { ...user }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setDialogStatus('success');
      setDialogMessage("Usuário atualizado com sucesso");
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Erro ao atualizar usuário.";
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
    navigate("/searchuser");
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
            <AccountCircleIcon className='avatar' />
          </Avatar>
          <Typography component="h1" variant="h5">
            Atualizar Usuário
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="UserName"
              label="Nome"
              name="UserName"
              autoComplete="nome"
              autoFocus
              value={user.UserName || ''}
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="UserEmail"
              label="Email"
              name="UserEmail"
              autoComplete="email"
              value={user.UserEmail || ''}
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
            <Select
              name="IdProfile" // Atualiza o nome da propriedade no Select
              value={user.IdProfile || ''}
              onChange={handleChange}
              fullWidth
              color="success"
              displayEmpty
              renderValue={(selected) => {
                if (!selected) {
                  return <em>Selecione um perfil</em>;
                }
                return profiles.find(profile => profile.IdProfile === selected)?.UserProfile || '';
              }}
              sx={{ mt: '10px' }}
            >
              <MenuItem value="">
                <em>Selecione um perfil</em>
              </MenuItem>
              {profiles.map((profile) => (
                <MenuItem key={profile.IdProfile} value={profile.IdProfile}>
                  {profile.UserProfile}
                </MenuItem>
              ))}
            </Select>
            <FormControlLabel
              control={
                <Checkbox
                  checked={user.Active}
                  onChange={handleChange}
                  name="Active"
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

export default UpdateUser;
