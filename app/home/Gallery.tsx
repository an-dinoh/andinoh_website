import { Photo, SectionHeading } from "@/app/components/ui";
import { PHOTOS } from "@/app/content/site";

export default function Gallery() {
  const [first, ...rest] = PHOTOS.gallery;
  return (
    <section aria-labelledby="gallery-title" className="py-16 sm:py-24">
      <div className="container-site flex flex-col gap-10">
        <SectionHeading
          id="gallery-title"
          eyebrow="Stay with confidence"
          title="Book a trusted hotel stay."
          lead="Real hotels, photographed as they are. Every one has passed an Andinoh inspection."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2">
          <Photo
            slot={first}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="col-span-2 aspect-[4/3] rounded-2xl border border-line lg:row-span-2 lg:aspect-auto"
          />
          {rest.map((slot) => (
            <Photo key={slot.hint} slot={slot} sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-square rounded-2xl border border-line" />
          ))}
        </div>
      </div>
    </section>
  );
}
