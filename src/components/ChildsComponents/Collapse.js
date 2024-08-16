import React, { useState } from 'react';


const Collapse = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-container">
            <button className="collapse-button" onClick={toggleCollapse}>
                {label}
                <span className={isOpen ? 'arrow open' : 'arrow closed'}>
                    {isOpen ? '▲' : '▼'}
                </span>
            </button>
            {isOpen && (
                <div className="collapse-content">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Collapse;