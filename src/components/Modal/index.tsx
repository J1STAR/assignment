import { FC, useRef } from 'react';
import useOnClickOutside from '@/utils/hooks/useOnClickOutside';
import { ModalProps } from '@/utils/types';
import ModalContent from '@/components/ModalContent';
import { ModalOverlay, ModalWrapper, ModalInner } from './index.style';

/**
 * 모달 레이아웃
 */
const Modal: FC<ModalProps> = ({ visible, removeModal, job }) => {
  const modalRef = useRef(null);

  /**
   * 모달 외부 클릭 커스텀 훅
   */
  useOnClickOutside(modalRef, () => {
    removeModal();
  });

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper visible={visible}>
        <ModalInner ref={modalRef} className="modal-inner">
          {job && <ModalContent job={job} />}
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default Modal;
