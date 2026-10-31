import { AppBar, Toolbar, Typography, Container } from '@mui/material'

function Navbar() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6">
            MyProfile
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
