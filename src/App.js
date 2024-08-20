import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css"; //importo bootstrap per farlo funzionare
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";


function App() {
  return (
    <div className="App" style={{ backgroundImage: "url(https://www.dariocapozzi.it/wp-content/uploads/2022/09/background-image-css.jpg)" }}>
      
      <header>
        <MyNav />
      </header>

      <main>
        <Welcome />
        <AllTheBooks />
      </main>

      <footer>
      <MyFooter />
      </footer>
    </div>
  );
}

export default App;
