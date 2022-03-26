import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { RootState } from '../store';
import { userActions } from '../store/actions';
import {
    useNavigate,
    useLocation,
} from "react-router-dom";
import { useAuth } from '../provider/authProvider';
import Alert from '@mui/material/Alert';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();
    const dispatch = useDispatch();

    const [ errorMessage, setErrorMessage ] = React.useState('');
    const [ isProcessing, setIsProcessing ] = React.useState(false);

    const state = location.state as any;
    const from = state?.from?.pathname || "/";
    const authentication: any = useSelector((state: RootState) => state.authentication);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email: string = data.get('email')?.toString() || '';
        const password: string = data.get('password')?.toString() || '';
        setErrorMessage('');
        setIsProcessing(true);
        dispatch(userActions.request({ username: email }));
        auth.signin(email, password, (data: any) => {
            setIsProcessing(false);
            if(data.error && data.message){
                setErrorMessage(data.message);
                return dispatch(userActions.failure(data.message));
            }
            navigate(from);
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    {!!errorMessage.length && <Alert severity="error">{errorMessage}</Alert>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={isProcessing || authentication.loggingIn}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default LoginPage;
