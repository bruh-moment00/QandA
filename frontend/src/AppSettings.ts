export const server = 'https://localhost:44374';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev--guf1gp2.us.auth0.com',
  client_id: 'XLeLq3rDE5iyPvt3kpdqe623Cgc7ws0a',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
