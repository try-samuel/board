"use client";

import { connectionIdToColor } from "@/lib/utils";
import { useOthers, useSelf } from "@/liveblocks.config";
import { UserAvatar } from "./user-avatar";

const MAX_SHOWN_PARTICIPANTS = 1;

export const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreParticipants = users.length > MAX_SHOWN_PARTICIPANTS;

  return (
    <section className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {users
          .slice(0, MAX_SHOWN_PARTICIPANTS)
          .map(({ connectionId, info }) => {
            return (
              <UserAvatar
                borderColor={connectionIdToColor(connectionId)}
                key={connectionId}
                src={info?.picture}
                name={info?.name}
                fallback={info?.name?.[0] || "A"}
              />
            );
          })}
        {currentUser && (
          <UserAvatar
            borderColor={connectionIdToColor(currentUser.connectionId)}
            src={currentUser.info?.picture}
            name={currentUser.info?.name}
            fallback={currentUser.info?.name?.[0] || "A"}
          />
        )}
        {hasMoreParticipants && (
          <UserAvatar
            borderColor="transparent"
            name={`+${users.length - MAX_SHOWN_PARTICIPANTS}`}
            fallback={`+${users.length - MAX_SHOWN_PARTICIPANTS}`}
          />
        )}
      </div>
    </section>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <section className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]" />
  );
};
