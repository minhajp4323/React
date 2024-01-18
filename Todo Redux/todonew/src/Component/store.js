import {configureStore} from '@reduxjs/toolkit'
import ReducerSlice from "./Reducers";

const store= configureStore({
    reducer:{
        todo:ReducerSlice
    }
})

export default store