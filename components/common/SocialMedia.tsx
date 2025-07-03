import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";


interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: React.ReactNode;
}

const socialLink = [
  {
    title: "Facebook",
    href: "https://www.facebook.com",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    title: "Twitter",
    href: "https://www.twitter.com",
    icon: <Twitter className="w-5 h-5" />,
  },
];

const socialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div
        className={cn("flex items-center gap-3.5 text-tech_white/60", className)}
      >
        {socialLink.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 border rounded-full hover:text-tech_orange hoverEffect",
                  iconClassName
                )}
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn("bg-tach_white font-semibold", tooltipClassName)}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};
export default socialMedia;
