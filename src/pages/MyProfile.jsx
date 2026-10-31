import { Link } from 'react-router-dom'
import {
  Container,
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
} from '@mui/material'

function MyProfile({ profile }) {
  return (
    <Container maxWidth="sm" className="page-container">
      <Card>
        <CardContent className="profile-card">
          <Avatar
            src={profile.foto}
            alt="Foto profil"
            className="profile-avatar"
            sx={{
              width: 100,
              height: 100
            }}
          >
            {profile.nama.charAt(0)}
          </Avatar>

          <Typography variant="h5" className="profile-name">
            {profile.nama}
          </Typography>

          <Typography color="text.secondary">
            {profile.prodi}
          </Typography>

          <div className="profile-information">
            <Typography><b>NIM:</b> {profile.nim}</Typography>
            <Typography><b>Program Studi:</b> {profile.prodi}</Typography>
            <Typography><b>Fakultas:</b> {profile.fakultas}</Typography>
            <Typography><b>Universitas:</b> {profile.universitas}</Typography>
          </div>

          <Typography variant="h6" className="about-title">
            Tentang Saya
          </Typography>

          <Typography className="description">
            {profile.deskripsi}
          </Typography>

          <Button
            component={Link}
            to="/edit"
            variant="contained"
            className="edit-button"
            sx={{ marginTop: "15px" }}
          >
            Edit Profile
          </Button>
        </CardContent>
      </Card>
    </Container>
  )
}

export default MyProfile
