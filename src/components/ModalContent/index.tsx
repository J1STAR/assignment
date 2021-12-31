import { FC } from 'react';
import { ModalContentProps } from '@/util/types';
import { Head, Content, Logo, Name, TimeWrapper, Time, Info, Diff } from './index.style';
import { translateDate, calTimeDiff } from '@/util/helper';

const ModalContent: FC<ModalContentProps> = ({ job }) => {
  const getTimeDiff = (date: string): string => {
    const diff: number = calTimeDiff(date);

    if (diff > 0) {
      return `${diff}일 지남`;
    }
    if (diff === 0) {
      return '오늘';
    }
    return `${diff}일 전`;
  };

  return (
    <>
      <Head>
        <Logo src={job.image} alt="logo" />
        <Info>
          <Name>{job.name}</Name>
          <TimeWrapper>
            <Time>{`${translateDate(job.start_time)} ~ ${translateDate(job.end_time)}`}</Time>
            <Diff>({getTimeDiff(job.end_time)})</Diff>
          </TimeWrapper>
        </Info>
      </Head>
      <Content dangerouslySetInnerHTML={{ __html: job.content }} />
    </>
  );
};

export default ModalContent;
