import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Detailpage from "./pages/Detailpage"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/products/:prodId" element={<Detailpage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
