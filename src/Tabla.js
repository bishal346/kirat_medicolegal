import React,{useState} from 'react'
import {TableContainer,Table,TableHead,TableRow,TableBody,Menu,MenuItem,TableCell,Checkbox,Button,Toolbar,Typography,Tooltip,Paper,IconButton} from '@material-ui/core'
import {FilterSharp,Delete,ArrowUpward,ArrowDownward,FilterList} from '@material-ui/icons'
function Tabla() {
    const [head,setHead] = useState([{name:"Dessert (100g serving)", bol:true}, {name:"Calories",bol:true}, {name:"Fat (g)",bol:true}, {name:"Carbs(g)",bol:true}, {name:"Protein (g)",bol:true}])
    const [bod,setBod] = useState([
        {
            check:false,
            name:"Cupcake",
            calories:305,
            fat:3.7,
            carbs:67,
            protein:4.3
        },
        {
            check:false,
            name:"Donur",
            calories:452,
            fat:25.0,
            carbs:51,
            protein:4.9
        },
        {
            check:false,
            name:"Eclair",
            calories:262,
            fat:16.0,
            carbs:24,
            protein:6.0
        },
        {
            check:false,
            name:"Frozen yoghurt",
            calories:159,
            fat:6.0,
            carbs:24,
            protein:4.0
        },
        {
            check:false,
            name:"Gingerbread",
            calories:356,
            fat:16.0,
            carbs:49,
            protein:3.9
        },
        {
            check:false,
            name:"Honeycomb",
            calories:408,
            fat:3.2,
            carbs:87,
            protein:6.5
        },
        {
            check:false,
            name:"Ice cream sandwich",
            calories:237,
            fat:9.0,
            carbs:37,
            protein:4.3
        },
        {
            check:false,
            name:"Jelly Bean",
            calories:375,
            fat:0.0,
            carbs:94,
            protein:0.0
        },
        {
            check:false,
            name:"KitKat",
            calories:518,
            fat:26.0,
            carbs:65,
            protein:7.0
        },
        {
            check:false,
            name:"Lolipop",
            calories:392,
            fat:0.2,
            carbs:98,
            protein:0.0
        },
        {
            check:false,
            name:"Marshmallow",
            calories:318,
            fat:0,
            carbs:81,
            protein:2.0
        },
        {
            check:false,
            name:"Nougat",
            calories:360,
            fat:19.0,
            carbs:9,
            protein:37.0
        },
        {
            check:false,
            name:"Oreo",
            calories:437,
            fat:18.0,
            carbs:63,
            protein:4.0
        },
    ])
    const newarr = bod
    //const[newarr,setNewarr] = useState(bod)
    const[ablere,setAblere] = useState(false)
    const[delfil,setDelfil] = useState(true)
    const[gh,setGh] = useState(false)
    const[hedcheck,setHedcheck] = useState(false)
    function chch(num) {
        setGh(!gh)
        setHedcheck(true)
        bod[num].check=!bod[num].check
        var ct = 0
        setDelfil(false)
        for(var i= 0; i<bod.length; i++) {
            if(bod[i].check) {
                ct++
            }
        }
        if(ct===0) {
            setHedcheck(false)
            setDelfil(true)
        }
        if(ct!==bod.length) {
            setChecked(false)
        }
        if(ct===bod.length) {
            setChecked(true)
            setDelfil(false)
        }
    }
    const all = () => {
        setGh(!gh)
        setChecked(!headchecked)
        /*for(var i = 0; i<bod.length; i++) {
            if(!headchecked) {
                bod[i].check=true
                setDelfil(false)
            }
            else if(headchecked) {
                bod[i].check=false
                setDelfil(true)
            }
        }*/
        if(!headchecked) {
            for( var i = 0 ; i < bod.length ; i++) {
                bod[i].check=true
                setDelfil(false)
            }
        }
        else if(headchecked) {
            for( var i = 0 ; i < bod.length ; i++) {
                bod[i].check=false
                setDelfil(true)
            }
        }
        if(headchecked) {
            setHedcheck(false)
            
        }
    }
    const[headchecked,setChecked] = useState(false)
    const[arrch,setArrch] = useState(true)
    const [filter,setFilter] = useState([
        {name:"Dessert", bol:true},
         {name:"Calories",bol:true}, 
         {name:"Fat (g)",bol:false}, 
         {name:"Carbs(g)",bol:true}, 
         {name:"Protein (g)",bol:false}
        ])
    const[menuopen,setMenuopen] = useState(false)
    function charr(num,name) {
        setAblere(true)
        setGh(!gh)
        head[num].bol=!head[num].bol
        var obj = {
            check:false,
            name:"Frozen yoghurt",
            calories:159,
            fat:6.0,
            carbs:24,
            protein:4.0
        }
        for(var i =0; i<bod.length-1; i++) {
            if(name==="Dessert (100g serving)"){
                for(var j= 0; j<bod.length-i-1; j++) {
                    if(bod[j].name>bod[j+1].name) {
                        obj = bod[j]
                        bod[j]=bod[j+1]
                        bod[j+1]=obj
                    }
                }
            }
            else if (name==="Calories") {
            for(var j= 0; j<bod.length-i-1; j++) {
                if(bod[j].calories>bod[j+1].calories) {
                    obj = bod[j]
                    bod[j]=bod[j+1]
                    bod[j+1]=obj
                }
            }
            }
            else if (name===head[2].name) {
                for(var j= 0; j<bod.length-i-1; j++) {
                    if(bod[j].fat>bod[j+1].fat) {
                        obj = bod[j]
                        bod[j]=bod[j+1]
                        bod[j+1]=obj
                    }
                }
            }
            else if (name===head[3].name) {
                for(var j= 0; j<bod.length-i-1; j++) {
                    if(bod[j].carbs>bod[j+1].carbs) {
                        obj = bod[j]
                        bod[j]=bod[j+1]
                        bod[j+1]=obj
                    }
                }
            }
            else if (name===head[4].name) {
                for(var j= 0; j<bod.length-i-1; j++) {
                    if(bod[j].protein>bod[j+1].protein) {
                        obj = bod[j]
                        bod[j]=bod[j+1]
                        bod[j+1]=obj
                    }
                }
            }
        }
    }
    function carr(num,name) {
        setGh(!gh)
        setAblere(true)
        head[num].bol=!head[num].bol
        var obj = {
            check:false,
            name:"Frozen yoghurt",
            calories:159,
            fat:6.0,
            carbs:24,
            protein:4.0
        }
        for(var i =0; i<bod.length-1; i++) {
            if(name==="Dessert (100g serving)"){
                for(var j= 0; j<bod.length-i-1; j++) {
                    if(bod[j].name<bod[j+1].name) {
                        obj = bod[j]
                        bod[j]=bod[j+1]
                        bod[j+1]=obj
                    }
                }
            }
            else if (name==="Calories") {
            for(var j= 0; j<bod.length-i-1; j++) {
                if(bod[j].calories<bod[j+1].calories) {
                    obj = bod[j]
                    bod[j]=bod[j+1]
                    bod[j+1]=obj
                }
            }
            }
            else if (name===head[2].name) {
                for(var j= 0; j<bod.length-i-1; j++) {
                    if(bod[j].fat<bod[j+1].fat) {
                        obj = bod[j]
                        bod[j]=bod[j+1]
                        bod[j+1]=obj
                    }
                }
            }
            else if (name===head[3].name) {
                for(var j= 0; j<bod.length-i-1; j++) {
                    if(bod[j].carbs<bod[j+1].carbs) {
                        obj = bod[j]
                        bod[j]=bod[j+1]
                        bod[j+1]=obj
                    }
                }
            }
            else if (name===head[4].name) {
                for(var j= 0; j<bod.length-i-1; j++) {
                    if(bod[j].protein<bod[j+1].protein) {
                        obj = bod[j]
                        bod[j]=bod[j+1]
                        bod[j+1]=obj
                    }
                }
            }
        }
    }
    const[brr,setBrr] = useState([])
    function reable() {
        setAblere(true)
        //setBod(newarr)
        for(var i = 0 ; i<bod.length;i++) {
            setAblere(!ablere)
            if(bod[i].check) {
                setBrr([...brr,bod[i]])
                bod.splice(i,1)
                //bod[i].check=!bod[i].check
            }
        }
        setDelfil(true)
        setHedcheck(false)
        var c = 0
        for(var i = 0 ; i<bod.length;i++) {
            if(bod[i].check) {
                c++
            }
        }
        if(c>0) {
            reable()
        }
        if(c===0) {
            setChecked(false)
        }
    }
    const rbb = () => {
        for(var i =0; i<brr.length; i++) {
            brr[i].check = false
            setBod([...bod,brr[i]])
        }
        setAblere(false)
    }
    function menuChange(num) {
        setArrch(!arrch)
        filter[num].bol=!filter[num].bol
    }
    return(
        <div>
            <Toolbar>
                <Typography>Nutrition</Typography>
                {delfil?<Tooltip title="Filter"><IconButton onClick={()=>setMenuopen(!menuopen)}><FilterList /></IconButton></Tooltip>:
                <Tooltip title="Delete"><IconButton onClick={()=>reable()} ><Delete /></IconButton></Tooltip>}
                {/*<Button disabled={!ablere}onClick={rbb}>Refresh</Button>*/}
            </Toolbar>
            <Menu
              open={menuopen}
              onClose={()=>setMenuopen(false)}
              button={false}
              anchorOrigin={{ vertical: 'buttom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'buttom', horizontal: 'left' }}
            >
                {filter.map(filt=><MenuItem onClick={()=>menuChange(filter.indexOf(filt))}><Checkbox checked={filt.bol} /><p>{filt.name}</p></MenuItem>)}
            </Menu>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                         <TableCell>{hedcheck?<Checkbox indeterminate checked={headchecked} onClick={all}/>:<Checkbox checked={headchecked} onClick={all} />}</TableCell>
                             {/*head.map(hed=><TableCell button onClick={hed.bol?()=>{charr(head.indexOf(hed),hed.name)}:()=>{carr(head.indexOf(hed),hed.name)}} >{hed.bol?<ArrowUpward />:<ArrowDownward />}{hed.name}</TableCell>)*/}
                             {head.map(hed=><React.Fragment>{filter[head.indexOf(hed)].bol&&<React.Fragment>{hed.bol?
                                 <TableCell button onClick={()=>{charr(head.indexOf(hed),hed.name)}}><ArrowDownward />{hed.name}</TableCell>:
                                 <TableCell button onClick={()=>{carr(head.indexOf(hed),hed.name)}}><ArrowUpward />{hed.name}</TableCell>
                             }
                             </React.Fragment>}
                                 </React.Fragment>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bod.map(bd=><TableRow>
                        <TableCell><Checkbox checked={bd.check} onChange={()=>chch(bod.indexOf(bd))} /></TableCell>
                        {filter[0].bol&&<TableCell>{bd.name}</TableCell>}
                        {filter[1].bol&&<TableCell>{bd.calories}</TableCell>}
                        {filter[2].bol&&<TableCell>{bd.fat}</TableCell>}
                        {filter[3].bol&&<TableCell>{bd.carbs}</TableCell>}
                        {filter[4].bol&&<TableCell>{bd.protein}</TableCell>}
                        </TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
                       {/* <TableContainer>
                            <TableHead>
                                <TableRow>{head.map(hd=><TableCell>{hd.name}</TableCell>)}</TableRow>
                            </TableHead>
                            <TableBody>
                                {newarr.map(na=><TableRow>
                                <TableCell>{na.name}</TableCell>
                                <TableCell>{na.calories}</TableCell>
                                <TableCell>{na.protein}</TableCell>
                                <TableCell>{na.fat}</TableCell>
                                <TableCell>{na.carbs}</TableCell>
                                </TableRow>)}
                            </TableBody>
                                </TableContainer>*/}
        </div>
    )
}
export default Tabla