import { FC, useContext } from 'react';
import leftArrow from '@/assets/left-arrow.svg';
import rightArrow from '@/assets/right-arrow.svg';
import { Context } from '@/context';
import { BEFORE_MONTH, NEXT_MONTH } from '@/context/actionTypes';
import { Wrapper, Date, Arrow } from './index.style';

/**
 * 상단 연/월 네비게이터
 */
const Header: FC = () => {
  const {
    state: { year, month },
    dispatch,
  } = useContext(Context);

  /**
   * 네이게이터 이전버튼 클릭
   */
  const beforeMonth = () => {
    dispatch({
      type: BEFORE_MONTH,
    });
  };

  /**
   * 네이게이터 이후버튼 클릭
   */
  const nextMonth = () => {
    dispatch({
      type: NEXT_MONTH,
    });
  };

  return (
    <Wrapper>
      <Arrow src={leftArrow} alt="left-arrow" onClick={beforeMonth} />
      <Date>
        {year}.{month >= 10 ? month : `0${month}`}
      </Date>
      <Arrow src={rightArrow} alt="right-arrow" onClick={nextMonth} />
    </Wrapper>
  );
};

export default Header;
