import Hero from '../components/Hero';
import Awards from '../components/Awards';
import GameplayCarousel from '../components/GameplayCarousel';
import HowToPlay from '../components/HowToPlay';
import ActionBar from '../components/ActionBar';

function Home() {
  return (
    <main>
      <Hero />
      <Awards />
      <GameplayCarousel />
      <HowToPlay />
      <ActionBar />
    </main>
  );
}

export default Home;