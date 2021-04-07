import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, Grid, ListItemIcon, Drawer, Divider} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar,List,ListItem,ListItemText } from '@material-ui/core';
import {Skeleton} from '@material-ui/lab'

const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 345,
    minHeight: 400,
    //left : theme.spacing(1000)
    marginLeft : theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      marginLeft : theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        marginLeft : theme.spacing(1),
      }
    }
  },
  root2: {
    maxWidth: 410,
    minHeight: 575,
    //left : theme.spacing(1000)
    marginLeft : theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginLeft : theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        marginLeft : theme.spacing(1),
      }
    }
  },
  root1: {
    maxWidth: 410,
    minHeight: 575,
    //left : theme.spacing(1000)
    marginLeft : theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginLeft : theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        marginLeft : theme.spacing(1),
      }
    }
  },
  root3: {
    maxWidth: 410,
    minHeight: 575,
    //left : theme.spacing(1000)
    marginLeft : theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginLeft : theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        marginLeft : theme.spacing(1),
      }
    }
  },
  rootm: {
    marginLeft:0,
  },
  roota: {
    minWidth: 345,
    minHeight: 400,
    //left : theme.spacing(1000)
    marginLeft : theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      marginLeft : theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        marginLeft : theme.spacing(1),
        minWidth: 310,
        [theme.breakpoints.up('xl')]: {
          maxWidth : 300,
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
    left:theme.spacing(16)
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
    height: 3900,
    [theme.breakpoints.up('sm')]:{
      height: 1900
    }
  }
}));

