

"use client"

import { useEffect, useReducer } from "react";
import axios from "axios";
import Cookie from "universal-cookie";


const cookie = new Cookie();

const urllocal ="https://training-institute-backend-1.onrender.com"
// const urllive = "https://training-institute-backend.onrender.com"
// const urllive = "http://139.59.0.106:8080"

interface Event {
    id: number;
    date: number;
  month: String;
  heading: String;
  venue: String;
  state: String;
  city: String;
  detail: String;
  timeStart: String;
  timeEnd: String;

}



interface State {
  data: Event[] | null;
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
  | { type: ActionType.SUCCESS; payload: Event[] }
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

const useEvents = () => {
  const sessionToken = cookie.get("session_token");
  const [{ data, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    fetchEventList();
  }, []);

  const fetchEventList = async () => {
    //const sessionToken = cookie.get("session_token");
    dispatch({ type: ActionType.LOADING });
    try {
      const response = await axios.get(
        `${urllocal}/events`);
      const EventData = response.data
      //console.log('from EventData', EventData)
      //console.log('from EventData reverse', EventData.reverse())
      dispatch({ type: ActionType.SUCCESS, payload: EventData });
    } catch (error: any) {
      //console.log(error);
      dispatch({
        type: ActionType.FAILED,
        payload: error?.response,
      });
    }
  };


//  add event 
  const addEvent = async (data:any) => {
    try {
        console.log('i am in useEvent')
        const response = await axios.post(
          `${urllocal}/events`,data,{
            headers: {
              ...(sessionToken
                ? { Authorization: `Bearer ${sessionToken}` }
                : null),
            },
          });
        const EventData = response.data
        //console.log('response i get after sending post request', EventData)
        //dispatch({ type: ActionType.SUCCESS, payload: CategoryData });
      } catch (error: any) {
        console.log(error);
      }
  }

//   Delete event 
  const deleteEvent = async (data:any) => {
    try {
        //console.log('i am in useEvent delete event',data)
        const response = await axios.delete(
          `${urllocal}/${data}`,{
            headers: {
              ...(sessionToken
                ? { Authorization: `Bearer ${sessionToken}` }
                : null),
            },
          });
        const EventData = response.data
        console.log('response i get after sending post request', EventData)
        //dispatch({ type: ActionType.SUCCESS, payload: CategoryData });
      } catch (error: any) {
        console.log(error);
      }
  }

  return { data, loading, error, addEvent, deleteEvent };
};

export default useEvents;