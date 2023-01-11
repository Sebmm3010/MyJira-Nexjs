import { Drawer, Box, Typography, List, ListItemIcon, ListItemButton,Divider, ListItemText } from "@mui/material";
import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Draft']

export const Sidebar = () => {
    return (
        <Drawer
            anchor="left"
            open={true}
            onClose={() => console.log('cerrando')}
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant="h4">Menu</Typography>
                </Box>

                <List>
                    {
                        menuItems.map((text, i) => (
                            <ListItemButton key={text}>
                                <ListItemIcon>
                                    {i % 2 ? <MoveToInboxOutlinedIcon /> : <EmailOutlinedIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        ))
                    }
                </List>
                <Divider />
                <List>
                    {
                        menuItems.map((text, i) => (
                            <ListItemButton key={text}>
                                <ListItemIcon>
                                    {i % 2 ? <MoveToInboxOutlinedIcon /> : <EmailOutlinedIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Box>
        </Drawer>
    )
}
