import React, { useEffect } from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";

interface ScrollMonthProps {
    onMonthSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ScrollMonth: React.FC<ScrollMonthProps> = ({ onMonthSelect }) => {
    useEffect(() => {}, [onMonthSelect]);

    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        onMonthSelect(event);
    };

    return (
        <Select
            label="Månader"
            placeholder="Välj månad"
            className="max-w-xs bg-transparent"
            color="default"
            onChange={handleSelectChange}
        >
            <SelectSection>
                <SelectItem key="January" value="January">January</SelectItem>
                <SelectItem key="February" value="February">February</SelectItem>
                <SelectItem key="March" value="March">March</SelectItem>
                <SelectItem key="April" value="April">April</SelectItem>
                <SelectItem key="May" value="May">May</SelectItem>
                <SelectItem key="June" value="June">June</SelectItem>
                <SelectItem key="July" value="July">July</SelectItem>
                <SelectItem key="August" value="August">August</SelectItem>
                <SelectItem key="September" value="September">September</SelectItem>
                <SelectItem key="October" value="October">October</SelectItem>
                <SelectItem key="November" value="November">November</SelectItem>
                <SelectItem key="December" value="December">December</SelectItem>
            </SelectSection>
        </Select>
    );
};

export default ScrollMonth;