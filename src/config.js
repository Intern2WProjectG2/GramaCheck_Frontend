const authConfig = {
    signInRedirectURL: process.env.WEB_URL,
    signOutRedirectURL: process.env.WEB_URL,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    baseUrl: process.env.ASGARDEO_BASE_URL,
    scope: ['openid', 'profile', 'email', 'phone'],
};

export default authConfig;
