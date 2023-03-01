export interface LabelValue {
  label: string;
  value: string;
}

export type MenuProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: JSX.Element;
};
