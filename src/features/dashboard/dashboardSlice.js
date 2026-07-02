import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    displayWidth: 'pc'
}

const dashboardSlice=createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setPc(state) {
            state.displayWidth='pc'
        },
        setTabLend(state) {
            state.displayWidth='tab-lend'
        },
        setTabPort(state) {
            state.displayWidth='tab-port'
        },
        setTelLend(state) {
            state.displayWidth='tel-lend'
        },
        setTelPort(state) {
            state.displayWidth='tel-port'
        }
    }
})

export const {setPc, setTabLend, setTabPort, setTelLend, setTelPort} = dashboardSlice.actions;

export default dashboardSlice.reducer