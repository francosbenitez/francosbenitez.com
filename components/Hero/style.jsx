import styled from 'styled-components';

export const StyledHero = styled.section`
    padding-top: 6rem;
    height: 100vh;
    .hero-container {
        display: flex;
        .hero-description {
            flex-basis: 50%; 
            h1 {
                color: ${(props) => props.theme.primary};
                font-size: 4rem;
                font-weight: 900;
            }
            
            h2 {
                color: ${(props) => props.theme.secondary};
                font-size: 2rem;
                font-weight: 900;
                margin-top: 1rem;
            }

            h3 {
              color: ${(props) => props.theme.text};
                margin-top: 1rem;
                font-weight: 700;
                font-size: 2rem;
            }
        }

        .hero-img {
            img {
                width: 200%;
            }
        }
    }
    
    *, *:before, *:after {
      -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;
     }
    
    
    .mouse_scroll {
        display: block;
        margin: 0 auto;
        width: 24px;
        height: 100px;
    }
    
    
    .m_scroll_arrows
    {
      display: block;
      width: 5px;
      height: 5px;
      -ms-transform: rotate(45deg); /* IE 9 */
      -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
      transform: rotate(45deg);
       
      border-right: 2px solid black;
      border-bottom: 2px solid black;
      margin: 0 0 3px 4px;
      
      width: 16px;
      height: 16px;
    }
    
    
    .unu
    {
      margin-top: 1px;
    }
    
    .unu, .doi, .trei
    {
        -webkit-animation: mouse-scroll 1s infinite;
        -moz-animation: mouse-scroll 1s infinite;
        animation: mouse-scroll 1s infinite;
      
    }
    
    .unu
    {
      -webkit-animation-delay: .1s;
      -moz-animation-delay: .1s;
      -webkit-animation-direction: alternate;
      
      animation-direction: alternate;
      animation-delay: alternate;
    }
    
    .doi
    {
      -webkit-animation-delay: .2s;
      -moz-animation-delay: .2s;
      -webkit-animation-direction: alternate;
      
      animation-delay: .2s;
      animation-direction: alternate;
      
      margin-top: -6px;
    }
    
    .trei
    {
      -webkit-animation-delay: .3s;
      -moz-animation-delay: .3s;
      -webkit-animation-direction: alternate;
      
      animation-delay: .3s;
      animation-direction: alternate;
      
      
      margin-top: -6px;
    }
    
    .mouse {
      height: 42px;
      width: 24px;
      border-radius: 14px;
      transform: none;
      border: 2px solid black;
      top: 170px;
    }
    
    .wheel {
      height: 5px;
      width: 2px;
      display: block;
      margin: 5px auto;
      background: white;
      position: relative;
      
      height: 4px;
      width: 4px;
      border: 2px solid black;
      -webkit-border-radius: 8px;
              border-radius: 8px;
    }
    
    .wheel {
      -webkit-animation: mouse-wheel 0.6s linear infinite;
      -moz-animation: mouse-wheel 0.6s linear infinite;
      animation: mouse-wheel 0.6s linear infinite;
    }
    
    @-webkit-keyframes mouse-wheel{
       0% {
        opacity: 1;
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
      }
    
      100% {
        opacity: 0;
        -webkit-transform: translateY(6px);
        -ms-transform: translateY(6px);
        transform: translateY(6px);
      }
    }
    @-moz-keyframes mouse-wheel {
      0% { top: 1px; }
      25% { top: 2px; }
      50% { top: 3px;}
      75% { top: 2px;}
      100% { top: 1px;}
    }
    @-o-keyframes mouse-wheel {
    
       0% { top: 1px; }
      25% { top: 2px; }
      50% { top: 3px;}
      75% { top: 2px;}
      100% { top: 1px;}
    }
    @keyframes mouse-wheel {
    
       0% { top: 1px; }
      25% { top: 2px; }
      50% { top: 3px;}
      75% { top: 2px;}
      100% { top: 1px;}
    }
    
    @-webkit-keyframes mouse-scroll {
    
      0%   { opacity: 0;}
      50%  { opacity: .5;}
      100% { opacity: 1;}
    }
    @-moz-keyframes mouse-scroll {
    
      0%   { opacity: 0; }
      50%  { opacity: .5; }
      100% { opacity: 1; }
    }
    @-o-keyframes mouse-scroll {
    
      0%   { opacity: 0; }
      50%  { opacity: .5; }
      100% { opacity: 1; }
    }
    @keyframes mouse-scroll {
    
      0%   { opacity: 0; }
      50%  { opacity: .5; }
      100% { opacity: 1; }
    }
    
    @media screen and (max-width: 719px) {
        height: 150vh;
        .hero-container {
            flex-direction: column;
            text-align: center;
            h1 {
                font-size: 2.5rem;
            }

            h2 {
                font-size: 1.3rem;
            }

            .hero-img img {
                width: 100%;
            }
        }
    }
`;