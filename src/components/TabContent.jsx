import React from 'react';

const TabContent = ({ isHidden = false, title, content }) => {
  return (
    <div className="tab-content" hidden={isHidden}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default TabContent;
