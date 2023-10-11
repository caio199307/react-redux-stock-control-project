import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

type Role = 'admin' | 'customer' | undefined

const withPermission = (roles: Role[]) => (component: React.FC<any>) => (props: any) => {
    const auth = useSelector((state: RootState) => ({
        profile: state.authentication.profile
    }))
    console.log(auth.profile.role)
    console.log(roles)
    return (roles.includes(auth.profile?.role) ? <React.Component {...props} /> : null)  
}

export default withPermission