import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
// 1 import { MouseEvent } from "react";
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setselectedIndex] = useState(-1);
  // 1 const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No items found</p> : null} */}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setselectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
            // 1 onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
