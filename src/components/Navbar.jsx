import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { purple } from '@mui/material/colors';

const Navbar = () => {
    return(
        <nav>
            <Box sx={{ flexGrow: 1}} >
            <AppBar position="static" sx={{backgroundColor: "black"}}>
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    aria-label="menu"
                    sx={{ mr: 2}}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button sx = {{color: "white"}}>Login</Button>
                </Toolbar>
            </AppBar>
            </Box>
        </nav>
    )
}

export default Navbar;