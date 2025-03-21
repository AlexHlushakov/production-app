import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
    >(
        'profile/fetchProfileData',
        async (_, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<Profile>(
                    '/profile',
                    {
                        headers: {
                            authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
                        },
                    },
                );

                return response.data;
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
