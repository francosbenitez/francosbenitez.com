import styled from "styled-components";

export const StyledArrow = styled.div`
  display: block;
  margin: 0 auto;
  width: 24px;
  height: 100px;

  svg {
    position: absolute;
    bottom: 75px;
    left: 50%;
    fill: ${(props) => props.theme.colors.primary};
    transform: translateX(-50%);
  }

  .firstArrow {
    animation: mainArrowAnim 2s ease-out infinite;
    animation-delay: 4s;
  }

  .secondArrow {
    animation: supportArrowAnim 2s ease-out infinite;
    animation-delay: 4.4s;
  }

  .thirdArrow {
    animation: supportArrowAnim 2s ease-out infinite;
    animation-delay: 4.85s;
  }

  @keyframes mainArrowAnim {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(-30px);
    }
    40%,
    80% {
      opacity: 1;
      transform: translateX(-50%) translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(15px);
    }
  }

  @keyframes supportArrowAnim {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(-30px);
    }
    40% {
      opacity: 1;
      transform: translateX(-50%) translateY(0px);
    }
    41%,
    100% {
      opacity: 0;
    }
  }
`;
