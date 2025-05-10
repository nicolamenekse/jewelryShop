import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, addUser, updateUserStatus } from './operations';

const initialState = {
    items: [],
    isLoading: false,
    error: null,
    genderFilter: null,
    availabilityFilter: null,
    ageRange: { min: 18, max: 100 }
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setGenderFilter: (state, action) => {
            state.genderFilter = action.payload;
        },
        setAvailabilityFilter: (state, action) => {
            state.availabilityFilter = action.payload;
        },
        setAgeRange: (state, action) => {
            state.ageRange = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateUserStatus.fulfilled, (state, action) => {
                const index = state.items.findIndex(user => user.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            });
    }
});

export const { setGenderFilter, setAvailabilityFilter, setAgeRange } = usersSlice.actions;
export const usersReducer = usersSlice.reducer; 