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
    email: 'marcus+50@piefi.io',
    lastName: 'Elway',
    externalId: `ABC-DEF-GHI`,
    address: {
      city: 'Salt Lake City',
      country: 'US',
      line1: '244 W 300 N',
      postalCode: '84045',
      state: 'UT'
    }
  }
  const result = await connect.userConnect(testConnect);
  console.log(result)

  const pointEvent = await connect.distributePoints({amount: 15, externalId: `ABC-DEF-GHI`});
  console.log(pointEvent);
}

doIt()
