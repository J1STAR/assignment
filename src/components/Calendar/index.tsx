import { FC, useState, useEffect, useContext } from 'react';
import { Context } from '@/context';
import { CalendarProps, JopData } from '@/utils/types';
import { IsSameDay } from '@/utils/helper';
import { Wrapper, Daybar, DayWrapper, Day, DayHead, JobWrapper, Job, Status } from './index.style';

/**
 * 달력
 */
const Calendar: FC<CalendarProps> = ({ handleJobClick }) => {
  const [dates, setDates] = useState<string[]>([]);
  const [jobs, setJobs] = useState<JopData[][]>([]);

  const {
    state: { year, month, jobData },
  } = useContext(Context);

  /**
   * 연,월에 해당하는 날짜 및 채용정보를 세팅
   */
  const setDatesAndJobs = (year: number, month: number): void => {
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

    // 날짜 세팅
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

    // 채용정보 세팅
    const prevJobs = prevDates.map((day) =>
      month === 1 ? mappingJobData(year - 1, 12, day) : mappingJobData(year, month - 1, day),
    );

    const thisJobs = thisDates.slice(1).map((day) => mappingJobData(year, month, day));

    const nextJobs = nextDates.map((day) =>
      month === 12 ? mappingJobData(year + 1, 1, day) : mappingJobData(year, month + 1, day),
    );

    // 지난 월 최초 날짜에 월 표시
    if (prevDates.length) {
      prevDates[0] = month === 1 ? `12/${prevDates[0]}` : `${month - 1}/${prevDates[0]}`;
    }

    // 다음 월 최초 날짜에 월 표시
    if (nextDates.length) {
      nextDates[0] = month === 12 ? `1/${nextDates[0]}` : `${month + 1}/${nextDates[0]}`;
    }

    const dates = prevDates.concat(thisDates.slice(1), nextDates);
    const jobs = prevJobs.concat(thisJobs, nextJobs);

    setJobs(sortJobs(jobs));
    setDates(dates);
  };

  /**
   * 날짜에 해당하는 채용정보를 매핑
   */
  const mappingJobData = (year: number, month: number, day: string): JopData[] => {
    const baseDate = new Date(`${year}-${month}-${day}`);
    const jobs: JopData[] = [];

    jobData.forEach((job: JopData) => {
      const startDate = new Date(job.start_time);
      const endDate = new Date(job.end_time);

      // 'S': 채용시작, 'E': 채용종료
      if (IsSameDay(baseDate, startDate)) {
        jobs.push({ ...job, status: 'S' });
      }

      if (IsSameDay(baseDate, endDate)) {
        jobs.push({ ...job, status: 'E' });
      }
    });
    return jobs;
  };

  /**
   * 채용공고를 정렬
   */
  const sortJobs = (jobs: JopData[][]): JopData[][] => {
    jobs.map((job) => {
      job.sort((a, b) => {
        if (a.status === b.status) {
          return a.name < b.name ? -1 : 0;
        }
        return a.status === 'S' ? -1 : 1;
      });
    });
    return jobs;
  };

  useEffect(() => {
    setDatesAndJobs(year, month);
  }, [year, month, jobData]);

  return (
    <Wrapper>
      <Daybar>
        <li>일</li>
        <li>월</li>
        <li>화</li>
        <li>수</li>
        <li>목</li>
        <li>금</li>
        <li>토</li>
      </Daybar>
      <DayWrapper>
        {dates.length &&
          dates.map((day, index) => (
            <Day key={index}>
              <DayHead>{day}</DayHead>
              <JobWrapper>
                {jobs[index].map((job) => (
                  <Job key={job.id} data-id={job.id} onClick={handleJobClick}>
                    <Status status={job.status}>{job.status === 'S' ? '시' : '끝'}</Status>
                    <div>{job.name}</div>
                  </Job>
                ))}
              </JobWrapper>
            </Day>
          ))}
      </DayWrapper>
    </Wrapper>
  );
};

export default Calendar;
