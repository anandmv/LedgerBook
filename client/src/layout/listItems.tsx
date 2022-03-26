import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from "react-router-dom";

interface StyledLinkProps {
    to: string;
    children: React.ReactNode;
}
const StyledLink = ({ to, children }:StyledLinkProps) => {
    return(
    <Link to={to} style={{ textDecoration: 'none', color: 'black', display: 'flex', width: '100%'}}>
        {children}
    </Link>
)}
export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <StyledLink to="/">
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </StyledLink>
        </ListItemButton>
        <ListItemButton>
            <StyledLink to="/ledger">
                <ListItemIcon>
                    <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Ledger Book" />
            </StyledLink>
        </ListItemButton>
        <ListItemButton>
            <StyledLink to="/accounts">
                <ListItemIcon>
                    <AccountTreeIcon />
                </ListItemIcon>
                <ListItemText primary="Accounts" />
            </StyledLink>
        </ListItemButton>
        <ListItemButton>
            <StyledLink to="/users">
                <ListItemIcon>
                    <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
            </StyledLink>
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </React.Fragment>
);