import styled, { keyframes } from "styled-components"

const SpinnerContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.1);
`;

const rotation = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
  background: transparent;
  border: 10px solid #ccc;
  border-top: 10px solid lightblue;
  border-radius: 50%;
  animation: ${rotation} 1s infinite;
`;

export default function Loading() {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  )
}
