
import { FETCH_SMURF_START } from  '../actions';
import { FETCH_SMURF_FAIL } from  '../actions';
import { FETCH_SMURF_SUCCESS } from  '../actions';


import { POST_SMURF } from  '../actions';
import { POST_SMURF_FAIL } from  '../actions';
import { POST_SMURF_SUCCESS } from  '../actions';



const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export const reducer = (state = initialState, action)  => {

  

  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ""
      };
      case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: "",
        smurfs: [...state.smurfs, ...action.payload]

      };
      case FETCH_SMURF_FAIL:
      return {
        ...state,
        fetchingSmurfs:false ,
        error: action.payload
      };
      case POST_SMURF:
      return {
        ...state,
        addingSmurf: true,
        error: ""
      };
      case POST_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        error: "",
        smurfs: [ ...action.payload]
      };
      case POST_SMURF_FAIL:
      return {
        ...state,
        addingSmurf:false ,
        error: action.payload
      };
    default:
      return state;
  }

}

