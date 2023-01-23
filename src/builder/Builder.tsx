import mergeWith from 'lodash.mergewith';
import { useMemo, useReducer } from 'react';
import BuilderContext from './BuilderContext';
import { Action, BuilderEntity } from './types';

function reducer(state: BuilderEntity, action: Action) {
  switch (action.type) {
    case 'update': {
      return {
        ...mergeWith(state, action.payload, (objValue, srcValue) => {
          if (Array.isArray(objValue)) {
            return srcValue;
          }
          return undefined;
        }),
      };
    }
    default: {
      return state;
    }
  }
}

interface BuilderProps<T extends BuilderEntity> {
  children: React.ReactNode;
  initialState: T;
}

function Builder<T extends BuilderEntity>({ children, initialState }: BuilderProps<T>) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <BuilderContext.Provider value={value}>{children}</BuilderContext.Provider>;
}

export default Builder;
