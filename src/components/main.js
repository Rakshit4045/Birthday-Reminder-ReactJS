import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import Birthdaylist, {removePersonContext} from './Birthdaylist';


function Main({friend}){

	const today = new Date();

	const [person, setPerson] = React.useState([...friend]);
	const [birthdayToday, setBirthdayToday] = React.useState([]);
	const [btnName, setBtnName] = React.useState('Clear All');

	const removeAll = () => {
		if(person.length !== 0){
		  setPerson([]);
		  setBtnName('Undo');
		}else{
		  setPerson(friend);
		  setBtnName('Clear All');
		}
	}


	useEffect(() => {
		const people = person.filter((data) => (data.age.getDate() === today.getDate() && data.age.getMonth() === today.getMonth()));
		setBirthdayToday([...people]);
		const allPeople = person.filter((data) => (data.age.getDate() !== today.getDate() || data.age.getMonth() !== today.getMonth()));
		setPerson([]);
		setPerson([...allPeople]);
	},[]);

	const removePerson = (id) => {
		setPerson((people) => {
			return people.filter((data) => data.id !== id);
		});
		setBirthdayToday((people) => {
			return people.filter((data) => data.id !== id);
		})
	}

	return (
	  <section className='container' style={{ marginTop: '80px', marginBottom: '20px', width: '300px', height: 'auto',  background:'white', borderRadius:'5px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 12px 0 rgba(0, 0, 0, 0.4)'}}>
	    <div style={{width: '100%',display:'flex', justifyContent: 'space-between'}}>
	      <p style={{fontSize: '20px',color: 'black', padding:'10px 20px', marginBottom:'0px'}}><b>{birthdayToday.length} birthdays today</b></p>
	      <button className='btn' style={{background:'hotpink', margin: '10px', border: 'none', borderRadius: '2px', padding: "0.1rem 0.5rem", boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.4), 0 3px 5px 0 rgba(0, 0, 0, 0.4)' }} ><Link to='/addperson' style={{textDecoration: 'none', color: 'white'}}>ADD</Link></button>
	    </div>
	    <hr></hr>
	     

	     <removePersonContext.Provider value={removePerson}> 
	     	<section style={{ width:'100%',minHeight:'50px', maxHeight:'460px', overflow:'scroll', marginTop: '0px' }} > 
	     		{birthdayToday.map((birthday) => {  
		          return (  
		            		<Birthdaylist key={birthday.id} {...birthday} ></Birthdaylist>  
		          	);  
		        		})  
		     	} 
		       {person.map((birthday) => { 
		         return ( 
		           		<Birthdaylist key={birthday.id} {...birthday}></Birthdaylist> 
		         	); 
		       		}) 
		     	} 
		     </section> 
	     </removePersonContext.Provider> 
	      <div> 
	      	 
	      </div> 
	    <hr></hr>
	    <button className='btn' style={{background:'hotpink', width:'90%', height: '30px', margin: '10px', border: 'none', borderRadius: '2px', padding: "0.1rem 0.5rem", boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.4), 0 3px 5px 0 rgba(0, 0, 0, 0.4)', color: 'white'}} onClick={removeAll}>{btnName}</button>
	    
	  </section>  
	);
}

export default Main; 