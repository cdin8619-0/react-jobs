import React from "react";

const names = ['Chanuka', 'Dinuwan', 'Dinesh', 'Dilshan', 'Dulaj', 'Hiruni', 'Kavindu', 'Lakindu', 'Lahiru', 'Lahiru Dilshan', 'Lahiru Dilshan Perera', 'Lahiru Dilshan Perera Bandara'];

const loggedIn = true;

const App = () => {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <ul>
        {names.map((name, index) => (
          <li key = {index}>{name}</li>
        ))}
      </ul>
      { loggedIn ? <h1>Hello Member!</h1>: <h1>Hello Guest!</h1> }
      { names.length > 5 && <h1>There are more than 5 members</h1>}
    </div>
  );
}

export default App;