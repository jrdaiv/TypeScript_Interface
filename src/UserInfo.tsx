import React from 'react'

interface UserInfoProps {
    name: string,
    age: number,
    email: string,
}

 export const UserInfo: React.FC<UserInfoProps> = ({name, age, email}) => {
    return (
        <div>
            <h1>User Info:</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    )
}