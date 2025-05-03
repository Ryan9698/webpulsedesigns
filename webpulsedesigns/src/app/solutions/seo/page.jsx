import { seoFacts } from '@/app/data';
import { FactCarousel } from '@/components/general';

export default function SeoAndPerformance() {
  return (
    <div className="bg-gradient-to-br min-h-screen from-gray-800 via-sky-600 to-black">
      <section>
        <h1 className="font-jakartaSans text-white text-3xl underline">
          SEO and Performance Optimization
        </h1>
        <p className="font-jakartaSans text-white">
          SEO and Performance are not just important to a website, they are
          vital.
        </p>
      </section>
      {/* Maybe an animation or carousel - What is SEO (facts)*/}
      <section>
        <h2 className="font-jakartaSans text-white">
          What is SEO and why is it important?
        </h2>
        {/* SEO and content here */}
        <FactCarousel data={seoFacts} />
      </section>

      <section>
        {/* Emphasizing importance of SEO, what it is I do and why it is different than other competitors. */}
      </section>
    </div>
  );
}
