import './App.css';
import { BsSunFill } from 'react-icons/bs';
import Item from './components/Item';
import Createitem from './components/Createitem';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
  // return (
  //   <div className="list">
  //     <header>
  //       <button className="header__sun">
  //         <BsSunFill />
  //       </button>
  //       <div className="header__list">
  //         <button className="header__list__item">All</button>
  //         <button className="header__list__item">Active</button>
  //         <button className="header__list__item">Completed</button>
  //       </div>
  //     </header>
  //     <section className="items">
  //       <Item />
  //     </section>
  //     <footer>
  //       <input type="text" onSubmit={Createitem} />
  //       <button className="button__add">Add</button>
  //     </footer>
  //   </div>
}

export default App;
