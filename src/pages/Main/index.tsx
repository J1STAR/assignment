import { FC, useState, useCallback } from 'react';
import Header from '@/components/Header';

const Home: FC = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);

  const beforeMonth = useCallback(() => {}, []);

  // let { year, month } = this.state;
  // if (this.state.month === 1) {
  //     year--;
  //     month = 12;
  // }
  // else {
  //     month--;
  // }

  // let historys = await this.getAllHistory(year, month)
  // this.setState({ year, month, historys, type: MONTHLY_HISTORY });

  return (
    <>
      <Header year={year} month={month} />
    </>
  );
};

export default Home;
