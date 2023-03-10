import Address from "./address.entity";

interface AuthEntity {
  firstName: string;
  lastName: string;
  address: Address;
  email: string;
  externalId: string;
}

export default AuthEntity;
