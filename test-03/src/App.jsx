import Header from "./layout/Header"
import Main from "./layout/Main"
import Related from "./layout/Related"
import Footer from "./layout/Footer"

function App() {
  return (
    <div className="min-h-screen flex flex-col"> 
      <Header />      
      <Main />
      <Related />      
      <Footer />   
    </div>
  )
}

export default App
