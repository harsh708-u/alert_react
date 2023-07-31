// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alerts from "./components/Alerts";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  // let items = ["New York", "San Francisco", "Tokyo", "London", "paris"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
      {alertVisible && (
        <Alerts onClose={() => setAlertVisibility(false)}> My alert </Alerts>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      {/* <Alerts>
        Hello
        <span>World</span>
      </Alerts> */}
      {/* <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}
export default App;
