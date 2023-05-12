const authConfig = {
    signInRedirectURL: `${process.env.WEB_URL}`,
    signOutRedirectURL: `${process.env.WEB_URL}`,
    clientID: process.env.CLIENT_ID,
    baseUrl: process.env.ASGARDEO_BASE_URL,
    scope: ['openid', 'profile'],
};

export default authConfig;