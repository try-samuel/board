"use client";

import { EmptyBoards } from "./empty-boards";
import { EmptyFavorite } from "./empty-favorite";
import { EmptySearch } from "./empty-search";

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
    return <EmptySearch search={query.search} />;
  }

  if (!data.length && query.favorites) {
    return <EmptyFavorite />;
  }

  if (!data.length && !query.search && !query.favorites) {
    return <EmptyBoards />;
  }

  return <div>{JSON.stringify(query)}</div>;
};
