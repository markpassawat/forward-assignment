import styled from 'styled-components'

const TooltipContent = styled.div`
  visibility: hidden;
  font-weight: 300;
  font-size: 16px;
  line-height: 118%;

  padding: 20px;

  position: absolute;
  width: 372px;
  height: 116px;
  left: 80px;
  z-index: 1;

  box-sizing: border-box;

  border: 1px solid transparent;
  border-radius: 10px;
  background: linear-gradient(#141518, #141518),
    linear-gradient(
      90deg,
      rgba(101, 103, 112, 1) 0%,
      rgba(255, 255, 255, 1) 45%,
      rgba(101, 103, 112, 1) 100%
    );
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`

const StyledTooltip = styled.div`
  &:hover div {
    visibility: visible;
  }
`

interface TooltipProps {
  content: string
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  return (
    <>
      <StyledTooltip>
        {children}
        <TooltipContent>{content}</TooltipContent>
      </StyledTooltip>
    </>
  )
}

export default Tooltip
