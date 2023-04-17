export default function createEmployeesObject(departmentName, employees) {
  const objct = {
    [departmentName]: employees,
  };
  return objct;
}
