import { Action, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../index';

/*
 * This will make code-oss show suggestions
 */

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type ThunkAction<R, S, E, A extends Action> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
