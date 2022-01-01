import { createContext, useReducer } from 'react';
import { BEFORE_MONTH, NEXT_MONTH, SELECT_JOB } from './actionTypes';
import { request } from '@/utils/api';

const initialState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  jobData: [],
  selectedJob: null,
};

const Context = createContext({});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BEFORE_MONTH:
      return {
        ...state,
        year: state.month === 1 ? state.year - 1 : state.year,
        month: state.month === 1 ? 12 : state.month - 1,
      };
    case NEXT_MONTH:
      return {
        ...state,
        year: state.month === 12 ? state.year + 1 : state.year,
        month: state.month === 12 ? 1 : state.month + 1,
      };
    case SELECT_JOB:
      return {
        ...state,
        selectedJob: action.payload,
      };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

/**
 * 채용공고 불러오기
 */
const setJobs = async () => {
  const data = await request();
  initialState.jobData = data;
};

setJobs();

export { Context, Provider };
