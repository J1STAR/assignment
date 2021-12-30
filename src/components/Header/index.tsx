import { FC } from 'react';
import { Wrapper, Date, Arrow } from './index.style';
import leftArrow from '@/assets/left-arrow.svg';
import rightArrow from '@/assets/right-arrow.svg';

interface Props {
  year: number;
  month: number;
  beforeMonth: () => void;
  afterMonth: () => void;
}

const Header: FC<Props> = ({ year, month, beforeMonth, afterMonth }) => {
  return (
    <Wrapper>
      <Arrow src={leftArrow} alt="left-arrow" onClick={beforeMonth} />
      <Date>
        {year}.{month}
      </Date>
      <Arrow src={rightArrow} alt="right-arrow" onClick={afterMonth} />
    </Wrapper>
  );
};

export default Header;
