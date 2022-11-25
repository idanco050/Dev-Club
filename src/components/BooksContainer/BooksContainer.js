import {useState} from 'react';
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import React from "react"
const BooksContainer = (props) =>
{
const [clicked,setClicked] = useState(false)
const[bookName,setBookName] = useState("")
const [open, setOpen] = React.useState(false);
  
   const handleClose = () => {
     setOpen(false);
   };
    const handleClick = (event) =>
    {
        setBookName(event.target.innerText)
        setClicked(true)
        alert(event.target.innerText)
        
    } 
return(
    <div>
    <ul>
      {props.booksData.map((book) => {return(<li onClick={event => handleClick(event)} key ={book.volumeInfo.title}>{book.volumeInfo.title} </li>);}
        
      )}
    </ul>
    {setClicked && <div>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>
                           Book Details:
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                            
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
    </div>}
    
    </div>
)

}
export default BooksContainer;