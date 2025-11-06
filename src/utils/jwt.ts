import jwt, { type JwtPayload } from 'jsonwebtoken';

const SECRET = "dummySecret"

export const generateJWT = (payload: string): string => {
    return jwt.sign({ foo: 'bar' }, SECRET)
}


export const verifyJWT = (token: string): JwtPayload | null => {
    try {
        return jwt.verify(token, SECRET) as JwtPayload;
    } catch (error) {
        return null
    }
}