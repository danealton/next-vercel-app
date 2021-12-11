import Link from 'next/link';

import DefaultLayout from '../layouts/default';

const Users = ({ users }) => {
  return (
    <DefaultLayout title="Список пользователей">
      <h1>Список пользователей</h1>

      <ul>
        {users.map(user =>
          <li key={user.id}>
            <Link href={`users/${user.id}`}>{ user.name }</Link>
          </li>
        )}
      </ul>
    </DefaultLayout>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}
