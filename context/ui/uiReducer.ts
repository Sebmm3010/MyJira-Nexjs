import { UIState } from './';

type UIActionType =
    | { type: 'UI-Open Sidebar' }
    | { type: 'UI-Close Sidebar' }
    | { type: '[Entries] SetAddingEntry', payload: boolean }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
    switch (action.type) {
        case 'UI-Open Sidebar':
            return {
                ...state,
                sidemenuopen: true,
            }
        case 'UI-Close Sidebar':
            return {
                ...state,
                sidemenuopen: false,
            }
         case '[Entries] SetAddingEntry':
         return {
            ...state,
            isAdding:action.payload
         }
        default:
            return state
    }
}