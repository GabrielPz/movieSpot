import {AuthResponseDTO, UserDTO} from '@/entities/api-models'

interface LocalStorageApiToken {
    key: 'tokenInfo';
    value: AuthResponseDTO;
}
interface LocalStorageApiUser {
    key: 'userInfo';
    value: UserDTO;
}
interface LocalStorageBaseUrl {
    key: 'BASE_URL';
    value: string;
}
interface LocalStorageLanguageDefault {
    key: 'languageDefault';
    value: 'en' | 'pt' | 'fr';
}
interface LocalStorageRememberMe {
    key: 'rememberMe';
    value: boolean;
}

interface LocalStorage {
    tokenInfo: LocalStorageApiToken;
    userInfo: LocalStorageApiUser;
    BASE_URL: LocalStorageBaseUrl;
    languageDefault: LocalStorageLanguageDefault;
    rememberMe: LocalStorageRememberMe;
}

export function setLocalStorageItem<
TKey extends LocalStorage[keyof LocalStorage]['key'],
>({ key, value }: { key: TKey; value: LocalStorage[TKey]['value'] }): void {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (error) {
        console.error('Error setting localStorage item:', error);
    }
}

export function getLocalStorageItem<
    TKey extends LocalStorage[keyof LocalStorage]['key'],
>(key: TKey): LocalStorage[TKey]['value'] | null {
    try {
        const serializedValue = localStorage.getItem(key);

        if (serializedValue !== null && serializedValue !== undefined) {
        return JSON.parse(serializedValue) as TKey;
        }
        // eslint-disable-next-line no-empty
    } catch (error) {}
    return null;
}

export function removeLocalStorageItem(
key: LocalStorage[keyof LocalStorage]['key'],
): void {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('Error removing localStorage item:', error);
    }
}

export function clearLocalStorage() {
    return localStorage.clear();        
}
