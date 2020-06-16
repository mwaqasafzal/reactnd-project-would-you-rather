export const AUTHED_USER="AUTHED_USER"

export const authenticateUser=id=>({
    type:AUTHED_USER,
    authedUser:id
});