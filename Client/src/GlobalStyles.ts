import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
      
        box-sizing: border-box;
        
    }
    html {
        background: #E4F7F0;
        background-image: url('images/cloud.png'), 
                          url('images/cloud.png');
        background-repeat: no-repeat, 
                           no-repeat;
        background-position: left top, 
                             right bottom;
    }
    body { 
        padding: 5rem 0;
        max-width: 768px;
        margin: 0 auto;
        width: 100%;
        color: #282846;
        background: white;
        height: 100vh;
    }; 

`;

export default GlobalStyles;
