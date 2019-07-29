export interface State {
    [key: string]: any;
}

export interface User {
    user: string
}

export interface AuthState {
    logged: boolean
    user: User
}


export const LOGIN_MESSAGE = 'LOGIN_MESSAGE'
export const LOGOUT_MESSAGE = 'LOGOUT_MESSAGE'

interface LoginMessageAction {
    type: typeof LOGIN_MESSAGE
    payload: any
}

interface LogoutMessageAction {
    type: typeof LOGOUT_MESSAGE
    user?: User
    meta: {
        timestamp: Date
    }
}

export type AuthActionTypes = LoginMessageAction | LogoutMessageAction