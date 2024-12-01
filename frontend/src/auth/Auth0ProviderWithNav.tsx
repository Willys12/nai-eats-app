import { AppState, Auth0Provider, User } from '@auth0/auth0-react';
import React from 'react';

type Props = {
    children: React.ReactNode,
} 
const auth0ProviderWithNav = ({ children }: Props) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URI;

  if (!domain || !clientId || !redirectUri) {
    throw new Error('Unable to initialize auth');
  }
  const onRedirectCallBack = (appState?: AppState, user?: User) => {
    console.log("User", user)
  }

  return (
    <Auth0Provider 
        domain={domain} 
        clientId={clientId} 
        authorizationParams={{
            redirect_uri: redirectUri,
    }} 
    onRedirectCallback={onRedirectCallBack}
    >
        {children}
    </Auth0Provider>
)
};

export default auth0ProviderWithNav;