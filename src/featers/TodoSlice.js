
export const userSlice = createSlice({
    name: "user",
    initialState: {
      list: [],
    },
    reducers: {
      login: (state, action) => {
        state.user = action.payload;
      },
      
    },
  });
  
  export const { login, logout } = userSlice.actions;
  
  export const selectUser = (state) => state.user2.user;
  
  export default userSlice.reducer;