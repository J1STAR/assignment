import styled from 'styled-components';

export const Head = styled.header`
  display: flex;
  padding-bottom: 2vh;
  border-bottom: 1px solid var(--lightGrey);
`;

export const Content = styled.div`
  padding-top: 1.5vh;
  text-align: center;
`;

export const Logo = styled.img`
  max-width: 8vw;
  margin-right: 2.7%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Name = styled.div`
  font-size: 1.3vw;
  margin-bottom: 2vh;
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Time = styled.div`
  font-size: 1.1vw;
  margin-right: 0.5vw;
`;

export const Diff = styled.div`
  font-size: 1.1vw;
  color: var(--orange);
`;
