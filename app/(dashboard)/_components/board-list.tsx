"use client";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: boolean;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; //TODO fetch data

  if (!data.length && query.search) {
    return <div>No boards found for "{query.search}", try another search</div>;
  }

  if (!data.length && query.favorites) {
    return <div>No favorite boards here</div>;
  }

  if (!data.length && !query.search && !query.favorites) {
    return <div>No boards found at all</div>;
  }

  return <div>{JSON.stringify(query)}</div>;
};
