import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import {Toolbar,Grid,TextareaAutosize,IconButton,TextField,Menu,MenuList,MenuItem, CssBaseline, Divider,Card,CardMedia,CardContent} from '@material-ui/core'
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {PhotoLibrary,Search,Close} from '@material-ui/icons'
/*import Chatt from './Chat'
import Status from './Status'
import Calll from './Call'
import P1 from './P1'
import P2 from './P2'
import P21 from './P21'*/
import Tabcard  from './Tabcard'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    position:'relative',
    minHeight:550,
    //height:600,
    //scrollBehavior : true
  },
  grow: {
    flexGrow: 1,
  },
  form: {
    position: 'fixed',
    top: theme.spacing(0),
  },
  avu : {
    height:theme.spacing(12),
    width:theme.spacing(12),
   // marginLeft:80
   color:"grey"
  },
  avula : {
    //height:theme.spacing(30),
    //width:theme.spacing(6),
   // marginLeft:80
   color:"grey"
  },
  divider : {
    width:"100%",
    position: 'absolute',
    bottom: theme.spacing(10),
    //position: 'relative',
  },
  buto1 : {
    position: 'absolute',
    left: theme.spacing(1),
    top: theme.spacing(3),
    height:theme.spacing(4),
    //bottom: theme.spacing(1),
    backgroundColor:"#6495ED",
    color:"white",
    [theme.breakpoints.up('sm')]: {
    position: 'absolute',
    left: theme.spacing(10),
    top: theme.spacing(3),
    height:theme.spacing(4),
    //bottom: theme.spacing(1),
    backgroundColor:"#6495ED",
    color:"white"
    }
  },
  buto2 : {
    position: 'absolute',
    left: theme.spacing(18),
    top: theme.spacing(3),
    height:theme.spacing(4),
    width:theme.spacing(9),
    [theme.breakpoints.up('sm')]: {
    position: 'absolute',
    left: theme.spacing(31),
    top: theme.spacing(3),
    height:theme.spacing(4),
    width:theme.spacing(12),
    //bottom: theme.spacing(1),
    //backgroundColor:"#6495ED",
    //color:"white"
    }
  },
  typo : {
    position: 'absolute',
    left: theme.spacing(28),
    top: theme.spacing(0),
    //height:theme.spacing(2),
    //bottom: theme.spacing(1),
    //backgroundColor:"#6495ED",
    color:"grey",
    [theme.breakpoints.up('sm')]: {
    position: 'absolute',
    left: theme.spacing(48),
    top: theme.spacing(3),
    //height:theme.spacing(2),
    //bottom: theme.spacing(1),
    //backgroundColor:"#6495ED",
    color:"grey"
    }
  },
  appbar : {
    backgroundColor:"white"
  },
  lnk : {
    position: 'absolute',
    left: theme.spacing(40),
    top: theme.spacing(6),
    //height:theme.spacing(2),
    //bottom: theme.spacing(1),
    //backgroundColor:"#6495ED",
    color:"blue",
    [theme.breakpoints.up('sm')]: {
    position: 'absolute',
    left: theme.spacing(106),
    top: theme.spacing(3.2),
    //height:theme.spacing(2),
    //bottom: theme.spacing(1),
    //backgroundColor:"#6495ED",
    color:"blue"
    }
  },
  wrtng : {
    color:"black"
  },
  serchinu : {
    position: 'absolute',
    left: theme.spacing(10),
    height:theme.spacing(3),
    width:theme.spacing(30)
  },
  serbutu : {
    position: 'absolute',
    left: theme.spacing(45),
    height:theme.spacing(3.7),
    width:theme.spacing(7)
  },
  crad : {
    maxHeight: 250,
    //minWidth: 200,
  },
  bishal : {
    minHeight : 400,
    [theme.breakpoints.up('sm')]: {
      minHeight : 400,
    }
  }
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const[search,setSearch] = useState(false)
  const[word,setWord] = useState("")
  const[bar,setBar] = useState(false)
  /*const setbar = () => {
    bar = true
  }*/
  const[sear,setSear] = React.useState("")
  const[sot,setSot] = React.useState("")
  const tos = () => {
    setSot(sear)
  }
  const[crdr,setCrdr] = React.useState([
    {
      image:"./businessman.jpg",
      heading:"Group Photo",
      subhea:"2 Photos",
    },
    {
      image:"./hmcptry.jpg",
      heading:"Expectro Photo",
      subhea:"80 Photos",
    },
    {
      image:"./sinar3.jpg",
      heading:"Sinaries Photo",
      subhea:"5 Photos",
    },
    /*{
      image:"./SSR.jpg",
      heading:"Heroes Photo",
      subhea:"1 Photos",
    },
    {
      image:"./hmcptry.jpg",
      heading:"Expectro Photo",
      subhea:"80 Photos",
    },*/
  ])
  const[closeop,setCloseop] = React.useState(false)
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
          <Toolbar>
              <h2 className={classes.wrtng}>Select profile photo</h2>
              <div className={classes.grow} />
              <IconButton onClick={()=>props.funct(!props.funk)}><Close className={classes.wrtng}/></IconButton>
          </Toolbar>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab className={classes.wrtng} label="Upload photos" {...a11yProps(0)} />
          {/*<Tab className={classes.wrtng} label="Your photos" {...a11yProps(1)} />*/}
          
          {/*<Tab label="Calls" {...a11yProps(2)} />*/}
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div>
        <PhotoLibrary className={classes.avu} />
        <h1 className={classes.avula}>Drag a profile photo here</h1>
        <Typography className={classes.avula} >- or -</Typography>
        {/*<input type='file' label="Select a photo from your computer"></input>*/}
        <br/>
        <button>Select a photo from your computer</button>
        </div>
      </TabPanel>
      
      {/*<TabPanel value={value} index={1}>
        <div className={classes.bishal}>
        <input className={classes.serchinu} onChange={(e)=>setSear(e.target.value)}></input>
        <button className={classes.serbutu} onClick={tos}><Search /></button>
        <br />
        <br />
        <br />
        <Grid container spacing={5} >
        {crdr.map(cr=><React.Fragment>{cr.heading.toLowerCase().includes(sot.toLowerCase()) &&
        <Grid item sm = {3} xs = {4}>
        <Card className={classes.crad}>
          <CardMedia>
           <img src={cr.image} height="150" width="100%"/>
           <h4>{cr.heading}</h4>
          <span>{cr.subhea}</span>
          </CardMedia>
          <CardContent>
          <h4>{cr.heading}</h4>
          <span>{cr.subhea}</span>
          </CardContent>
        </Card>
        </Grid>}
        </React.Fragment>)}
        </Grid>
        </div>
        </TabPanel>*/}
     
      {/*<TabPanel value={value} index={2}>
        How are you ?
  </TabPanel>*/}
      <div className={classes.divider}>
          <Divider />
          <button className={classes.buto1} disabled >Set as profile photo</button>
          <button className={classes.buto2} >Cancel</button>
          {/*<Typography className={classes.typo} >Your profile photo is visile to everyone across Google products.</Typography>
          <a className={classes.lnk} href="https://support.google.com/accounts/answer/6304920">Learn more</a>*/}
        </div>
    </div>
  );
}