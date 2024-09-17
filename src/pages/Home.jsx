import { useContext } from "react";
import UserInfo from "../components/UserInfo";
import { usersContext } from "../contexts/usersContext";
import UserInfoSkeleton from "../components/skeletonLoaders/UserInfoSkeleton";
import DataTable from "../components/DataTable";

const Home = () => {
  const { users, error, loading } = useContext(usersContext);

  if (error) return <div>Some error occurred!</div>;

  return !loading ? (
    <div className="app">
      {/* {users?.length ? (
        <div className="usersList">
          {users.map((user) => (
            <UserInfo key={user.id} userData={user} />
          ))}
        </div>
      ) : (
        <h3 style={{ textAlign: "center", marginBlock: "50px" }}>
          List is Empty
        </h3>
      )} */}
      <div className="w-3/4 m-auto">
        <DataTable />
      </div>
    </div>
  ) : (
    <UserInfoSkeleton />
  );
};

export default Home;
