import React from 'react'
import './styles.css'

const Menu = () => (
    <div className="header_menu">
      <div className="left_menu">
        <ul>
          <li id="elem">информация</li>
          <li id="elem">новости</li>
          <li id="elem">прайс-лист</li>
          <li id="elem">магазин</li>
          <li id="elem">контакты</li>
        </ul>
      </div>
      <div className="login">
        <a className="btn_login">вход</a>
      </div>
    </div>
        
)

export default Menu;