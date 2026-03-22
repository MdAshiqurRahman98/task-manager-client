import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'Md Ashiqur Rahman',
    email: 'mdashiqurrahman@gmail.com',
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
});

export default userSlice.reducer;