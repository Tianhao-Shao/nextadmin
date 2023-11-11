// import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

import styles from "../../ui/dashboard/users/users.module.css"
import Image from "next/image";
import Link from "next/link";
const UsersPage = () => {
    return (
        <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div className={styles.user}>
                        <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                        Tianhao Shao
                    </div>
                </td>
                <td>tshao@uh.edu</td>
                <td> 12.01.2021</td>
                <td>Admin</td>
                <td>Active</td>
                <td>
                    <div className={styles.buttons}>
                        <Link href="/dashboard/users/1">
                            <button className={`${styles.button} ${styles.view}`}>View</button>
                        </Link>
                        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                    </div>
                </td>

            </tr>
          {/* {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={(user.id)} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
      {/* <Pagination count={count} /> */}
      <Pagination/>

    </div>
    );
};

export default UsersPage;