import React, { useState } from 'react'

interface globalState {
  biography: boolean;
}

const initialState = {
  biography: false
}


export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const activeBio = () => {
    setState({
      biography:true,
    })
  };
  const inactiveBio = () => {
    setState({
      biography:false,
    })
  };

  return {
    state,
    activeBio,
    inactiveBio,
  }
}
