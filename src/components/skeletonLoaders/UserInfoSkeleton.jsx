const UserInfoSkeleton = ({ childCount = 5 }) => {
    const skeletons = Array.from({ length: childCount })
        .fill("")
        .map((item, index) => (
            <div key={index} className="userInfo-skeleton">
                <div></div>
                <div></div>
                <div></div>
            </div>
        ));

    return <div className="userInfo-skeleton-container">{skeletons}</div>;
};

export default UserInfoSkeleton;
