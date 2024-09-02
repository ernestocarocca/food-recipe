import React from 'react';
import { Timestamp } from 'firebase/firestore';

interface GoalComponentProps {
    goalData: {
        endGoalDate: Timestamp | null;
    };
    locale?: string; // Allows setting locale dynamically (default: en-GB)
    options?: Intl.DateTimeFormatOptions; // Allows setting formatting options dynamically
}

const GoalComponent: React.FC<GoalComponentProps> = ({ goalData, locale = 'en-GB', options = { month: 'long', year: 'numeric' } }) => {
    // Safely convert the Timestamp to a Date object, or handle as null
    const endGoalDate: Date | null = goalData.endGoalDate ? goalData.endGoalDate.toDate() : null;

    // Format the date based on the provided locale and options
    const formattedDate = endGoalDate ? endGoalDate.toLocaleDateString(locale, options) : 'Date not available';

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-lg font-semibold">End Goal Date: {formattedDate}</p>
        </div>
    );
};

export default GoalComponent;
