import {
  client,
  authSig,
  pkpPublicKey,
  getLitActionCode,
  errorLog,
} from '../utils.mjs';

const litActionCode = await getLitActionCode();

let res;

try {
  res = await client.executeJs({
    code: litActionCode,
    authSig,
    jsParams: {
      toSign: 'random message to sign',
      publicKey: pkpPublicKey,
      sigName: "fetch-action-sig",
      customParams: "abcdefg"
    },
  });
  console.log(res);
} catch (e) {
  errorLog(e);
}
