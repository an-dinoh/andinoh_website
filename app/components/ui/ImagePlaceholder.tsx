interface ImagePlaceholderProps {
  emoji: string;
  label: string;
  bgColor?: string;
  aspectRatio?: "square" | "video";
}

export default function ImagePlaceholder({
  emoji,
  label,
  bgColor = "bg-gray-200",
  aspectRatio = "square",
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
  };

  return (
    <div
      className={`${bgColor} rounded-3xl ${aspectClasses[aspectRatio]} flex items-center justify-center`}
    >
      <div className="text-center">
        <div className="text-6xl mb-4">{emoji}</div>
        <p className="text-gray-600">{label}</p>
      </div>
    </div>
  );
}
