import React from 'react';
import AvatarCollection from './avatar';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';



function AddingPerson({addPeople}) {
  
  const [displayAvatar, setDisplayAvatar] = React.useState(false);
  const [avatarImg, setAvatarImg] = React.useState('');
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState([]);
  const [date, setDate] = React.useState("");
  const [img, setImg] = React.useState('');
  
  const fetchImg = (src, ) => {
    setImg(src);
    setDisplayAvatar(false);
    console.log(avatarImg);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    
    <article style={{marginTop: '200px'}}>
      <form className='form' id='Form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name : </label>
          <input 
            type='text' 
            id='firstName' 
            name='firstName'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className='form-control'>
          <label htmlFor='age'>DoB :</label>
           <DatePicker  
             dateFormat="dd/MM/yyyy" 
             selected={date} 
             peekNextMonth 
             showMonthDropdown 
             showYearDropdown 
             dropdownMode= "scroll" 
             onChange={data => { 
               setDate(data); 
               setAge(data); 
               }} 
             >   
           </DatePicker> 
        </div>
        <div className='form-control'>
          <label htmlFor='age'>Image : </label>
          <input 
            type='text' 
            id='img' 
            name='img' 
            placeholder='Choose Avatar/Paste Link'
            value={img}
            onChange={(e) => setImg(e.target.value)}
            onClick={() => setDisplayAvatar(true)}
          ></input>
        </div>
        <button style={{width: 'auto'}} onClick={() => addPeople(name, age, img)}><Link to='/' style={{textDecoration: 'none', color: 'white'}}>add person</Link></button>
      </form>
      {displayAvatar ? <AvatarCollection fetchImg={fetchImg}/> : ""}
    </article>
  );
}

export default AddingPerson;
