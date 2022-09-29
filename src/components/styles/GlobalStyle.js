import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
	--clr-dark-100: hsl(200, 15%, 8%);
	--clr-dark-200: hsl(207, 26%, 17%);
	--clr-dark-300: hsl(209, 23%, 22%);
	--clr-light-100:hsl(0, 0%, 100%);
	--clr-light-200: hsl(0, 0%, 98%);
	--clr-light-300: hsl(0, 0%, 52%);

	//font weights

	--fw-300: 300;
	--fw-600: 600;
	--fw-800: 800;
}



html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}



body {
  font-size: 0.875rem;
  font-family: 'Nunito Sans', sans-serif;
	line-height: 1.5;
	background-color: var(${({ theme }) => theme.bg});
	color: var(${({ theme }) => theme.fc});
	text-transform: capitalize;
}

h1, h2 {
	font-weight: var(--fw-800);
}
h3 {
	font-weight: var(--fw-600);
}

img {
	display: block;
	max-width: 100%;
}

ul {
	list-style: none;
}

a {
 text-decoration: none;
 color: inherit;
}

button {
	color: inherit;
}

.loader {


  margin: auto;


  border: 20px solid #EAF0F6;


  border-radius: 50%;


  border-top: 20px solid #FF7A59;


  width: 200px;


  height: 200px;


  animation: spinner 4s linear infinite;


}


 


@keyframes spinner {


  0% { transform: rotate(0deg); }


  100% { transform: rotate(360deg); }


}




`;
