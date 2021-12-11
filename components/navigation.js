import NavigationLink from '../components/navigation-link';
import styles from '../assets/styles/navigation.module.sass';

export default function Navigation() {
  return (
    <div className={styles.nagivation}>
      <NavigationLink href={'/'} text="Главная" />
      <NavigationLink href={'/users'} text="Пользователи" />
    </div>
  );
}
