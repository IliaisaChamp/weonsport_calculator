import cn from 'classnames';
import styles from './styles.module.css';

export const AppCard = ({ children, mix }) => {
  return <div className={cn(styles.card, mix)}>{children}</div>;
};
