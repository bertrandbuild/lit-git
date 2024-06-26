/**
 *
 * NAME: fetch
 *
 */

"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // lit_actions/src/fetch.action.ts
  var require_fetch_action = __commonJS({
    "lit_actions/src/fetch.action.ts"(exports) {
      var customParams;
      (() => __async(exports, null, function* () {
        const url = "https://api.weather.gov/gridpoints/TOP/31,80/forecast";
        const resp = yield fetch(url).then((response) => response.json());
        const temp = resp.properties.periods[0].temperature;
        console.log("temp : ", temp);
        console.log("customParams : ", customParams);
        const sigShare = yield LitActions.signEcdsa({ toSign, publicKey, sigName });
      }))();
    }
  });
  require_fetch_action();
})();
