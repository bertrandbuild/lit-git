/**
 * NAME: fetch
 *
 */
// import * as LitJsSdk from "@lit-protocol/lit-node-client@serrano";

// this code will be run on the node
(async () => { 
  const url = "https://api.weather.gov/gridpoints/TOP/31,80/forecast";
  const resp = await fetch(url).then((response) => response.json());
  const temp = resp.properties.periods[0].temperature;

  console.log("temp : ", temp);
  
  // this requests a signature share from the Lit Node
  // the signature share will be automatically returned in the HTTP response from the node
  // all the params (toSign, publicKey, sigName) are passed in from the LitJsSdk.executeJs() function
  const sigShare = await LitActions.signEcdsa({ toSign, publicKey , sigName }); // FIXME: internal id for request: lit_abeabd3f48776. "ReferenceError: toSign is not defined\n"
})();