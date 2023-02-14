import { whitelist } from "./whitelist"

export const options = {
  /*
    origin: (origin: any, callback: any) => {
      if(whitelist.indexOf(origin) !== -1) { //if domain is in whitelist
        callback(null, true)
      }
      else {
        callback(new Error('Not allowed by cors'))
      }
    },
    */
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200
}