import { FC, useState, useCallback, useContext } from 'react';
import Header from '@/components/Header';
import Calendar from '@/components/Calendar';
import Modal from '@/components/Modal';
import { Context } from '@/context';
import { SELECT_JOB } from '@/context/actionTypes';
import { JopData } from '@/utils/types';

/**
 * 메인 페이지
 */
const Home: FC = () => {
  const [isModalOpen, SetIsModalOpen] = useState<boolean>(false);

  const {
    state: { jobData },
    dispatch,
  } = useContext(Context);

  /**
   * 모달 숨김
   */
  const removeModal = () => {
    SetIsModalOpen(false);
  };

  /**
   * 채용공고 클릭
   */
  const handleJobClick = useCallback(
    (e) => {
      const $li = e.target.closest('li');
      const { id } = $li.dataset;
      const job = jobData.find((job: JopData) => job.id === Number(id)) as JopData;

      dispatch({
        type: SELECT_JOB,
        payload: job,
      });

      SetIsModalOpen(true);
    },
    [jobData],
  );

  return (
    <>
      <Header />
      <Calendar handleJobClick={handleJobClick} />
      <Modal removeModal={removeModal} visible={isModalOpen} />
    </>
  );
};

export default Home;
