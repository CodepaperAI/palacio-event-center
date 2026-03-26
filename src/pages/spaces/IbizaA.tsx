import SpacePageTemplate from "@/components/SpacePageTemplate";
import { getVenueSpaceBySlug, venueSpaces } from "@/data/spaces";
import NotFound from "@/pages/NotFound";

const IbizaA = () => {
  const space = getVenueSpaceBySlug("ibiza-a");

  if (!space) {
    return <NotFound />;
  }

  const relatedSpaces = venueSpaces.filter(
    (item) => item.slug === "ibiza-grand-ballroom" || item.slug === "ibiza-b"
  );

  return (
    <SpacePageTemplate
      space={space}
      relatedSpaces={relatedSpaces}
      heroTitle="Ibiza A Ballroom Configuration in Mississauga"
      seo={{
        title: "Ibiza A | Ballroom Configuration in Mississauga",
        description:
          "Ibiza A is a flexible ballroom configuration within Palacio's flagship event venue in Mississauga for medium-to-large celebrations and corporate functions.",
      }}
    />
  );
};

export default IbizaA;
