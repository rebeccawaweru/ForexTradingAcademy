import * as React from 'react';
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {ToggleButton} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
export default function CustomDrawer({sx,onclick1,onclick2,onclick3,onclick4}) {
  const history = useNavigate()
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key='Home' onClick={onclick1}>
          <ListItemIcon>{<HomeIcon/>}</ListItemIcon>
          <ListItemText primary="Home"/>
        </ListItem>
        <ListItem button key='Courses' onClick={onclick2}>
          <ListItemIcon>{<CollectionsBookmarkIcon/>}</ListItemIcon>
          <ListItemText primary="Courses"/>
        </ListItem>
        <ListItem button key='Contact Us' onClick={onclick3}>
          <ListItemIcon>{<ContactPhoneIcon/>}</ListItemIcon>
          <ListItemText primary="Contact Us"/>
        </ListItem>
        {/* <ListItem button key='Courses' onClick={onclick2}>
          <ListItemIcon>{<CollectionsBookmarkIcon/>}</ListItemIcon>
          <ListItemText primary="Physical Classes"/>
        </ListItem> */}
        {/* <ListItem button key='E-books' onClick={onclick3}>
          <ListItemIcon>{< MenuBookIcon/>}</ListItemIcon>
          <ListItemText primary="E-books"/>
        </ListItem>
        <ListItem button key='Strategies' onClick={onclick4}>
          <ListItemIcon>{< EmojiObjectsIcon/>}</ListItemIcon>
          <ListItemText primary="Strategies"/>
        </ListItem> */}
        <ListItem button key='Login' onClick={()=>history('/login')}>
          <ListItemIcon>{< LoginIcon/>}</ListItemIcon>
          <ListItemText primary="Login"/>
        </ListItem>
        {/* {['Home', 'Courses', 'E-Books', 'Strategies','Login'].map((text, index) => (
          <ListItem button key={text}>
            
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
        <ToggleButton value="justify" sx={sx} aria-label="justified" onClick={toggleDrawer(anchor, true)}>
        <FormatAlignJustifyIcon />
        </ToggleButton>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
