import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { fetchSmurfs } from './../actions';

 const SmurfList = (props)=> {
    const { smurfs, isLoading } = props;

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    console.log('smurfList', smurfs);
    return(<div className="listContainer">
        {smurfs.map(item=>{
            return <Smurf key={smurfs.id} smurf={item} />
        })}
    </div>);
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    errors: state.errors,
  };
};
const mapActionsToState={
  fetchSmurfs: fetchSmurfs,
}
export default connect(mapStateToProps, mapActionsToState)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.