export interface options {
  value: string;
  label: string;
}

export interface oneFilterProps {
  options: options[];
  loading: boolean;
  filter: string | null;
  filterName: string;
  icon: any;
}

export interface oneFilterContentProps {
  hide: () => void;
  filter: string | null;
  filterName: string;
  options: options[];
}
