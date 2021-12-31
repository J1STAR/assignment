import { FC, useState, useCallback, useEffect } from 'react';
import Header from '@/components/Header';
import Calendar from '@/components/Calendar';
import { request } from '@/util/api';
import { JopData } from '@/util/types';

const Home: FC = () => {
  const [year, setYear] = useState<number>(2021);
  const [month, setMonth] = useState<number>(9);
  // const [year, setYear] = useState<number>(new Date().getFullYear());
  // const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [jobData, setJopData] = useState<JopData[]>([]);

  /**
   * 이전 버튼 클릭
   */
  const beforeMonth = useCallback(() => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  }, [year, month]);

  /**
   * 이후 버튼 클릭
   */
  const afterMonth = useCallback(() => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  }, [year, month]);

  /**
   * 채용공고 데이터 요청
   */
  const getInformation = async () => {
    const data = await request();
    setJopData(data);
  };

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <>
      <Header year={year} month={month} beforeMonth={beforeMonth} afterMonth={afterMonth} />
      <Calendar year={year} month={month} jobData={jobData} />
    </>
  );
};

export default Home;
