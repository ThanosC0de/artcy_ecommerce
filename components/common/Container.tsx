import { cn } from "@/lib/utils";

interface Props{
    children: React.ReactNode;
    className?: string;
}
const Container = ({children,className}:Props) => {
  return (
    <div className={cn("max-screen-xl max-auto px-4",className )}>
        {children}
    </div>
  )
}

export default Container;   