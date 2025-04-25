import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function MainContent() {
    const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: '#F2E0D2', minHeight: '100vh', paddingBottom: '2rem' }}>
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
          Loose Ends: A Reflection
        </h1>
      </div>

      {/* Image Section */}
      <div style={{
        maxWidth: '900px',
        margin: '2rem auto',
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: '#9E182B'
      }}>
        <img
          src="/looseends/header.png"
          alt="Reflection"
          style={{ width: '100%', display: 'block' }}
        />
      </div>

      {/* Quote Section */}
      <div style={{ textAlign: 'center', marginTop: '1rem', padding: '0 1rem' }}>
        <p style={{
          fontFamily: 'EB Garamond, serif',
          fontStyle: 'italic',
          fontSize: '1rem',
          maxWidth: '700px',
          margin: '0 auto',
          color: 'black'
        }}>
          “You think back on the times you had with someone, replay it in your head over and over again, and you look for those first signs of trouble.”
        </p>
      </div>

        {/* Introduction Section */}
        <div style={{
        width: '100%',
        color: 'black',
        fontFamily: 'EB Garamond, serif',
        fontSize: '1.1rem',
        fontWeight: 400,
        lineHeight: 1.6,
        padding: '2rem 1rem',
        boxSizing: 'border-box',
        textAlign: 'justify',
        margin: '0 auto',
        maxWidth: '900px',  
        }}>
        <div style={{
            maxWidth: '900px',
            margin: '0 auto'
        }}>
            <p>
            Unrequited love – dramatic, but raw. For anyone who has gone through it, the drama doesn’t feel like a romance film, but rather something confusing, humiliating and real.
            I didn’t expect to be part of the 80% of people in the world who have experienced unrequited love (Hu et al., 2022), but here we are.
            How is it that love, something so desirable by every individual in this world, can cause something that creates so much confusion and emotional pain (Baumeister et al, 1993)?
            As someone who has lived through both roles of the rejector and rejectee, I wanted to understand what makes this form of heartache so disorienting and how we can maybe begin to make peace with it.
            </p>

            {/* Side-by-Side Section */}
            <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: '2rem',
            gap: '2rem',
            alignItems: 'flex-start'
            }}>
            <img
                src="/looseends/self.jpg"
                alt="self"
                style={{
                width: '272px',
                height: '272px',
                borderRadius: '10px',
                objectFit: 'cover',
                flexShrink: 0
                }}
            />

            <div style={{ flex: 1 }}>
                <p>
                This reflection is written in a blog-meets-academia format, using my own story as a girl who simply couldn’t get a guy to like her back.
                Using academia, I try to navigate the uncertainties of unrequited love; to finally try to understand the emotions I couldn’t make sense of on my own.
                </p>

                <p style={{
                fontSize: '2rem',
                fontStyle: 'italic',
                fontWeight: 700,
                color: '#9E182B',
                margin: '1.5rem 0',
                textAlign: 'center',
                padding: '1rem 1rem',
                marginTop: '2rem',
                }}>
                It is a love without reciprocity.
                </p>
            </div>
            </div>

            {/* Continuation Text */}
            <div style={{ marginTop: '2rem' }}>
            <p>
                Bringle et al. (2013) defines UL as a yearning for a more complete love by only one of the individuals in the relationship. Although UL is usually shorter than mutual love in duration and lower in intensity, it can occur as frequently or even more frequently than mutual love, making it all the more consuming (Hu et al., 2022).
            </p>

            <p>
                Relationships, as it turns out, are high risk, high reward. While mutual love fulfils our inherent need for partnership, UL acts as a barrier that blocks the attainment of stability and contentment (Greve et al., 2021).
            </p>

            <p>
                We hear endless tales of love that triumphs – against odds, across timelines. But what about the love that never gets off the ground? Love that flirts with possibility, then disappears without resolution? Unrequited love happens frequently and can begin in three main ways.
            </p>
            </div>
        </div>
        </div>
        
        {/* Three Common Beginnings of UL */} 
        <div style={{
            width: '100%',
            backgroundColor: '#F2E0D2',
            color: 'black',
            fontFamily: 'EB Garamond, serif',
            fontSize: '1.1rem',
            fontWeight: 400,
            lineHeight: 1.6,
            padding: '2rem 1rem',
            boxSizing: 'border-box',
            textAlign: 'justify',
            margin: '0 auto',
            maxWidth: '900px',
        }}>
        <div style={{
            maxWidth: '1120px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
        }}>

            {/* 1. Falling Upwards */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
                <p>
                “Falling upwards”, that is, falling for someone out of your league (Hu et al., 2022). 
                We have seen this in movies – nerdy protagonist falls for gorgeous love interest, and with the power of plot armour, guy gets girl (or vice versa) and they live happily ever after.
                </p>
            </div>
            <div style={{ flexShrink: 0 }}>
                <img
                src="/looseends/shes-out-of-my-league.png"
                alt="She’s Out Of My League (2010)"
                style={{ width: '360px', height: 'auto', borderRadius: '10px' }}
                />
                <p style={{
                textAlign: 'center',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                marginTop: '0.5rem'
                }}>
                She’s Out Of My League (2010)
                </p>
            </div>
            </div>

            {/* 2. Falling for a Friend */}
            <p>
                Falling for a friend – something I know all too well. 
                Friendship is already built upon closeness and intimacy, which are also central components of romantic relationships (Hu et al., 2022). 
                It’s easy for friends to fall for one another – Hill et al. (1997) found that men reported more episodes of unrequited love during the ages of 16 to 20 compared to women, suggesting potential gender differences in experiencing UL during adolescence. 
            </p>

            {/* 3. Unequal Love */}
            <p>
                Unequal love in relationships, whereby one party may feel that they are “giving more” in a relationship than the other party (Hu et al., 2022).
            </p>

            {/* Final Paragraph */}
            <p>
                It sounds bad, so why subject yourself to something that has a chance of not working out in the first place? 
                It may be because of the perceived potential value of such a romantic relationship, perceived probability of the relationship and desirability of the state of being in love (Aron et al., 1998). 
                We are all humans seeking love, to be seen and heard, and we’d do anything for a shot at something magical.
            </p>
        </div>
        </div>

        {/* Section: The 5 Types of Unrequited Love */}
        
        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 auto', maxWidth: '900px', }}>
            <h2 style={{
                fontFamily: 'Playwrite US Trad, serif',
                fontSize: '2.5rem',
                color: '#9E182B',
                margin: 0,
                textAlign: 'left',
            }}>
                The 5 Types of Unrequited Love
            </h2>
            <img src='/looseends/nst2061-loose-ends.png' alt="Decorative" style={{ width: '80px', height: 'auto' }} />
        </div>

        <div style={{
        width: '100%',
        backgroundColor: '#F2E0D2',
        fontFamily: 'EB Garamond, serif',
        color: 'black',
        padding: '2rem 1rem',
        boxSizing: 'border-box',
        margin: '0 auto',
        maxWidth: '900px',
        textAlign: 'justify',
        }}>
        <div style={{
            maxWidth: '1120px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
        }}>

        {/* Type 1 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ flexShrink: 0 }}>
                <img
                src='/looseends/notting-hill.png'
                alt="Notting Hill (1999)"
                style={{ width: '360px', height: 'auto', borderRadius: '10px' }}
                />
                <p style={{
                textAlign: 'center',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                marginTop: '0.5rem'
                }}>
                Notting Hill (1999)
                </p>
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
            <p>
            1. Crushing on someone unavailable, typically someone of higher social status like a popstar. In extreme cases, obsession may result in a rare mental disorder called erotomania, whereby a person is convinced that the object of their desires is deeply in love with them, even if they have never interacted before (Reid, 1989). With erotomania, an individual may feel intense love and intense hatred concurrently towards the love object (Reid, 1989). A parasocial relationship gone extremely wrong.
            </p>
        </div>
        </div>

        {/* Type 2 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ flexShrink: 0 }}>
                <img
                src='/looseends/to-all-the-boys-ive-loved-before.png'
                alt="To All The Boys I've Loved Before (2018)"
                style={{ width: '360px', height: 'auto', borderRadius: '10px' }}
                />
                <p style={{
                textAlign: 'center',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                marginTop: '0.5rem'
                }}>
                To All The Boys I've Loved Before (2018)
                </p>
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
            <p>
            2. Crushing on someone nearby without initiating a romantic relationship. The type of puppy-love, crush situation most of us would be acquainted with. The classic UL situation whereby you admire them from a distance and potentially create a version of them in your head. This form of UL develops through one’s imagined interactions with their love objects based on the construal of their behaviours, pushing an ideal that isn’t there onto them (Hu et al., 2022).
            </p>
        </div>
        </div>

        {/* Type 3 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ flexShrink: 0 }}>
                <img
                src='/looseends/500-days-of-summer.png'
                alt="500 Days of Summer (2009)"
                style={{ width: '360px', height: 'auto', borderRadius: '10px' }}
                />
                <p style={{
                textAlign: 'center',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                marginTop: '0.5rem'
                }}>
                500 Days of Summer (2009)
                </p>
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
            <p>
            3. If one is feeling braver, they may make their pursuit for the other person more obvious but fail to make the other person reciprocate. This kind of UL can result in a situation whereby both parties lose out. The person with the crush may feel resentment for the other party for not reciprocating their feelings (Schweiger, 2024) while the rejector may feel an overwhelming sense of guilt due to the scriptlessness of the situation (Baumeister et al., 1993). In a situation whereby both parties are not responsible for how the other party feels, it results in a directionless and confusing end.
            </p>
        </div>
        </div>

        {/* Type 4 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ flexShrink: 0 }}>
                <img
                src='/looseends/eternal-sunshine.png'
                alt="Eternal Sunshine of the Spotless Mind (2004)"
                style={{ width: '360px', height: 'auto', borderRadius: '10px' }}
                />
                <p style={{
                textAlign: 'center',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                marginTop: '0.5rem'
                }}>
                Eternal Sunshine of the Spotless Mind (2004)
                </p>
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
            <p>
            4. Longing for a past lover. A breakup is often not mutual and often happens after a period of interdependence, including familiarity with the love object that makes it difficult for a clean cut (Davis et al., 2000). Fisher introduces a concept called “frustration attraction”, whereby such social rejection may produce more passion (2004).
            Bringle et al. (2013) reported that the emotional intensity of unrequited love varies by type. Longing for a past lover had a mean intensity score of 6.12 on a 7-point scale, closely approaching the 6.36 mean for mutual love. 
            </p>
        </div>
        </div>

        {/* Type 5 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ flexShrink: 0 }}>
                <img
                src='/looseends/blue-valentine.png'
                alt="Blue Valentine (2010)"
                style={{ width: '360px', height: 'auto', borderRadius: '10px' }}
                />
                <p style={{
                textAlign: 'center',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                marginTop: '0.5rem'
                }}>
                Blue Valentine (2010)
                </p>
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
            <p>
            5. Unequal love in a relationship. Objectively the most painful of them all. The idea that “you’re supposed to love me, but why don’t I feel loved?” Such UL creates a dissatisfaction due to opposing expectations between the two lovers (Bringle et al., 2013). There may be perceived power at play, whereby one partner believes that they have more control over the other, essentially their subjective perception of their ability to shape decisions and outcomes within the relationship (Hall et al., 2019).
            </p>
        </div>
        </div>

        {/* Reflection */}
        <div>
        <p>
        A study by Saleem and Komal (2022) found that higher interpersonal dependency and negative self-disclosure were associated with more intense psychosocial reactions to unrequited love among university students.
            In the quiet after it all ended – or never began, my phone missing his text notifications – I was left with the gnawing what ifs. The unfounded “I hate you”s. The helpless “why couldn’t it have been me?” Schweiger (2024) reminds us that the person we love — or think we love — can’t be held morally responsible for not feeling the same. But that doesn't mean the emotional chaos they leave in their wake isn't real. It was empty and confusing, but I had to move on.
        </p>
        </div>

        {/* Section: Final Reflection / Letter Writing */}
        <div style={{
        width: '100%',
        backgroundColor: '#EAEBEF',
        borderRadius: '15px',
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
        padding: '2rem',
        boxSizing: 'border-box',
        fontFamily: 'EB Garamond, serif',
        color: 'black',
        marginTop: '2rem'
        }}>
        <div style={{
            maxWidth: '1065px',
            margin: '0 auto',
            fontSize: '1rem', 
            lineHeight: '1.7'
        }}>
            <p>So, I wrote.</p>
            <p>
            Not to him — he didn’t need to hear it. But to myself, or maybe to the version of him I built in my head. An ideal that I dreamt of and was left unrequited (Hu et al., 2022). Letter writing became a way to tie up the loose ends and remind us who we were before the entire ordeal. It helped me step out of the haze and reclaim my story — not as someone who was rejected, but as someone who learned. Someone who loved, even when it hurt.
            </p>
            <p>
            Tadros et al. (2024) found that writing unsent letters can help manage confusion and resentment, reframing the narrative from helplessness to healing. It gave me clarity. It gave me closure. And in a way, it let me say goodbye to the version of myself who kept waiting for a response that would never come.
            </p>
            <p>I hope it helps you say goodbye too.</p>
        </div>
        </div>

        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '2rem',
            fontFamily: 'EB Garamond, serif'
        }}>
        {/* Send a Letter Button */}
        <button style={{
            backgroundColor: '#9E182B',
            color: '#F2E0D2',
            fontSize: '1.5rem',
            fontFamily: 'Playwrite US Trad, serif',
            border: 'none',
            borderRadius: '80px',
            padding: '0.75rem 2rem',
            cursor: 'pointer',
            transition: 'background 0.3s ease'
        }}
        onClick={() => {
            navigate('/send-letter');
        }}
        >
            send a letter
        </button>

        {/* View References Link */}
        <Link to="/references" style={{
            color: '#9E182B',
            fontSize: '0.875rem',
            textDecoration: 'underline',
            fontStyle: 'italic',
            fontWeight: '400'
        }}>
            View References
        </Link>
        </div>

        </div>
        </div>
        

    </div>
  );
}

export default MainContent;
