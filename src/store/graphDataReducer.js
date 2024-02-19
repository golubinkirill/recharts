const CHANGE_GRAPH_VALUES = 'CHANGE_GRAPH_VALUES'


const defaultState = {
    VALUES:[],
    TYPE:'line',
}

export const graphDataReducer = (state = defaultState, action) => {
    switch(action.type){
        case CHANGE_GRAPH_VALUES:
            return {...state, VALUES:action.LISTS, TYPE:action.TYPE}
            
        default: return state;
    }
  }

export const createCustomerAction=(LISTS, TYPE="line")=>({type: 'CHANGE_GRAPH_VALUES', LISTS, TYPE})
