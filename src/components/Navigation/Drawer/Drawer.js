import React from "react";
import DrawerCss from "./Drawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Quiz Creator", link: "/QuizCreator" },
  { name: "Quiz List", link: "/" },
  { name: "Quiz Autho", link: "/QuizAuth" },
];

class Drawer extends React.Component {
  hideMenuhandler = () => {};
  clickHandler = () => {
    this.props.onClose();
  };
  render() {
    const cls = [DrawerCss.Drawer];
    if (!this.props.isOpen) {
      cls.push(DrawerCss.close);
    }

    return (
      <>
        <nav className={cls.join(" ")}>
          <ul>
            {links.map((element, id) => {
              return (
                <li key={id}>
                  <NavLink exact to={element.link} onClick={this.clickHandler}>
                    {element.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </>
    );
  }
}

export default Drawer;
