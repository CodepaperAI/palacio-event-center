import SpacePageTemplate from "@/components/SpacePageTemplate";
import { getVenueSpaceBySlug, venueSpaces } from "@/data/spaces";
import NotFound from "@/pages/NotFound";

const IbizaB = () => {
  const space = getVenueSpaceBySlug("ibiza-b");

  if (!space) {
    return <NotFound />;
  }

  const relatedSpaces = venueSpaces.filter(
    (item) => item.slug === "ibiza-grand-ballroom" || item.slug === "ibiza-a"
  );

  return (
    <SpacePageTemplate
      space={space}
      relatedSpaces={relatedSpaces}
      heroTitle="Ibiza B Ballroom Configuration in Mississauga"
      seo={{
        title: "Ibiza B | Ballroom Configuration in Mississauga",
        description:
          "Ibiza B is a mid-size ballroom configuration at Palacio Event Centre in Mississauga for polished private events, receptions, and corporate functions.",
      }}
    />
  );
};

export default IbizaB;
