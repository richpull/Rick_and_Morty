import { createGlobalStyle } from 'styled-components/macro';
export const GlobalStyling = createGlobalStyle`
	h1{
	  font-size: 30px;
	  margin-bottom: 30px;
	}
	.ellipsis{
		white-space: nowrap;
	    text-overflow:ellipsis;
	    overflow: hidden;
	}
    .uppercase{
      text-transform: uppercase;
    }
    .text-center{
      text-align: center;
    }
    .text-left{
      text-align: left;
    }
    .text-right{
      text-align: right;
    }
    .mb-0{
      margin-bottom: 0;
    }
`;
