import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  gap: 1%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    min-width: 250px;
  }
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
