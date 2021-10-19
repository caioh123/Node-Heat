/* receber code(string)
recuperar o access token no github
verificar se o usuario existe no db
----- SIM = gera um token
----- NAO = Cria no db, gera um token
retorna o token com as infos do user 
*/

import axios from "axios";

class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/access_token";

    const response = await axios.post(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: "application/json",
      },
    });

    return response.data;
  }
}

export { AuthenticateUserService };
