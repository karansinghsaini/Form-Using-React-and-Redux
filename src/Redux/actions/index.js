export function addUser(name,salary,age) {
  return{
    type: 'ADD_USER',
    employee_name: name,
    employee_salary: salary,
    employee_age: age
    
  }
}

export function updateUser(id,name,salary,age) {
  return{
    type: 'UPDATE_USER',
    employee_id: id,
    employee_name: name,
    employee_salary: salary,
    employee_age: age
  }
}
