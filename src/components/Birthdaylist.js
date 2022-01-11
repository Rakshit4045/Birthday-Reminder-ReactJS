import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

function Birthdaylist(props){
	
	const today = new Date();

	const [checkBirthday, setCheckBirthday] = React.useState(false);

	const { id, name, age, img } = props;
	const removePerson = useContext(removePersonContext);

	React.useEffect(() => {
		if(today.getDate() === age.getDate() && today.getMonth() === age.getMonth()){
			setCheckBirthday(true);
		}
	},[]);

	return(
		<section className={`item + ${checkBirthday ? "showBirthday" : ""}` } key={id} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 10px'}}>
				<img src={img} alt='not found' style={{borderRadius:'50%', width:'60px', height: '60px'}}/>
				<section style={{textAlign:'left', margin: '10px', width: '120px'}}>
					<h4><b><Link style={{textDecoration: 'none', color: 'black'}} to={`/person/${id}`}>{name}</Link></b></h4>
					{checkBirthday ? <p>Birthday today</p> : <p style={{marginTop:'5px'}}>{today.getFullYear() - age.getFullYear()} year</p>}
				</section>
			<button style={{ width: '25%', height: '30px', marginTop: '15px', border: 'none', boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.4), 0 3px 5px 0 rgba(0, 0, 0, 0.4)', background: 'hsl(205deg 78% 60%)', borderRadius: '5px', padding: "0.1rem 0.5rem" }} onClick={() => removePerson(id)}>remove</button>
		</section>
	);
}

export default Birthdaylist;
export const removePersonContext = React.createContext();