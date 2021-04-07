import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Paper} from '@material-ui/core'
import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles'
import { dark } from '@material-ui/core/styles/createPalette';
import {green,purple,yellow,indigo, red} from '@material-ui/core/colors'
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom'
import Butto from './Butto'
import Ap from './Ap'
import Apbr from './Apbr'
import Apb from './Apb'
import Aabb from './Aabb'
import Apbar from './Apbar'
import SignIn from './Login'
import SignIn2 from './Login2'
import Signup from './Signup'
import Checkout from './Checkout'
import Practise from './Practise'
import Tabla from './Tabla'
import Cardpro from './Cardpro'
import Necr from './Necr'
import Apbr2 from './Apbr2'
import Barap  from './Barap'
import Toball  from './Toball'
import Tab  from './Tab'
import Tabmen  from './Tabmen'
import D2c  from './D2c'
import C2d from './C2d'
//import ImgMediaCard from './Cardpro'
function App() {
  const[isdark,setIsdark] = useState(false)
  const[name,setName] = useState("Dagla")
  const theme = createMuiTheme({
    palette : {
      type: isdark?"dark":"light",
      primary: green,
      secondary: purple,
      warning:yellow,
      info:indigo
      
    }
  })
  const chdr = () => {
    setIsdark(!isdark)
  }
  function chna(nam) {
    setName(nam)
  }
  return (
    <div className="App">
       {/*<BrowserRouter>
      <Switch>
      <Route path="/" exact component={Butto} />
      <Route path="/Login" exact component={SignIn } />
      <Route path="/Signup" exact component={Signup} />
      <Route path="/Checkpout" exact component={Checkout} />
      <Route path="/Table" exact component={Tab} />
      </Switch>
       </BrowserRouter>*/}
      {/*<ThemeProvider theme={theme}>
      <Paper elevation={0}>
      <D2c fun={chdr} dar={isdark} />
      </Paper>
      </ThemeProvider>*/}
      <ThemeProvider theme={theme}>
      <Paper elevation={0}>
      <Barap fun={chdr} dar={isdark} />
      </Paper>
      </ThemeProvider>
  {/*<Necr changename={chna}/>
  <h1>{name}</h1>
  <Barap fun={chdr} dar={isdark} />
  <C2d />
  <SignIn2 />
  <D2c fun={chdr} dar={isdark} />
  <Tabmen />*/}
   {/*<Apbr2 />*/}
    {/*<Toball />
    <Butto />
    <Tabla />
    <Necr />
    <Cardpro />
    <ImgMediaCard />
    <Practise />*/}
    </div>
  );
}

export default App;
