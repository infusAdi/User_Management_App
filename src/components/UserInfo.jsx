import { useContext, useState } from "react";
import { usersContext } from "../contexts/usersContext";
import { Link } from "react-router-dom";

const UserInfo = ({ userData }) => {
    const { setUsers } = useContext(usersContext);
    const [deleteStatus, setDeleteStatus] = useState(false);

    const deleteUser = async (userId) => {
        setDeleteStatus(true);
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${userId}`,
                {
                    method: "DELETE",
                }
            );
            if (response.ok) {
                setUsers((prevUsers) =>
                    prevUsers.filter((user) => user.id !== userId)
                );
            }
        } catch (error) {
            console.error(error.message);
        } finally {
            setDeleteStatus(false);
        }
    };
    return (
        <div className="userInfo-container">
            <div className="user-info">
                <Link to={`/user/${userData.id}`} className="username">
                    {userData.name}
                </Link>
                <p className="user-email">
                    <span>Email:</span> {userData.email}
                </p>
                <p className="user-phone">
                    <span>Phone:</span> {userData.phone}
                </p>
            </div>

            <div className="actions">
                <Link to={`/user/${userData.id}`} className="userDetail-link">
                    Full Detail
                </Link>

                <Link to={`/update/${userData.id}`}>Update User</Link>

                <button
                    className="deleteUser-btn"
                    onClick={() => deleteUser(userData.id)}
                    disabled={deleteStatus}
                >
                    {deleteStatus ? "Deleting..." : "Delete"}
                </button>
            </div>
        </div>
    );
};

export default UserInfo;