function Butto(props) {
  const classes = useStyles();
  const[card,setCard] = useState([
    {
      image:"./sinar.jpg",
      avtr:"Q",
      heading:"My Queries",
      text:"Raise and clear your queries with out expert team are trained to draft your documents ",
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
  const[count,setCount] = useState(0)
  const tick = () => {
    setCount(count+1)
  }
  useEffect(()=>{
    const interval = setInterval(tick,1000)
    return () => {
      clearInterval(interval)
    }
    if(count===6) {
      clearInterval(interval)
    }
  },[count])
  return (
    <div className={classes.bishal} >
      {/*props.open?<h1>Open</h1>:<h1>Not open</h1>*/}
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
        component="img"
            alt="Contemplative Reptile"
            height="100"
            image="./KITS.png"
      </CardActions>
  </Card>*/}
    <Grid container direction="row" spacing={4}>
      {/*{card.map(crd=>
        <Grid item  lg={3}>
          <Card className={classes.root}>
          <CardMedia
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
        <Card className={classes.root}>
        <CardMedia
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
      </Grid>*/}
        {card.map(crd=>
        <Grid item  lg={3}>
          {count<=2?
          <Card className={classes.roota}>
          <CardMedia
            /*component="img"
            alt="Contemplative Reptile"
            height="100"
            image="./KITS.png"*/
           title="Contemplative Reptile"
            className={classes.media}
          ><Skeleton variant='rect' animation='wave' width="100%" height={100}/>
          <Skeleton variant='circle' animation='wave' className={classes.large}/>
          </CardMedia>
          <br/>
          <CardContent>
            <Skeleton variant='text' animation='wave' height={60} width="40%" style={{ marginLeft:90 }} />
            <Skeleton variant='text' animation='wave' width="100%" />
            <Skeleton variant='text' animation='wave' width="100%" />
            <Grid container direction="row" spacing={2}>
                <Grid item container xs={1} ></Grid>
            <Grid item container xs={3}>
                <div>
                <Skeleton variant='text' animation='wave' width='600%' height={60} />
                <Skeleton variant='text' animation='wave' width='1200%' height={30} />
                </div>
            </Grid>
            <Grid item container xs={4}>
                <div>
                <Skeleton variant='text' animation='wave' width='600%' height={60} />
                <Skeleton variant='text' animation='wave' width='1800%' height={30} />
                </div>
            </Grid>
            <Grid item container xs={4}>
            <div>
            <Skeleton variant='text' animation='wave' width='600%' height={60} />
                <Skeleton variant='text' animation='wave' width='1200%' height={30} />
                </div>
            </Grid>
            </Grid>
          </CardContent>
        <CardActions>
            <Skeleton height={50} variant="text" width='35%'/>
          <Skeleton height={50} variant="text" width='35%' />
        </CardActions>
      </Card>:
      <Card className={classes.root}>
      <CardMedia
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
          }
          
      </Grid>
      )}
      <Grid item lg={3}>
      {count<=2?
          <Card className={classes.roota}>
          <CardMedia
           title="Contemplative Reptile"
            className={classes.media}
          ><Skeleton variant='rect' animation='wave' width="100%" height={100}/>
          <Skeleton variant='circle' animation='wave' className={classes.large}/>
          </CardMedia>
          <br/>
          <CardContent>
            <Skeleton variant='text' animation='wave' height={60} width="40%" style={{ marginLeft:90 }} />
            <Skeleton variant='text' animation='wave' width="100%" />
            <Skeleton variant='text' animation='wave' width="100%" />
            <Grid container direction="row" spacing={2}>
                <Grid item container xs={1} ></Grid>
            <Grid item container xs={3}>
                <div>
                <Skeleton variant='text' animation='wave' width='600%' height={60} />
                <Skeleton variant='text' animation='wave' width='1200%' height={30} />
                </div>
            </Grid>
            <Grid item container xs={4}>
                <div>
                <Skeleton variant='text' animation='wave' width='600%' height={60} />
                <Skeleton variant='text' animation='wave' width='1800%' height={30} />
                </div>
            </Grid>
            <Grid item container xs={4}>
            <div>
            <Skeleton variant='text' animation='wave' width='600%' height={60} />
                <Skeleton variant='text' animation='wave' width='1200%' height={30} />
                </div>
            </Grid>
            </Grid>
          </CardContent>
        <CardActions>
            <Skeleton height={50} variant="text" width='35%'/>
          <Skeleton height={50} variant="text" width='35%' />
        </CardActions>
      </Card>:
       <Card className={classes.root}>
       <CardMedia
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
      }
        </Grid>
        <Grid item lg = {3} >
        {count<=2?
          <Card className={classes.roota}>
            <CardContent>
            <br />
            <Skeleton variant='text' animation='wave' height={40} width="40%" style={{ marginLeft:75 }} />
            <List>
              <ListItem button>
                <ListItemIcon><Skeleton variant='text' animation='wave' height={55} width="50%" /></ListItemIcon>
                <ListItemText><Skeleton variant='text' animation='wave' height={30} width="70%" /></ListItemText>
                <Skeleton variant='text' animation='wave' height={55} width="10%" />
              </ListItem>
              <Divider />
              <br />
              <ListItem button>
                <ListItemIcon><Skeleton variant='text' animation='wave' height={55} width="50%" /></ListItemIcon>
                <ListItemText><Skeleton variant='text' animation='wave' height={30} width="90%" />
                <Skeleton variant='text' animation='wave' height={30} width="30%" />
                </ListItemText>
                <Skeleton variant='text' animation='wave' height={55} width="10%" />
              </ListItem>
              <Divider />
              <br />
              <ListItem button>
                <ListItemIcon><Skeleton variant='text' animation='wave' height={55} width="50%" /></ListItemIcon>
                <ListItemText><Skeleton variant='text' animation='wave' height={30} width="90%" />
                <Skeleton variant='text' animation='wave' height={30} width="30%" />
                </ListItemText>
                <Skeleton variant='text' animation='wave' height={55} width="10%" />
              </ListItem>
              <br />
              <ListItem button>
                <ListItemIcon><Skeleton variant='text' animation='wave' height={55} width="50%" /></ListItemIcon>
                <ListItemText><Skeleton variant='text' animation='wave' height={30} width="90%" />
                <Skeleton variant='text' animation='wave' height={30} width="30%" />
                </ListItemText>
                <Skeleton variant='text' animation='wave' height={55} width="10%" />
              </ListItem>
            </List>
            </CardContent>
          </Card>:
          <Card className={classes.root1}>
            <CardContent>
            <div className={classes.rootm}> <h2 >Trainings</h2> </div>
            <br />
            <List>
              <br/>
              <ListItem button>
                <ListItemIcon><img src="./rocket.jpg" width="22" height="28"/></ListItemIcon>
                <ListItemText>Get Started</ListItemText>
                <a href="https://www.youtube.com/watch?v=XWZwQM_Tssw"><img src="./youtubeplay.jpg" width="22" height="28"/></a>
              </ListItem>
              <Divider />
              <br />
              <ListItem button>
                <ListItemIcon><img src="./thinking.jpg" width="22" height="28"/></ListItemIcon>
                <ListItemText>How to create and view drafts</ListItemText>
                <a href="https://www.youtube.com/watch?v=faZlNrKIKO8"><img src="./youtubeplay.jpg" width="22" height="28"/></a>
              </ListItem>
              <Divider />
              <br />
              <ListItem button>
                <ListItemIcon><img src="./draft.png" width="22" height="28"/></ListItemIcon>
                <ListItemText>How to create and view drafts by yourself</ListItemText>
                <a href="https://www.youtube.com/watch?v=QpGXIGYclO4"><img src="./youtubeplay.jpg" width="22" height="28"/></a>
              </ListItem>
              <br />
              <ListItem button>
                <ListItemIcon><img src="./hmcptry.jpg" width="22" height="28"/></ListItemIcon>
                <ListItemText>How to create and view drafts</ListItemText>
                <a href="https://www.youtube.com/watch?v=y16_-LbVmhc"><img src="./youtubeplay.jpg" width="22" height="28"/></a>
              </ListItem>
              <br/>
              <br/>
            </List>
            </CardContent>
          </Card>}
        </Grid>
        <Grid item lg = {4} >
        {count<=2?
          <Card className={classes.roota}>
            <CardContent>
            <Skeleton variant='text' animation='wave' height={40} width="70%" style={{ marginLeft:60 }} />
            <List>
              <ListItem button>
                <ListItemIcon><Skeleton variant='text' animation='wave' height={55} width="50%" /></ListItemIcon>
                <ListItemText><h1><Skeleton variant='text' animation='wave' height={16} width="30%" /></h1>
                <p><Skeleton variant='text' animation='wave' height={21} width="100%" />
                <Skeleton variant='text' animation='wave' height={21} width="100%" />
                <Skeleton variant='text' animation='wave' height={21} width="100%" />
                <Skeleton variant='text' animation='wave' height={21} width="100%" />
                <Skeleton variant='text' animation='wave' height={20} width="100%" /></p>
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon><Skeleton variant='text' animation='wave' height={55} width="50%" /></ListItemIcon>
                <ListItemText><h1><Skeleton variant='text' animation='wave' height={16} width="30%" /></h1>
                <p><Skeleton variant='text' animation='wave' height={21} width="100%" />
                <Skeleton variant='text' animation='wave' height={21} width="100%" />
                <Skeleton variant='text' animation='wave' height={20} width="100%" />
                <Skeleton variant='text' animation='wave' height={20} width="100%" />
                <Skeleton variant='text' animation='wave' height={20} width="100%" /></p>
                </ListItemText>
              </ListItem>
            </List>
            </CardContent>
          </Card>:
          <Card className={classes.root2}>
            <CardContent>
            <h2 >Help and FAQ</h2> 
            <List>
              <ListItem button>
                <ListItemIcon><img src="./Questionmark.jpg" width="22" height="28"/></ListItemIcon>
                <ListItemText><h4>Help</h4>
                      <p>Help page is interested to provide assistance to users. It providing enough instruction and guideklines for them 
                        to compete their task and get familiar with the site.
                      </p>
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon><img src="./faq.png" width="22" height="28"/></ListItemIcon>
                <ListItemText><h4>FAQ</h4>
                      <p>In this particular section thre are list of questtions and answers which are commonly sked in some context for a
                        particular module pertaining to a particular topic.
                      </p>
                </ListItemText>
              </ListItem>
            </List>
            </CardContent>
          </Card>}
        </Grid>
        <Grid item lg = {3} >
        {count<=2?
          <Card className={classes.roota}>
            <CardContent>
            <Skeleton variant='text' animation='wave' height={40} width="70%" style={{ marginLeft:60 }} />
            <List>
              <ListItem button>
                <ListItemIcon><Skeleton variant='text' animation='wave' height={55} width="50%" /></ListItemIcon>
                <ListItemText><h1><Skeleton variant='text' animation='wave' height={16} width="70%" /></h1>
                <p><Skeleton variant='text' animation='wave' height={21} width="100%" />
                <Skeleton variant='text' animation='wave' height={21} width="100%" />
                <Skeleton variant='text' animation='wave' height={21} width="100%" />
                <Skeleton variant='text' animation='wave' height={21} width="100%" />
                <Skeleton variant='text' animation='wave' height={20} width="100%" /></p>
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon><Skeleton variant='text' animation='wave' height={55} width="50%" /></ListItemIcon>
                <ListItemText><h1><Skeleton variant='text' animation='wave' height={16} width="70%" /></h1>
                <p><Skeleton variant='text' animation='wave' height={21} width="100%" />
                <Skeleton variant='text' animation='wave' height={21} width="100%" />
                <Skeleton variant='text' animation='wave' height={20} width="100%" />
                <Skeleton variant='text' animation='wave' height={20} width="100%" />
                <Skeleton variant='text' animation='wave' height={20} width="100%" /></p>
                </ListItemText>
              </ListItem>
            </List>
            </CardContent>
          </Card>:
          <Card className={classes.root3}>
            <CardContent>
            <h2 >News and Articles</h2> 
            <List>
              <ListItem button>
                <ListItemIcon><img src="./businessman.jpg" width="22" height="28"/></ListItemIcon>
                <ListItemText><h4>Brunch this weekend</h4>
                      <Typography>Ali Connors - <span>I'll be in your neighbourhood doing errands this...</span></Typography>
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon><img src="./SSR.jpg" width="22" height="28"/></ListItemIcon>
                <ListItemText><h4>Brunch this weekend</h4>
                      <Typography>Ali Connors - <span>I'll be in your neighbourhood doing errands this...</span></Typography>
                </ListItemText>
              </ListItem>
            </List>
            </CardContent>
          </Card>}
        </Grid>
    </Grid>
    {/*Trial*/}
    {/*<Grid container direction="row" spacing={2}>
      {card.map(crd=>
        <Grid item  lg={3}>
          <Card className={classes.root}>
          <CardMedia
           title="Contemplative Reptile"
            className={classes.media}
          ><Skeleton variant='rect' animation='wave' width="100%" height={100}/>
          <Skeleton variant='circle' animation='wave' className={classes.large}/>
          </CardMedia>
          <br/>
          <CardContent>
            <Skeleton variant='text' animation='wave' height={60} width="40%" style={{ marginLeft:90 }} />
            <Skeleton variant='text' animation='wave' width="100%" />
            <Skeleton variant='text' animation='wave' width="100%" />
            <Grid container direction="row" spacing={2}>
                <Grid item container xs={1} ></Grid>
            <Grid item container xs={3}>
                <div>
                <Skeleton variant='text' animation='wave' width='600%' height={60} />
                <Skeleton variant='text' animation='wave' width='1200%' height={30} />
                </div>
            </Grid>
            <Grid item container xs={4}>
                <div>
                <Skeleton variant='text' animation='wave' width='600%' height={60} />
                <Skeleton variant='text' animation='wave' width='1800%' height={30} />
                </div>
            </Grid>
            <Grid item container xs={4}>
            <div>
            <Skeleton variant='text' animation='wave' width='600%' height={60} />
                <Skeleton variant='text' animation='wave' width='1200%' height={30} />
                </div>
            </Grid>
            </Grid>
          </CardContent>
        <CardActions>
            <Skeleton height={50} variant="text" width='35%'/>
          <Skeleton height={50} variant="text" width='35%' />
        </CardActions>
      </Card>
      </Grid>
      )}
      </Grid>*/}
</div>
  );
}
export default Butto