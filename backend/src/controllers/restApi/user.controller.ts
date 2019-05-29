import express from 'express';
import AbstractController  from './abstractController';
class UserController extends AbstractController {
  public constructor() {
    super('/user', express.Router());
  }
}

export default UserController;