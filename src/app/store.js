import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice'
import coinReducer from '../features/coin/CoinSlice'
import themeReducer from '../features/theme/ThemeSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        coin: coinReducer,
        theme: themeReducer
    },
})

