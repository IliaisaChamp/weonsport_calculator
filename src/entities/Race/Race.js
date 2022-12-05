import { AppCard } from 'src/ui/AppCard';
import { AppTitle } from 'src/ui/AppTitle/AppTitle';

import styles from './styles.module.css';

export const Race = () => {
  return (
    <AppCard mix={styles.area}>
      <div>
        <AppTitle tag='h1' text='Калькулятор темпа и скорости бега' />
        <AppTitle tag='h4' text='Хотите попасть в определенное время? Рассчитайте свой темп ниже...' />
      </div>
    </AppCard>
  );
};
