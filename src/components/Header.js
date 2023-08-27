import React, { useState } from 'react';
import './css/header.css';
import logoChick from './img/logo-chick.svg';

const DropdownMenu = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span>{title}</span><i className="fa-solid fa-chevron-down"></i>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <p key={index}>{option}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const Button = ({ className, iconClass, label }) => (
  <button className={className}>
    <i className={iconClass}></i>
    {label}
  </button>
);

const Header = () => {
  const itemOptions = ['Option 1', 'Option 2'];

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img alt="Logo Chick" src={logoChick} />
        </div>

        <DropdownMenu title="CURRENCY" options={['Option 1', 'Option 2']} />
        <DropdownMenu title="ITEM" options={itemOptions} />
        <DropdownMenu title="ACCOUNT" options={['Option 1', 'Option 2']} />
        <DropdownMenu title="SERVICES" options={['Option 1', 'Option 2']} />
        <DropdownMenu title="SWAPS" options={['Option 1', 'Option 2']} />
        <DropdownMenu title="SELL" options={['Option 1', 'Option 2']} />

        <div className="buttons">
          <DropdownMenu title="USD" options={['USD', 'EUR']} />
          <Button className="buy-btn" iconClass="fas fa-shopping-cart" label="Cart (5)" />
          <Button className="sign-in-btn" iconClass="fas fa-sign-in-alt" label="Sign In" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
