import { Fab, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

function FormArea({addNote}) {
  const [note, setNote] = useState({
    title:"",
    Content:""
  });
  function clickHandler(){
    addNote(note);
    setNote({
      title:"",
      Content:"",
    })
  }

  
  function changeHandler(event){
    const{name, value} = event.target;
    setNote(preValues => {
      return{
        ...preValues,
        [name]: value,
      }
    })
  };
  console.log(note);
  
  
  return (
    <Paper style={{margin:"10px 15%", padding:"25px 50px"}}>
        <form>
            <TextField 
            onChange={changeHandler}
            
            name="title"
             value={note.title} 
             label="title" 
             fullWidth 
             autoComplete='off'/>
            <TextField 
            onChange={changeHandler}
            name="Content"
            value={note.Content} 
            label="Content"
             multiline rows={4} 
             fullWidth 
             autoComplete='off'/>
            <Fab onClick={clickHandler} style={{marginTop:"20px"}}>
                <AddIcon/>
                </Fab>
        </form>
        </Paper>
  );
}

export default FormArea;