import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { useActions } from "../../hooks/useActions";

import Search from "../Search/Search";

const Header: React.FC = () => {
  const { logOut } = useActions();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Search />
          <Button
            onClick={() => logOut()}
            color="inherit"
            sx={{
              width: "125px",
              fontWeight: "bold",
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
