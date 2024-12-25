import styles from "../../styles/User.module.scss";
import MainContainer from "../../components/MainContainer";

export default function User({ user, id }) {
  return (
    <MainContainer>
      <div>
        <h1 className={styles.user}>Пользователь с id {id}</h1>
        <p>Имя: {user.name}</p>
      </div>
    </MainContainer>
  );
}

export const getServerSideProps = async ({ params: { id } }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();

  return {
    props: {
      user,
      id,
    },
  };
};
