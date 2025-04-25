import React from 'react';

function NavBar() {
    return (
        <div style={{
            width: '100%',
            background: '#F2E0D2',
            padding: '20px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <img 
                style={{ width: 100, height: 'auto', marginLeft: '20px' }} 
                src="/looseends/nst2061-loose-ends.png" 
                alt="Logo" 
            />
        </div>
    );
}

export default NavBar;