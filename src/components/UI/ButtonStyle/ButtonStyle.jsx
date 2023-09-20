
import styled, { css } from 'styled-components';


const ButtonStyle = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.6s ease-in-out;
  ${({ variant, theme, disabled }) =>
    disabled ? css`
    background-color: gray;
    border: 0;
    `
    : 
    variant === 'primary' && theme === 'light'
      ? css`
          background-color: #015699;
          color: #ffffff;
          border: none;
          &:hover {
            background-color: #003864;
            color: #f5f5f5;
          }
        `
      : variant === 'secondary' && theme === 'light'
      ? css`
          background-color: transparent;
          color: #ffffff;
          border: 1px solid #ffffff;
          &:hover {
            background-color: #003864;
            color: #f5f5f5;
            border: 1px solid #f5f5f5;
          }
        `
      : variant === 'icon' && theme === 'light'
      ? css`
          background-color: #015699;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border: none;
          transition: 0.5s ease-in-out;
          border-radius: 20px;
          margin-bottom: 10px;
          &:hover {
            background-color: #003864;
            color: #f5f5f5;
          }
        `
      : variant === 'primary' && theme === 'dark'
      ? css`
          background-color: #00c8e0;
          color: #121212;
          border: none;
          &:hover {
            background-color: #7ddfee;
            color: #292929;
          }
        `
      : variant === 'secondary' && theme === 'dark'
      ? css`
          background-color: transparent;
          color: #00c8e0;
          border: 1px solid #00c8e0;
          &:hover {
            background-color: #292929;
            color: #7ddfee;
            border: 1px solid #7ddfee;
          }
        `
      :  css`
          background-color: blue;
          color: whitesmoke;
          border: 0;
        `}
  &:hover {
    scale: 1.1;
  }
`;

export default ButtonStyle;