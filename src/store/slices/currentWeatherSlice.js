import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weather: {
        main: {
            temp: 0,
        },
    },
    isLoading: false,
    response: {
        status: 0,
        message: ''
    },
};

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
      fetchCurrentWeather(state) {
        state.isLoading = true;
      },
      fetchCurrentWeatherSuccess(
        state,
        action
      ) {
        state.isLoading = false;
        state.weather = action.payload.data;
        state.response = {
          status: action.payload.status,
          message: action.payload.statusText,
        };
      },
      fetchCurrentWeatherError(
        state,
        action,
      ) {
        state.isLoading = false;
        state.response = {
          status: action.payload.status,
          message: action.payload.statusText,
        };
      },
    },
  });

export default currentWeatherSlice.reducer;