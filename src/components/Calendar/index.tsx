import { FC, useEffect } from 'react';
import { Wrapper } from './index.style';

interface Props {
  year: number;
  month: number;
}

/**
 * 연,월에 해당하는 날짜 리스트를 반환합니다.
 */
const getDates = (year: number, month: number): string[] => {
  const viewYear = year;
  const viewMonth = month;
  const prevLast = new Date(viewYear, viewMonth - 1, 0);
  const thisLast = new Date(viewYear, viewMonth, 0);
  const pldate = prevLast.getDate();
  const plday = prevLast.getDay();
  const tldate = thisLast.getDate();
  const tlday = thisLast.getDay();
  const thisDates = [];
  const prevDates = [];
  const nextDates = [];
  const days = Array(tldate + 1).keys();

  while (true) {
    const iteratorResult = days.next();
    if (iteratorResult.done) break;
    thisDates.push(iteratorResult.value.toString());
  }
  if (plday !== 6) {
    for (let i = 0; i < plday + 1; i++) {
      prevDates.unshift((pldate - i).toString());
    }
  }
  for (let i = 1; i < 7 - tlday; i++) {
    nextDates.push(i.toString());
  }

  if (prevDates.length) {
    prevDates[0] = month === 1 ? `12/${prevDates[0]}` : `${month - 1}/${prevDates[0]}`;
  }

  if (nextDates.length) {
    nextDates[0] = month === 12 ? `1/${nextDates[0]}` : `${month + 1}/${nextDates[0]}`;
  }

  const dates = prevDates.concat(thisDates.slice(1), nextDates);
  return dates;
};

const Header: FC<Props> = ({ year, month }) => {
  useEffect(() => {});

  return (
    <Wrapper>
      <div>달력</div>
    </Wrapper>
  );
};

export default Header;
