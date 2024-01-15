import clsx from 'clsx';

import { Props } from './types';

import styles from './Button.module.scss';

export const Button = (props: Props) => {
  const { size = 'medium', className, ...restProps } = props;

  return (
    <button className={clsx(styles.wrapper, styles[size], className)} {...restProps}>
      {props.children}
    </button>
  );
};
