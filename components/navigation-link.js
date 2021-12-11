import Link from 'next/link';
import styles from '../assets/styles/link.module.sass';

export default function NavigationLink({ text, href }) {
  return (
    <Link href={href}>
      <a className={styles.link}>{text}</a>
    </Link>
  );
}
