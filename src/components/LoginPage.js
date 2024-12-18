import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  width: '100%',
  maxWidth: '450px',
  margin: 'auto',
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  minHeight: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  background: 'radial-gradient(circle, rgba(25,25,60,1) 0%, rgba(0,0,0,1) 100%)',
}));

const LoginPage = () => {
  const [idTele, setIdTele] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!idTele || !password) {
      setErrorMessage('Harap isi ID Telegram dan Password');
    } else {
      setErrorMessage('');
      navigate(`/role?idTele=${encodeURIComponent(idTele)}`);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SignInContainer>
        <StyledCard>
          <Typography component="h1" variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="idTele"
              label="ID Telegram"
              value={idTele}
              onChange={(e) => setIdTele(e.target.value)}
              autoFocus
              sx={{ backgroundColor: '#121212', input: { color: 'white' } }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ backgroundColor: '#121212', input: { color: 'white' } }}
            />
            {errorMessage && (
              <Typography color="error" sx={{ mt: 1, mb: 2 }}>
                {errorMessage}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ backgroundColor: 'white', color: 'black', mt: 2 }}
            >
              Sign in
            </Button>
          </Box>
        </StyledCard>
      </SignInContainer>
    </ThemeProvider>
  );
};

export default LoginPage;
