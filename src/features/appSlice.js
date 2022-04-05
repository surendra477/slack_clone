import { createSlice } from '@reduxjs/toolkit';
// const initialState = {
//   roomId: null,
// };

export const appSlice = createSlice({
  name: "app",
   initialState:{
    roomId: null,
  },
  reducers: {
    enterRoom: (state, action) => {
     state.roomId = action.payload.roomId;
    },
   
  },
  
});


export const { enterRoom } = appSlice.actions;

export default appSlice.reducer;
