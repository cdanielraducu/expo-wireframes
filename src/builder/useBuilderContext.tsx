import { useCallback, useContext } from 'react';
import BuilderContext from './BuilderContext';
import { BuilderContextValue, BuilderEntity } from './types';

function useBuilderContext<T extends BuilderEntity>() {
  const context = useContext<BuilderContextValue<T>>(
    BuilderContext as unknown as React.Context<BuilderContextValue<T>>,
  );

  if (!context) {
    throw new Error('useBuilderContext must be used within a Builder<T>');
  }

  const { state, dispatch } = context;

  const updateEntity = useCallback((updates: Partial<T>) => {
    dispatch({ type: 'update', payload: updates });
  }, []);

  return { entity: state, updateEntity };
}

export default useBuilderContext;
