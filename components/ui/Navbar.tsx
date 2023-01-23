import Link from 'next/link';
import { AppBar, Toolbar, Typography } from "@mui/material";

export const Navbar = () => {

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link href='/' passHref>
          <Typography variant="h6">MyJira</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
