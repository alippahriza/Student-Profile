import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyProfile from './pages/MyProfile'
import EditProfile from './pages/EditProfile'

function App() {
  const [profile, setProfile] = useState({
    nama: 'M Alif Fahriza',
    nim: '251130557',
    prodi: 'Teknologi Informasi',
    fakultas: 'Fakultas Informatika',
    universitas: 'Universitas Mikroskil',
    deskripsi: 'aku adalah kaneki, kaneki adalah aku.',
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1pYyatMHds_ORdzXM_nWPyhZj1rIb3ExKJD6b6U_GGROMQRiHEA9kHY&s=10',
  })

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<MyProfile profile={profile} />}
        />

        <Route
          path="/edit"
          element={
            <EditProfile
              profile={profile}
              setProfile={setProfile}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
