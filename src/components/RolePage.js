import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Button, MenuItem, TextField, Typography, Card, Stack, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// Tema Gelap
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// Styling untuk Card (Form)
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  padding: theme.spacing(4),
  gap: theme.spacing(3),
  width: '100%',
  maxWidth: '500px',
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
}));

// Styling untuk Container
const RolePageContainer = styled(Stack)(({ theme }) => ({
  minHeight: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  background: 'radial-gradient(circle, rgba(25,25,60,1) 0%, rgba(0,0,0,1) 100%)',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
}));

const DevisiPage = () => {
  const [devisiOptions] = useState([
    { id: 1, namaDevisi: 'Facilities Management & Asset Security' },
    { id: 2, namaDevisi: 'Administration & Secretarial' },
    { id: 3, namaDevisi: 'HC Business Partner' },
    { id: 4, namaDevisi: 'Treasury' },
    { id: 5, namaDevisi: 'Risk Management' },
    { id: 6, namaDevisi: 'Communication Design' },
    { id: 7, namaDevisi: 'Account Management' },
    { id: 8, namaDevisi: 'Product Management' },
    { id: 9, namaDevisi: 'Infrastructure Design & Engineering' },
    { id: 10, namaDevisi: 'Systems Engineering' },
    { id: 11, namaDevisi: 'Software Engineering' },
    { id: 12, namaDevisi: 'Data Center' },
    { id: 13, namaDevisi: 'Information & Security' },
    { id: 14, namaDevisi: 'Blockchain and Cryptography' },
    { id: 15, namaDevisi: 'Transport & Core Network Design and Planning' },
    { id: 16, namaDevisi: 'Access Network Design & Planning' },
    { id: 17, namaDevisi: 'Development & Design' },
    { id: 18, namaDevisi: 'Sales Engineering' },
    { id: 19, namaDevisi: 'Data Science' },
  ]);

  const [subDevisiOptions] = useState([
    { id: 1, namaSubDevisi: 'Frontend' },
    { id: 2, namaSubDevisi: 'Backend' },
    { id: 3, namaSubDevisi: 'Fullstack' },
  ]);

  const [selectedDevisi, setSelectedDevisi] = useState('');
  const [selectedSubDevisi, setSelectedSubDevisi] = useState('');
  const [idTele, setIdTele] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const idTeleParam = params.get('idTele');
    if (idTeleParam) {
      setIdTele(idTeleParam);
    } else {
      console.error('ID Telegram tidak ditemukan di query parameter');
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!idTele || !selectedDevisi || !selectedSubDevisi) {
      console.error('Missing required fields');
      return;
    }
  
    const selectedDevisiNama = devisiOptions.find(d => d.id === Number.parseInt(selectedDevisi))?.namaDevisi;
    const selectedSubDevisiNama = subDevisiOptions.find(sd => sd.id === Number.parseInt(selectedSubDevisi))?.namaSubDevisi;
  
    console.log('Selected Devisi:', selectedDevisiNama);
    console.log('Selected Sub-Devisi:', selectedSubDevisiNama);
    
    navigate(`/check?idTele=${encodeURIComponent(idTele)}&devisi=${encodeURIComponent(selectedDevisiNama)}&subDevisi=${encodeURIComponent(selectedSubDevisiNama)}`);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RolePageContainer>
        <StyledCard>
          <Typography component="h1" variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
            Choose Devisi and Sub-Devisi
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              select
              fullWidth
              label="Devisi"
              id="devisi"
              name="devisi"
              value={selectedDevisi}
              onChange={(e) => setSelectedDevisi(e.target.value)}
              variant="outlined"
              sx={{ backgroundColor: '#121212', input: { color: 'white' }, mb: 2 }}
            >
              <MenuItem value="">
                <em>Select Devisi</em>
              </MenuItem>
              {devisiOptions.map(d => (
                <MenuItem key={d.id} value={d.id}>
                  {d.namaDevisi}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              fullWidth
              label="Sub-Devisi"
              id="subDevisi"
              name="subDevisi"
              value={selectedSubDevisi}
              onChange={(e) => setSelectedSubDevisi(e.target.value)}
              variant="outlined"
              sx={{ backgroundColor: '#121212', input: { color: 'white' }, mb: 2 }}
            >
              <MenuItem value="">
                <em>Select Sub-Devisi</em>
              </MenuItem>
              {subDevisiOptions.map(sd => (
                <MenuItem key={sd.id} value={sd.id}>
                  {sd.namaSubDevisi}
                </MenuItem>
              ))}
            </TextField>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
                mt: 2,
              }}
            >
              Submit
            </Button>
          </Box>
        </StyledCard>
      </RolePageContainer>
    </ThemeProvider>
  );
};

export default DevisiPage;