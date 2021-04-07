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
import {Tooltip,Drawer,Divider,Chip,List,Button,ListItem,ListItemIcon,CssBaseline,ListItemText,Avatar,Backdrop,Link, Paper } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Brightness5,Brightness2,Home,CameraAlt,ExpandMore,ExpandLess, NoEncryption,Payment,LockOpen,VpnKey,TableChart,Person,Settings,PowerSettingsNew} from '@material-ui/icons'
import Butto from './Butto'
//import Butot from './Butot'
import SignIn from './Login'
import Signup from './Signup'
import Checkout from './Checkout'
//import Tablee from './Tablee'
import Tab from './Tab'
//import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles'
//import { dark } from '@material-ui/core/styles/createPalette';
//import {green,purple,yellow,indigo,red} from '@material-ui/core/colors'
import {green,purple,yellow,blue,indigo,red} from '@material-ui/core/colors'
import Tabmen  from './Tabmen'

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
    width: 400,
    height: 340,
    position:'relative',
  },
  appBarShift: {
    /*width: `calc(100% - ${50}px)`,
    marginLeft: 50,*/
    [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    //marginRight : 9999,
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
    marginLeft:170   
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
  },
  drawerrrr:{
    width : 150,
    marginLeft:65,
  },
  avu : {
    height:theme.spacing(10),
    width:theme.spacing(10),
    marginLeft:80
  },
  avucol : {
    marginLeft:15,
  },
  themebabu : {
    marginLeft: 40,
  },
  boroav : {
    height:theme.spacing(8),
    width:theme.spacing(8),
    //position:'absolute',
    //left:theme.spacing(2)
    //marginRight:100,
  },
  pattt : {
    //minHeight:1000,
    position : 'absolute',
    top : theme.spacing(100)
  },
  baltatu : {
    position: 'absolute',
    left : theme.spacing(20),
  },
  bodmen : {
    
    position:'fixed',
    top:theme.spacing(10),
    //bottom:theme.spacing(20),
    width:"100%",
   // maxHeight : 400,
    //scrollBehavior : true,
    [theme.breakpoints.up('sm')]: {
    position:'fixed',
    top:theme.spacing(10),
    //bottom:theme.spacing(20),
    width:1000,
    //maxHeight : 100,
    //height : 400,
    //scrollBehavior : true
    }
    //height: 600,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
function C2d(props) {
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
  const[boxei,setBoxei] = useState(false)
  const[boxdraw,setBoxdraw] = useState(false)
  const[drawbox,setDrawbox] = useState(false)
  const redd = () => {setBoxei(true) 
    setBoxdraw(true)}
  const yelloww = () => {setBoxei(true) 
    setBoxdraw(false)}
  const indigoo = () => {setBoxei(false) 
    setDrawbox(true)}
  const purplee = () => {setBoxei(false) 
    setDrawbox(false)}
    const reddx = () => {setBoxei(true) 
      setBoxdraw(true)
      setOpen(!open)
    setColthem(!colthem)}
    const yellowwx = () => {setBoxei(true) 
      setBoxdraw(false)
      setOpen(!open)
      setColthem(!colthem)}
    const indigoox = () => {setBoxei(false) 
      setDrawbox(true)
      setOpen(!open)
      setColthem(!colthem)}
    const purpleex = () => {setBoxei(false) 
      setDrawbox(false)
      setOpen(!open)
      setColthem(!colthem)}
  const themedraw = createMuiTheme({
    palette : {
      type: props.darr?"dark":"light",
      primary: red,
      secondary: purple,
      warning:yellow,
      info:indigo
      
    }
  })
  const[profilele,setProfilele] = useState(false)
  const drawtheme = createMuiTheme({
    palette : {
      type: props.darr?"dark":"light",
      primary: boxei?boxdraw?red:yellow:drawbox?indigo:purple,
      secondary: boxei?boxdraw?blue:red:drawbox?green:yellow,
      warning:yellow,
      info:indigo
      
    }
  })
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [get,setGet] = useState(false)
  const isMenuOpen = Boolean(anchorEl);
  const [ismenuopen,setIsmenuopen] = useState(false)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [open, setOpen] = React.useState(true);
  const[usena,setUsena] = useState(props.name)
  const[usemail,setUsemail]= useState(props.mail)
  const[usepassward,setUsepassward] = useState("bishal3400")
  const[colthem,setColthem] = useState(false)
  function ossyphy(name,email) {
    setFileapp(!fileapp)
    setUsena(name)
    setUsemail(email)
  }
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
      item:<SignIn funct={ossyphy} />,
      bool:true
    },
    {
      
      name:<Typography>Sign Up</Typography>,
      namex:<Typography color="primary">Sign Up</Typography>,
      icon:<LockOpen />,
      iconn:<LockOpen color="primary" />,
      item:<Signup funct={ossyphy} />,
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
  const[hritk,setHritk] = useState(false)
  const [item2,setItem2] = useState([
    {
      name:<Typography>Profile</Typography>,
      namex:<Typography color="primary">Profile</Typography>,
      icon:<Person />,
      iconn:<Person color="primary" />,
      item:<Butto />,
      path:"/Account/Item1",
      bool:false
    },
    {
      name:<Typography>Setting</Typography>,
      namex:<Typography color="primary">Setting</Typography>,
      icon:<Settings />,
      iconn:<Settings color="primary" />,
      item:<Checkout />,
      path:"/Account/Item2",
      bool:true
    },
    {
      
      name:<Typography>List</Typography>,
      namex:<Typography color="primary">List</Typography>,
      icon:<NoEncryption />,
      iconn:<NoEncryption color="primary" />,
      item:<Tab />,
      path:"/Account/Item3",
      bool:true
    },
  ])
  const [mainitem2,setMainitem2] = useState(item2[0].item)
  //const [benitem,setBenitem] = useState(<Butot />)
  function itemchanger(hum,num) {
    setMainitem2(hum)
    item2[num].bool=false
    for(var i=0;i<item2.length;i++) {
      if(i!==num) {
        item2[i].bool=true
      }
    }
  }
  function itemchangerx(hum,num) {
    setMainitem2(hum)
    item2[num].bool=false
    for(var i=0;i<item2.length;i++) {
      if(i!==num) {
        item2[i].bool=true
      }
    }
    setOpen(!open)
  }
  
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
  const [popup,setPopup] = useState(<Tabmen funct={setProfilele} funk={profilele} />)
  function itemchangex(hum,num) {
    setMainitem(hum)
    item[num].bool=false
    for(var i=0;i<item.length;i++) {
      if(i!==num) {
        item[i].bool=true
      }
    }
    setOpen(!open)
  }
  function bisram() {
    setOpen(!open)
    setColthem(false)
    /*if(mainitem===<Butto open={false} />) {
    open?setMainitem(<Butto open={true} />):setMainitem(<Butto open={false} />)
    }*/
    //item[0].item = <Butto open={false} />
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
    setIsmenuopen(true)
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
  function setFapp() {
    setFileapp(!fileapp) 
    handleMobileMenuClose()
  }
  const menuId = 'primary-search-account-menu';
  const futichar = () => {
    setProfilele(true)
   setIsmenuopen(false)
   setMobileMoreAnchorEl(null)
  }
  const renderMenu = (
    <div className={classes.pattt}>
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={ismenuopen}
      onClose={()=>setIsmenuopen(false)}
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
        badgeContent={<IconButton  onClick={futichar} ><CameraAlt/></IconButton>}
      >
        <Avatar className={classes.boroav} >{usena[0].toUpperCase()}</Avatar>
        {/*<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />*/}
        
      </Badge>
     
      </div>
      <br/>
      <Typography className={classes.cntr} >{usena}</Typography>
      <br/>
      <div className={classes.cntr}>{usemail}</div>
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
    </div>
  );
  const[fileapp,setFileapp] = useState(true)
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
        <MenuItem onClick={() => props.func(!props.ans)}>
             <PowerSettingsNew />
          <p>Log Out</p>
        </MenuItem>
    </Menu>
  );
  return (
    <div >
     <div className={classes.grow}>
      <CssBaseline />
      <div className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
          [classes.appBarShiftclose]: !open,
        })}>
    <ThemeProvider theme={drawtheme} >
      <AppBar color="primary" position="static" className={classes.fab}>
        <Toolbar>
        <div ><IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={()=>bisram()}
          >
            <MenuIcon />
          </IconButton></div>
          <img src="./ml.png" alt="No image" width="100" height="50"/>
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
            <Tooltip title="Theme Changer"><IconButton onClick={props.setdar}>{props.darr?<Brightness5 />:<Brightness2 />}</IconButton></Tooltip>
            <Tooltip title="Log Out"><IconButton onClick={() => props.func(!props.ans)}><PowerSettingsNew /></IconButton></Tooltip>
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
          <Tooltip title="Theme Changer"><IconButton onClick={props.setdar}>{props.darr?<Brightness5 />:<Brightness2 />}</IconButton></Tooltip>
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
      </ThemeProvider>
      <Drawer
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
      > {open?<React.Fragment>
          <br/>
        <Avatar className={classes.avu} >B S</Avatar>
        <h3>{usena}</h3>
          </React.Fragment>:<React.Fragment><br/><Avatar className={classes.avucol}>B S</Avatar></React.Fragment>}
        {open&&<Divider />}
          <List>
            {item2.map(itm=><React.Fragment>
              <ThemeProvider theme={themedraw}>
              {itm.bool?<ListItem button onClick={()=>itemchanger(itm.item,item2.indexOf(itm))} >
              <ListItemIcon>{itm.icon}</ListItemIcon>
              <ListItemText>{itm.name}</ListItemText>
              </ListItem>:
              <ListItem button onClick={()=>itemchanger(itm.item,item2.indexOf(itm))} >
              <ListItemIcon>{itm.iconn}</ListItemIcon>
              <ListItemText>{itm.namex}</ListItemText>
              </ListItem>}
              </ThemeProvider>
            </React.Fragment>)}
          </List>
          <Divider />
          {open&&<React.Fragment>
            <List>
            <ListItem button onClick={()=>setColthem(!colthem)}>
              <ListItemIcon>{colthem ? <ExpandLess />:<ExpandMore />}</ListItemIcon>
              <ListItemText>Themes</ListItemText>
            </ListItem>
          </List>
          {colthem&&
              <React.Fragment>
              <List>
              <ListItem className={classes.themebabu} button onClick={redd}>
                  <ListItemText>   Red</ListItemText>
              </ListItem>
          </List>
          <List>
              <ListItem className={classes.themebabu} button onClick={yelloww}>
                  <ListItemText>Yellow</ListItemText>
              </ListItem>
          </List>
          <List>
              <ListItem className={classes.themebabu} button onClick={indigoo}>
                  <ListItemText>Indiigo</ListItemText>
              </ListItem>
          </List>
          <List>
              <ListItem className={classes.themebabu} button onClick={purplee}>
                  <ListItemText>Purple</ListItemText>
              </ListItem>
          </List>
          </React.Fragment>
              }
            </React.Fragment>}
          
      </Drawer>
      <Drawer
        className={clsx(classes.drawer, {
          [classes.temdrawerOpen]: !open,
          [classes.temdrawerClose]: open,
        })}
        classes={{
          paper: clsx({
            [classes.temdrawerOpen]: !open,
            [classes.temdrawerClose]: open,
          }),
        }}
        variant="temporary "
        anchor="left"
        open={open}
        onClose={()=>setOpen(!open)}
      >
        {open&&<React.Fragment>
          <br/>
        <Avatar className={classes.avu} >B S</Avatar>
        <h3 className={classes.drawerrrr}>{usena}</h3>
          </React.Fragment>}
        <Divider />
            <List>
            {item2.map(itm=><React.Fragment>
              <ThemeProvider theme={themedraw}>
              {itm.bool?<ListItem button onClick={()=>itemchangerx(itm.item,item2.indexOf(itm))} >
              <ListItemIcon>{itm.icon}</ListItemIcon>
              <ListItemText>{itm.name}</ListItemText>
              </ListItem>:
              <ListItem button onClick={()=>itemchangerx(itm.item,item2.indexOf(itm))} >
              <ListItemIcon>{itm.iconn}</ListItemIcon>
              <ListItemText>{itm.namex}</ListItemText>
              </ListItem>}
              </ThemeProvider>
            </React.Fragment>)}
          </List>
          <Divider />
          <List>
            <ListItem button onClick={()=>setColthem(!colthem)}>
            <ListItemIcon>{colthem ? <ExpandLess />:<ExpandMore />}</ListItemIcon>
              <ListItemText>Themes</ListItemText>
            </ListItem>
          </List>
          {colthem&&
              <React.Fragment>
              <List>
              <ListItem className={classes.themebabu} button onClick={reddx}>
                  <ListItemText>   Red</ListItemText>
              </ListItem>
          </List>
          <List>
              <ListItem className={classes.themebabu} button onClick={yellowwx}>
                  <ListItemText>Yellow</ListItemText>
              </ListItem>
          </List>
          <List>
              <ListItem className={classes.themebabu} button onClick={indigoox}>
                  <ListItemText>Indiigo</ListItemText>
              </ListItem>
          </List>
          <List>
              <ListItem className={classes.themebabu} button onClick={purpleex}>
                  <ListItemText>Purple</ListItemText>
              </ListItem>
          </List>
          </React.Fragment>
              }
      </Drawer>
      {renderMobileMenu}
      {renderMenu}
      <main
       className={classes.content}
      >
       <div className={classes.drawerHeader} />
        
        <div >{mainitem2}
             <Backdrop className={classes.backdrop} open={profilele} >
              <div className={classes.bodmen} ><Tabmen funct={setProfilele} funk={profilele} /></div>
           </Backdrop>
        </div>
      </main>
      </div>
         </div>
    </div>
  );
}
export default C2d