import AllCourses from './AllCourses';
import './App.css';
import Footer from './Footer';
import Header from './Headers/Header';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AllCourses /><br /><br />
      <Footer />
    </div>
  );
}
export default App;
