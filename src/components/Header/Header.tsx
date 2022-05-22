import { AppBar, Box, Button, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Search from '../Search/Search';

const Header: React.FC = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Search />
          <Button
            color='inherit'
            sx={{
              width: '125px',
              fontWeight: 'bold'
            }}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
