import Image from "next/image";

interface EmptySearchProps {
  search: string;
}

export const EmptySearch = ({ search }: EmptySearchProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty-search.svg"
        alt="No results found"
        width={140}
        height={140}
      />
      <h2 className="text-2xl font-semibold mt-6">
        No results found for {search}!
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try Searching For Something else
      </p>
    </div>
  );
};
