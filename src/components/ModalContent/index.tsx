import { FC, useContext } from 'react';
import { Context } from '@/context';
import { translateDate, calTimeDiff } from '@/utils/helper';
import { Head, Content, Logo, Name, TimeWrapper, Time, Info, Diff } from './index.style';

/**
 * 모달 내부 내용
 */
const ModalContent: FC = () => {
  const {
    state: { selectedJob },
  } = useContext(Context);

  /**
   * 날짜 경과 표시
   */
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
        <Logo src={selectedJob.image} alt="logo" />
        <Info>
          <Name>{selectedJob.name}</Name>
          <TimeWrapper>
            <Time>{`${translateDate(selectedJob.start_time)} ~ ${translateDate(selectedJob.end_time)}`}</Time>
            <Diff>({getTimeDiff(selectedJob.end_time)})</Diff>
          </TimeWrapper>
        </Info>
      </Head>
      <Content dangerouslySetInnerHTML={{ __html: selectedJob.content }} />
    </>
  );
};

export default ModalContent;
