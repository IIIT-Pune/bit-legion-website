import Fame from './components/Fame'
import NavBar from './components/NavBar'
import Archive from './components/Archive'
import Team from './components/Team'
import './App.css'
import homeImage from './assets/home-image.jpg'

import './styles/tailwind.css'
import { Route, Routes } from 'react-router-dom'

const MainComponent = () => {
  return (
    <div className="bit-legion-wrapper">
      <div
        className="bit-legion-text text-white text-center"
        style={{ width: '70%', margin: 'auto' }}
      >
        There are only 10 types of people in the world: those who understand
        binary and those who don't.
      </div>
      <img src={homeImage} alt="" style={{ width: '80%', margin: 'auto' }} />
      <h1
        className="font-Aquire text-pink-squid"
        style={{ fontSize: '3rem', textAlign: 'center' }}
      >
        ABOUT US
      </h1>
      <div
        className="text-white font-montserrat text-[18px]"
        style={{ width: '90%', margin: '0 auto' }}
      >
        BiT Legion is the elite coding club of IIIT Pune. It is a student-driven
        community of like-minded people striving to reach new heights in the
        field of programming. Throughout the years, the main focus of the club
        has been to introduce students to the beautiful world of programming and
        build a strong coding culture in the institute. The club ensures that
        every individual gets a smooth onboarding when beginning their
        programming journey by conducting a variety of webinars, coding
        sessions, tech talks, team building events, and fun activities. Members
        of the club participate in major coding contests to showcase and improve
        their coding skills. These include, but are not limited to ICPC (The
        Olympics of Coding), Google Kickstart, Google Codejam, Google Hashcode,
        Google Summer of Code, and various inter-college contests. There’s more
        to the club than just coding. Our powerful network which includes senior
        club members and alumni enables us to provide early internship and
        full-time opportunities at tech giants like Google, Amazon, Nutanix,
        etc. The club is well known internationally for hosting InfInITy, the
        flagship coding contest of IIIT Pune which attracts thousands of
        participants each year. IIITP team “One Last Con” consisting entirely of
        BiT Legion members recently bagged Rank 37 (best among all IIITs) at
        ICPC Amritapuri regionals.
      </div>
      <Team />
    </div>
  )
}

function App() {
  return (
    <div className="root">
      <NavBar />
      <Routes>
        <Route path="/archives" element={<Archive />} />
        <Route path="/halloffame" element={<Fame />} />
        <Route path="/ourteam" element={<Team />} />
        <Route path="/" element={<MainComponent />} />
      </Routes>
    </div>
  )
}

export default App
