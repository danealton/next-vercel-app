import DefaultLayout from '../../layouts/default';

export default function User({ user }) {
  return (
    <DefaultLayout title={user.name}>
      <h1>Пользователь с id { user.id }</h1>
      <div>Имя пользователя { user.name }</div>
    </DefaultLayout>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();

  return {
    props: {
      user,
    },
  };
}
