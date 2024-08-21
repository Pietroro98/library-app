import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css"; //importo bootstrap per farlo funzionare
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import fantasyBooks from "../src/data/fantasy.json";
import horrorBooks from "../src/data/horror.json";
import scifiBooks from "../src/data/scifi.json";
import historyBooks from "../src/data/history.json";
import romanceBooks from "../src/data/romance.json";
// import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";

const allBooks = [
  ...fantasyBooks,
  ...horrorBooks,
  ...scifiBooks,
  ...historyBooks,
  ...romanceBooks,
];

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "url(https://www.dariocapozzi.it/wp-content/uploads/2022/09/background-image-css.jpg)",
      }}
    >
      <header>
        <MyNav />
      </header>

      <main>
        <Welcome />
        {/* <AllTheBooks /> */}
        {/* <SingleBook theBook={fantasyBooks[0]}/> */}
        <BookList books={allBooks} />
      </main>

      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
