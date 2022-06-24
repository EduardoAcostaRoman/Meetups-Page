import { Route, Switch } from "react-router-dom";
import Layout from "./Components/layout/Layout";

import AllMeetupsPage from "./Pages/AllMeetups";
import FavoritesPage from "./Pages/Favorites";
import NewMeetupPage from "./Pages/NewMeetup";

function App() {
  // localhost:3000 is the default url path
  // my-page.com would be a real url path from the actual deployed page

  return (
    <Layout>
      <Switch>
        {/* the exact prop ensures that the exact url should match the path stated in the Route */}
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
