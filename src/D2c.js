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
import {Tooltip,Drawer,Divider,Chip,Link,List,Button,ListItem,ListItemIcon,CssBaseline,ListItemText,Avatar,Backdrop, Paper } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Brightness5,Brightness2,Home,CameraAlt,ExpandMore,ExpandLess, NoEncryption,Payment,LockOpen,VpnKey,TableChart,Person,Settings,PowerSettingsNew, ArrowBack} from '@material-ui/icons'
import Butto2 from './Butto2'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
//import Butot from './Butot'
import SignIn2 from './Login2'
import Signup2 from './Signup2'
import Checkout from './Checkout'
import C2d from './C2d'
//import Tablee from './Tablee'
import Tab from './Tab'
//import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles'
//import { dark } from '@material-ui/core/styles/createPalette';
//import {green,purple,yellow,indigo,red} from '@material-ui/core/colors'
import {green,purple,yellow,blue,indigo,red,grey} from '@material-ui/core/colors'
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
function D2c(props) {
  const[nextpage,setNextpage] = useState(true)
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
      type: props.dar?"dark":"light",
      primary: red,
      secondary: grey,
      warning:yellow,
      info:indigo
      
    }
  })
  const[profilele,setProfilele] = useState(false)
  const drawtheme = createMuiTheme({
    palette : {
      type: props.dar?"dark":"light",
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
  const[usena,setUsena] = useState("Avik Bishal Sarkar")
  const[usemail,setUsemail]= useState("avikbishalsarkar@gmail.com")
  const[usepassward,setUsepassward] = useState("bishal3400")
  const[colthem,setColthem] = useState(false)
  function ossyphy(name,email) {
    /*setFileapp(!fileapp)
    setMainitem2(<Butto />)
    item[0].bool=false
    item[2].bool=true*/
    //setFileapp(!fileapp)
    setUsena(name)
    setUsemail(email)
     /* setMainitem2(<Butto />)
      item2[0].boll=false
      for(var i=0;i<item2.length;i++) {
        if(i!==0) {
          item2[i].bool=true
        }
      }*/
  }
  const [item,setItem] = useState([
    {
      name:<Typography color="secondary">Home</Typography>,
      namex:<Typography color="primary">Home</Typography>,
      icon:<Home color="secondary"/>,
      iconn:<Home color="primary" />,
      item:<Butto2 />,
      path:"/",
      bool:false
    },
    {
      name:<Typography color="secondary">Log In</Typography>,
      namex:<Typography color="primary">Log In</Typography>,
      icon:<VpnKey color="secondary"/>,
      iconn:<VpnKey color="primary" />,
      item:<SignIn2 funct={ossyphy} later={setNextpage} />,
      path:"/Login",
      bool:true
    },
    {
      
      name:<Typography color="secondary">Sign Up</Typography>,
      namex:<Typography color="primary">Sign Up</Typography>,
      icon:<LockOpen color="secondary"/>,
      iconn:<LockOpen color="primary" />,
      item:<Signup2 funct={ossyphy} later={setNextpage} />,
      path:"/Signup",
      bool:true
    },
    {
      name:<Typography color="secondary">Checkout</Typography>,
      namex:<Typography color="primary">Checkout</Typography>,
      icon:<Payment color="secondary"/>,
      iconn:<Payment color="primary" />,
      item:<Checkout />,
      path:"/Checkout",
      bool:true
    },
    {
      name:<Typography color="secondary">Table</Typography>,
      namex:<Typography color="primary">Table</Typography>,
      icon:<TableChart color="secondary"/>,
      iconn:<TableChart color="primary" />,
      item:<Tab />,
      path:"/Table",
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
      item:<Butto2 />,
      bool:false
    },
    {
      name:<Typography>Setting</Typography>,
      namex:<Typography color="primary">Setting</Typography>,
      icon:<Settings />,
      iconn:<Settings color="primary" />,
      item:<Checkout />,
      bool:true
    },
    {
      name:<Typography>List</Typography>,
      namex:<Typography color="primary">List</Typography>,
      icon:<NoEncryption />,
      iconn:<NoEncryption color="primary" />,
      item:<Tab />,
      bool:true
    },
  ])
  const [mainitem2,setMainitem2] = useState(<SignIn2 funct={ossyphy} />)
  const[heading,setHeading] = useState("Log IN")
  function itemchangerx(hum,hednam) {
    setMainitem2(hum)
    setFileapp(!fileapp)
    setHeading(hednam);
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
      {!fileapp&&
        <MenuItem onClick={()=>setFapp()}>
          <IconButton><PowerSettingsNew /></IconButton>
          <p>Log Out</p>
        </MenuItem>
      }
    </Menu>
  );
  return (
    <div >
      {fileapp && 
    <div className={classes.grow}>
      <div className={clsx(classes.appBar, {
      [classes.appBarShift]: open,
      [classes.appBarShiftclose]: !open,
    })}>
      <CssBaseline />
      <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Butto2} />
      <Route path="/Login" exact component={SignIn2 } />
      <Route path="/Signup" exact component={Signup2} />
      <Route path="/Checkout" exact component={Checkout} />
      <Route path="/Table" exact component={Tab} />
      {/*<Route path="/Account/Item1" exact component={Butto2} />
      <Route path="/Account/Item2" exact component={Checkout} />
      <Route path="/Account/Item3" exact component={Tab} />*/}
      </Switch>
       </BrowserRouter>
      <div >
      <AppBar position="static" className={classes.fab}
        /* className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}*/>
        <Toolbar>
          
          <div /*className={classes.sectionMobile}*/><IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={()=>bisram()}
          >
            <MenuIcon />
          </IconButton></div>
          <img src="./ml.png" alt="No image" width="100" height="50"/>
          <Button variant = 'contained' color='secondary' onClick={()=>itemchangerx(<SignIn2 funct={ossyphy}  later={setNextpage} lat={nextpage}/>,"Log In")}>Log In</Button>
          <Button variant = 'contained' color='secondary' onClick={()=>itemchangerx(<Signup2 funct={ossyphy}  later={setNextpage} lat={nextpage} />,"Sign UP")} >Sign Up</Button>
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
      {<React.Fragment><Drawer
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
        <Divider />
          <List>
            {item.map(itm=><React.Fragment>
              <ThemeProvider theme={themedraw}>
              {itm.bool?<ListItem button onClick={()=>itemchange(itm.item,item.indexOf(itm))} >
              <ListItemIcon><Link href={itm.path}>{itm.icon}</Link></ListItemIcon>
              <ListItemText><Link href={itm.path}>{itm.name}</Link></ListItemText>
              </ListItem>:
              <ListItem button onClick={()=>itemchange(itm.item,item.indexOf(itm))} >
              <ListItemIcon><Link href={itm.path}>{itm.iconn}</Link></ListItemIcon>
              <ListItemText><Link href={itm.path}>{itm.namex}</Link></ListItemText>
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
        <Divider />
        
            <List>
            {item.map(itm=><React.Fragment>
              <ThemeProvider theme={themedraw}>
              {itm.bool?<ListItem button onClick={()=>itemchangex(itm.item,item.indexOf(itm))} >
              <ListItemIcon>{itm.icon}</ListItemIcon>
              <ListItemText><Link href={itm.path}>{itm.name}</Link></ListItemText>
              </ListItem>:
              <ListItem button onClick={()=>itemchangex(itm.item,item.indexOf(itm))} >
              <ListItemIcon>{itm.iconn}</ListItemIcon>
              <ListItemText><Link href={itm.path}>{itm.namex}</Link></ListItemText>
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
        {/*<div className={classes.bishal}>{mainitem}</div>*/}
        <Backdrop className={classes.backdrop} open={profilele} >
              <div className={classes.bodmen} ><Tabmen funct={setProfilele} funk={profilele} /></div>
      </Backdrop>
      </main></React.Fragment>}
      </div>
      </div>
    </div>}
    {!fileapp&&
    <React.Fragment>
      {nextpage?<React.Fragment><AppBar position='static'>
      <Toolbar>
        <IconButton onClick={()=>setFileapp(!fileapp)}><ArrowBack /></IconButton>
        <h1>{heading}</h1>
        </Toolbar>
      </AppBar> {mainitem2}</React.Fragment>:<React.Fragment><C2d func={setNextpage} ans={nextpage} name={usena} mail={usemail} setdar={props.fun} darr={props.dar}/></React.Fragment>}
    </React.Fragment>
      }
     {/*!nextpage&&<C2d />*/}
    </div>
  );
}
export default D2c