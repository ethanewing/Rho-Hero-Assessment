import Hero from '../components/Hero/Hero';
import { heroSections } from '../data/heroData';

export default function Demo() {
  return (
    <div>
        {heroSections.map((hero) => (
            <Hero
                key={hero.id}
                src={hero.backgroundImage.src}
                alt={hero.backgroundImage.alt}
                title={hero.title}
                description={hero.description}
                placeTitle={hero.layout.titlePlacement}
                placeDescription={hero.layout.descriptionPlacement}
                theme={hero.theme}
            />
        ))}
    </div>
  );
}
