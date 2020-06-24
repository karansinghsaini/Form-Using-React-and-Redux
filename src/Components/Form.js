import React from 'react';
import '../Css/form.css';
import { connect } from 'react-redux';
import {addUser, updateUser} from '../Redux/actions/index';


 
class Form extends React.Component {
isFirstLoad = true;
   constructor(props){
       super(props);      
       this.state = {
           id: 0,
           name: '',
           salary: '',
           age:''
       }       
       this.handleSubmit = this.handleSubmit.bind(this);
       this.getPropsFromParent = this.getPropsFromParent.bind(this);
   }

    //getting props on mounting
   componentDidMount() {
       this.getPropsFromParent();
   }

    //function to set prop data to the state
   getPropsFromParent(){
    var props = this.props;
    this.setState({id:props.id,age:props.age,name:props.empName,salary:props.salary})
    }

/*    componentDidUnmount() {
     this.setState ({
         id: 0,
         name: '',
         salary:'',
         age:'' 
     })
 }*/

    handleSubmit = (e) => {

        e.preventDefault();
        //if old user then updates it's data
        if (this.state.id > 0) {
            this.props.updateUser(this.state.id, this.state.name, this.state.salary, this.state.age);
        }
        //if new user then adds the new data 
        else {
            this.props.addUser(this.state.name, this.state.salary, this.state.age);
        }
    }

   render() {   
       if(this.state.id!==this.props.id){
        this.getPropsFromParent();
       }
    return (
        <div>
            <h1>Fill The Details</h1>
            <form onSubmit={this.handleSubmit} >

                <label htmlFor='Name'>Name</label>
                <input type='text'  value={this.state.name} required onChange={e => this.setState({name : e.target.value})} /><br /><br />

                <label htmlFor='Salary'>Salary</label>
                <input type='number' value={this.state.salary} required  onChange={e => this.setState({salary : e.target.value})}/><br /><br />

                <label htmlFor='Age'>Age</label>
                <input type="number" id='age' value={this.state.age} required  onChange={e => this.setState({age : e.target.value})}/><br /><br />
                
                <input type='submit' value='Submit' />
            </form>   
            
        </div>
    );
}
}

//sending redux actions as props
const mapDispatchToProps = {
    addUser,
    updateUser
}

export default connect(null,mapDispatchToProps)(Form);