import Header from './components/secondLesson/header';
import Layout from './components/secondLesson/layout';
import Footer from './components/secondLesson/footer';
import bg1 from './components/secondLesson/img/bg1.jpg';
import bg2 from './components/secondLesson/img/bg2.jpg';

const App = () => {
  const headerTitle = "Hello";
  const headerDescr = 'React.js!';  
  const layoutTitle = "Hello React!";
  const layoutDesc = "Learning React is cool!";
  const bgcForSecondLayout ='red';
  return(
    <>  
        <Header 
        title = {headerTitle}
        descr = {headerDescr}
        />
        <Layout 
        title = {layoutTitle}
        descr = {layoutDesc}
        urlBg = {bg1}
        />
        <Layout 
        title = {layoutTitle}
        descr = {layoutDesc}
        colorBg = {bgcForSecondLayout}
        />
        <Layout 
          title = {layoutTitle}
          descr = {layoutDesc}
          urlBg = {bg2}
        />
        <Footer />
    </>
  );
}

export default App;
