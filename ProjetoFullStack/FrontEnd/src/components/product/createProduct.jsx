import React, { useState, useEffect } from "react";
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
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DialogMessage from '../../../utils/dialogMessage';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import '../../styles/index.css';
import validator from '../../../utils/inputsValidator'

const theme = createTheme();

function CreateProduct() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const userToken = JSON.parse(localStorage.getItem('user')) || {};
    const token = userToken.token || "";

    const [formData, setFormData] = useState({
        idProduct: "",
        name: "",
        costprice: "",
        saleprice: "",
        idclient: "",
        idgroup: "",
        idsubgroup: "",
        idstore: ""
    });

    const [products, setProducts] = useState([]);
    const [groups, setGroup] = useState([]);
    const [clients, setClients] = useState([]);
    const [stores, setStores] = useState([]);
    const [subGroups, setSubGroup] = useState([]);
    const [filteredSubGroups, setFilteredSubGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState("");
    //const [imagePreviewUrl, setImagePreviewUrl] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogStatus, setDialogStatus] = useState('');
    const [dialogMessage, setDialogMessage] = useState('');

    /*const InputStyled = styled('input')({
        display: 'none',
    });*/

    useEffect(() => {
        const fetchGroup = async () => {
            try {
                const response = await axios.get('http://localhost:3000/group', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setGroup(response.data);
            } catch (error) {
                console.error("Error fetching group", error);
                if (error.response && error.response.status === 401) {
                    logout();
                }
            }
        };
        const fetchSubGroup = async () => {
            try {
                const response = await axios.get('http://localhost:3000/subgroup', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setSubGroup(response.data);
            } catch (error) {
                console.error("Error fetching sub-group", error);
                if (error.response && error.response.status === 401) {
                    logout();
                }
            }
        };
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:3000/store', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setStores(response.data);
            } catch (error) {
                console.error("Error fetching store", error);
                if (error.response && error.response.status === 401) {
                    logout();
                }
            }
        };
        const fetchClients = async () => {
            try {
                const response = await axios.get('http://localhost:3000/client', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setClients(response.data);
            } catch (error) {
                console.error("Error fetching client", error);
                if (error.response && error.response.status === 401) {
                    logout();
                }
            }
        };
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/product', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log(response.data)
                let position = response.data.length -1;
                
                setProducts({
                    idProduct: response.data[position].IdProduct + 1,      
                  });
            } catch (error) {
                console.error("Error fetching product", error);
                if (error.response && error.response.status === 401) {
                    logout();
                }
            }
        };

        fetchProducts();
        fetchClients();
        fetchStores();
        fetchSubGroup();
        fetchGroup();
    }, [token, logout]);

    useEffect(() => {
        // Filtra os subgrupos com base no grupo selecionado
        if (selectedGroup) {
            setFilteredSubGroups(subGroups.filter(subGroup => subGroup.IdGroup === selectedGroup));
        } else {
            setFilteredSubGroups([]);
        }
    }, [selectedGroup, subGroups]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));


        if (name === "idgroup") {
            setSelectedGroup(value);
            setFormData(prevFormData => ({
                ...prevFormData,
                idsubgroup: ""
            }));
        }
    };
    /*
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (['image/jpeg', 'image/png'].includes(file.type)) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImagePreviewUrl(reader.result);
                };
                reader.readAsDataURL(file);
            } else {
                alert('Por favor, selecione um arquivo de imagem (.jpg, .jpeg, .png).');
                setImagePreviewUrl("");
            }
        }
    };*/

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

            const errors = [];

            const testProductName = validator.allValidator(formData.name, 2, 50);
            const testCostPrice = validator.floatValidator(formData.costprice);
            const testSalePrice = validator.floatValidator(formData.saleprice);
            const testIdClientSupplier = validator.integerValidator(formData.idclient);
            const testIdStore = validator.integerValidator(formData.idstore);
            const testIdGroup = validator.integerValidator(formData.idgroup);
            const testIdSubGroup = validator.integerValidator(formData.idsubgroup);

            if (testProductName !== true) {
                errors.push(testProductName);
            }
            if (testCostPrice !== true) {
                errors.push(testCostPrice);
            }
            if (testSalePrice !== true) {
                errors.push(testSalePrice);
            }
            if (testIdClientSupplier !== true) {
                errors.push(testIdClientSupplier);
            }
            if (testIdStore !== true) {
                errors.push(testIdStore);
            }
            if (testIdGroup !== true) {
                errors.push(testIdGroup);
            }
            if (testIdSubGroup !== true) {
                errors.push(testIdSubGroup);
            }
            if (errors.length > 0) {
                setDialogStatus('error');
                setDialogMessage(errors.join('\n'));
                return;
            }

            const response = await axios.post('http://localhost:3000/product', { ...formData }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            const successMessage = response.data || "Produto cadastrado com sucesso!";
            setFormData({
                idProduct: "",
                name: "",
                costprice: "",
                saleprice: "",
                isclient: "",
                idgroup: "",
                idsubgroup: "",
                idstore: ""
            });
            setDialogStatus('success');
            setDialogMessage(successMessage);
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 401) {
                logout();
            }
            const errorMessage = error.response?.data?.errors || "Erro ao cadastrar produto.";
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
            <Container className="box-container-product">
                <CssBaseline />
                <Box className="box-manager-product" component="form" onSubmit={handleSubmit} >
                    <Avatar className='avatar'>
                        <ProductionQuantityLimitsIcon className='avatar' />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Cadastro de Produto
                    </Typography>
                    <Box sx={{ display: "flex", gap: '10px' }}>
                        <Box sx={{ mt: 1 }} className="box-manager-product-main">
                        <TextField
                                margin="normal"
                                disabled
                                fullWidth
                                label="Código do Produto"
                                name="idProduct"
                                autoComplete="naidProductme"
                                autoFocus
                                value={products.idProduct || ''}
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
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                <TextField
                                    className="textfield-product"
                                    margin="normal"
                                    type="number"
                                    required
                                    fullWidth
                                    id="costprice"
                                    label="Preço de Custo"
                                    name="costprice"
                                    autoComplete="costprice"
                                    value={formData.costprice}
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
                                    className="textfield-product"
                                    margin="normal"
                                    type="number"
                                    required
                                    fullWidth
                                    label="Preço de Venda"
                                    name="saleprice"
                                    autoComplete="saleprice"
                                    value={formData.saleprice}
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
                            <Select
                                required
                                name="idstore"
                                value={formData.idstore}
                                onChange={handleChange}
                                fullWidth
                                displayEmpty
                                renderValue={(selected) => {
                                    if (!selected) {
                                        return <em>Selecione uma Loja</em>;
                                    }
                                    return stores.find(store => store.IdStore === selected)?.StoreName || '';
                                }}
                                color="success"
                                sx={{ mt: '10px' }}
                            >
                                <MenuItem value="" >
                                    <em>Selecione uma Loja</em>
                                </MenuItem>
                                {stores.map(store => (
                                    <MenuItem key={store.IdStore} value={store.IdStore}>
                                        {store.StoreName}
                                    </MenuItem>
                                ))}
                            </Select>
                            <Select
                                required
                                name="idclient"
                                value={formData.idclient}
                                onChange={handleChange}
                                fullWidth
                                displayEmpty
                                renderValue={(selected) => {
                                    if (!selected) {
                                        return <em>Selecione um Cliente</em>;
                                    }
                                    return clients.find(client => client.IdClientSupplier === selected)?.ClientSupplierName || '';
                                }}
                                color="success"
                                sx={{ mt: '10px' }}
                            >
                                <MenuItem value="" >
                                    <em>Selecione um Cliente</em>
                                </MenuItem>
                                {clients.map(client => (
                                    <MenuItem key={client.IdClientSupplier} value={client.IdClientSupplier}>
                                        {client.ClientSupplierName}
                                    </MenuItem>
                                ))}
                            </Select>
                            <Select
                                required
                                name="idgroup"
                                value={formData.idgroup}
                                onChange={(e) => {
                                    handleChange(e);
                                    setSelectedGroup(e.target.value);
                                }}
                                fullWidth
                                displayEmpty
                                renderValue={(selected) => {
                                    if (!selected) {
                                        return <em>Selecione um Grupo</em>;
                                    }
                                    return groups.find(group => group.IdGroup === selected)?.GroupName || '';
                                }}
                                color="success"
                                sx={{ mt: '10px' }}
                            >
                                <MenuItem value="" >
                                    <em>Selecione um Grupo</em>
                                </MenuItem>
                                {groups.map(group => (
                                    <MenuItem key={group.IdGroup} value={group.IdGroup}>
                                        {group.GroupName}
                                    </MenuItem>
                                ))}
                            </Select>
                            <Select
                                required
                                name="idsubgroup"
                                value={formData.idsubgroup}
                                onChange={handleChange}
                                fullWidth
                                displayEmpty
                                renderValue={(selected) => {
                                    if (!selected) {
                                        return <em>Selecione um Subgrupo</em>;
                                    }
                                    return subGroups.find(subGroup => subGroup.IdSubGroup === selected)?.SubGroupName || '';
                                }}
                                color="success"
                                sx={{ mt: '10px' }}
                                disabled={!selectedGroup}
                            >
                                <MenuItem value="" >
                                    <em>Selecione um Subgrupo</em>
                                </MenuItem>
                                {filteredSubGroups.map(subGroup => (
                                    <MenuItem key={subGroup.IdSubGroup} value={subGroup.IdSubGroup}>
                                        {subGroup.SubGroupName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Box>
                      {/*   <Box sx={{ textAlign: 'center', mt: 2 }} className="box-manager-product-img">
                            <Typography variant="h6">Carregar Imagem</Typography>
                            <label htmlFor="upload-button">
                                <Box
                                    className="box-manager-product-load"
                                >
                                    {imagePreviewUrl ? (
                                        <img
                                            src={imagePreviewUrl}
                                            alt="Preview"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <Typography variant="body2" color="textSecondary">
                                            Nenhuma imagem selecionada
                                        </Typography>
                                    )}
                                </Box>
                                <InputStyled
                                    id="upload-button"
                                    type="file"
                                    name="image"
                                    accept=".jpg, .jpeg, .png"
                                    onChange={handleImageChange}
                                />
                                <Button
                                    className="primary-button"
                                    variant="contained"
                                    component="span"
                                    sx={{ mt: 2, width: 'auto' }}
                                >
                                    Selecionar Imagem
                                </Button>
                            </label>
                        </Box> */}
                    </Box>
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
                </Box>
            </Container>
            <DialogMessage
                open={dialogOpen}
                onClose={handleCloseDialog}
                status={dialogStatus}
                message={dialogMessage}
            />
        </ThemeProvider>
    );
}

export default CreateProduct;
