import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
	
	// 전역스타일
	*{
    box-sizing: border-box;
    font-family:'Spoqa Han Sans Neo', 'sans-serif';
  }
`;

export default GlobalStyle;
