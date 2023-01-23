export type BuilderEntity = {};
export type Action = { type: 'update'; payload: Partial<BuilderEntity> };
export type Dispatch = (action: Action) => void;
export type BuilderContextValue<T extends BuilderEntity> =
  | { state: T; dispatch: Dispatch }
  | undefined;
