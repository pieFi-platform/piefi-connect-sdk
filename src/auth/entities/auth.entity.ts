import Address from "./address.entity";

interface AuthEntity {
  firstName: string;
  lastName: string;
  // address: Address;
  email: string;
  username: string;
  externalId: string;
}

export default AuthEntity;
