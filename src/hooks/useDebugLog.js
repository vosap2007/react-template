import { ENABLE_DEBUG_LOG } from '../config';

export const useDebugLog = (...logs) =>
  ENABLE_DEBUG_LOG && console.log(...logs);
