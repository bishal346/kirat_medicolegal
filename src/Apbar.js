import React,{useState} from 'react';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import InboxIcon from '@material-ui/icons/MoveToInbox'
import clsx from 'clsx';
import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles'
import {Tooltip,Drawer,Divider,Chip,List,Button,ListItem,ListItemIcon,CssBaseline,ListItemText,Avatar, Paper } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Brightness5,Brightness2,Home,CameraAlt, NoEncryption,Payment,LockOpen,VpnKey,TableChart} from '@material-ui/icons'
import Butto from './Butto'
//import Butot from './Butot'
import SignIn from './Login'
import Signup from './Signup'
import Checkout from './Checkout'
//import Tablee from './Tablee'
import Tab from './Tab'
//import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles'
//import { dark } from '@material-ui/core/styles/createPalette';
import {green,purple,yellow,indigo,red} from '@material-ui/core/colors'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menb:{
    width: 400
  },
  appBarShift: {
    /*width: `calc(100% - ${50}px)`,
    marginLeft: 50,*/
    [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),},
  },
  appBarShiftclose: {
    /*width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),*/
    [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${70}px)`,
    marginLeft: 70,},
    /*transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),*/
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  drawerOpen: {
   /* display: 'none',*/
   display: 'none',
   transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: theme.spacing(7) + 1,
  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(9) + 1,
  },
    [theme.breakpoints.up('sm')]: {
      display: 'inline',
    
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),},
  },
  drawerClose: {
    
    /*display:'inline',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),*/
     display:'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inline',
    
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },},
  },
  /*mobdrawerOpen: {
     display: 'none',
    display: 'none',
    transition: theme.transitions.create('width', {
     easing: theme.transitions.easing.sharp,
     duration: theme.transitions.duration.leavingScreen,
   }),
   overflowX: 'hidden',
   width: theme.spacing(7) + 1,
   [theme.breakpoints.up('sm')]: {
     width: theme.spacing(9) + 1,
   },
     [theme.breakpoints.up('sm')]: {
       display: 'none',
     
     width: drawerWidth,
     transition: theme.transitions.create('width', {
       easing: theme.transitions.easing.sharp,
       duration: theme.transitions.duration.enteringScreen,
     }),},
   },
   mobdrawerClose: {
     
     width: drawerWidth,
     display:'inline',
     transition: theme.transitions.create('width', {
       easing: theme.transitions.easing.sharp,
       duration: theme.transitions.duration.enteringScreen,
     }),
     [theme.breakpoints.up('sm')]: {
       display: 'none',
     
     transition: theme.transitions.create('width', {
       easing: theme.transitions.easing.sharp,
       duration: theme.transitions.duration.leavingScreen,
     }),
     overflowX: 'hidden',
     width: theme.spacing(7) + 1,
     [theme.breakpoints.up('sm')]: {
       width: theme.spacing(9) + 1,
     },},
   },*/
   
  /*search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },*/
  sectionDesktopopen: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginRight:230
    },
  },
  sectionDesktopclose: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginRight:60
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  sectionbis: {
    /*display: 'flex',
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },*/
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  cntr:{
    textAlign:"center"
  },
  crt:{
    justifyContent:"center",
    marginLeft:120
  },
  avtrrr:{
    marginLeft:180   
  },
  butt:{
    marginLeft:150
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
     padding: theme.spacing(3),
    /*transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,*/
  },
  contentShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  temdrawerOpen: {
    /* display: 'none',*/
    display: 'inline',
    width: drawerWidth,
    /*transition: theme.transitions.create('width', {
     easing: theme.transitions.easing.sharp,
     duration: theme.transitions.duration.leavingScreen,
   }),
   overflowX: 'hidden',
   width: theme.spacing(7) + 1,*/
   [theme.breakpoints.up('sm')]: {
     width: theme.spacing(9) + 1,
   },
     [theme.breakpoints.up('sm')]: {
       display: 'none',
     
     width: drawerWidth,
     transition: theme.transitions.create('width', {
       easing: theme.transitions.easing.sharp,
       duration: theme.transitions.duration.enteringScreen,
     }),},
   },
   temdrawerClose: {
    
    display:'inline',
    width: drawerWidth,
    /*transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),*/
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },},
  },
  fab: {
    position: 'fixed',
    top: theme.spacing(0),
   // right: theme.spacing(2),
  },
  bishal: {
    height: 1900,
    [theme.breakpoints.up('sm')]:{
      height: 1800
    }
  }
}));
function Apbar(props) {
  const themey = createMuiTheme({
    palette : {
      type: "dark",
    }
  })
  const themex = createMuiTheme({
    palette : {
      type: "light",
    }
  })
  const themedraw = createMuiTheme({
    palette : {
      type: props.dar?"dark":"light",
      primary: red,
      secondary: purple,
      warning:yellow,
      info:indigo
      
    }
  })
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [get,setGet] = useState(false)
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [open, setOpen] = React.useState(true);
  const [item,setItem] = useState([
    {
      name:<Typography>Home</Typography>,
      namex:<Typography color="primary">Home</Typography>,
      icon:<Home />,
      iconn:<Home color="primary" />,
      item:<Butto />,
      bool:false
    },
    {
      name:<Typography>Log In</Typography>,
      namex:<Typography color="primary">Log In</Typography>,
      icon:<VpnKey />,
      iconn:<VpnKey color="primary" />,
      item:<SignIn />,
      bool:true
    },
    {
      
      name:<Typography>Sign Up</Typography>,
      namex:<Typography color="primary">Sign Up</Typography>,
      icon:<LockOpen />,
      iconn:<LockOpen color="primary" />,
      item:<Signup />,
      bool:true
    },
    {
      name:<Typography>Checkout</Typography>,
      namex:<Typography color="primary">Checkout</Typography>,
      icon:<Payment />,
      iconn:<Payment color="primary" />,
      item:<Checkout />,
      bool:true
    },
    {
      name:<Typography>Table</Typography>,
      namex:<Typography color="primary">Table</Typography>,
      icon:<TableChart />,
      iconn:<TableChart color="primary" />,
      item:<Tab />,
      bool:true
    },
  ])
  /*const item = [
    {
      name:"home",
      icon:<Home />,
      iconn:<Home color="primary" />,
      item:<Butto />,
      bool:true
    },
    {
      name:"Log In",
      icon:<VpnKey />,
      iconn:<VpnKey color="primary" />,
      item:<SignIn />,
      bool:true
    },
    {
      name:"Sign Up",
      icon:<LockOpen />,
      iconn:<LockOpen color="primary" />,
      item:<Signup />,
      bool:true
    },
    {
      name:"Checkout",
      icon:<Payment />,
      iconn:<Payment color="primary" />,
      item:<Checkout />,
      bool:true
    },
  ]*/
  const [mainitem,setMainitem] = useState(item[0].item)
  //const [benitem,setBenitem] = useState(<Butot />)
  function itemchange(hum,num) {
    setMainitem(hum)
    item[num].bool=false
    for(var i=0;i<item.length;i++) {
      if(i!==num) {
        item[i].bool=true
      }
    }
  }
  function bisram() {
    setOpen(!open)
    /*if(mainitem===item[0].item||mainitem===<Butot />) 
    {
      !open?setMainitem(<Butot />):setMainitem(<Butto />)
    }*/
      /*if(mainitem===<Butto/>) {
        setMainitem(<Butot/>)
      }
      else if(mainitem===<Butot/>) {
        setMainitem(<Butto/>)
      }*/
  }
  const [temopen, setTemopen] = React.useState(true);
  const theme = useTheme();
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const changeopen = () => {
    setOpen(!open)
    setTemopen(!temopen)
  }
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
     
      {/*<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>*/}
      <div className={classes.menb}>
      <br/>
      <div className={classes.avtrrr}>
      <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={<CameraAlt/>}
      >
        <Avatar>A</Avatar>
        {/*<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />*/}
        
      </Badge>
      </div>
      <br/>
      <Typography className={classes.cntr} >Avi Bishal Sarkar</Typography>
      <br/>
      <div className={classes.cntr}>avikbishalsarkar@gmail.com</div>
      <br/>
      <div className={classes.crt}>
      <Chip button variant="outlined" onClick={()=>setGet(!get)} label="Mannage your account" />
      </div>
      <br/>
      <Divider />
      <br/>
      <Button className={classes.butt} variant="outlined" >Sign Out</Button>
      <br/>
      </div>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {/*<AccountCircle />*/}
          <Avatar>A</Avatar>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <CssBaseline />
      <div className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
          [classes.appBarShiftclose]: !open,
        })}>
      <AppBar position="static" className={classes.fab}
        /* className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}*/>
        <Toolbar>
          
          {/*<IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={()=>setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>*/}
          <div /*className={classes.sectionMobile}*/><IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={()=>bisram()}
          >
            <MenuIcon />
          </IconButton></div>
          <img src="./KITS.png" alt="No image" width="100" height="50"/>
          {/*<Typography className={classes.title} variant="h6" noWrap>
            Kirat IT Solutions
        </Typography>*/}
          {/*<div className={classes.search}>
                    ../KITS.png
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            </div>*/}
            
          <div className={classes.grow} />
          <div className={clsx(classes.appBar, {
          [classes.sectionDesktopopen]: open,
          [classes.sectionDesktopclose]: !open,
        })}>
              <Tooltip title="Mail">
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            </Tooltip>
            <Tooltip title="Theme Changer"><IconButton onClick={props.fun}>{props.dar?<Brightness5 />:<Brightness2 />}</IconButton></Tooltip>
            <Tooltip title="Notification">
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            </Tooltip>
            <Tooltip title = "Account Setting" >
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar>A</Avatar>
            </IconButton>
            </Tooltip>
          </div>
          <div className={classes.sectionMobile}>
          <Tooltip title="Theme Changer"><IconButton onClick={props.fun}>{props.dar?<Brightness5 />:<Brightness2 />}</IconButton></Tooltip>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        /*className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}*/
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        variant="permanent"
        anchor="left"
        open={open}
        onClose={()=>setOpen(!open)}
      >
        {/*<div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose()=>setOpen(!open)}  >
            {theme.direction === 'ltr' open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
      </div>*/}
        <Divider />
        {/*<List>
            <ListItem button>
                <ListItemIcon><Home /></ListItemIcon>
                <ListItemText>Home</ListItemText>
            </ListItem>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </List>*/}
          {/*<List>
            {item.map(itm=>
            <React.Fragment>
            {!props.dar?<React.Fragment>
            {props.dar||itm.bool ?
            <ThemeProvider theme={themex}><Paper elevation={0}>
            <ListItem button onClick={()=>itemchange(itm.item,item.indexOf(itm))}>
              <ListItemIcon >{itm.icon}</ListItemIcon>
            <ListItemText>{itm.name}</ListItemText>
            </ListItem>
              </Paper></ThemeProvider>:<ThemeProvider theme={themey}><Paper elevation={0}>
            <ListItem button onClick={()=>itemchange(itm.item,item.indexOf(itm))}>
              <ListItemIcon >{itm.icon}</ListItemIcon>
            <ListItemText>{itm.name}</ListItemText>
            </ListItem>
              </Paper></ThemeProvider>
              }
            </React.Fragment>:<React.Fragment>
            {props.dar&&itm.bool ?
            <ThemeProvider theme={themey}><Paper elevation={0}>
            <ListItem button onClick={()=>itemchange(itm.item,item.indexOf(itm))}>
              <ListItemIcon >{itm.icon}</ListItemIcon>
            <ListItemText>{itm.name}</ListItemText>
            </ListItem>
              </Paper></ThemeProvider>:<ThemeProvider theme={themex}><Paper elevation={0}>
            <ListItem button onClick={()=>itemchange(itm.item,item.indexOf(itm))}>
              <ListItemIcon >{itm.icon}</ListItemIcon>
            <ListItemText>{itm.name}</ListItemText>
            </ListItem>
              </Paper></ThemeProvider>
              }
            </React.Fragment>}
            </React.Fragment>
              )}
            </List>*/}
          <List>
            {item.map(itm=><React.Fragment>
              <ThemeProvider theme={themedraw}>
              {itm.bool?<ListItem button onClick={()=>itemchange(itm.item,item.indexOf(itm))} >
              <ListItemIcon>{itm.icon}</ListItemIcon>
              <ListItemText>{itm.name}</ListItemText>
              </ListItem>:
              <ListItem button onClick={()=>itemchange(itm.item,item.indexOf(itm))} >
              <ListItemIcon>{itm.iconn}</ListItemIcon>
              <ListItemText>{itm.namex}</ListItemText>
              </ListItem>}
              </ThemeProvider>
            </React.Fragment>)}
          </List>
      </Drawer>
      <Drawer
        /*className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}*/
        className={clsx(classes.drawer, {
          [classes.temdrawerOpen]: open,
          [classes.temdrawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.temdrawerOpen]: open,
            [classes.temdrawerClose]: !open,
          }),
        }}
        variant="temporary "
        anchor="left"
        open={open}
        onClose={()=>setOpen(!open)}
      >
        {/*<div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose()=>setOpen(!open)}  >
            {theme.direction === 'ltr' open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
      </div>*/}
        <Divider />
        {/*<List>
        <ListItem button>
                <ListItemIcon><Home /></ListItemIcon>
                <ListItemText>Home</ListItemText>
            </ListItem>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </List>*/}
          {/*<List>
            {item.map(itm=>
            <ListItem button  onClick={()=>itemchange(itm.item,item.indexOf(itm))}>
              <ListItemIcon color="primary">{itm.icon}</ListItemIcon>
            <ListItemText color="primary">{itm.name}</ListItemText>
            </ListItem>
              )}
            </List>*/}
            <List>
            {item.map(itm=><React.Fragment>
              <ThemeProvider theme={themedraw}>
              {itm.bool?<ListItem button onClick={()=>itemchange(itm.item,item.indexOf(itm))} >
              <ListItemIcon>{itm.icon}</ListItemIcon>
              <ListItemText>{itm.name}</ListItemText>
              </ListItem>:
              <ListItem button onClick={()=>itemchange(itm.item,item.indexOf(itm))} >
              <ListItemIcon>{itm.iconn}</ListItemIcon>
              <ListItemText>{itm.namex}</ListItemText>
              </ListItem>}
              </ThemeProvider>
            </React.Fragment>)}
          </List>
      </Drawer>
      {renderMobileMenu}
      {renderMenu}
      <main
        /*className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}*/className={classes.content}
      >
       <div className={classes.drawerHeader} />
        {/*<Butto />*/}
        <div /*className={classes.bishal}*/>{mainitem}</div>
      </main>
      </div>
    </div>
  );
}
export default Apbar