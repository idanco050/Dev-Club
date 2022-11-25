import {useState} from 'react';
import BooksContainer from '../BooksContainer/BooksContainer'
const SearchBar = (props) => 
{
    const [bookName, setBookName] = useState('');
    const [data, setdata] = useState([]);
    const[invaildInput,setInvalidInput] = useState('')
    
  
    const handleSubmit = event => {
if (bookName.length > 2){
        fetch('https://www.googleapis.com/books/v1/volumes?q='+ bookName)
  .then((response) => response.json())
  .then((data) => setdata(data.items));
      console.log(data)
      event.preventDefault();
      setInvalidInput("")
}
else
{
    setInvalidInput("Names of three characters or more must be entered")
}
    };
  
    return (
      <div>
          <h1>Books Search</h1>
          <input
            id="book_name"
            name="book_name"
            type="text"
            onChange={event => setBookName(event.target.value)}
            value={bookName}
          />
           <button onClick={handleSubmit} type="submit">Search</button>
    <div>{invaildInput}</div>
    <div>
    <BooksContainer booksData = {data}/>
    </div>
    
      </div>
    );
}
export default SearchBar;