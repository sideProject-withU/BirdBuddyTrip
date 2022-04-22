import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
      
        box-sizing: border-box;
        
    }
    html {
        background: #E4F7F0;
    }
    body { 
        max-width: 768px;
        margin: 0 auto;
        width: 100%;
        color: #282846;
        background: white;
        height: 100vh;
    }; 

`;

export default GlobalStyles;
