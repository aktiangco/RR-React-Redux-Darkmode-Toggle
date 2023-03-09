import { configureStore } from '@reduxjs/toolkit'
// importing Slice
import modeReducer from './features/modeSlice'


// setting up store
export const store = configureStore({
    reducer: {
        // accessing darkMode
        mode: modeReducer
    }
})
