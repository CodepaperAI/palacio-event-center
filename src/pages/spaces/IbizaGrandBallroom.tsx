import SpacePageTemplate from "@/components/SpacePageTemplate";
import { getVenueSpaceBySlug, venueSpaces } from "@/data/spaces";
import NotFound from "@/pages/NotFound";

const IbizaGrandBallroom = () => {
  const space = getVenueSpaceBySlug("ibiza-grand-ballroom");

  if (!space) {
    return <NotFound />;
  }

  const relatedSpaces = venueSpaces.filter((item) => item.parentVenue === space.name || item.slug === "arriba");

  return (
    <SpacePageTemplate
      space={space}
      relatedSpaces={relatedSpaces}
      heroTitle="Grand Ballroom in Mississauga"
      seo={{
        title: "Grand Ballroom Mississauga | Ibiza Grand Ballroom at Palacio",
        description:
          "Ibiza Grand Ballroom is a large event venue in Mississauga for weddings, galas, conferences, and luxury celebrations at Palacio Event Centre.",
      }}
    />
  );
};

export default IbizaGrandBallroom;
