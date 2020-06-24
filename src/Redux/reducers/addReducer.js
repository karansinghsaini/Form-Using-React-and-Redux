import data from './data';
localStorage.setItem('users', JSON.stringify(data.data));
var users = JSON.parse(localStorage.getItem('users'))

var id = Math.max.apply(Math, users.map(function (o) { return o.id; }));
export const userReducer = (state=users, action) => {
    switch (action.type) {

        case 'ADD_USER':
            ++id;
            var new_user = [...state, {
                id: id,
                employee_name: action.employee_name,
                employee_salary: action.employee_salary,
                employee_age: action.employee_age,
            }]
            localStorage.setItem('users', JSON.stringify(new_user));
            window.location.href ="/";
            break;
            

        case 'UPDATE_USER':
            var u_id = action.employee_id;
            users[u_id - 1].employee_name = action.employee_name;
            users[u_id - 1].employee_salary = action.employee_salary;
            users[u_id - 1].employee_age = action.employee_age;

            var updated_user = [...state]
            localStorage.setItem('users', JSON.stringify(updated_user));
            window.location.href = "/";
            break;
       
        default:
            return state
    }   
}