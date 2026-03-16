"use client";

import React, { useState } from 'react';

interface ReadMoreDropdownProps {
  detailedDescription?: string;
}

const ReadMoreDropdown: React.FC<ReadMoreDropdownProps> = ({
  detailedDescription,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!detailedDescription) {
    return null; // Don't render if no detailed description is provided
  }

  return (
    <div className="mt-2">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center text-sm italic text-[var(--accent)] hover:text-[var(--accent-hover)] focus:outline-none ml-auto"
        >
          Read more <span className="arrow-down ml-1"></span>
        </button>
      )}

      {isOpen && (
        <div
            className="mt-2 p-4 bg-[var(--surface)] rounded-lg text-[var(--foreground)] shadow-inner whitespace-pre-wrap"
          >
            <div className="flex justify-between items-start mb-2">
              <p className="flex-grow text-sm">{detailedDescription}</p>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-shrink-0 flex items-center text-xs italic text-[var(--accent)] hover:text-[var(--accent-hover)] focus:outline-none ml-4"
              >
                Read less <span className="arrow-up ml-1"></span>
              </button>
            </div>
          </div>
      )}
    </div>
  );
};

export default ReadMoreDropdown;