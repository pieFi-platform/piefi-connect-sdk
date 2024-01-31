interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  externalId?: string;
  currentSeasonData: {
    seasonNumber: number;
    bits: number;
  };
  socialLinks: {
    twitterLink: string;
    webLink: string;
    linkedInLink: string;
    discordLink: string;
    instagramLink: string;
  };
}

export default UserResponse;