import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from '../login/authContext';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import DialogMessage from '../../../utils/dialogMessage';
import validator from '../../../utils/inputsValidator';
import ZipCode from "cep-promise";
import '../../styles/index.css'

const theme = createTheme();

function CreateClientSupplier() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const userToken = JSON.parse(localStorage.getItem('user')) || {};
    const token = userToken.token || "";

    const [formData, setFormData] = useState({
        name: "",
        cpf: "",
        cnpj: "",
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
        pixkey: "",
        active: true
    });

    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogStatus, setDialogStatus] = useState('');
    const [dialogMessage, setDialogMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            isclient: value === "client",
            issupplier: value === "supplier",
            cpf: value === "supplier" ? "" : formData.cpf,
            cnpj: value === "client" ? "" : formData.cnpj,
        });
    };

    const handleZipCodeChange = async (event) => {
        const { value } = event.target;

        if (value.length === 8) {
            try {
                const zipCode = await ZipCode(value);
                setFormData({
                    ...formData,
                    zipcode: value,
                    address: zipCode.street || "",
                    neighborhood: zipCode.neighborhood || "",
                    city: zipCode.city || "",
                    state: zipCode.state || ""
                });
            } catch (error) {
                console.error("Erro ao buscar CEP:", error.message);
            }
        } else {
            setFormData({
                ...formData,
                zipcode: value,
                address: "",
                neighborhood: "",
                city: "",
                state: ""
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const errors = [];

            const testName = validator.allValidator(formData.name, 2, 15);

            if (testName !== true) {
                errors.push(testName);
            }

            if (errors.length > 0) {
                setDialogStatus('error');
                setDialogMessage(errors);
                return;
            }

            const response = await axios.post('http://localhost:3000/clientsupplier', { ...formData }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const successMessage = response.data || "Cliente/Fornecedor cadastrado com sucesso!";
            setFormData({
                name: "",
                cpf: "",
                cnpj: "",
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
                pixkey: "",
                active: true
            });
            setDialogStatus('success');
            setDialogMessage(successMessage);
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 401) {
                logout();
            }
            const errorMessage = error.response?.data?.errors || "Erro ao cadastrar cliente/fornecedor.";
            setDialogStatus('error');
            setDialogMessage(errorMessage);
        } finally {
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
                <Box className="box-manager-client">
                    <Avatar className='avatar'>
                        <AssignmentIndIcon className='avatar' />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Cadastro de Cliente/Fornecedor
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} className="box-manager-client-form">
                        <TextField
                            className="textfield-client"
                            fullWidth
                            margin="normal"
                            required
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
                            className="textfield-client"
                            fullWidth
                            margin="normal"
                            select
                            label="Tipo"
                            required
                            name="type"
                            value={formData.isclient ? "client" : formData.issupplier ? "supplier" : ""}
                            onChange={handleSelectChange}
                            SelectProps={{
                                native: true,
                            }}
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
                        >
                            <option value=""></option>
                            <option value="client">Cliente</option>
                            <option value="supplier">Fornecedor</option>
                        </TextField>

                        {formData.isclient && (
                            <TextField
                                className="textfield-client"
                                fullWidth
                                margin="normal"
                                label="CPF"
                                name="cpf"
                                autoComplete="cpf"
                                value={formData.cpf}
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
                        )}

                        {formData.issupplier && (
                            <TextField
                                className="textfield-client"
                                fullWidth
                                margin="normal"
                                label="CNPJ"
                                name="cnpj"
                                autoComplete="cnpj"
                                value={formData.cnpj}
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
                        )}

                        {!formData.isclient && !formData.issupplier && (
                            <TextField
                                className="textfield-client"
                                fullWidth
                                margin="normal"
                                label="CPF/CNPJ"
                                disabled
                                value=""
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
                        )}
                        <TextField
                            className="textfield-client"
                            fullWidth
                            margin="normal"
                            required
                            label="CEP"
                            name="zipcode"
                            autoComplete="zipcode"
                            value={formData.zipcode}
                            onChange={handleZipCodeChange}
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
                            className="textfield-client"
                            fullWidth
                            margin="normal"
                            label="Rua/Av."
                            name="address"
                            autoComplete="address"
                            value={formData.address}
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
                            className="textfield-client"
                            fullWidth
                            margin="normal"
                            required
                            label="Número"
                            name="number"
                            autoComplete="number"
                            autoFocus
                            value={formData.number}
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
                            className="textfield-client"
                            fullWidth
                            margin="normal"
                            label="Complemento"
                            name="complement"
                            autoComplete="complement"
                            autoFocus
                            value={formData.complement}
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
                            className="textfield-client"
                            fullWidth
                            margin="normal"
                            required
                            label="Bairro"
                            name="neighborhood"
                            autoComplete="neighborhood"
                            autoFocus
                            value={formData.neighborhood}
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
                            className="textfield-client"
                            fullWidth
                            margin="normal"
                            required
                            label="Cidade"
                            name="city"
                            autoComplete="city"
                            autoFocus
                            value={formData.city}
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
                            className="textfield-client"
                            fullWidth
                            margin="normal"
                            required
                            label="Estado"
                            name="state"
                            autoComplete="state"
                            autoFocus
                            value={formData.state}
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
                            className="textfield-client"
                            fullWidth
                            margin="normal"
                            required
                            label="Telefone"
                            name="phone"
                            autoComplete="phone"
                            autoFocus
                            value={formData.phone}
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
                            className="textfield-client"
                            fullWidth
                            margin="normal"
                            required
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
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
                    </Box>
                    <TextField
                        className="textfield-client-pix"
                        fullWidth
                        margin="normal"
                        required
                        label="Chave Pix"
                        name="pixkey"
                        autoComplete="pixkey"
                        autoFocus
                        value={formData.pixkey}
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
                    <Box className="box-manager-button" sx={{ width: '60%' }}>
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

export default CreateClientSupplier;
