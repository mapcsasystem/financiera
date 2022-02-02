export interface LoginResponseSuccessModel {
    kind: string;
    localId: string;
    email: string;
    displayName: string;
    idToken: string;
    registered: boolean;
    refreshToken: string;
    expiresIn: string;
}

export interface LoginPostBodyModel {
    email: string;
    password: string;
    returnSecureToken: true;
}