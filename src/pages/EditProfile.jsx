import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from '@mui/material'

function EditProfile({ profile, setProfile }) {
  const [nama, setNama] = useState(profile.nama)
  const [nim, setNim] = useState(profile.nim)
  const [prodi, setProdi] = useState(profile.prodi)
  const [fakultas, setFakultas] = useState(profile.fakultas)
  const [universitas, setUniversitas] = useState(profile.universitas)
  const [deskripsi, setDeskripsi] = useState(profile.deskripsi)
  const [foto, setFoto] = useState(profile.foto)

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    setProfile({
      nama: nama,
      nim: nim,
      prodi: prodi,
      fakultas: fakultas,
      universitas: universitas,
      deskripsi: deskripsi,
      foto: foto,
    })

    navigate('/')
  }

  return (
    <Container maxWidth="sm" className="page-container">
      <Card>
        <CardContent>
          <Typography variant="h5" className="form-title">
            Edit Profile
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Nama Lengkap"
              value={nama}
              onChange={(event) => setNama(event.target.value)}
              required
              fullWidth
              margin="normal"
            />

            <TextField
              label="NIM"
              value={nim}
              onChange={(event) => setNim(event.target.value)}
              required
              fullWidth
              margin="normal"
            />

            <TextField
              label="Program Studi"
              value={prodi}
              onChange={(event) => setProdi(event.target.value)}
              required
              fullWidth
              margin="normal"
            />

            <TextField
              label="Fakultas"
              value={fakultas}
              onChange={(event) => setFakultas(event.target.value)}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Universitas"
              value={universitas}
              onChange={(event) => setUniversitas(event.target.value)}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Deskripsi Singkat"
              value={deskripsi}
              onChange={(event) => setDeskripsi(event.target.value)}
              fullWidth
              multiline
              rows={3}
              margin="normal"
            />

            <TextField
              label="URL Foto Profil"
              value={foto}
              onChange={(event) => setFoto(event.target.value)}
              fullWidth
              margin="normal"
            />

            <div className="form-buttons">
              <Button
                component={Link}
                to="/"
                variant="outlined"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                variant="contained"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Container>
  )
}

export default EditProfile
