import React,{useState} from 'react'
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell, Paper} from '@material-ui/core'
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import { BorderRight } from '@material-ui/icons';
import Tabla from './Tabla'
import Toball from './Toball'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper1: {
     // padding: theme.spacing(2),
      //textAlign: 'center',
     // color: theme.palette.text.secondary,
      backgroundColor:'#7986cb'
    },
     paper2: {
      backgroundColor:'#e57373'
    },
    bishal: {
        height: 3700,
        [theme.breakpoints.up('sm')]:{
          height: 3600
        }
      }
  }));
function Tab() {
    const classes = useStyles();
    const [header,setHeader]= useState([{txt:"Name",bol:true},{txt:"Roll No",bol:true},{txt:"Maths",bol:true},{txt:"Physics",bol:true},{txt:"Chemistry",bol:true},{txt:"English",bol:true},{txt:"Computer",bol:true},{txt:"P.E.D",bol:true},{txt:"Biology",bol:true}])
    const[bol,setBol] = useState([true,true,true,true,true,true,true,true,true])
    const[body,setBody] = useState([
        {
            name:"Suresh",
            roll:"1",
            maths:"90",
            physics:"78",
            chem:"80",
            eng:"67",
            comp:"75",
            ped:"80",
            bio:"50"
        },
        {
            name:"Oishik",
            roll:"2",
            maths:"90",
            physics:"88",
            chem:"85",
            eng:"80",
            comp:"75",
            ped:"85",
            bio:"50"
        },
        {
            name:"Ankit",
            roll:"8",
            maths:"70",
            physics:"64",
            chem:"75",
            eng:"78",
            comp:"75",
            ped:"80",
            bio:"50"
        },
        {
            name:"Subhro",
            roll:"9",
            maths:"90",
            physics:"88",
            chem:"84",
            eng:"67",
            comp:"70",
            ped:"80",
            bio:"50"
        },
        {
            name:"Rajdeep",
            roll:"10",
            maths:"50",
            physics:"64",
            chem:"80",
            eng:"67",
            comp:"75",
            ped:"98",
            bio:"50"
        },
        {
            name:"Mansur",
            roll:"11",
            maths:"90",
            physics:"78",
            chem:"80",
            eng:"67",
            comp:"75",
            ped:"80",
            bio:"50"
        },
        {
            name:"Ramani",
            roll:"12",
            maths:"70",
            physics:"70",
            chem:"70",
            eng:"67",
            comp:"60",
            ped:"84",
            bio:"50"
        },
        {
            name:"Reet",
            roll:"13",
            maths:"75",
            physics:"75",
            chem:"75",
            eng:"67",
            comp:"75",
            ped:"80",
            bio:"50"
        },
        {
            name:"Keya",
            roll:"14",
            maths:"88",
            physics:"80",
            chem:"75",
            eng:"67",
            comp:"75",
            ped:"80",
            bio:"50"
        },
        {
            name:"Riya",
            roll:"15",
            maths:"70",
            physics:"80",
            chem:"75",
            eng:"88",
            comp:"75",
            ped:"80",
            bio:"90"
        },
    ])
    const[and,setAnd] = useState(true)
    function itemchange(num) {
        //setMainitem(hum)
        header[num].bol=!header[num].bol
        for(var i=0;i<header.length;i++) {
          if(i!==num) {
            header[i].bol=true
          }
        }
        setAnd(!and)
      }
    return(
        <div className={classes.bishal}>
            {/*and&&<h1>Hello</h1>*/}
            {/*<TableContainer>
                <Table>
                    <TableHead>
                    <TableRow>
                            {header.map(head=>
                               <TableCell button onClick={()=>colum(header.indexOf(head))}><Paper elevation={0} className={classes.paper1}>{head.txt}</Paper></TableCell>
                                )}
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>*/}
            <TableContainer>
                <Table>
                    <TableHead >
                        <TableRow>
                            {header.map(head=>
                               <TableCell button onClick={()=>itemchange(header.indexOf(head))}><Paper elevation={0} /*className={classes.paper1}*/>{head.txt}</Paper></TableCell>
                                )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {body.map(bod => 
                          <TableRow>
                             {header[0].bol?<TableCell button onClick={()=>itemchange(0)}>{bod.name}</TableCell >:<Paper elevation={0} className={classes.paper2} ><TableCell button onClick={()=>itemchange(0)}>{bod.name}</TableCell></Paper>} 
                             {header[1].bol?<TableCell button onClick={()=>itemchange(1)}>{bod.roll}</TableCell>:<Paper elevation={0} className={classes.paper2} ><TableCell button onClick={()=>itemchange(1)}>{bod.roll}</TableCell></Paper>}
                             {header[2].bol?<TableCell button onClick={()=>itemchange(2)}>{bod.maths}</TableCell>:<Paper elevation={0} className={classes.paper2} ><TableCell button onClick={()=>itemchange(2)}>{bod.maths}</TableCell></Paper>}
                             {header[3].bol?<TableCell button onClick={()=>itemchange(3)}>{bod.physics}</TableCell>:<Paper elevation={0} className={classes.paper2} ><TableCell button onClick={()=>itemchange(3)}>{bod.physics}</TableCell></Paper>}
                             {header[4].bol?<TableCell button onClick={()=>itemchange(4)}>{bod.chem}</TableCell>:<Paper elevation={0} className={classes.paper2} ><TableCell button onClick={()=>itemchange(4)}>{bod.chem}</TableCell></Paper>}
                             {header[5].bol?<TableCell button onClick={()=>itemchange(5)}>{bod.eng}</TableCell>:<Paper elevation={0} className={classes.paper2} ><TableCell button onClick={()=>itemchange(5)}>{bod.eng}</TableCell></Paper>}
                             {header[6].bol?<TableCell button onClick={()=>itemchange(6)}>{bod.comp}</TableCell>:<Paper elevation={0} className={classes.paper2} ><TableCell button onClick={()=>itemchange(6)}>{bod.comp}</TableCell></Paper>}
                             {header[7].bol?<TableCell button onClick={()=>itemchange(7)}>{bod.ped}</TableCell>:<Paper elevation={0} className={classes.paper2} ><TableCell button onClick={()=>itemchange(7)}>{bod.ped}</TableCell></Paper>}
                             {header[8].bol?<TableCell button onClick={()=>itemchange(8)}>{bod.bio}</TableCell>:<Paper elevation={0} className={classes.paper2} ><TableCell button onClick={()=>itemchange(8)}>{bod.bio}</TableCell></Paper>}
                          </TableRow>
                        )}
                    </TableBody>
                </Table>
             </TableContainer>
             <br />
             <Tabla />
             <br />
             <Toball />
        </div>
    )
}
export default Tab