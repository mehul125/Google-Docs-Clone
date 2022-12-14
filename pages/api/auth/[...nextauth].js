import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { db } from "../../../firebase"
import { FirebaseAdapter } from "@next-auth/firebase-adapter"



export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],

    
    // everytime someone sign it will create and maintain the db for those
    adapter: FirebaseAdapter(db)
})

