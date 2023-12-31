import React from "react";
import Form from "../shared/Form";
import Input from "../shared/Input";

export interface User {
    name: string,
    email: string
}

declare interface ProfileCardProps {
    user: User
}

const ProfileCard: React.FC<ProfileCardProps> = (props) => {
    return <div style={{
        minWidth: '320px'
    }}>
        <Form title="Profile">
            <Input label="Name" value={props.user.name} disabled/>
            <Input label="Name" value={props.user.email} disabled/>
        </Form>
    </div>
}

export default ProfileCard