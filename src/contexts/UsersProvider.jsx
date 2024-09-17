import { useEffect, useState } from "react";
import { usersContext } from "./usersContext";

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]); // state to keep track of users data
    const [loading, setLoading] = useState(false); // state to keep track of the loading status
    const [error, setError] = useState(null); // state to keep track of the error status

    useEffect(() => {
        let ignore = false;
        setLoading(true);
        setError(null);
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setUsers(data);
            })
            .catch((errorResponse) => {
                setError(errorResponse.message);
                console.error(errorResponse.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <usersContext.Provider value={{ users, setUsers, error, loading }}>
            {children}
        </usersContext.Provider>
    );
};

export default UsersProvider;
