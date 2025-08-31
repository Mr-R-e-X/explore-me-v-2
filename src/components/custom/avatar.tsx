import Image from "next/image";

type AvatarProps = {
  url: string;
  name: string;
  available: boolean;
  availableText: string;
};

export const Avatar: React.FC<AvatarProps> = ({
  url,
  name,
  available,
  availableText,
}) => {
  return (
    <div className="relative mb-8">
      <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-500 p-1 bg-gradient-to-r to-red-500">
        <Image
          src={url}
          alt={name}
          width={192}
          height={192}
          className="w-full h-full object-cover rounded-full bg-neutral-800"
        />
      </div>

      {available && (
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
          <div className="flex flex-nowrap items-center gap-2 px-1 py-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md border border-green-500/40 shadow-md min-w-max">
            <span className="size-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm pr-1 font-medium text-green-300">
              {availableText}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
