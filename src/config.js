/* This is the authorization config.
* This file will go in .gitgnore or
* the variables will go in server's environment
* variables. We are using config directly for simplicity.
*/
export const config = {
    clientId: 'bf7ec9848c464c43ac9e78d1e6d91422',
    clientSecret: '078752f5819a4ecc9fe92961fca2e8a9',
    redirectUrl: 'com.my.spotifyapp:/callback/',
    scopes: ['user-read-private'],
    serviceConfiguration: {
      authorizationEndpoint: 'https://accounts.spotify.com/authorize',
      tokenEndpoint: 'https://accounts.spotify.com/api/token',
      revocationEndpoint: 'https://accounts.spotify.com/api/revoke',
    },
  };