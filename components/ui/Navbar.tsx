import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
        >
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">MyJira</Typography>
      </Toolbar>
    </AppBar>
  )
}
