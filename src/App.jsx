import './App.css'
import Card from './Component/Card/Card'
import Linechart from './Component/Chart/Linechart'
import CustomNavbar from './Component/Navbar/CustomNavbar'
import DaisyNavbar from './Component/Navbar/DaisyNavbar'

function App() {

  return (
    <>
     <header className='container mx-auto '>
      <DaisyNavbar></DaisyNavbar>
      <CustomNavbar></CustomNavbar>
     </header>
      <p className='bg-rose-600 '> i am here</p>

      <main className='container mx-auto '>
        <Card></Card>
        <Linechart></Linechart>
        
      </main>
      
    </>
  )
}

export default App
