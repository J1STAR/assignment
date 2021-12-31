import { FC } from 'react';
import leftArrow from '@/assets/left-arrow.svg';
import rightArrow from '@/assets/right-arrow.svg';
import { HeaderProps } from '@/utils/types';
import { Wrapper, Date, Arrow } from './index.style';

/**
 * 상단 연/월 네비게이터
 */
const Header: FC<HeaderProps> = ({ year, month, beforeMonth, afterMonth }) => {
  return (
    <Wrapper>
      <Arrow src={leftArrow} alt="left-arrow" onClick={beforeMonth} />
      <Date>
        {year}.{month >= 10 ? month : `0${month}`}
      </Date>
      <Arrow src={rightArrow} alt="right-arrow" onClick={afterMonth} />
    </Wrapper>
  );
};

export default Header;
