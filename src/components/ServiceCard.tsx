interface ServiceCardProps {
  image: string;
}

export default function ServiceCard({ image }: ServiceCardProps) {
  return (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden animate-fadeIn">
      <img 
        src={image} 
        alt="Service"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
} 