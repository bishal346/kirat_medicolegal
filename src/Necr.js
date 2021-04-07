import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, Grid,Drawer,List,ListItem,ListItemIcon,ListItemText, Divider} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import {TimeToLeave,Collections,Book} from '@material-ui/icons'

const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 345,
    minHeight: 400,
    //left : theme.spacing(1000)
    marginLeft : theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      marginLeft : theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        marginLeft : theme.spacing(1),
      }
    }
  },
  rootrt: {
    maxWidth: 345,
    minHeight: 400,
    //left : theme.spacing(1000)
    marginLeft : theme.spacing(9),
    [theme.breakpoints.up(900)]: {
      marginLeft : theme.spacing(9),
      [theme.breakpoints.up(1400)]: {
        marginLeft : theme.spacing(3),
        [theme.breakpoints.up('lg')]: {
            marginLeft : theme.spacing(2),
          }
      }
    }
  },
  media :{
    position: 'relative',
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    position: 'absolute',
    top:theme.spacing(7),
    left:theme.spacing(17)
    /*top: theme.spacing(300),
    right: theme.spacing(150),*/
  },
  largeopen: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    position: 'absolute',
    top:theme.spacing(7),
    left:theme.spacing(1)
    /*top: theme.spacing(300),
    right: theme.spacing(150),*/
  },
  bishal: {
    height: 1900,
    [theme.breakpoints.up('sm')]:{
      height: 900
    }
  },
  avu : {
    height:theme.spacing(10),
    width:theme.spacing(10),
    marginLeft:30
  },
  drawerrrr:{
    marginLeft:18,
  }
}));

function Necr({changename}) {
  const classes = useStyles();
  const[card,setCard] = useState([
    {
      image:"./sinar.jpg",
      avtr:"Q",
      heading:"My Queries",
      text:"Raise and clear your queries with out expert team",
      new:"16",
      inprogress:"3",
      closed:"4",
      butone:"Raise Query",
      buttwo:"View Queries"
    },
    {
      image:"./sinar2.jpg",
      avtr:"D",
      heading:"My Drafts",
      text:"Our team of highly qualified proffesions are trained to draft your documents effectively",
      new:"4",
      inprogress:"1",
      closed:"2",
      butone:"Create Draft",
      buttwo:"View Drafts"
    },
    {
      image:"./sinar3.jpg",
      avtr:"C",
      heading:"My Cases",
      text:"File a case in court with our highly qualified legal team and receive professional legal solutions",
      new:"3",
      inprogress:"6",
      closed:"1",
      butone:"Create Case",
      buttwo:"View Cases"
    },
    /*{
      avtr:Q,
      heading:"My Queries",
      text:"Raise and clear your queries with out expert team",
      new:"16",
      inprogress:"3",
      closed:"4",
      butone:"Raise Query",
      buttwo:"View Queries"
    },*/
  ])
  const[namm,setNamm] = useState("")
  return (
    <div className={classes.bishal} >
    {/*<Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image="./KITS.png"
          title="Contemplative Reptile"
          className={classes.media}
        ><img src="./sinar.jpg" alt="No image" width="400" height="100"/>
        <Avatar className={classes.large}>B</Avatar>
        </CardMedia>
        <br/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            My Queries
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Raise and clear your queries with out expert team
          </Typography>
          <Grid container direction="row" spacing={2}>
              <Grid item container xs={1} ></Grid>
          <Grid item container xs={3}>
              <div>
              <h3>16</h3>
              <p>New</p>
              </div>
          </Grid>
          <Grid item container xs={4}>
              <div>
              <h3>3</h3>
              <p>In Progress</p>
              </div>
          </Grid>
          <Grid item container xs={4}>
          <div>
              <h3>4</h3>
              <p>Closed</p>
              </div>
          </Grid>
          </Grid>
        </CardContent>
        
      <CardActions>
        <Button variant="outlined" size="small" color="primary">
          Raise Query
        </Button>
        <Button variant="outlined" size="small" color="primary">
        View Queries
        </Button>
      </CardActions>
  </Card>*/}
  {/*<Drawer
  variant="temporary "
  anchor="left"
  open
  //className={classes.avu}
  //onClose={()=>setOpen(!open)}
  >
    <br/>
    <Avatar  className={classes.avu} >B S</Avatar>
    <h3 className={classes.drawerrrr}>Bishal Sarkar</h3>
    <Divider />
    <List>
      <ListItem>
        <ListItemIcon><TimeToLeave /></ListItemIcon>
        <ListItemText>Profile</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon><Collections /></ListItemIcon>
        <ListItemText>Settings</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon><Book /></ListItemIcon>
        <ListItemText>Log Out</ListItemText>
      </ListItem>
    </List>
  </Drawer>*/}
    <Grid container direction="row" spacing={2}>
      {card.map(crd=>
        <Grid item  lg={3}>
          <Card className={classes.rootrt}>
          <CardMedia
            /*component="img"
            alt="Contemplative Reptile"
            height="100"
            image="./KITS.png"*/
           title="Contemplative Reptile"
            className={classes.media}
          ><img src={crd.image} alt="No image" width="400" height="100"/>
          <Avatar className={classes.large}>{crd.avtr}</Avatar>
          </CardMedia>
          <br/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {crd.heading}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {crd.text}
            </Typography>
            <Grid container direction="row" spacing={2}>
                <Grid item container xs={1} ></Grid>
            <Grid item container xs={3}>
                <div>
                <h3>{crd.new}</h3>
                <p>New</p>
                </div>
            </Grid>
            <Grid item container xs={4}>
                <div>
                <h3>{crd.inprogress}</h3>
                <p>In Progress</p>
                </div>
            </Grid>
            <Grid item container xs={4}>
            <div>
                <h3>{crd.closed}</h3>
                <p>Closed</p>
                </div>
            </Grid>
            </Grid>
          </CardContent>
          
        <CardActions>
          <Button variant="outlined" size="small" color="primary">
            {crd.butone}
          </Button>
          <Button variant="outlined" size="small" color="primary">
          {crd.buttwo}
          </Button>
        </CardActions>
      </Card>
      </Grid>
      )}
        <Grid item  lg={3}>
        <Card className={classes.rootrt}>
        <CardMedia
          /*component="img"
          alt="Contemplative Reptile"
          height="100"
          image="./KITS.png"*/
          title="Contemplative Reptile"
          className={classes.media}
        ><img src="./sinar4.jpg" alt="No image" width="400" height="100"/>
        <Avatar className={classes.large}>F</Avatar>
        </CardMedia>
        <br/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            My Finances
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Typography>
          <Grid container direction="row" spacing={2}>
              <Grid item container xs={1} ></Grid>
          <Grid item container xs={4}>
              <div>
              <h3>$ 3000</h3>
              <p>Queries</p>
              </div>
          </Grid>
          <Grid item container xs={3}>
              <div>
              <h3>$ 1400</h3>
              <p>Drafts</p>
              </div>
          </Grid>
          <Grid item container xs={1} ></Grid>
          <Grid item container xs={3}>
          <div>
              <h3>$ 1200</h3>
              <p>Cases</p>
              </div>
          </Grid>
          </Grid>
        </CardContent>
        
      <CardActions>
        <Button variant="outlined" size="small" color="primary">
          View Invoices
        </Button>
      </CardActions>
       </Card>
        </Grid>
    </Grid>
    <label>Name</label>
    <input onChange={(e)=>setNamm(e.target.value)}></input>
    <button onClick={()=>changename(namm)}>Submit</button>
</div>
  );
}
export default Necr