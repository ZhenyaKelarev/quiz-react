import React, { Component } from "react";
import LayoutCss from "./Layout.module.css";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import { Route, Switch, Redirect } from "react-router-dom";
import Quiz from "../../components/Quiz/Quiz";
import QuizList from "../../components/QuizList/QuizList";
import Auth from "../../containers/Auth/Auth";
import QuizCreator from "../../containers/QuizCreator/QuizCreator";

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
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/QuizAuth" component={Auth} />
          <Route path="/" exact component={QuizList} />
          <Route path="/QuizCreator" exact component={QuizCreator} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Layout;
