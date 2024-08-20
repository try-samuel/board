"use client";

import { useOthers, useSelf } from "@/liveblocks.config";
import { UserAvatar } from "./user-avatar";

const MAX_PARTICIPANTS = 3;

export const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();

  const hasMoreParticipants = users.length > MAX_PARTICIPANTS;

  return (
    <section className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_PARTICIPANTS).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              key={connectionId}
              src={info?.picture}
              name={info?.name}
              fallback={info?.name?.[0] || "T"}
            />
          );
        })}
      </div>
    </section>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <section className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]" />
  );
};
