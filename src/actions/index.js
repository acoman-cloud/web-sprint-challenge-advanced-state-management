import axios from 'axios';
export const LOAD_START = 'FETCH_START';
export const LOAD_SUCCESS = 'FETCH_SUCCES';
export const LOAD_FAIL = 'FETCH_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';

export const fetchSmurfs= ()=>{
	return(dispatch)=>{
		dispatch({type:LOAD_START});

		axios.get('http://localhost:3333/smurfs')
			.then(esp=>{
				console.log('fetchSmurfs',esp.data)
				dispatch({type:LOAD_SUCCESS, payload:esp.data})
			})
			.catch(err=>{
				console.log(err);
				dispatch({type:LOAD_FAIL, payload:err,}) 
			})
	}
}

export const addSmurf=(nam, pos, nick, des)=>{
	return(dispatch)=>{
		//dispatch({type:LOAD_START});
		axios.post('http://localhost:3333/smurfs', {
			id:Date.now(),
			name: nam,
			nickname:nick,
			position:pos,
			description:des,
		})
		.then(esp=>{
    	console.log('addSmurf',esp);
			dispatch({type:LOAD_SUCCESS, payload:esp.data})
  	})
  	.catch(err=>{
    	console.log(err);
  	});
	}
}

export const setError=(err)=>{
	return(dispatch)=>{
		dispatch({type:SET_ERROR, payload:err})
	}
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.