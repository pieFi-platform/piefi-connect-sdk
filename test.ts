import PieFiConnect from ".";
import AuthEntity from "./src/auth/entities/auth.entity";
async function doIt() {
  const key = process.env.API_KEY;
  const compId = process.env.COMPANY_ID;

  if (!key) throw new Error('No Key')
  if (!compId) throw new Error('No Company Id')

  const connect = new PieFiConnect(key as string, compId);

  const testConnect: AuthEntity = {
    firstName: 'John',
    email: 'marcus+1@piefi.io',
    lastName: 'Elway',
    username: 'elway_123465',
    externalId: `ABC-DEF-GHI`
  }
  const result = await connect.userConnect(testConnect).catch((err) => console.log(err))
  console.log(result)
}

doIt()
