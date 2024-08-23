import React from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
export default function scrollMonth() {
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June", "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];


        return (
            <Select 
                items={ month.map((month) => ({ label: month, value: month })) }
                label="Månader"
                placeholder="Välj månad"
                className="max-w-xs"
            >
                <SelectSection>
                    {month.map((month) => (
                        <SelectItem key={month} value={month}>
                            {month}
                        </SelectItem>
                    ))}
                </SelectSection>    
            </Select>
        );
    
    }

    