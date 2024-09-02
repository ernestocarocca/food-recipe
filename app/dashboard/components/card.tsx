
import BackgroundGradientDemo from "@/components/example/background-gradient-demo";
import GoalComponent from "./dateGoal";
import { BackgroundGradient } from "@/components/ui/background-gradient";
type Props = {
    children: React.ReactNode;
    className?: string;

};
export default function ResultFromFireBaseCard({ children, 
    className,
 }: Props) {

    return (
        <BackgroundGradient 
      className="bg-gradient-to-r from-blue-500 to-blue-400"
        >
            {children}
        </BackgroundGradient>
    );

}