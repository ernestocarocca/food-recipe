
import { TrackGoal } from "./UserHealthData";
import { UserName } from "./userName";



export interface UserGoalInterface {
   userName: UserName;
   date: {
      goalProgress: TrackGoal;
   };
}

