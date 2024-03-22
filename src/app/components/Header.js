import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const Header = ({ page }) => {
    return (
        <div className={styles.HeaderContainer}>
            <Image src='/LogoPrincipal.png' width={206} height={70} />
            <div className={styles.HeaderButtons}>
                <Link href={'/'}>
                    <label className={styles.HeaderButton}>Claboradores</label>
                </Link>
                <Link href={'/contratos'}>
                    <label className={styles.HeaderButton}>Contratos</label>
                </Link>
                <Link href={'/horarios'}>
                    <label className={styles.HeaderButton}>Horarios</label>
                </Link>
            </div>
        </div>
    );
};
