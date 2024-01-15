export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'large' | 'medium' | 'small';
  children?: JSX.Element | string;
};
