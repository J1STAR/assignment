export interface JopData {
  id: number;
  name: string;
  content: string;
  image: string;
  start_time: string;
  end_time: string;
  status?: 'S' | 'E';
}

export interface HeaderProps {
  year: number;
  month: number;
  beforeMonth: () => void;
  afterMonth: () => void;
}

export interface CalendarProps {
  year: number;
  month: number;
  jobData: JopData[];
  handleJobClick: (e: MouseEvent) => void;
}

export interface ModalProps {
  visible: boolean;
  removeModal: () => void;
  job: JopData | null;
}

export interface ModalContentProps {
  job: JopData;
}
