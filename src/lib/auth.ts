import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
const client = new MongoClient(process.env.BETTER_AUTH_DB_URL!)
const db = client.db("better-auth-db");
export const auth = betterAuth({
     emailAndPassword: { 
    enabled: true, 
  }, 
    socialProviders: {
        google: { 
            clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.BETTER_AUTH_GOOGLE_CLIENT_SECRECT as string, 
        }, 
    },
    database: mongodbAdapter(db , {
        client
    }) 
  //...
});