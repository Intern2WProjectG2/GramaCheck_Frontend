const authConfig = {
    signInRedirectURL: `${process.env.WEB_URL}`,
    signOutRedirectURL: `${process.env.WEB_URL}`,
    clientID: process.env.CLIENT_ID,
    baseUrl: process.env.ASGARDEO_BASE_URL,
    scope: ['openid', 'profile'],
};

/*const authConfig = {
    // signInRedirectURL: "https://b1737d06-83bf-4319-b114-afa517372815.e1-us-east-azure.choreoapps.dev",
    // signOutRedirectURL: "https://b1737d06-83bf-4319-b114-afa517372815.e1-us-east-azure.choreoapps.dev",
     signInRedirectURL: "https://localhost:3000",
    signOutRedirectURL: "https://localhost:3000", 
    clientID: "sH9eFAfctbq7hfrgvt4rwtej8Vsa",
    baseUrl: "https://api.asgardeo.io/t/gramainc",
    scope: ['openid', 'profile'],
};*/

export default authConfig;
