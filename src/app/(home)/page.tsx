import Header from '../../components/Header';
import Hero from './components/Hero';
import Sections from './components/Sections';
import AboutIt from './components/AboutIt';
import CourseContent from './components/CourseContent';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Sections>
        <AboutIt />
        <CourseContent />
      </Sections>
    </main>
  );
}
