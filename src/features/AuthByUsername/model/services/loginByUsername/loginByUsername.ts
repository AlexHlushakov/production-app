import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
    >(
        'login/loginByUsername',
        async (authData, thunkApi) => {
            const { extra, dispatch, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.post<User>('/login', authData);

                if (!response.data) {
                    throw new Error();
                }

                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                dispatch(userActions.setAuthData(response.data));
                extra.navigate('/profile');
                return response.data;
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );

// export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
//     'login/loginByUsername',
//     async (authData, thunkAPI) => {
//         try {
//             const response = await axios.post<User>('http://localhost:8000/login', authData);
//
//             if (!response.data) {
//                 throw new Error();
//             }
//
//             localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
//             thunkAPI.dispatch(userActions.setAuthData(response.data));
//
//             return response.data;
//         } catch (e) {
//             // eslint-disable-next-line no-console
//             console.log(e);
//             return thunkAPI.rejectWithValue('error');
//         }
//     },
// );
