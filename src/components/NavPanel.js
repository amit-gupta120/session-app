import React, {useState} from 'react'
import '../styleSheets/NavPanel.css'

const NavPanel = () => {

  const [open, setOpen] = useState(true)
  const Toggle = () => setOpen(!open)
  return (
    <div className="nav-panel">
      <div className="nav-panel__toggle" onClick={Toggle}>
        <span className="nav-panel__toggle__line"></span>
        <span className="nav-panel__toggle__line"></span>
        <span className="nav-panel__toggle__line"></span>
      </div>
      <div className={`nav-panel__menu ${open ? 'open' : ''}`}>
        <ul className="nav-panel__menu__list">
          <li className="nav-panel__menu__list__item">
            <a href="#" className="nav-panel__menu__list__item__link">Dashboard</a>
          </li>
          <li className="nav-panel__menu__list__item">
            <a href="#" className="nav-panel__menu__list__item__link">Messages</a>
          </li>
          <li className="nav-panel__menu__list__item">
            <a href="#" className="nav-panel__menu__list__item__link">Upcoming Sessions</a>
          </li>
          <li className="nav-panel__menu__list__item">
            <a href="#" className="nav-panel__menu__list__item__link">Order History</a>
          </li>
          <li className="nav-panel__menu__list__item">
            <a href="#" className="nav-panel__menu__list__item__link">My Profile</a>
          </li>
          <li className="nav-panel__menu__list__item">
            <a href="#" className="nav-panel__menu__list__item__link">Contact Us</a>
          </li>
          <li className="nav-panel__menu__list__item">
            <a href="#" className="nav-panel__menu__list__item__link">Session History</a>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default NavPanel