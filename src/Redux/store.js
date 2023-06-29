import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import apiMiddleware from '../middleware/api'
import Authslice from './Authslice'

export const store = configureStore({
    reducer: {
        auth: Authslice
    },
    middleware: [thunk, apiMiddleware]
}) 