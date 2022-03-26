import * as React from 'react';
import { useSelector } from 'react-redux';
import {
    useLocation,
    Navigate,
} from "react-router-dom";
import { authProvider } from '../service/user';
import { RootState } from '../store';

interface AuthContextType {
    user: any;
    signin: (email: string, password: string, callback: (response: any) => any) => any;
    signout: (callback: VoidFunction) => void;
}
export const useAuth = () => {
    return React.useContext(AuthContext);
}
let AuthContext = React.createContext<AuthContextType>(null!);

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const authenticationState: any= useSelector((state: RootState) => state.authentication);
    let [user, setUser] = React.useState<any>(authenticationState.loggedIn && authenticationState.user);
    let signin = (email: string, password: string, callback: (response: any) => any) => {
        return authProvider.signin(email, password, (response) => {
            setUser(response);
            callback(response);
        }).catch(message => {
            callback({ error: true, message });
        });
    };

    let signout = (callback: VoidFunction) => {
        return authProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}