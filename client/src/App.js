// Import React and Dependencies
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Import Components
import store from './redux/store';
import SignUp from './components/dialogs/SignUp';
import SignIn from './components/dialogs/SignIn';
import MenuDrawer from './components/MenuDrawer';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer/Footer';
import CardContainer from './pages/CardContainer';

// Alerts me to material-ui variants that are about to be depreciated
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

class App extends Component {
  // Renders Data to page
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* Render Closed Dialogs for Sign In/Sign Up function as well as closed side drawer for menu*/}
          <SignIn />
          <SignUp />
          <MenuDrawer />

          {/* Render Navbar */}
          <Navbar />

          <Jumbotron />

        {/* Main Content */}
        <CardContainer />

          {/* Render Footer */}
          <Footer />
        </div>
      </Provider>
    );
  }
}

// Exports App
export default App;