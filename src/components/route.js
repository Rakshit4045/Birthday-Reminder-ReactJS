import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './main';
import AddingPerson from './People';
import Card from './card';


function Routing(){
	const [friend, setFriend] = React.useState([]);

	const addPeople = (name, age, img) => { 
		const id = friend.length + 1;
		const newObj = {id, name, age, img};
		setFriend([...friend, {...newObj}]);
	}

	return <Router>
	    <Routes>
	      <Route exact path='/' element={<Main friend={friend}/>} />
	      <Route path='/addperson' element={<AddingPerson addPeople={addPeople}/>} />
	      <Route path='/person/:val' element={<Card friend={friend}/>} />
	    </Routes>
  </Router>
}

export default Routing;