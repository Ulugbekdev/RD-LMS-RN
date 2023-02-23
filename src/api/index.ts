//axios
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
//constants
import { apiUrls, asyncStorageKeys } from '../constants';
//types
import { ApiMethodEnum, ResponseType, TokenType } from '../types';

type ApiType = (
    url: string,
    method?: ApiMethodEnum,
    data?: object,
    config?: object
) => Promise<ResponseType>

export const api: ApiType = async (url, method = ApiMethodEnum.get, data, config = {}) => {
    const tokenJson = await AsyncStorage.getItem(asyncStorageKeys.token);
    const token: TokenType | null = tokenJson ? JSON.parse(tokenJson) : null;
    const removeToken = async () => await AsyncStorage.removeItem(asyncStorageKeys.token);
    const initial = axios.create({
        baseURL: apiUrls.baseUrl,
        headers: {
            'Authorization': `Bearer ${token && token.access}`,
            // 'Accept-Language': lang 
        },
    });

    initial.interceptors.response.use((res) => res, async (err) => {
        if (err.response) {
            if (err.response.status === 401) {
                if (err.response.data.messages && err.response.data.messages[0].token_type === 'access') {
                    if (!token) {
                        removeToken();
                    } else {
                        const resRefresh = await initial.post(apiUrls.accounts.refresh, {
                            refresh: token.refresh,
                        });
                        if (resRefresh.status === 200) {
                            await AsyncStorage.setItem(asyncStorageKeys.token, JSON.stringify({
                                access: resRefresh.data.access,
                                refresh: token.refresh,
                            }));
                            removeToken();
                        } else if (resRefresh.status === 401) {
                            removeToken();
                        }
                    }
                } else if (err.response.data.code === 'token_not_valid') {
                    removeToken();
                }
            }
            return err.response;
        }
        return err;
    });

    if (method === ApiMethodEnum.get) {
        try {
            return await initial.get(url, config);
        } catch (error: any) {
            return error;
        }
    }
    if (method === ApiMethodEnum.post) {
        try {
            return await initial.post(url, data, { ...config, maxContentLength: Infinity, maxBodyLength: Infinity });
        } catch (error: any) {
            return error;
        }
    }
    if (method === ApiMethodEnum.delete) {
        try {
            return await initial.delete(url, config);
        } catch (error: any) {
            return error;
        }
    }
    if (method === ApiMethodEnum.patch) {
        try {
            return await initial.patch(url, data, config);
        } catch (error: any) {
            return error;
        }
    }
};
