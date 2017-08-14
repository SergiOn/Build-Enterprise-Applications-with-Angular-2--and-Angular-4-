interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'uYOIbPxtEIhGZ111XrAJDAA42zCLfX0r',
  domain: 'serhii-onyshchenko.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
