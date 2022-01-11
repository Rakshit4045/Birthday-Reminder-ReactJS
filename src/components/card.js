import React,{useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const Card = ({friend}) =>{
	const [name, setName] = React.useState('Unknown');
	const [dob, setDob] = React.useState('');
	const [img, setImg] = React.useState('');
	const {val} = useParams();

	useEffect(() => {
		const newPerson =  friend.find((person) => person.id === parseInt(val));
    	setName(newPerson.name);
    	setDob(newPerson.age.getDate().toString() + '/' + (newPerson.age.getMonth() + 1).toString() + '/' + newPerson.age.getFullYear().toString()); 
    	setImg(newPerson.img);
	}, [])

	return(
		<section className='card' style={{ marginBottom: '20px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 12px 0 rgba(0, 0, 0, 0.4)'}}>
			<img src={img} style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '1rem'}} alt='Profile'/>
			<h4 style={{margin: '1rem 0'}}>{name}</h4>
			<p style={{margin: '1rem'}}>{dob}</p> 
			<Link to='/' style={{textDecoration: 'none', color: 'blue', cursor: 'pointer'}}><b>Close</b></Link>
		</section>
	);
}

export default Card;