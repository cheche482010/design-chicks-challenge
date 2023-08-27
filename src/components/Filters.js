import React from 'react';
import './css/filters.css';

const SelectWrapper = ({ icon, placeholder, options }) => (
  <div className="select-wrapper" style={{ width: '20%' }}>
    <i className={`fa-solid ${icon} icon`}></i>
    <select className="select-element">
      <option value="">{placeholder}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <i className="fa-solid fa-chevron-down"></i>
  </div>
);

const Filters = () => {
  const gameOptions = [
    { value: '', label: 'Select a Game' },
    { value: 'game1', label: 'Game 1' },
    { value: 'game2', label: 'Game 2' },
    { value: 'game3', label: 'Game 3' },
  ];

  const priceOptions = [
    { value: '', label: 'Select Price' },
    { value: 'price-low', label: 'Lowest Price' },
    { value: 'price-high', label: 'Highest Price' },
  ];

  const itemTypeOptions = [
    { value: '', label: 'Select Item Type' },
    { value: 'type-weapon', label: 'Weapon' },
  ];

  return (
    <section className="filters">
      <SelectWrapper icon="fa-solid fa-gamepad" placeholder="Select a Game" options={gameOptions} />
      <div className="search-container" style={{ width: '60%' }}>
        <div className="search-box">
          <i className="fas fa-search search-icon"></i>
          <input className="search-input" id="search-input" placeholder="Search" type="text" />
        </div>
      </div>
      <SelectWrapper icon="fa-sack-dollar" placeholder="Select Price" options={priceOptions} />
      <SelectWrapper icon="fa-feather-pointed" placeholder="Select Item Type" options={itemTypeOptions} />
    </section>
  );
}

export default Filters;
