import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export async function verifyAccessToken ( req: Request, res: Response, next: NextFunction ) {
    const { accessToken, refreshToken } = req.cookies;
    try {
        const authorizeUser = await fetch(`http://localhost:3001/auth/verify-token`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ accessToken, refreshToken })
            }
        );
        
        const userData = await authorizeUser.json();
        const data = userData.data;
        console.log(userData);
        console.log('auth middleware: ',data);

        // next();
    } catch (error) {
        // next(error);
        console.log(error);
    }
}