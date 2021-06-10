import express, { Request, Response } from 'express';
import AbstractController  from './abstractController';
import userModel from './../../models/user.model';
class UserController extends AbstractController {
  public constructor() {
    super('/user', express.Router());

  this.initRoutes();
  }

  private initRoutes(): void {
    super.getRouter().get(`${super.getPath()}/:userId`, super.authGuard(), this.getUserById);

  }

  public async getUserById(req: Request, res: Response): Promise<Response> {
    try {
      
      const user = await userModel.findOne({ _id: req.params.userId });

      return res.status(200).json(user);

    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

}

export default UserController;