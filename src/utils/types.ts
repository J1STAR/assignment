export interface JopData {
  id: number;
  name: string;
  content: string;
  image: string;
  start_time: string;
  end_time: string;
  status?: 'S' | 'E';
}

export interface CalendarProps {
  handleJobClick: (e: MouseEvent) => void;
}

export interface ModalProps {
  visible: boolean;
  removeModal: () => void;
}
