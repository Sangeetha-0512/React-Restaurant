import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import Login from './container/Loginpage/Login'; // <-- import Login page
import './App.css';
import Register from './container/Registers/Register';
import BookTable from './container/BookTable/Booktable';

const Home = () => (
  <>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/booktable" element={<BookTable/>}/>
    </Routes>
  </Router>
);

 export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
// import { Navbar } from './components';
// import Login from './container/Loginpage/Login';
// import Register from './container/Registers/Register';

// import ProtectedRoute from './container/';
// import AuthProvider from './AuthContext';
// import './App.css';

// const Home = () => (
//   <>
//     <Navbar />
//     <Header />
//     <AboutUs />
//     <SpecialMenu />
//     <Chef />
//     <Intro />
//     <Laurels />
//     <Gallery />
//     <FindUs />
//     <Footer />
//   </>
// );

// const App = () => (
//   <AuthProvider>
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         {/* <Route path="/book-table" element={<BookTable />} /> */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   </AuthProvider>
// );

// export default App;
