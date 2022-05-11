import styled from "styled-components";

export const LoaderStyles = styled.div`
  border: 16px solid white;
  border-radius: 50%;
  border-top: 16px solid #0064eb;
  border-bottom: 16px solid #0064eb;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
