"use client";
import { useSearchParams } from "next/navigation";
import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";

const Dashboardpage = () => {
  const { organization } = useOrganization();
  const searchParams = useSearchParams(); // Fetch query params on the client

  const search = searchParams.get("search"); // Extract 'search' from the URL
  const favorites = searchParams.get("favorites"); // Extract 'favorites'

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList
          orgId={organization.id}
          query={{
            search: search || undefined, // Fallback to undefined if not present
            favorites: favorites === "true" ? "true" : undefined, // Ensure proper type
          }}
        />
      )}
    </div>
  );
};

export default Dashboardpage;
