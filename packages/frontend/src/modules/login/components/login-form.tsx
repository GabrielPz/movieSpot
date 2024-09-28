'use client'

import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import { LoadingButton } from '@mui/lab';
import {useTheme} from '@mui/material/styles'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useLogin } from "@/services/auth";
import { setLocalStorageItem } from "@/utils/local-storage";
import { axiosDefaultCatch } from "@/utils/api-handle-errors";
import { toast } from "react-toastify";
import { useTranslate } from "@/hooks/use-translate";

export default function LoginForm(){
    const theme = useTheme();
    const router = useRouter();
    const loginT = useTranslate().login;
    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const [showPassword, setShowPassword] = useState(false)
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    const {control, handleSubmit, formState: { errors }} = useForm<{
        username: string;
        password: string;
    }>({
        resolver: yupResolver<{
            username: string;
            password: string;
        }>(
            Yup.object().shape({
                username: Yup.string().required('Please enter a username'),
                password: Yup.string().required('Please enter a password')
            })
        )
    })

    const {mutate: login, isPending: loginLoading} = useLogin('');
    const onSubmit = () => {
        console.log('entrou no onSubmit')
        void handleSubmit(
            (data) => {
                console.log(data)
                login(
                    {
                        body: {
                            username: data.username,
                            password: data.password
                        }
                    },
                    {
                        onSuccess(resData) {
                            setLocalStorageItem({
                                key: 'tokenInfo',
                                value: resData,
                            });
                            setLocalStorageItem({
                                key: 'userInfo',
                                value: {
                                    username: data.username
                                },
                            });
                            router.push('/projects');
                        },
                        onError: (err) => {
                            toast.error('Invalid Credentials')
                        },
                    },
                    
                )
            },
            () => {
                toast.error('Complete all the fileds in the forms');
            },
        )();
    }

    return (
        <Box sx={{
            width: '70%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Typography variant="h3" color='black' alignSelf='flex-start'>
                {loginT.administrativePanel}
            </Typography>
            <Typography variant="h3" color='black' alignSelf='flex-start'>
                {loginT.signIn}
            </Typography>
            <Typography variant="subtitle1" color='lightgray' alignSelf='flex-start'>
                {loginT.signInSubtittle}
            </Typography>
            <Typography variant="subtitle2" color='gray' alignSelf='flex-start'>
                {loginT.username}
            </Typography>
            <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <FormControl variant="outlined" sx={{ width: '100%' }}>
                        <InputLabel htmlFor="outlined-adornment-user">{loginT.user}</InputLabel>
                        <OutlinedInput
                            {...field}
                            id="outlined-adornment-user"
                            endAdornment={<InputAdornment position="end"><PersonIcon /></InputAdornment>}
                            label={loginT.user}
                            error={Boolean(errors.username)}
                        />
                    </FormControl>
                )}
            />

            <Typography variant="subtitle2" color='gray' alignSelf='flex-start'>
                {loginT.password}
            </Typography>
            <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <FormControl variant="outlined" sx={{ width: '100%' }}>
                        <InputLabel htmlFor="outlined-adornment-password">{loginT.password}</InputLabel>
                        <OutlinedInput
                            {...field}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label={loginT.password}
                            error={Boolean(errors.password)}
                        />
                    </FormControl>
                )}
            />
            <LoadingButton 
                sx={{
                    textTransform: 'capitalize',
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    width: '100%',
                    borderRadius: '30px'
                }}
                loading={loginLoading}
                onClick={handleSubmit(onSubmit)}
            >
                {loginT.signIn}
            </LoadingButton>
        </Box>
    )
}