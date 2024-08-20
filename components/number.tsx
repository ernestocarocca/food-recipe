"use client";
import React from "react";
type NumberDisplayProps = {
    number: number;
};

export default function NumberDisplay({ number }: NumberDisplayProps)   {
    return (
        <div className="flex items-center justify-center w-10 bg-gray-100">
            <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <p className="text-4xl sm:text-6xl font-bold text-white text-center">
                    {number}
                </p>
            </div>
        </div>
    );
}
