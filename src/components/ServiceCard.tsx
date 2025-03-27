interface ServiceCardProps {
  title: string;
  image: string;
}

export default function ServiceCard({ title, image }: ServiceCardProps) {
  return (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
        <h3 className="text-white text-3xl font-medium text-center whitespace-pre-line">{title}</h3>
      </div>
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
} 