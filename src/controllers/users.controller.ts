import { Request, Response } from "express";

export const LoginUser = (req: Request, res: Response) => {
  
  return res
    .status(401)
    .json({ message: "Usuario no existe" });
};
