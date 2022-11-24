import { createSlice } from "@reduxjs/toolkit";
import { ContactData } from "../../FakeData";

const initialState = {
    value: ContactData,
};

export const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.value.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.value = state.value.filter(
                (contact) => contact.id !== action.payload.id
            );
        },
        updateName: (state, action) => {
            state.value.map((contact) => {
                if (contact.id === action.payload.id) {
                    contact.name = action.payload.nameUpdate;
                }
            });
        },
        updatePhone: (state, action) => {
            state.value.map((contact) => {
                if (contact.id === action.payload.id) {
                    contact.phone = action.payload.phoneUpdate;
                }
            });
        },
    },
});

export const { addContact, deleteContact, updateName, updatePhone } =
    contactSlice.actions;
export default contactSlice.reducer;
