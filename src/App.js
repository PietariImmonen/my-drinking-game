import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import Game from './Game';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './Admin';


Amplify.configure(awsExports);
//Xbm$zMjRtJBN3Kn
//<button onClick={signOut}>Sign out</button>
function App({signOut}) {
    return (
      <Router>
        <div>
          <Routes>
            <Route path='/' exact element={<Game />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default withAuthenticator(App);