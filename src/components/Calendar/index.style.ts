import styled from 'styled-components';
import { Date } from '../Header/index.style';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Daybar = styled.ul`
  margin-top: 0.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--lightGrey);
  color: white;
  height: 3vh;
  width: 90%;
  font-size: 0.9rem;

  @media screen and (max-width: 576px) {
    display: none;
  }

  > li {
    height: 100%;
    &:not(:last-child) {
      border-right: 1px solid white;
    }
    width: calc(100% / 7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DayWrapper = styled.ul`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  border-width: 1px 0 0 1px;
  border-style: solid;
  border-color: var(--borderGrey);
`;

export const Day = styled.li`
  width: calc(100% / 7);
  min-height: 14vh;
  text-align: center;
  border-style: solid;
  border-color: var(--borderGrey);
  border-width: 0 1px 1px 0;

  @media screen and (max-width: 576px) {
    width: 100%;
    min-width: 250px;
  }
`;

export const DayHead = styled.div`
  color: var(--darkGrey);
  background-color: var(--whiteGrey);
  padding: 0.5vh;
`;

export const JobWrapper = styled.ul`
  color: var(--fontGrey);
  padding: 0.5vh;
  text-align: left;
`;

export const Job = styled.li`
  display: flex;
  margin: 0.5vh 0;
  font-size: 1.5vh;
  cursor: pointer;
`;

export const Status = styled.div<{ status?: 'E' | 'S' }>`
  font-size: 1.1vh;
  width: 1.4vh;
  height: 1.4vh;
  color: white;
  border-radius: 3px;
  font-weight: bold;
  margin-right: 0.3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ status }) => (status === 'E' ? 'var(--endColor)' : 'var(--orange)')};
`;
