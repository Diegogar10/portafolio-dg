import React, { useState } from 'react'

interface globalState {
  biography: boolean;
  portfolio: {
    active: boolean;
    idProject: number;
  }
}

const initialState: globalState = {
  biography: false,
  portfolio: {
    active: false,
    idProject: 1,
  }
}


export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const activeBio = () => {
    setState({
      ...state,
      biography:true,
    })
  };
  const inactiveBio = () => {
    setState({
      ...state,
      biography:false,
    })
  };
  const activePort = (id: number) => {
    setState({
      ...state,
      portfolio: {
        active: true,
        idProject: id,
      },
    })
  }
  const inactivePort = () => {
    setState({
      ...state,
      portfolio: {
        ... state.portfolio,
        active:false,
      },
    })
  }

  return {
    state,
    activeBio,
    inactiveBio,
    activePort,
    inactivePort
  }
}
