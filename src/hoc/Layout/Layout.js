import React, { Component } from "react";
import LayoutCss from "./Layout.module.css";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import { Route, Switch, Redirect } from "react-router-dom";
import Quiz from "../../components/Quiz/Quiz";
import QuizList from "../../components/QuizList/QuizList";
import QuizAutho from "../../components/QuizAutho/QuizAutho";

class Layout extends Component {
  state = {
    menu: false,
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };
  menuCloseHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };
  render() {
    return (
      <div className={LayoutCss.Layout}>
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <Drawer onClose={this.menuCloseHandler} isOpen={this.state.menu} />
        <Switch>
          <Route path="/" exact component={Quiz} />
          <Route path="/QuizList" component={QuizList} />
          <Route path="/QuizAuth" component={QuizAutho} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Layout;
