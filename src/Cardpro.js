import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, Grid} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 345,
    //display:'flex'
    marginLeft:theme.spacing(3),
    minWidth: 345,
    minHeight: 400,
  },
  mydiv:{
    //display:'flex',
    [theme.breakpoints.up(600)]: {
      display:'flex',
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
}));

function Cardpro() {
  const classes = useStyles();

  return (
    <div className={classes.mydiv}>
    <Card className={classes.root}>
      
        <CardMedia
          /*component="img"
          alt="Contemplative Reptile"
          height="100"
          image="./KITS.png"*/
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
              <Grid item container sm={1} ></Grid>
          <Grid item container sm={3}>
              <div>
              <h3>16</h3>
              <p>New</p>
              </div>
          </Grid>
          <Grid item container sm={4}>
              <div>
              <h3>3</h3>
              <p>In Progress</p>
              </div>
          </Grid>
          <Grid item container sm={4}>
          <div>
              <h3>4</h3>
              <p>Closed</p>
              </div>
          </Grid>
          </Grid>
        </CardContent>
        
      <CardActions>
        <Button size="small" color="primary">
          Raise Query
        </Button>
        <Button size="small" color="primary">
        View Queries
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      
    <CardMedia
      /*component="img"
      alt="Contemplative Reptile"
      height="100"
      image="./KITS.png"*/
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
          <Grid item container sm={1} ></Grid>
      <Grid item container sm={3}>
          <div>
          <h3>16</h3>
          <p>New</p>
          </div>
      </Grid>
      <Grid item container sm={4}>
          <div>
          <h3>3</h3>
          <p>In Progress</p>
          </div>
      </Grid>
      <Grid item container sm={4}>
      <div>
          <h3>4</h3>
          <p>Closed</p>
          </div>
      </Grid>
      </Grid>
    </CardContent>
    
  <CardActions>
    <Button size="small" color="primary">
      Raise Query
    </Button>
    <Button size="small" color="primary">
    View Queries
    </Button>
  </CardActions>
</Card>
<Card className={classes.root}>
      
        <CardMedia
          /*component="img"
          alt="Contemplative Reptile"
          height="100"
          image="./KITS.png"*/
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
              <Grid item container sm={1} ></Grid>
          <Grid item container sm={3}>
              <div>
              <h3>16</h3>
              <p>New</p>
              </div>
          </Grid>
          <Grid item container sm={4}>
              <div>
              <h3>3</h3>
              <p>In Progress</p>
              </div>
          </Grid>
          <Grid item container sm={4}>
          <div>
              <h3>4</h3>
              <p>Closed</p>
              </div>
          </Grid>
          </Grid>
        </CardContent>
        
      <CardActions>
        <Button size="small" color="primary">
          Raise Query
        </Button>
        <Button size="small" color="primary">
        View Queries
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      
    <CardMedia
      /*component="img"
      alt="Contemplative Reptile"
      height="100"
      image="./KITS.png"*/
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
          <Grid item container sm={1} ></Grid>
      <Grid item container sm={3}>
          <div>
          <h3>16</h3>
          <p>New</p>
          </div>
      </Grid>
      <Grid item container sm={4}>
          <div>
          <h3>3</h3>
          <p>In Progress</p>
          </div>
      </Grid>
      <Grid item container sm={4}>
      <div>
          <h3>4</h3>
          <p>Closed</p>
          </div>
      </Grid>
      </Grid>
    </CardContent>
    
  <CardActions>
    <Button size="small" color="primary">
      Raise Query
    </Button>
    <Button size="small" color="primary">
    View Queries
    </Button>
  </CardActions>
</Card>
</div>
  );
}
export default Cardpro
/*import React from 'react'
import {Typography, Button} from '@material-ui/core'

function Butto() {
    const[press,setPress] = React.useState(false)
    return(
        <div>
          <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
       </Typography>
            <h1>Hello World</h1>
            <Typography color="primary">Hi how are you</Typography>
            <h1>Hello</h1>
            <Button variant="contained" onClick={()=>setPress(!press)} color ={press?"secondary":"primary"}>Press Me</Button>
            <Typography >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <br />
        <br />
        <br />
        <br />
        <Typography >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        {/*<br />
        <br />
        <br />
        <br />
        <Typography >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>*/
        {/*</div>
    )
}
export default Butto*/}