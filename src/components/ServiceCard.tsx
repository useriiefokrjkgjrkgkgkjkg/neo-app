interface ServiceCardProps {
  title: string;
  image: string;
}

export default function ServiceCard({ title, image }: ServiceCardProps) {
  return (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
        <h3 className="text-[#9EFF5C] text-3xl font-medium">{title}</h3>
      </div>
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
} 