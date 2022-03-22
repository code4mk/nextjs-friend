import { createSlice } from "@reduxjs/toolkit"

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    projectName: 'nextjs friend',
    projectVersion: ''
  },
  reducers: {
    version: (state, action) => {
      state.projectVersion = action.payload.version
    }
  }
})

export const {
  version
} = globalSlice.actions

export default globalSlice.reducer