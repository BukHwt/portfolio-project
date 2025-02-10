import { Request, Response } from "express-serve-static-core";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { CreateUserQueryParams } from "../types/query-params";
import { UserResponse } from "../types/userResponse";

export const getUsers = (req: Request, res: Response) => {
  res.send("A String To Rule Them ALL");
};

export const getUsersById = (req: Request, res: Response) => {
  res.send([]);
};

export const createUser = (
  req: Request<{}, {}, CreateUserDTO, CreateUserQueryParams>,
  res: Response<UserResponse>
) => {
  res.status(201).send({ id: 1, email: "steve@steve.com", userName: "steve" });
};
