import React from 'react'
import { connect } from 'react-redux'
import ProfileCard, { User } from '../Authentication/ProfileCard'
import Container from '../shared/Container'
import Header from '../components/Header'
import withPermission from '../utils/HOC/withPermission'

declare interface ProfileViewProps {
    user: User
}

const ProfileView: React.FC<ProfileViewProps> = (props) => {
    return <>
        <Header title="AlgaStock" />
        <Container>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <ProfileCard user={props.user}/>
            </div>
        </Container>
    </>
}

const mapStateToProps = () => ({
    user: {
        name: 'Caio',
        email: 'caio@email.com'
    }
})

export default connect(mapStateToProps) (ProfileView)