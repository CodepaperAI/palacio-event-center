import SpacePageTemplate from "@/components/SpacePageTemplate";
import { getVenueSpaceBySlug, venueSpaces } from "@/data/spaces";
import NotFound from "@/pages/NotFound";

const Arriba = () => {
  const space = getVenueSpaceBySlug("arriba");

  if (!space) {
    return <NotFound />;
  }

  const relatedSpaces = venueSpaces.filter((item) => item.slug === "ibiza-grand-ballroom");

  return (
    <SpacePageTemplate
      space={space}
      relatedSpaces={relatedSpaces}
      heroTitle="Small Event Venue in Mississauga"
      seo={{
        title: "Small Event Venue Mississauga | Arriba at Palacio",
        description:
          "Arriba is a small event venue in Mississauga for intimate celebrations, business meetings, and private events at Palacio Event Centre.",
      }}
    />
  );
};

export default Arriba;
