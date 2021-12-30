import { FC } from 'react';
import { Wrapper, Date, Arrow } from './index.style';
import leftArrow from '@/assets/left-arrow.svg';
import rightArrow from '@/assets/right-arrow.svg';

interface Props {
  year: number;
  month: number;
}

const Header: FC<Props> = ({ year, month }) => {
  return (
    <Wrapper>
      <Arrow src={leftArrow} alt="left-arrow" />
      <Date>
        {year}.{month}
      </Date>
      <Arrow src={rightArrow} alt="right-arrow" />
    </Wrapper>
  );
};

export default Header;
