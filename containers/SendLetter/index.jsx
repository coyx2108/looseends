import React from 'react';
import { useNavigate } from 'react-router-dom';

function SendLetter() {

    const navigate = useNavigate();
    return (
        <>

    <div style={{
      backgroundColor: '#9E182B',
      padding: '2rem',
      fontFamily: 'EB Garamond, serif',
      color: '#F2E0D2',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '20px',
      minHeight: '90vh',
    }}>
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        style={{
        backgroundColor: '#F2E0D2',
        color: '#9E182B',
        fontFamily: 'Playwrite US Trad, cursive',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '50px',
        padding: '0.5rem 1.5rem',
        cursor: 'pointer',
        marginBottom: '1.5rem',
        alignSelf: 'flex-start',
        }}
        >
            ← back
        </button>

      {/* Form Section */}
      <div>
        {/* Header */}
        <h1 style={{
          color: '#F2E0D2',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontFamily: 'Playwrite US Trad, cursive',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          Send a Message
        </h1>

        {/* Form */}
        <form style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {/* To Field */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '1.25rem',
              textAlign: 'left'
            }}>To:</label>
            <input type="text" style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              backgroundColor: '#F2E0D2',
              border: 'none',
              borderRadius: '8px',
              fontFamily: 'EB Garamond, serif',
            }} />
          </div>

          {/* Message Field */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '1.25rem',
              textAlign: 'left'
            }}>Message:</label>
            <textarea rows="8" style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              backgroundColor: '#F2E0D2',
              border: 'none',
              borderRadius: '8px',
              fontFamily: 'EB Garamond, serif',
              resize: 'none'
            }}></textarea>
          </div>

          {/* Submit Button */}
          <div style={{ textAlign: 'right' }}>
            <button type="submit" style={{
              backgroundColor: '#F2E0D2',
              color: '#9E182B',
              fontSize: '1.2rem',
              fontFamily: 'Playwrite US Trad, cursive',
              border: 'none',
              borderRadius: '80px',
              padding: '0.75rem 2rem',
              cursor: 'pointer'
            }}>
              tie up some loose ends
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default SendLetter;
