import { Request, Response } from "express";
import { AuthenticateUserService } from "../AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;
    const service = new AuthenticateUserService();
    const result = service.execute(code);

    return response.json(result);
  }
}

export { AuthenticateUserController };
