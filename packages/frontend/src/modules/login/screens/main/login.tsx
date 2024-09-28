'use client'

import { Box, Card, Stack, Typography } from "@mui/material"
import LoginForm from "../../components/login-form"
import Image from "next/image"
import Link from "next/link"
import { useTranslate } from "@/hooks/use-translate"

interface LoginProps {
    traceUrl: string;
    bbchainUrl: string;
}

export function Login({bbchainUrl, traceUrl}: LoginProps) {

    const loginT = useTranslate().login;
    
    return (
        <Box width='100vw' minHeight='100vh' display='flex' alignItems='center' justifyContent='center'>
            <Card elevation={8} sx={{
                width: '80%',
                height: '80vh',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Box sx={{
                    width: '50%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem'
                }}>
                    <LoginForm/>
                </Box>
                <Box sx={{
                    width: '50%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '0.75rem'
                }}>
                    <Image
                    src="/assets/CYCLOP_LOGO.jpg"  // Certifique-se de incluir a extensão do arquivo
                    alt="Logo da Empresa"
                    width={400}  // Define a largura da imagem
                    height={200}  // Define a altura da imagem
                    layout="intrinsic"  // Mantém as dimensões originais da imagem
                    />
                    <Stack direction='row' gap={1} alignItems='center'>
                        <Typography variant="h5">
                            {loginT.conjuctor}
                        </Typography>
                        <Link href={traceUrl} target="_blank">
                            <Image
                                src="/assets/TRACE_logo.png" 
                                alt="Logo da Empresa"
                                width={75} 
                                height={50}
                                layout="intrinsic"
                                style={{
                                    cursor: 'pointer'
                                }}
                            />
                        </Link>
                         <Typography variant="h5">
                            {loginT.developedBy}
                        </Typography>
                        <Link href={bbchainUrl} target="_blank">
                            <Image
                                src="/assets/bbchain-blue.png"
                                alt="Logo da Empresa"
                                width={100}
                                height={50}
                                layout="intrinsic"
                                style={{
                                    cursor: 'pointer'
                                }} 
                            />
                        </Link>
                    </Stack>
                </Box>
            </Card>
        </Box>
    )
}   