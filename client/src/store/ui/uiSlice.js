import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
   name: 'ui',
   initialState: {
       status: true,
   },
   reducers: {
       changeLanguage: (state) => {
             if (state.status) {
                state.status = false
             } else {
                state.status = true
             }
       },
   }
});


// Action creators are generated for each case reducer function
export const { changeLanguage } = uiSlice.actions;