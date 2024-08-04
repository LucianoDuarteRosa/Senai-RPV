import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DialogMessage from '../../../utils/dialogMessage';
import validator from '../../../utils/inputsValidator';

const theme = createTheme();

function CreateUser() {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('user')) || {};
    const token = user.token || "";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogStatus, setDialogStatus] = useState('');
    const [dialogMessage, setDialogMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const errors = [];

            const testName = validator.allValidator(formData.name, 2, 15);
            const testEmail = validator.emailValidator(formData.email);

            if (testName !== true) {
                errors.push(testName);
            }
            if (testEmail !== true) {
                errors.push(testEmail);
            }

            // Se houver erros, configura o diálogo de erro e retorna
            if (errors.length > 0) {
                setDialogStatus('error');
                setDialogMessage(errors.join('\n')); // Concatena os erros em uma única string
                return;
            }

            // Se não houver erros, faz a chamada ao axios
            const response = await axios.post('http://localhost:3000/user', { ...formData }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const successMessage = response.data || "Usuário cadastrado com sucesso!";
            setFormData({
                name: "",
                email: "",
                password: ""
            });
            setDialogStatus('success');
            setDialogMessage(successMessage);

        } catch (error) {
            console.log(error)
            // Trata o erro da chamada ao axios
            const errorMessage = error.response?.data?.error || "Erro ao cadastrar usuário";
            setDialogStatus('error');
            setDialogMessage(errorMessage);
        } finally {
            // Abre o diálogo em todos os casos
            setDialogOpen(true);
        }
    };

    const handleVoltar = () => {
        navigate("/manager");
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
                        Cadastro de Usuário
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Nome"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            value={formData.name}
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
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            value={formData.email}
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
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={formData.password}
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
                        <Box className="box-manager-button">
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                className='primary-button'
                            >
                                Cadastrar
                            </Button>
                            <Button
                                variant="contained"
                                fullWidth
                                className='primary-button'
                                onClick={handleVoltar}
                            >
                                Voltar
                            </Button>
                        </Box>
                    </Box>
                    <DialogMessage
                        open={dialogOpen}
                        onClose={handleCloseDialog}
                        status={dialogStatus}
                        message={dialogMessage}
                    />
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default CreateUser;
