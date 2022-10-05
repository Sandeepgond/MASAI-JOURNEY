import { useState } from "react";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
const maxLength = 5;

function List() {
  const [text, settext] = useState();
  const [item, setitem] = useState([]);

  const handelinput = (event) => {
    settext(event.target.value);
  };

  const handleAdd = () => {
    const newitem = {
      title: text
    };
    setitem([...item, newitem]);
    settext(" ");
  };

  const deleteItem = (id) => {
    console.log(id);
    const updateditems = item.filter((elem, ind) => {
      return ind != id;
    });

    setitem(updateditems);
  };

  const toggle = (id) => {
    item.forEach((ele, index) => {
      if (id == index) {
        if (ele.status == "notdone") {
          ele.status = "done";
          // style.color = "green";
        } else {
          ele.status = "notdone";
          // style.color = "red";
        }
      }
    });
    setitem([...item]);
  };

  return (
    <div>
      <h1>hello</h1>

      <div>
        <input
          data-testid="input"
          placeholder="add something"
          onChange={handelinput}
          value={text}
        />
        <button data-testid="add-btn" onClick={handleAdd}>
          ADD
        </button>
      </div>
      <div>
        {item.map((el, ind) => (
          <div>
            <h1>{el.title}</h1>
            <button onClick={() => toggle(ind)}>{el.status}</button>

            <button onClick={() => deleteItem(ind)}>Delet</button>
          </div>
        ))}
      </div>
      {/* <AddItem />
      <ListItem /> */}
    </div>
  );
}

export default List;
