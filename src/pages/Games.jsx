

import Card from '../components/Card';

function Games() {
  const gameCards = [
    {
      imageSrc: "/images/pc.jpeg",
      imageAlt: "Among Us PC",
      title: "Among Us PC",
      description: "Play the classic Among Us experience on PC. Find the impostors before they sabotage the ship!"
    },
    {
      imageSrc: "/images/mobile.png",
      imageAlt: "Among Us Mobile",
      title: "Among Us Mobile",
      description: "Take the suspense on the go with Among Us Mobile. Available on iOS and Android devices."
    },
    {
      imageSrc: "/images/vr.jpg",
      imageAlt: "Among Us VR",
      title: "Among Us VR",
      description: "Experience the ultimate immersion with Among Us VR. Trust no one in virtual reality!"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="heading-1 text-center mb-8">Games</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gameCards.map((card, index) => (
          <Card 
            key={index}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Games;