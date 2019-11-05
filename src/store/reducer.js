const initialState = {data:[]}

const articleReducers = (state=initialState, action) => {
    switch (action.type) {
      case 'SAVE_DATA_IN_STORE':
        console.log("SAVE_DATA_IN_STORE : ",action.data)
          return {
            ...state,
            data : action.data
        } 
      default:
        return {
            ...state
        }
    }
  };

  export default articleReducers;