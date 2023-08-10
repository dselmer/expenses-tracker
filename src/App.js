import ViewExpenses from "./app/components/ViewExpenses.js";
import SearchBar from "./app/components/SearchBar.js";
import ListExpenes from "./app/components/ListExpenes.js";
import AddItem from "./app/components/AddItem.js";
import "./App.css";
function App() {
  return (
    <div className="app">
      <ViewExpenses />
      <SearchBar />
        <ListExpenes />
      <AddItem />
    </div>
  );
}

export default App;
