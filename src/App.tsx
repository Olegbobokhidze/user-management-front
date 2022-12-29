import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/header/Header";
import { UserForm } from "./components/userform/UserForm";
import { UserList } from "./components/userlist/UserList";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <UserForm />
      <Header />
      <UserList />
    </Provider>
  );
}

export default App;
