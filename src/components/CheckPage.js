import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Card, Stack, CssBaseline, Button } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// Tema Gelap
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// Styling untuk Card (User Info)
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  width: '100%',
  maxWidth: '500px',
  margin: 'auto',
  boxShadow: `
    hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px,
    hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px
  `,
}));

// Styling untuk Container
const CheckPageContainer = styled(Stack)(({ theme }) => ({
  minHeight: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  background: 'radial-gradient(circle, rgba(25,25,60,1) 0%, rgba(0,0,0,1) 100%)',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
}));

const CheckPage = () => {
  // State untuk menyimpan data user
  const [idTele, setIdTele] = useState('');
  const [devisi, setDevisi] = useState('');
  const [subDevisi, setSubDevisi] = useState('');
  const [email] = useState('default@example.com');
  const [nama] = useState('John Doe');
  const [noTelp] = useState('081234567890');

  const navigate = useNavigate();

  // Mengambil parameter dari URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIdTele(params.get('idTele') || 'Tidak ada ID');
    setDevisi(params.get('devisi') || 'Tidak ada Devisi');
    setSubDevisi(params.get('subDevisi') || 'Tidak ada Sub-Devisi');
  }, []);

  // Navigasi ke halaman InterviewPage
  const handleConfirm = () => {
    navigate('/interview');
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CheckPageContainer>
        <StyledCard>
          <Typography component="h1" variant="h5" sx={{ textAlign: 'center', color: 'white', mb: 2, fontWeight: 'bold' }}>
            User Information
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ color: 'white' }}>
              ID Telegram: <span>{idTele}</span>
            </Typography>
            <Typography sx={{ color: 'white' }}>
              Email: <span>{email}</span>
            </Typography>
            <Typography sx={{ color: 'white' }}>
              Nama: <span>{nama}</span>
            </Typography>
            <Typography sx={{ color: 'white' }}>
              No Telepon: <span>{noTelp}</span>
            </Typography>
            <Typography sx={{ color: 'white' }}>
              Devisi: <span>{devisi}</span>
            </Typography>
            <Typography sx={{ color: 'white' }}>
              Sub-Devisi: <span>{subDevisi}</span>
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, alignSelf: 'center' }}
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </StyledCard>
      </CheckPageContainer>
    </ThemeProvider>
  );
};

export default CheckPage;