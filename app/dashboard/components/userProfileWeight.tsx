import saveUserWeight from '@/app/userprofile/components/userWeight';
import React, { useState } from 'react';


function WeightTracker() {
    const [month, setMonth] = useState('');
    const [weight, setWeight] = useState(0);

    const handleSave = async () => {
        // Get the category and subCategory from your UI (if needed)
        const category = 'your-category';
        const subCategory = 'your-subCategory';

        try {
            await saveUserWeight(category, month, weight);
            // Optionally, clear the input fields after saving
            setMonth('');
            setWeight(0);
            // Display a success message to the user
            alert('Weight data saved successfully!');
        } catch (error) {
            console.error("Error saving weight data: ", error);
            // Display an error message to the user
            alert('Error saving weight data. Please try again.');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
            />
            <input
                type="number"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setWeight(parseInt(e.target.value, 10))}
            />
            <button onClick={handleSave}>Save Weight</button>
        </div>
    );
}

export default WeightTracker;

