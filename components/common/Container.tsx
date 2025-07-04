import { cn } from "@/lib/utils";

interface Props{
    children: React.ReactNode;
    className?: string;
}
const Container = ({children,className}:Props) => {
  return (
    <div className={cn("max-screen-2xl max-auto px-10",className )}>
        {children}
    </div>
  )
}

export default Container;   