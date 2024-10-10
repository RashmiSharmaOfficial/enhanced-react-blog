export const LoginStart = (userCredentials: any) => ({
    type: "LOGIN_START" as const,
});

export const LoginSuccess = (user: any) => ({
    type: "LOGIN_SUCCESS" as const,
    payload: user,
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE" as const,
});

export const Logout = () => ({
    type: "LOGOUT" as const,
});

export const UpdateStart = (userCredentials: any) => ({
    type: "UPDATE_START" as const,
});

export const UpdateSuccess = (user: any) => ({
    type: "UPDATE_SUCCESS" as const,
    payload: user,
});

export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE" as const,
});
