import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
      
        box-sizing: border-box;
    }
    body,html,#root { width: 100% }; 

`;

export default GlobalStyles;
