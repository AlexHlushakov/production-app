import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { NavigateOptions } from 'react-router-dom';
import { To } from 'history';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

// const authState: AuthState = {
//     isAuth: true,
//     users: [
//         {
//             id: 1,
//             username: 'Alex',
//         },
//     ],
//
// };

// export function createReduxStore(initialState?: StateSchema) {
//     return configureStore<StateSchema>({
//         reducer: {
//             user: userReducer,
//             loginForm: loginReducer,
//         },
//         devTools: true,
//         preloadedState: initialState,
//     });
// }

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: process.env.NODE_ENV === 'development',
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
