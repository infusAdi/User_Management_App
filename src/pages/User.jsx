import { useContext } from "react";
import { useParams } from "react-router-dom";
import { usersContext } from "../contexts/usersContext";
import UserInfoSkeleton from "../components/skeletonLoaders/UserInfoSkeleton";

const User = () => {
    const { userId } = useParams();
    const { users } = useContext(usersContext);

    const userInformation = userId
        ? users.find((user) => Number(user.id) === Number(userId))
        : null;

    return (
        <div>
            {userInformation ? (
                <div className="fullUserInfo-container">
                    <div className="fullUserInformation">
                        <h2>
                            <span>Name:</span> {userInformation?.name}
                        </h2>
                        <p>
                            <span>Email:</span> {userInformation?.email}
                        </p>
                        <p>
                            <span>Phone:</span> {userInformation?.phone}
                        </p>
                        <p>
                            <span>Website:</span>{" "}
                            {userInformation?.website || "no data"}
                        </p>
                    </div>
                    <div>
                        <div className="fullUserInformation">
                            <h2>
                                <span>Address:</span>{" "}
                            </h2>
                            <p>
                                <span>City:</span>{" "}
                                {userInformation?.address?.city || "no data"}
                            </p>
                            <p>
                                <span>Street:</span>{" "}
                                {userInformation?.address?.street || "no data"}
                            </p>

                            <p>
                                <span>Suite:</span>{" "}
                                {userInformation?.address?.suite || "no data"}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="fullUserInformation">
                            <h2>Company: </h2>
                            <p>
                                <span>Company name:</span>{" "}
                                {userInformation?.company?.name || "no data"}
                            </p>
                            <p>
                                <span>CatchPhrase:</span>{" "}
                                {userInformation?.company?.catchPhrase ||
                                    "no data"}
                            </p>

                            <p>
                                <span>BS:</span>{" "}
                                {userInformation?.company?.bs || "no data"}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <UserInfoSkeleton childCount={3} />
            )}
        </div>
    );
};

export default User;
