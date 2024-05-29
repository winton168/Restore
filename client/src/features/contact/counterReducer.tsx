export const INCREMENT_COUNTER = "INCREMNENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMNENT_COUNTER";

export interface CounterState {
  data: number;
  title: string;
}

const initialState: CounterState = {
  data: 42,
  title: "YARC (yet another redux counter)",
};

export default function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        data: state.data + 1,
      };

    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - 1,
      };

    default:
      return state;
  }

  return state;
}
