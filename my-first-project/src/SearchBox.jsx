import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox(){
    let [City,setCity] = useState();
    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmt = (event) =>{
        event.preventDefault();
        setCity("");
    }
    return (
        <div className='flex flex-col gap-4'>
            <h1>Search for the weather!</h1>
            <TextField className='bg-sky-500/100 text-blue-100' onChange={handleChange} id="city" value={City} label="City name" variant="outlined" required/>
            <Button onClick={handleSubmt} type="submit" variant="contained" endIcon={<SendIcon />}>
        Search
      </Button>
        </div>
    )
}