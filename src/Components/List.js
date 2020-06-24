import React from 'react';
import '../Css/list.css';
import { connect } from 'react-redux';
import Form from './Form';
import { Button,Modal } from 'react-bootstrap';

class List extends React.Component {
    formModal;
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
        this.addNewUser = this.addNewUser.bind(this);
    }

    //adding new element to send the data to the Form Component
    addNewUser(item){
         this.formModal =  React.createElement(Form,{id:item.id, empName:item.employee_name, salary:item.employee_salary, age:item.employee_age});
         this.setState({});
   }
   
    render() {
        //fetching data from props
       const users = this.props.user.userReducer;

        //Storing data as a lsit element
       const userList = users.map((details) => {
           return (
               <tr key={details.id}
                onClick = { (e) => {            
                    this.addNewUser(details);
                    this.setState({ show: true });
                    } }>
                    <td >{details.id}</td>  
                    <td  >{details.employee_name}</td>
                    <td >{details.employee_salary}</td>
                    <td >{details.employee_age}</td>
                </tr>
           
        )
      }
    );

    return (
        <>        
            <table className='tablestyle'>
             <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>  
              <th>Salary</th>  
              <th>Age</th>
                    </tr>
             </thead>
             <tbody>
                 {userList}
             </tbody>
            </table>

            <Modal show={this.state.show} className='modal' size="sm" aria-labelledby="example-modal-sizes-title-sm"
>
                <Modal.Header>
                    <Modal.Title className='modaltitle'>Update The Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>{this.formModal}</Modal.Body>

                <Modal.Footer>
                    <Button className="secondary" onClick={(e) => { this.setState({ show: false }) }}>
                        Close
                     </Button>
                </Modal.Footer>
               
            </Modal>

          
      </>
    )
}

}

//sending redux state as props to the component 
const mapStateToProps = (state) => ({
        user: state  
})


export default connect(mapStateToProps)(List);