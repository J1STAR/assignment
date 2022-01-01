import { FC, useRef, useContext } from 'react';
import ModalContent from '@/components/ModalContent';
import { Context } from '@/context';
import useOnClickOutside from '@/utils/hooks/useOnClickOutside';
import { ModalProps } from '@/utils/types';
import { ModalOverlay, ModalWrapper, ModalInner } from './index.style';

/**
 * 모달 레이아웃
 */
const Modal: FC<ModalProps> = ({ visible, removeModal }) => {
  const modalRef = useRef(null);

  const {
    state: { selectedJob },
  } = useContext(Context);

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
          {selectedJob && <ModalContent />}
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default Modal;
