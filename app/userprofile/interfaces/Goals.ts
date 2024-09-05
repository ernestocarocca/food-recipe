
import { TrackGoal } from "./MothResults";
import { UserName } from "./userName";



export interface UserGoalInterface {
   userName: UserName;
   date: {
      goalProgress: TrackGoal;
   };
}

