import { UIState } from './';

type UIActionType =
    | { type: '[Entries] SetAddingEntry', payload: boolean }
    | { type: 'UI-SetDragging', payload: boolean }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
    switch (action.type) {
         case '[Entries] SetAddingEntry':
         return {
            ...state,
            isAdding:action.payload
         }
        case 'UI-SetDragging':
            return {
                ...state,
                isDragging: action.payload
            }
        default:
            return state
    }
}