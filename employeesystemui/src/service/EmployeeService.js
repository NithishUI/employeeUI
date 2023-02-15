import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  savingEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }

  gettingEmployee() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  deletingEmployee(id) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
  }

  gettingEmployeeById(id) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
  }

  updatingEmployee(employee, id) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
  }
}

export default new EmployeeService();
