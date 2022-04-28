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
        max-width: 768px;
        margin: 5rem auto;
        width: 100%;
        color: #282846;
        min-height: 100vh;
        background: white;
    }; 

`;

export default GlobalStyles;
