import styled from 'styled-components'

export const LendButton = styled.button<{ w?: string; m?: string }>`
  font-weight: 400;
  font-size: 18px;
  width: ${({ w }) => (w ? w : '100%')};
  margin: ${({ m }) => (m ? m : '30px 0px 0px 0px')};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  background: linear-gradient(
    85.7deg,
    #aa448f 0%,
    #ff1665 54.13%,
    #fa6c81 101.89%
  );
  border-radius: 12px;
`
