import { createContext } from 'react';
import { BuilderContextValue, BuilderEntity } from './types';

export default createContext<BuilderContextValue<BuilderEntity>>(undefined);
