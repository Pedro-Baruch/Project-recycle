import { Container } from "./style";

interface UserProfileProps {
  profilePictureUrl?: string
  name?: string
}

export function UserProfile ({profilePictureUrl, name}: UserProfileProps) {

  return (
    <Container >
      <div className="imgUser">
        <img src={profilePictureUrl} alt="" />
      </div>
      <div className="infoUser">
        <h3>{name}</h3>
      </div>
    </Container>
  )
}