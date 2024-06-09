import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const notify = (message) => toast(message);

export const fetchContacts = createAsyncThunk("contacts/fetchContacts",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts")
            console.log(response)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
});

export const addContact = createAsyncThunk("contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", contact);
            console.log(response)
            notify("New contact is added to list!");
            return response.data;
        } catch (error) {
            notify("Oh no! Something went wrong! try again.")
            return thunkAPI.rejectWithValue(error.message);
        }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            notify("Contact was deleted")
            return response.data;

        } catch (error) {
            notify("Oh no! Something went wrong! try again.")
            return thunkAPI.rejectWithValue(error.message);          
    }
});