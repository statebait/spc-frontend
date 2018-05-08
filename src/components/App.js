import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import store from "../store";

import { Layout, Menu } from "antd";

//Ant Desgin CSS file
import "antd/dist/antd.css";

//Component Imports
import SignUpForm from "./signup/signup";
import LoginForm from "./login/login";
import Home from "./home/home";

const { Header, Content, Footer } = Layout;

function handleClick(e) {
  console.log("click", e);
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: "64px" }}
                onClick={handleClick}
              >
                <Menu.Item key="1">
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/signup">Register</Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: "0 50px" }}>
              <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
                <Switch>
                  <Route path="/signup" component={SignUpForm} />
                  <Route path="/login" component={LoginForm} />
                  <Route path="/" component={Home} />
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Student Placement Cell Webstie
            </Footer>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
