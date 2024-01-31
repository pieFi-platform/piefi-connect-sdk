import { randomUUID } from "crypto";
import IHttpConfig from "../http/http.config.interface";
import AuthEntity from "./entities/auth.entity";
import IConnectUser from "./entities/user.module.interface";
import AuthResponse from "./entities/auth.response";
import UserResponse from "./entities/user.response";

class MockConnectUser implements IConnectUser {
  private httpModule: IHttpConfig;
  constructor(httpModule: IHttpConfig){
    this.httpModule = httpModule;
  }
  getByExternalId(externalId: string): Promise<UserResponse | undefined> {
    return new Promise((res, rej) => {
      res({
        email: 'test@gmail.com',
        username: 'testuser',
        firstName: 'Test',
        id: randomUUID(),
        lastName: 'User',
        externalId: externalId,
        socialLinks: {
          discordLink: 'https://discord.gg/123',
          instagramLink: 'https://instagram.com/123',
          linkedInLink: 'https://linkedin.com/123',
          twitterLink: 'https://twitter.com/123',
          webLink: 'https://google.com'
        },
       currentSeasonData: {
        bits: 100,
        seasonNumber: 0
       }
      })
    })
  }

  public async connect(auth: AuthEntity): Promise<AuthResponse> {
    return new Promise((res, rej) => {
      res({
        userId: randomUUID()
      })
    })
  }
}

export default MockConnectUser;