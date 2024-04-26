import { configureStore } from "@reduxjs/toolkit";
import { SponsorsState, sponsorsReducer } from "./homiylar/sponsorsSlice";
export interface stateProps {
  sponsors :SponsorsState
}
export const store = configureStore({
  reducer: {
    sponsors: sponsorsReducer,
  },
});
