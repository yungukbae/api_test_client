import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";


const useStyles = makeStyles({
    divbox:{
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


const Simplerequest = () => {

    const classes = useStyles();
    const [method, setMethod] = React.useState('get');//method value
    const [body, setBody] = React.useState('');//body value
    const [url, setUrl] = React.useState('');//body value
    const axios = require('axios');

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


    const handleFetcher = (e) => {
        e.preventDefault()
        console.log("method:",method,"body:",body,"url:",url);
        if(method === 'get'){
            axios({
                method: method,
                url:url,
            }).then((res) => {
                console.log(res);
            })
        }else{
            axios({
                method: method,
                url:url,
                data:body
            }).then((res) => {
                console.log(res);
            })
        }

    }

    return(
        <>
            <h3>Simple Request(Axios API)</h3>
            <form onSubmit={handleFetcher}>
                <div className={classes.divbox}>
                    <TextField onChange={urlChange} id="outlined-basic" label="URL & query" placeholder="http://example.com/v1" variant="outlined" fullWidth/>
                </div>

                <div className={classes.divbox}>
                    <TextField onChange={bodyChange} id="outlined-basic" label="Body" placeholder=" key1: data1,
                     key2: data2" variant="outlined" multiline fullWidth/>
                </div>

                <div className={classes.radiobtn}>
                    <Radio checked={method === 'get'} onChange={methChange} value="get"/> GET
                    <Radio checked={method === 'post'} onChange={methChange} value="post"/> POST
                    <Radio checked={method === 'put'} onChange={methChange} value="put"/> PUT
                    <Radio checked={method === 'delete'} onChange={methChange} value="delete"/> DEL
                </div>
                <Button type="submit" variant="contained">SUBMIT</Button>
            </form>
        </>
    )
}

export default Simplerequest