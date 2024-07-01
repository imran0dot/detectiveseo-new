import { createSlice } from "@reduxjs/toolkit";

const auditSlice = createSlice({
    name: "auditModal",
    initialState: {
        isActive: false,
    },
    reducers: {
        openAudit (state) {
            state.isActive = true
        },
        closeAudit(state){
            state.isActive = false
        }
    }
});

export const { openAudit, closeAudit } = auditSlice.actions;

export default auditSlice.reducer;
