import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

const useStyles = makeStyles({
    root:{
        width: '100%',
        padding:'10px'
    },
    radiobtn:{
        height:'50px',
        minWidth:'500px',
        display:'flex',
        flexFlow:'row no-wrap',
        justifyContent:'center',
        lineHeight:'50px'
    }
})

const Fetchoption = () => {
    const classes = useStyles();
    const [method, setMethod] = React.useState('GET');//method value
    const [body, setBody] = React.useState('');//body value
    const [url, setUrl] = React.useState('');//body value
    const [cors, setCors] = React.useState('no-cors');//cors value
    const [cache, setCache] = React.useState('no-cache');//cache value
    const [credentials, setCredentials] = React.useState('same-origin');//credentials value
    const [header, setHeader] = React.useState('');
    //method handler
    const methChange = (e) => {
        setMethod(e.target.value);
        console.log(e.target.value);
    };

    //body handler
    const bodyChange = (e) => {
        setBody(e.target.value)
        console.log(e.target.value)
    }

    //url handler
    const urlChange = (e) => {
        setUrl(e.target.value);
        console.log(e.target.value)
    }

    //cors handler
    const corsChange = (e) => {
        setCors(e.target.value);
        console.log(e.target.value)
    }

    //cache handler
    const chacheChange = (e) => {
        setCache(e.target.value);
        console.log(e.target.value)
    }

    //credentials handler
    const credenChange = (e) => {
        setCredentials(e.target.value);
        console.log(e.target.value);
    }

    //header handler
    const headerChange = (e) => {
        setHeader(e.target.value);
        console.log(e.target.value)
    }

    const handleFetcher = (e) => {
        e.preventDefault()
        console.log("method:",method,"Header:",header,"body:",body,"url:",url,"cors:",cors,"cache:",cache,"credential:",credentials);
        if(method === 'GET'){
            fetch(url,{
                method:method,
                mode:cors,
                cache:cache,
                credentials:credentials,
                headers:{header},
                // body:JSON.stringify(body),
            }).then(res => {
                console.log(res)
            })
        }else{
            fetch(url,{
                method:method,
                mode:cors,
                cache:cache,
                credentials:credentials,
                headers:{header},
                body:JSON.stringify(body),
            }).then(res => {
                console.log(res.json())
            })
        }

    }

    return(
        <>
            <h3>Normal Request(Fetch API)</h3>
            <form onSubmit={handleFetcher}>
                <div className={classes.root}>
                    <TextField onChange={urlChange} id="outlined-basic" label="URL & query" placeholder="http://example.com/v1" variant="outlined" fullWidth/>
                </div>

                <div className={classes.root}>
                    <TextField onChange={bodyChange} id="outlined-basic" label="Body" placeholder=" key1: data1,
                     key2: data2" variant="outlined" multiline fullWidth/>
                </div>

                <div className={classes.radiobtn}>
                    <Radio checked={method === 'GET'} onChange={methChange} value="GET"/> GET
                    <Radio checked={method === 'POST'} onChange={methChange} value="POST"/> POST
                    <Radio checked={method === 'PUT'} onChange={methChange} value="PUT"/> PUT
                    <Radio checked={method === 'DEL'} onChange={methChange} value="DELETE"/> DEL
                </div>

                <div className={classes.radiobtn}>
                    <Radio checked={cors === 'no-cors'} onChange={corsChange} value="no-cors"/>no-cors
                    <Radio checked={cors === 'cors'} onChange={corsChange} value="cors"/>cors
                    <Radio checked={cors === 'same-origin'} onChange={corsChange} value="same-origin"/>same-origin
                </div>

                <div className={classes.radiobtn}>
                    <Radio checked={cache === 'no-cache'} onChange={chacheChange} value="no-cache"/>no-cache
                    <Radio checked={cache === 'reload'} onChange={chacheChange} value="reload"/>reload
                    <Radio checked={cache === 'force-cache'} onChange={chacheChange} value="force-cache"/>force-cache
                    <Radio checked={cache === 'only-if-cached'} onChange={chacheChange} value="only-if-cached"/>only-if-cached
                </div>

                <div className={classes.radiobtn}>
                    <Radio checked={credentials === 'same-origin'} onChange={credenChange} value="same-origin"/>same-origin
                    <Radio checked={credentials === 'include'} onChange={credenChange} value="include"/>include
                    <Radio checked={credentials === 'omit'} onChange={credenChange} value="omit"/>omit
                </div>
                <div className={classes.root}>
                    <TextField onChange={headerChange}
                        id="outlined-textarea"
                        label="Headers"
                       defaultValue="'Content-Type': 'application/json',"
                        multiline
                        fullWidth
                    />
                </div>
                <Button type="submit" variant="contained">SUBMIT</Button>
            </form>
        </>
    )
}

export default Fetchoption