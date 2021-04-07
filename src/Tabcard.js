import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import {Toolbar,Grid,TextareaAutosize,IconButton,TextField,Menu,MenuList,MenuItem, Divider,Card,CardMedia,CardContent} from '@material-ui/core'
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {PhotoLibrary,Search,Close} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root : {
      minHeight : 450,
  }
}));
function Tabcard() {
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
      {
        image:"./SSR.jpg",
        heading:"Heroes Photo",
        subhea:"1 Photos",
      },
      {
        image:"./hmcptry.jpg",
        heading:"Expectro Photo",
        subhea:"80 Photos",
      },
    ])
    const[closeop,setCloseop] = React.useState(false)
    return (
        <div className={classes.root}>
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
          {/*<CardContent>
          <h4>{cr.heading}</h4>
          <span>{cr.subhea}</span>
          </CardContent>*/}
        </Card>
        </Grid>}
        </React.Fragment>)}
        </Grid>
        </div>
    )
}
export default Tabcard