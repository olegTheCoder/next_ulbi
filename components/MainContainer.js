import Head from "next/head";
import Link from "next/link";
import styles from "../styles/index.module.css";

function MainContainer({ children }) {
  return (
    <>
      <Head>
        <title>Главная</title>
        <meta keywords="next js"></meta>
      </Head>
      <nav>
        <Link href="/" className={styles.link}>
          Главная
        </Link>
        <Link href="/users" className={styles.link}>
          Список пользователей
        </Link>
      </nav>
      <div>{children}</div>
    </>
  );
}

export default MainContainer;
