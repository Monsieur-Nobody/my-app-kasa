import React, { useState } from 'react';

const Collapse = ({ title, content, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    // Vérifier si des enfants sont présents, sinon utiliser content
    const displayContent = children || content;

    return (
        <div className="collapse-container">
            <button className="collapse-button" onClick={toggleCollapse}>
                {title}
                <span className={isOpen ? 'arrow open' : 'arrow closed'}>
                    {isOpen ? '▲' : '▼'}
                </span>
            </button>
            {isOpen && (
                <div className="collapse-content">
                    {displayContent}
                </div>
            )}
        </div>
    );
};

export default Collapse;