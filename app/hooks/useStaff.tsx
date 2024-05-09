import { useEffect, useReducer } from "react";
import axios from "axios";

interface Employee {
  id: number;
  employeeId: String;
  name: String;
  email: String;
  password: String;
  phone: String;
  designation: String;
  address: String;
  joinDate: String;
  role: String;
  blood: String;
}

interface State {
  data: Employee[] | null;
  error: string | null;
  loading: boolean;
}

const initialState: State = {
  data: null,
  error: null,
  loading: false,
};

enum ActionType {
  LOADING,
  SUCCESS,
  FAILED,
}

type Action =
  | { type: ActionType.LOADING }
  | { type: ActionType.SUCCESS; payload: Employee[] }
  | { type: ActionType.FAILED; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.FAILED:
      return {
        loading: false,
        error: action.payload,
        data: null,
      };
    case ActionType.SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return initialState;
  }
};

const useEmployee = () => {
  const [{ data, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    fetchEmployeeList();
  }, []);

  const fetchEmployeeList = async () => {
    //const sessionToken = cookie.get("session_token");
    dispatch({ type: ActionType.LOADING });
    try {
      const response = await axios.get(`http://167.71.224.38/staff`);
      const EmployeeData = response.data;
      //console.log('from usecategory', CategoryData)
      dispatch({ type: ActionType.SUCCESS, payload: EmployeeData });
    } catch (error: any) {
      //console.log(error);
      dispatch({
        type: ActionType.FAILED,
        payload: error?.response.error,
      });
    }
  };
  //  add employee
  const addEmployee = async (data: any) => {
    try {
      console.log("i am in useEmployee");
      const response = await axios.post(`http://167.71.224.38/staff`, data);
      const EmployeeData = response.data;
      console.log("response i get after sending post request", EmployeeData);
      //dispatch({ type: ActionType.SUCCESS, payload: CategoryData });
    } catch (error: any) {
      console.log(error);
    }
  };

  //   Delete amployee
  const deleteEmployee = async (data: any) => {
    try {
      console.log("i am in useEmployee delete employee",data);
      const response = await axios.delete(
        `http://167.71.224.38/staff/${data}`
      );
      const EmployeeData = response.data;
      console.log("response i get after sending post request", EmployeeData);
      //dispatch({ type: ActionType.SUCCESS, payload: CategoryData });
    } catch (error: any) {
      console.log(error);
    }
  };

  return { data, loading, error, addEmployee, deleteEmployee };
};

export default useEmployee;
