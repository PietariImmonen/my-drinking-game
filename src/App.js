import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import Game from './Game';


Amplify.configure(awsExports);
//Xbm$zMjRtJBN3Kn
//<button onClick={signOut}>Sign out</button>
function App({signOut}) {
    return (
        <div>
          <Game />
        </div>
    );
  }

  export default withAuthenticator(App);