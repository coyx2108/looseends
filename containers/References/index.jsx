import React from 'react';
import { useNavigate } from 'react-router-dom';

function References() {

    const navigate = useNavigate();

  return (
    <>
      {/* Header Section */}
      <div style={{
        backgroundColor: '#9E182B',
        padding: '2rem 1rem',
        textAlign: 'center',
        borderRadius: '10px',
      }}>
        <h1 style={{
          color: '#F2E0D2',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontFamily: 'Playwrite US Trad, cursive',
          margin: 0,
          fontWeight: 400
        }}>
          References
        </h1>
      </div>

      {/* Back Button */}
      <button style={{
        backgroundColor: '#9E182B',
        color: '#F2E0D2',
        fontSize: '1.5rem',
        fontFamily: 'Playwrite US Trad, serif',
        border: 'none',
        borderRadius: '80px',
        padding: '0.75rem 2rem',
        marginLeft: '2rem',
        marginTop: '1rem',
        display: 'block',
        cursor: 'pointer',
      }}
      onClick={() => {
        navigate('/');
      }}
      >
        back
      </button>

      {/* References */}
      <div style={{ padding: '1rem 2rem', fontFamily: 'EB Garamond', fontSize: 18, color: 'black', textAlign: 'left' }}>
        <p>
          Aron, A., Aron, E. N., & Allen, J. (1998). Motivations for unreciprocated love. <i>Personality and Social Psychology Bulletin, 24</i>(8), 787-796.
        </p>
        <p>
          Baumeister, R. F., Wotman, S. R. & Stillwell, A. M. (1993). Unrequited Love. <i>Journal of Personality and Social Psychology, 64</i>(3), 377-394.
        </p>
        <p>
          Bringle, R. G., Winnick, T., & Rydell, R. J. (2013). The prevalence and nature of unrequited love. <i>Sage Open, 3</i>(2), 2158244013492160.
        </p>
        <p>
          Davis, K. E., Ace, A., & Andra, M. (2000). Stalking perpetrators and psychological maltreatment of partners... <i>Violence and Victims, 15</i>(4), 407-425.
        </p>
        <p>
          Fisher, H. (2004). <i>Why we love: The nature and chemistry of romantic love</i>. New York, NY: Henry Holt.
        </p>
        <p>
          Greve, W., Hauser, J., & Rühs, F. (2021). Humorous coping with unrequited love... <i>Frontiers in Psychology, 12</i>, 653900.
        </p>
        <p>
          Hall, S. S., & Knox, D. (2019). Perceived relationship power... <i>Journal of Family Studies, 25</i>(4), 385-396.
        </p>
        <p>
        Hill, C. A., Blakemore, J. E. O., & Drumm, P. (1997). Mutual and unrequited love in adolescence and young adulthood. <i>Personal Relationships, 4</i>(1), 15-23.
        </p>
        <p>
          Hu, M., Zhang, B., Shen, Y., Guo, J., & Wang, S. (2022). The Roles of Romantic Beliefs... <i>Imagination, Cognition and Personality, 42</i>(2), 145–166.
        </p>
        <p>
          Reid, J. (1989). Unrequited Love and the Wish to Kill.
        </p>
        <p>
          Schweiger, G. (2024). Unrequited Love, Flirting and Non-Moral Resentment. <i>Philosophies, 9</i>(4), 120.
        </p>
        <p>
          Tadros, E., Presley, S., & Ramadan, A. (2024). Dear John: Letter Writing as a Narrative Therapy Intervention. <i>Trends in Psychology</i>, 1-17.
        </p>
        <p>
        Yusra Saleem, & Komal . (2022). Battered women continue living in abusive relationships in Pakistan. <i>International Journal on Women Empowerment, 8</i>, 54–59. https://doi.org/10.29052/2413-4252.v8.i1.2022.54-59
        </p>
      </div>
    </>
  );
}

export default References;
