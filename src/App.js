import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Users from "./components/context/users";
import FormBill from "./components/formBill";
import User from "./components/context/user";

function App() {
  const [friend, setFriend] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      image: "https://i.pravatar.cc/48?u=118836",
      friendName: "Clark",
      bill: `you own Clark 12£`,
    },
    {
      id: Math.floor(Math.random() * 1000),
      image: "https://i.pravatar.cc/48?u=933372",
      friendName: "Sarah",
      bill: `you own Sarah 17£`,
    },
  ]);

  const [isSelected, setIsSelected] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState({}); // store user object that choosed in list component that is a child of sidebar

  const handleAddFriend = (newFriend) => {
    console.log(newFriend);
    if (!newFriend.friendName || !newFriend.image) {
      alert("Please fill all the fields");
      return;
    }
    setFriend([...friend, newFriend]);
  };

  const selectFriend = (friend) => {
    setIsSelected(!isSelected);
  }
  return (
    <div className="App row mx-auto mt-5 container g-1">
      <Users.Provider value={{ friend, setFriend }}>
        <User.Provider value={{ selectedFriend, setSelectedFriend }}>
          <Sidebar addUser={handleAddFriend} selectFriend={selectFriend} isSelected={isSelected}  />
          {isSelected && <FormBill />}
        </User.Provider>
      </Users.Provider>
    </div>
  );
}

export default App;
