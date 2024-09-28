import axios from 'axios';
import { setupInterceptors } from './interceptors/index';

export const apiCyclopV1 = axios.create({});
setupInterceptors(apiCyclopV1);
