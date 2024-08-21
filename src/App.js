import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css"; //importo bootstrap per farlo funzionare
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import fantasyBooks from "../src/data/fantasy.json";
import SingleBook from "./components/SingleBook";



function App() {
  return (
    <div className="App vh-100" style={{ backgroundImage: "url(https://www.dariocapozzi.it/wp-content/uploads/2022/09/background-image-css.jpg)" }}>
      
      <header>
        <MyNav />
      </header>

      <main>
        <Welcome />
        {/* <AllTheBooks /> */}
        <SingleBook theBook={fantasyBooks[0]}/>
      </main>

      <footer>
      <MyFooter />
      </footer>
    </div>
  );
}

export default App;
