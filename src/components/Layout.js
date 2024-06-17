import React from 'react';
import { Box, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography } from '@mui/material';
import { ContactMail } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { motion } from 'framer-motion'; // Импортируем framer-motion
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const drawerWidth = 300;

function Layout() {
    const role = useSelector((state) => state.auth.user.role);
    
    let menuItems;

    if(role === 'TEACHER'){
        menuItems = [
            { text: 'Главная страница', icon: <HomeIcon/>, path: '/home' },
            { text: 'Обо мне', icon: <AssignmentIndIcon />, path: '/about' },
            { text: 'Курсы', icon: <AccountTreeIcon />, path: '/courses' },
            { text: 'Ученики', icon: <AccessibilityNewIcon />, path: '/students' },
            { text: 'Техническая поддержка', icon: <ContactMail />, path: '/support' },
            { text: 'Посты', icon: <ReceiptLongIcon />, path: '/posts' }
        ];
    } else if(role === 'STUDENT') {
        menuItems = [
            { text: 'Главная страница', icon: <HomeIcon/>, path: '/home' },
            { text: 'Обо мне', icon: <AssignmentIndIcon />, path: '/about' },
            { text: 'Курсы', icon: <AccountTreeIcon />, path: '/courses' },
            { text: 'Техническая поддержка', icon: <ContactMail />, path: '/support' },
            { text: 'Посты', icon: <ContactMail />, path: '/posts' }
        ];
    }

    const navigate = useNavigate('/');
    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();
    
    const handleSubmit = () => {
        dispatch(logout());
        navigate('/')
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <div style={{ position: 'fixed', zIndex: '1000', display:'flex', alignItems:'center', gap:'10px', top:'30px', right: '30px', backgroundColor: '#1e1e1e', padding:'1rem', borderRadius: '10px'}}>
                <AccountBalanceWalletIcon />
                Баланс: {user.bonusPoints}
            </div>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        p: 2,
                    }}
                >
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Avatar
                            alt={user.name}
                            sx={{ width: 35, height: 35 }}
                        />
                    </motion.div>
                    <div style={{ display: 'flex', flexDirection: 'column', fontSize: '12px' }}>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <div style={{ display: "flex", gap: '5px' }}>
                                <Typography variant="h6">{user.firstName}</Typography>
                                <Typography variant="h6">{user.lastName}</Typography>
                            </div>
                            <Typography sx={{ p: 0 }} variant="body2">{user.email}</Typography>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <IconButton onClick={handleSubmit}>
                            <LogoutIcon />
                        </IconButton>
                    </motion.div>
                </Box>
                <List>
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <ListItem button component={Link} to={item.path}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        </motion.div>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Outlet />
            </Box>
        </Box>
    );
}

export default Layout;
