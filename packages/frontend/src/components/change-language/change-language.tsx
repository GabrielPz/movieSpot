'use client'

import { FlagEn, FlagEs, FlagPt } from "../../../public/assets/Flags";
import { Box, Card, MenuItem, Select, Typography } from "@mui/material";
import styles from './styles.module.css'
import { useEffect, useState } from "react";
import { useLanguage } from "@/utils/language";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/local-storage";
import Image from "next/image";

const cardStyle = {
    width: '100%',
    height: '50%',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center' // Example stronger box shadow
};

export default function ChangeLanguage(){
    const [languageState, setLanguageState] = useState<'en' | 'pt' | 'fr'>('en');
    const {setLanguage} = useLanguage();
    const languageStorage = getLocalStorageItem('languageDefault');

    useEffect(() => {
        if (languageStorage) {
        setLanguageState(languageStorage);
        }
    }, []);

    useEffect(() => {
        setLanguage({
          language: languageState,
        });
        setLocalStorageItem({
          key: 'languageDefault',
          value: languageState,
        });
      }, [languageState]);

    const handleChangeLanguage = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLanguageState(event.target.value as 'en' | 'pt' | 'fr');
    };

    return (
        <Box sx={{
            position: 'absolute',
            cursor: 'pointer',
            top: 10,
            right: 5,
            zIndex: 9998,
        }}>
            <Card elevation={10}>
                <Select
                    value={languageState}
                    onChange={(e: any) => {handleChangeLanguage(e)}}
                    style={{width: '100px', height: '35px',}}
                    displayEmpty
                    renderValue={(selected: string) => {
                        switch (selected) {
                            case 'pt':
                                return (
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <FlagPt /> PT
                                    </Box>
                                );
                            case 'en':
                                return (
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <FlagEn /> EN
                                    </Box>
                                );
                            case 'fr':
                                return (
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <Image
                                            src="/assets/Flags/fr.png"
                                            alt=""
                                            width={20}
                                            height={15}
                                        /> FR
                                    </Box>
                                );
                            default:
                                return null;
                        }
                    }}
                >
                    <MenuItem value="pt" sx={{gap: '0.25rem'}}>
                        <FlagPt /> PT
                    </MenuItem>
                    <MenuItem value="en" sx={{gap: '0.25rem'}}>
                        <FlagEn /> EN
                    </MenuItem>
                    <MenuItem value="fr" sx={{gap: '0.25rem'}}>
                    <Image
                        src="/assets/Flags/fr.png"
                        alt=""
                        width={20}
                        height={15}
                    /> FR
                    </MenuItem>
                </Select>
            </Card>
        </Box>
    )
}
