
import {configureStore} from '@reduxjs/toolkit';

import { cartreducer } from './Reducer/cartreducer';

 export const store=configureStore(
    {
        reducer:cartreducer
    }
    
 )