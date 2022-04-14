import styled from 'styled-components'

const CheckBoxLabel = styled.label`
  box-sizing: border-box;
  width: 72px;
  height: 32px;

  border-radius: 62px;
  border: 1px solid transparent;
  background: linear-gradient(#22242d, #22242d),
    linear-gradient(
      90deg,
      rgba(101, 103, 112, 1) 0%,
      rgba(255, 255, 255, 1) 45%,
      rgba(101, 103, 112, 1) 100%
    );
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 3px;
    background: #3f8cff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
  }
`
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 20px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: white;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      margin-left: 43px;
      transition: 0.4s;
    }
  }
`

const Switch = () => {
  return (
    <>
      <img src="/images/moon-stars.svg" alt="moon-stars" />
      <CheckBox id="checkbox" type="checkbox" />
      <CheckBoxLabel htmlFor="checkbox" />
    </>
  )
}

export default Switch
