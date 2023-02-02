import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


export const userSlice = createSlice({
    //Nombre
    name: 'users',
    //Cómo arranca el estado
    initialState: {
        list:[]
    },
    reducers:{
        setUserList: ( state , action ) => {
            state.list = action.payload;
        }
    }
})

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

export const fetchAllUsers = () => ( dispatch ) => {
    
    axios.get('https://reqres.in/api/users?page=2')
    .then((response) => {
        dispatch(setUserList(response.data.data));
    }).catch((error) => console.log(error))

}