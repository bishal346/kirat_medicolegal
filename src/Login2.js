import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import C2d from './C2d';

/*function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}*/

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  bishal: {
    height: 900,
    [theme.breakpoints.up('sm')]:{
      height: 700
    }
  }
}));

function SignIn2(props) {
  const classes = useStyles();
  const [pass,setPass] = React.useState("")
  const [mail,setMail] = React.useState("")
  const[open,setOpen] = useState(false)
  const[list,setList] = useState([
    {
      name:"Bishal Sarkar",
      email:"avikbishalsarkar@gmail.com",
      password:"hello345"
    },
    {
      name:"Monotosh Majhi",
      email:"monmaji@gmail.com",
      password:"maj567"
    },
    {
      name:"Gopal Sharma",
      email:"sharmagopal@gmail.com",
      password:"gopshar"
    },
    {
      name:"Vinod Maity",
      email:"maitnod@gmail.com",
      password:"maity_345"
    },
  ])
  function hello() {
    var c = 0;
    for(var i =0; i<list.length;i++) {
      if(list[i].email===mail) {
        if(list[i].password===pass) {
          props.later(!props.lat)
          props.funct(list[i].name,list[i].email)
        }
        else {
          setOpen(true)
        }
        c++
      }
    }
    if(c===0) {
      setOpen(true)
    }
  }
  return (
  <div className={classes.bishal} >
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Log in
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e)=>setMail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e)=>setPass(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          /*type="submit"*/
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={()=>hello()}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
    <Snackbar 
    open={open} 
    onClose={()=>setOpen(false)} 
    TransitionComponent='SlideTransition' 
    message="Either Username or Password is wrong"
    />
    {/*<Box mt={8}>
      <Copyright />
</Box>*/}
  </Container>
  </div>
  );
}
export default SignIn2