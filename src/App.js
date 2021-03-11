import Header from './components/secondLesson/header';
import Layout from './components/secondLesson/layout';
import Footer from './components/secondLesson/footer';

const App = () => {
  const layoutTitle = "Hello React!";
  const layoutDesc = "Learning React is cool!";
  return(
    <>  
        <Header />
        <Layout 
        title = {layoutTitle}
        desc = {layoutDesc}
        />
        <Layout 
        title = {layoutTitle}
        desc = {layoutDesc}
        />
        <Layout 
          title = {layoutTitle}
          desc = {layoutDesc}
        />
        <Layout
         title = {layoutTitle}
         desc = {layoutDesc}
         />
        <Footer />
    </>
  );
}

export default App;
