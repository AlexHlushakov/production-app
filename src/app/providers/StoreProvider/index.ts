import { StoreProvider } from './ui/StoreProvider';
import { StateSchema, ThunkConfig } from './config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';

export {
    createReduxStore,
    StoreProvider,
    StateSchema,
    AppDispatch,
    ThunkConfig,
};
