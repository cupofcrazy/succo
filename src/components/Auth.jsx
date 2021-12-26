import GoogleLogin, { GoogleLogout } from 'react-google-login'
import { useAuth } from '../contexts/AuthContext'
import { Button } from './Button'
import { GOOGLE_CLIENT_ID } from '../utils'


export const SignInButton = () => {
  const { handleSuccess } = useAuth()
  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      render={props => (
        <Button onClick={props.onClick} disabled={props.disabled}>Login With Google</Button>
      )}
      onSuccess={handleSuccess}
      isSignedIn={true}
    />
  )
}

export const SignOutButton = () => {
  const { handleLogout } = useAuth()
  return (
    <GoogleLogout 
      clientId={GOOGLE_CLIENT_ID}
      render={props => (
        <Button onClick={props.onClick} disabled={props.disabled}>Sign Out</Button>
      )}
      onLogoutSuccess={handleLogout}
      isSignedIn={true}
    />
  )
}