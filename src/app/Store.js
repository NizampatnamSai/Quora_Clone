import { configureStore } from "@reduxjs/toolkit";
import usereducer from "../featers/UserSlice";
import questionReducer from "../featers/questionSlice";

// import questionReducer from "../features/questionSlice";

// export const selectUser = (state) => state.user2.user;

export default configureStore({
  reducer: {
    user2: usereducer,
    question: questionReducer,
  },
});
