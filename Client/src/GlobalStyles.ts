import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
      
        box-sizing: border-box;

        
    }
    body,html,#root { 
        max-width: 768px;
        margin: 0 auto;
        width: 100%;
    }; 

`;

export default GlobalStyles;
