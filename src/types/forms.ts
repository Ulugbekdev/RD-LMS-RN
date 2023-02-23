export type FormErrorType = {
    message?: string
}

export interface IAuthForm extends FormErrorType {
    username: string
    password: string
}
