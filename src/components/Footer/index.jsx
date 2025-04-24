import React from "react";

function Footer() {
    return (
        <>
        {/* Top border */}
        <div style={{
            width: '100%',
            height: '0',
            borderTop: '3px solid #9E182B',
            background: '#D9D9D9',
            position: 'absolute',
            top: 0,
            left: 0
        }}></div>

        <div style={{width: '100%', position: 'relative', padding: '2rem 0', fontFamily: 'EB Garamond, serif'}}>

            {/* Attribution Text */}
            <div style={{
            textAlign: 'center',
            color: '#9E182B',
            fontSize: 14,
            fontStyle: 'italic',
            fontWeight: '400'
            }}>
            Chantel Ong | NST2061 AY24/25 Semester 2
            </div>
        </div>
        </>
    );
}

export default Footer;