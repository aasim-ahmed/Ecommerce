import React, { useState } from 'react';
import "./Sidebar.css"

const Sidebar = ({ onSort, onAddContent }) => {
  const [newContent, setNewContent] = useState('');

  const handleSort = (criteria) => {
    onSort(criteria);
  };

  const handleAddContent = () => {
    if (newContent.trim()) {
      onAddContent(newContent);
      setNewContent('');
    }
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      
      <div className="sidebar-section">
        <h3>Sort</h3>
        <button onClick={() => handleSort('name')}>Sort by Name</button>
        <button onClick={() => handleSort('date')}>Sort by Date</button>
        <button onClick={() => handleSort('price')}>Sort by Price</button>
      </div>
      
      <div className="sidebar-section">
        <h3>Add Content</h3>
        <input
          type="text"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="Enter new content"
        />
        <button onClick={handleAddContent}>Add</button>
      </div>
      
      <div className="sidebar-section">
        <h3>Categories</h3>
        <ul>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
        </ul>
      </div>
      
      <div className="sidebar-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;