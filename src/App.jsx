import Header from "./components/Header"
import Footer from "./components/Footer"

import StudentCard from "./components/StudentCard"

function App() {
 

  return (
    <>
      
    <Header name="Bhaskar"/>

    <main className='grid'>
      
      <StudentCard  title="Attendace" value="92%"/>
      <StudentCard title="CGPA" value="8.95"/>
      <StudentCard title="Courses" value="6"/>
      
    </main>



    <Footer/>




    </>
  )
}

export default App
