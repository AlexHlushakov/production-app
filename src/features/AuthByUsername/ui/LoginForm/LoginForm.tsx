import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
    getLoginUsername,
} from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import {
    loginByUsername,
} from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, username]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Login Form')} />
                {error && <Text text={t('Wrong Username or Password')} theme={TextTheme.ERROR} />}
                <Input
                    autofocus
                    type="text"
                    className={cls.input}
                    placeholder={t('Enter Username')}
                    onChange={onChangeUsername}
                    value={username}
                    disabled={isLoading}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Enter Password')}
                    onChange={onChangePassword}
                    value={password}
                    disabled={isLoading}
                />
                <Button
                    themeBtn={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Login')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;

// export const LoginForm = memo(({ className }: LoginFormProps) => {
//     const { t } = useTranslation();
//     const dispatch = useAppDispatch();
//     const username = useSelector(getLoginUsername);
//     const password = useSelector(getLoginPassword);
//     const isLoading = useSelector(getLoginIsLoading);
//     const error = useSelector(getLoginError);
//
//     const onChangeUsername = useCallback((value: string) => {
//         dispatch(loginActions.setUsername(value));
//     }, [dispatch]);
//
//     const onChangePassword = useCallback((value: string) => {
//         dispatch(loginActions.setPassword(value));
//     }, [dispatch]);
//
//     const onLoginClick = useCallback(async () => {
//         const result = await dispatch(loginByUsername({ username, password }));
//         if (result.meta.requestStatus === 'fulfilled') {
//             onSuccess();
//         }
//     }, [onSuccess, dispatch, password, username]);
//
//     return (
//         <DynamicModuleLoader
//             removeAfterUnmount
//             reducers={initialReducers}
//         >
//             <div className={classNames(cls.loginForm, {}, [className])}>
//                 <Text title={t('Login Form')} />
//                 {error && <Text text={t('Wrong Username or Password')} theme={TextTheme.ERROR} /> }
//                 <Input
//                     autofocus
//                     type="text"
//                     className={cls.input}
//                     placeholder={t('Enter Username')}
//                     onChange={onChangeUsername}
//                     value={username}
//                 />
//                 <Input
//                     type="text"
//                     className={cls.input}
//                     placeholder={t('Enter Password')}
//                     onChange={onChangePassword}
//                     value={password}
//                 />
//                 <Button
//                     themeBtn={ButtonTheme.OUTLINE}
//                     className={cls.loginBtn}
//                     onClick={onLoginClick}
//                     disabled={isLoading}
//                 >
//                     {t('Login')}
//                 </Button>
//             </div>
//         </DynamicModuleLoader>
//
//     );
// });
