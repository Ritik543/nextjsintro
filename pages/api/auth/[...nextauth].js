import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'


export const authOptions ={
    providers:[
        GithubProvider({
            clientId:'6758e3b66641f6e665a6', 
            clientSecret:'bf38b004bf305fa597aeb348a319a89a50804339'
        }),
        GoogleProvider({
            clientId:'944624922755-kvnc1htnd50ba5aubgvmma2ep7m60pfk.apps.googleusercontent.com',
            clientSecret:'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',
        })
    ]
};
export default NextAuth(authOptions);