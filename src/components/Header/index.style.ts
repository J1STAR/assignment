import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 1%;
  justify-content: center;
  align-items: center;
`;

export const Date = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--orange);
`;

export const Arrow = styled.img`
  width: 2rem;
  height: 2rem;
  filter: invert(64%) sepia(40%) saturate(0%) hue-rotate(126deg) brightness(92%) contrast(88%);
  cursor: pointer;
`;
