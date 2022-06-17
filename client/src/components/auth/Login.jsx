import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../utils/validation/Login";

import * as S from "./style";

import Text from "../../ui/text/Text";
import { TextInput } from "../../ui/textInput/TextInput";
import { Checkbox } from "../../ui/checkbox/Checkbox";
import Button from "../../ui/button/Button";


const Login = () => {
    const navigate = useNavigate()
    const {
        control,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <S.AuthForm onSubmit={handleSubmit(onSubmit)}>
            <S.Close onClick={() => navigate(-1)} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.771341 15C0.57375 15 0.376158 14.9248 0.226034 14.7736C-0.0753447 14.4722 -0.0753447 13.9836 0.226034 13.6823L13.6826 0.226028C13.984 -0.0753428 14.4726 -0.0753428 14.774 0.226028C15.0753 0.5274 15.0753 1.016 14.774 1.31756L1.31759 14.7736C1.16634 14.9239 0.968745 15 0.771341 15Z" fill="#404040"/>
                <path d="M14.2288 15C14.0313 15 13.8339 14.9248 13.6835 14.7736L0.226034 1.31756C-0.0753447 1.016 -0.0753447 0.5274 0.226034 0.226028C0.527413 -0.0753428 1.01602 -0.0753428 1.31759 0.226028L14.774 13.6823C15.0753 13.9836 15.0753 14.4722 14.774 14.7736C14.6227 14.9239 14.4253 15 14.2288 15Z" fill="#404040"/>
            </S.Close>
            <Text as='h2' typography="xxxl">Войдите в аккаунт</Text>
            <Text as='p' typography="m" TextColor="gray800">
                Войдите в существующий аккаунт для дальнейшего оформления заказа и его отслеживания
            </Text>
            <Controller
                name={'email'}
                control={control}
                defaultValue=""
                render={({ field }) =>
                    <TextInput
                        {...field}
                        placeholder="Введите E-mail"
                        size='m'
                        borderR='20px'
                        fWeight='light'
                        fz='m'
                        error={Boolean(errors.email?.message)}
                        hint={errors?.email && errors.email?.message}
                    />
                }
            />

            <Controller
                name={'password'}
                control={control}
                defaultValue=""
                render={({ field }) =>
                    <TextInput
                        {...field}
                        theme="password"
                        placeholder="Введите пароль"
                        size='m'
                        borderR='20px'
                        fWeight='light'
                        fz='m'
                        error={Boolean(errors.password?.message)}
                        hint={errors?.password && errors.password?.message}
                    />
                }
            />

            <S.AuthFooter>
                <Controller
                    name={'acceptRemember'}
                    control={control}
                    defaultValue={false}
                    render={({ field }) =>
                        <Checkbox
                            {...field}
                            label="Запомнить"
                            gap="10px"
                        />
                    }
                />
                <Text as='span' typography='m'>Забыли пароль?</Text>
            </S.AuthFooter>
            <Button variant="fill" size='m' borderR='20px' type="submit">Войти</Button>
            <S.Divider/>
            <S.ForgotPassword>
                <Text typography='m' as='span' TextColor="gray800" weight="regular">Не зарегестрированы?</Text>
                <Link to='/auth/registration'>
                    <Text typography='m' as='span' TextColor="gray900" weight="medium">Создать аккаунт</Text>
                </Link>
            </S.ForgotPassword>
        </S.AuthForm>
    );
};

export default Login;