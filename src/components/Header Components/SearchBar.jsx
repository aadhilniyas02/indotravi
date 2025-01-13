import React, { useState } from 'react'

const SearchBar = () => {
    
    const [dateSel, setDate] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);

    //const [showBudgetDropdown, setShowBudgetDropdown] = useState(false); // Dropdown visibility
    const [budgetAmo, setBudget] = useState("");
 

    const [guestNo, setGuest] = useState("");
  
    const search = () => {
      if (!dateSel || !budgetAmo || !guestNo) {
        alert("Please fill in all fields.");
        return;
      }
      
    };

  return (
    <div className="flex  items-center justify-center bg-white/10 backdrop-blur-md rounded-full shadow-lg px-4 py-2 w-full sm:w-4/5 lg:w-3/5   ">
    
            {/* Date Selec */}
            <div className="flex items-center gap-2 flex-1 relative">
                <span className="text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                    </svg>
                </span>

                <button
                    className="text-white text-sm bg-transparent focus:outline-none flex items-center gap-1"
                    onClick={() => setShowCalendar(!showCalendar)} 
                    >
                    Date
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                            />
                        </svg>
                </button>

                {/* Calendar Input */}
                {showCalendar && (
                <input
                    type="date"
                    value={dateSel}
                    onChange={(e) => setDate(e.target.value)} 
                    className="absolute top-10 left-0 bg-white text-black rounded-md shadow-md focus:outline-none p-2 z-10"
                />
                )}
            </div>



        {/* Budget */}
        <div className="flex items-center gap-2 flex-1">
            <span className="text-white">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >

                </svg>
            </span>
                <button
                    className="text-white text-sm bg-transparent focus:outline-none flex items-center gap-1"
                    onClick={() => alert("Budget Drop Down")}
                >
                    Budget
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                    </svg>
                </button>
        </div>


            {/* Guest Select */}
            <div className="flex items-center gap-2 flex-1">
                    <span className="text-white">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        </svg>
                    </span>
                    <button
                        className="text-white text-sm bg-transparent focus:outline-none flex items-center gap-1"
                        onClick={() => alert("Guest Drop Down")}
                    >
                        Guest
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                        </svg>
                    </button>
            </div>

            {/* Search Button */}
            <button
                className="bg-white text-gray-700 px-6 py-2 rounded-full shadow-md hover:bg-gray-900 "
                onClick={search}
                >
                Search
            </button>
    </div>
);
};
export default SearchBar