import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import Endpoints from '../../util/endpoint';

export const secureGuard = async (req: Request, res: Response, next: NextFunction) => {
  let tokenHeader = <string>req.headers['x-access-token'] || req.headers['authorization'];
  const host = process.env.HOST;
  const errorResponse = {
    error: 'Forbidden access!',
    redirect: {
      login: `${host}${Endpoints.LOGIN}`,
      registration: `${host}${Endpoints.REGISTRATION}`
    }
  }

  // not exist token
  if (typeof tokenHeader === 'undefined' || tokenHeader === null) {
    res.status(403).json(errorResponse);
    return;
  }

  // remove the bearer and space from string
  let token = tokenHeader.slice(7, tokenHeader.length);

  if (token === undefined || token === null) {
    res.status(403).json(errorResponse);
    return;
  }

  let jwtPayload;

  try {

    jwtPayload = jwt.verify(token, process.env.SECRET);
    
    res.locals.jwtPayload = jwtPayload; 
    // need to check if the user are logged
    const { userId } = jwtPayload;
    const newToken = jwt.sign(
      { userId },
      process.env.SECRET, 
      { expiresIn: "1h" }
    );
      
    console.log(jwtPayload)
    //Call the next middleware or controller
    next();

  } catch (error) {
    res.status(403).json(errorResponse);
    return;
  }

}


export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //Get the user ID from previous midleware
    const id = res.locals.jwtPayload.userId;/*
    //Get user role from the database
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (id) {
      res.status(401).send();
    }

    //Check if array of authorized roles includes the user's role
    if (roles.indexOf(user.role) > -1) next();
    else res.status(401).send();*/
  };
};
