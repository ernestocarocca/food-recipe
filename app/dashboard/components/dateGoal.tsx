import React from 'react';



const GoalComponent = ({ goalData }: { goalData: any }) => {
    const endGoalDate = new Date(goalData.endGoalDate.seconds * 1000 + goalData.endGoalDate.nanoseconds / 1000000);

    return (
        <div>
        <p>End Goal Date: { endGoalDate.toLocaleString() } </p>
            </div>
  );
};

export default GoalComponent;
