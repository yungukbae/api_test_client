import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react';
import Fetchoption from "./component/fetchoption";
import Simplerequest from "./component/simplerequest";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  height:'100vh',
  color: theme.palette.text.secondary,
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Home() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    console.lgo
  }

  return (
    <div style={{width:'100vw',height:'100vh'}}>
    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
      <Grid item xs={4}  style={{  minWidth:'500px'}}><Item>
        <h1> API Tester </h1>
        <div>Simple Request <Switch checked={checked} onChange={handleChange} {...label} /> Normal Request</div>
        {checked ? <Fetchoption/> : <Simplerequest/> }
      </Item></Grid>
      <Grid item xs={8}><Item>

      </Item></Grid>
    </Grid>
    </div>
  )
}
