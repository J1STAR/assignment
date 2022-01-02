/**
 * 채용공고
 */
export interface JopData {
  id: number;
  name: string;
  content: string;
  image: string;
  start_time: string;
  end_time: string;
  status?: 'S' | 'E';
}

/**
 * 달력 props
 */
export interface CalendarProps {
  handleJobClick: (e: MouseEvent) => void;
}

/**
 * 모달 props
 */
export interface ModalProps {
  visible: boolean;
  removeModal: () => void;
}
