import { Clock, Mail, MapPin, Phone } from "lucide-react";

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}
const data: ContactItemData[] = [
  {
    title: "Visit Us",
    subtitle: "New Orlean, USA",
    icon: (
      <MapPin
        className="h-6 w-6 text-gray-600 
            group-hover:text-primary transition-colors"
      />
    ),
  },
  {
    title: "Call Us",
    subtitle: "+0123456789",
    icon: (
      <Phone
        className="h-6 w-6 text-gray-600 
            group-hover:text-primary transition-colors"
      />
    ),
  },
  {
    title: "Work Hours",
    subtitle: "Mon - Sat 8:00 - 9:00",
    icon: (
      <Clock
        className="h-6 w-6 text-gray-600 
            group-hover:text-primary transition-colors"
      />
    ),
  },
  {
    title: "Email Us",
    subtitle: "7D2yI@example.com",
    icon: (
      <Mail
        className="h-6 w-6 text-gray-600 
            group-hover:text-primary transition-colors"
      />
    ),
  },
];
const FooterTop = () => {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4
    gap-8 border-b"
    >
      {data.map((item, index) => (
        <ContactItem
          key={index}
          icon={item.icon}
          title={item.title}
          content={item.subtitle}
        />
      ))}
    </div>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactItem = ({ icon, title, content }: ContactItemProps) => {
  return (
    <div
      className="flex items-center gap-3 group hover:bg-gray-50
    p-4 trasition-colors"
    >
      {icon}
      <div>
        <h3
          className="font-semibold text-gray-900
        group-hover:text-primary transition-colors"
        >
          {title}
        </h3>
        <p
          className="text-gray-600 group-hover:text-gray-900 
        transition-colors"
        >
          {content}
        </p>
      </div>
    </div>
  );
};
export default FooterTop;
