import React from "react";
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider as ReduxProvider } from "react-redux";
import { Provider as BookmarkedMangaProvider } from "#src/contexts/BookmarkedMangaContext";
import { Provider as ReadChaptersProvider } from "#src/contexts/ReadChaptersContext";
import store from "#src/redux/store";

import graphqlClient from "#src/api/graphql";
import App from "#src/App";

import "./global.css";

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("service-worker.js");
// }

// const App = () => {
//   return (
//     <div className="main-container">
//       <Switch>
//         <Route
//           component={MangaChapter}
//           path="/:mangaId([a-z0-9]{24})-:mangaName([a-z0-9-]+)/:chapterId([a-z0-9]{24})"
//         />
//         <Route
//           component={Manga}
//           path="/:mangaId([a-z0-9]{24})-:mangaName([a-z0-9-]+)"
//         />
//         <Route component={Home} path="/" />
//       </Switch>
//     </div>
//   );
// };

render(
  <ReadChaptersProvider>
    <BookmarkedMangaProvider>
      <ReduxProvider store={store}>
        <ApolloProvider client={graphqlClient}>
          <Router>
            <App />
          </Router>
        </ApolloProvider>
      </ReduxProvider>
    </BookmarkedMangaProvider>
  </ReadChaptersProvider>,
  document.getElementById("app")
);
