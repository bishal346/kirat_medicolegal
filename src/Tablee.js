import React,{useState} from 'react'
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell, Paper} from '@material-ui/core'
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import { BorderRight } from '@material-ui/icons';

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
      backgroundColor:'red'
    },
  }));
function Tablee() {
    const classes = useStyles();
    const[header,setHeader] = useState([{txt:"Name",bol:true},{txt:"Roll No",bol:true},{txt:"Maths",bol:true},{txt:"Physics",bol:true},{txt:"Chemistry",bol:true},{txt:"English",bol:true},{txt:"Computer",bol:true},{txt:"P.E.D",bol:true},{txt:"Biology",bol:true}])
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
            name:"Binod",
            roll:"3",
            maths:"90",
            physics:"78",
            chem:"80",
            eng:"67",
            comp:"75",
            ped:"80",
            bio:"50"
        },
        {
            name:"Mahesh",
            roll:"1",
            maths:"88",
            physics:"68",
            chem:"80",
            eng:"67",
            comp:"75",
            ped:"84",
            bio:"50"
        },
        {
            name:"Dinesh",
            roll:"1",
            maths:"90",
            physics:"78",
            chem:"78",
            eng:"67",
            comp:"81",
            ped:"80",
            bio:"50"
        },
        {
            name:"Wardhan",
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
            name:"Yash",
            roll:"1",
            maths:"90",
            physics:"78",
            chem:"78",
            eng:"67",
            comp:"75",
            ped:"91",
            bio:"50"
        },
        {
            name:"Ankit",
            roll:"1",
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
            roll:"1",
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
            roll:"1",
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
            roll:"3",
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
            roll:"1",
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
            roll:"1",
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
            roll:"1",
            maths:"88",
            physics:"80",
            chem:"75",
            eng:"67",
            comp:"75",
            ped:"80",
            bio:"50"
        },
    ])
    const[and,setAnd] = useState(true)
    function colum(x) {
       bol[x]=!bol[x]
       //setAnd(!and)
       for(var i=0; i<bol.length; i++) {
           if(i!==x)
           bol[i]=!bol[i]
       }
      // setAnd(!and)
    }
    return(
        <div >
            <TableContainer>
                <Table>
                    <TableHead >
                        <TableRow>
                            {header.map(head=>
                               <TableCell button onClick={()=>colum(header.indexOf(head))}><Paper elevation={0} /*className={classes.paper1}*/>{head}</Paper></TableCell>
                                )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {body.map(bod => 
                          <TableRow>
                             {header[0].bol?<TableCell>{bod.name}</TableCell>:<Paper elevation={0} className={classes.paper2} ><TableCell>{bod.name}</TableCell></Paper>} 
                             {header[1].bol?<TableCell>{bod.roll}</TableCell>:<Paper elevation={0} className={classes.paper2} ><TableCell>{bod.roll}</TableCell></Paper>}
                             {header[2].bol?<TableCell>{bod.maths}</TableCell>:<Paper elevation={0} className={classes.paper2} ><TableCell>{bod.maths}</TableCell></Paper>}
                             {header[3].bol?<TableCell>{bod.physics}</TableCell>:<Paper elevation={0} className={classes.paper2} ><TableCell>{bod.physics}</TableCell></Paper>}
                             {header[4].bol?<TableCell>{bod.chem}</TableCell>:<Paper elevation={0} className={classes.paper2} ><TableCell>{bod.chem}</TableCell></Paper>}
                             {header[5].bol?<TableCell>{bod.eng}</TableCell>:<Paper elevation={0} className={classes.paper2} ><TableCell>{bod.eng}</TableCell></Paper>}
                             {header[6].bol?<TableCell>{bod.comp}</TableCell>:<Paper elevation={0} className={classes.paper2} ><TableCell>{bod.comp}</TableCell></Paper>}
                             {header[7].bol?<TableCell>{bod.ped}</TableCell>:<Paper elevation={0} className={classes.paper2} ><TableCell>{bod.ped}</TableCell></Paper>}
                             {header[8].bol?<TableCell>{bod.bio}</TableCell>:<Paper elevation={0} className={classes.paper2} ><TableCell>{bod.bio}</TableCell></Paper>}
                          </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default Tablee