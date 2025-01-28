import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUserAlt,faAngleDown,faWallet   } from '@fortawesome/free-solid-svg-icons';


const SearchBar = () => {
    
   const [dateSel, setDate] = useState("");
   const [selectBudget, setSelectBudget] = useState("");
   const [selectGuest, setSelectGuest] = useState("");
   const [error, setError] = useState("");

   const [showCalendar, setShowCalendar] = useState(false);

   const today = new Date().toISOString().split("T")[0]; // Get today's date in the format YYYY MM DD

   const handleDateChange = (e) => { 
        const selectedDate = e.target.value; // Get selected date
        setDate(selectedDate); // Set selected date
        console.log("Selected Date:", selectedDate); // Log selected date
        setShowCalendar(false); // Hide calendar after selection
   }
   

  
   const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);
   
   const handleBudgetSelection = (budget) => {
        console.log("Selected Budget:", budget) // log selected budget
        setSelectBudget(budget); // save selected budget
        setShowBudgetDropdown(false); // hide budget dropdown after selection

   }   

   const [showGuestDropdown, setShowGuestDropdown] = useState(false);   
  

   const handleGuestSelection = (guest) => {
        setSelectGuest(guest); // save selected guest
        console.log("Selected Guest:", guest); // log selected guest
        setShowGuestDropdown(false); // hide guest dropdown after selection
   }


   const handleSearch = () => {
        if (!dateSel || !selectBudget || !selectGuest) {
                alert("Please fill in all fields");
                return;
        }
        SpeechSynthesisErrorEvent('');
        console.log("Search Button Clicked");
        console.log("Date:", dateSel);
        console.log("Budget:", selectBudget);
        console.log("Guest:", selectGuest);
   }

return (
    <div className="md:flex items-center justify-between bg-white/10 backdrop-blur-md rounded-3xl sm:rounded-3xl md:rounded-full lg:rounded-full shadow-lg px-10 py-10 md:px-4 md:py-2  sm:w-4/5  md:w-9/12 relative ">
    
                    {/* Date Select */}
                    <div className=" mb-4 md:mb-0 lg:mb-0 flex items-center gap-4 sm:gap-3 lg:gap-2  flex-1 space-x-2 relative">
                                <span className="text-white">
                                        <FontAwesomeIcon 
                                        icon={faCalendarAlt} 
                                        className="h-4 w-4 " 
                                        style={{
                                                color: 'transparent',
                                                stroke: 'white',
                                                strokeWidth: '30',

                                        }}
                                        />
                                </span>
                            
                                <span className='text-white text-sm' > Date </span>

                                {/* button to toggle calender */}
                                <button
                                        className="text-white text-sm bg-transparent focus:outline-none flex items-center gap-1"
                                        onClick={() => {
                                                setShowCalendar(!showCalendar)} } 
                                        >
                                        <FontAwesomeIcon icon={faAngleDown} className="h-4 w-4 md:ml-8 lg:ml-8" />
                                </button>

                            {/* Calendar Input */}
                            {showCalendar && (
                                <div className="absolute top-12 bg-white text-black rounded-md shadow-md p-2 z-10">
                                        <input
                                                type="date"
                                                value={dateSel}
                                                onChange= {handleDateChange} 
                                                min={today} // restric to today date/ later
                                                className="p-2 rounded-md border border-gray-300 focus:outline-none"
                                        />
                                </div>
                            )}

                    </div>


                    {/* Vertical Divider
                    <div className='h-8 w-[1px] bg-white opacity-75'> </div> */}


                    {/* Budget Select */}
                    <div className=" mb-4 md:mb-0 lg:mb-0 flex items-center gap-2 sm:gap-2 lg:gap-2 flex-1 space-x-2">
                            <span className="text-white">
                                    <FontAwesomeIcon 
                                    icon={faWallet} 
                                    className="h-4 w-4" 
                                    style={{
                                        color: 'transparent',
                                        stroke: 'white',
                                        strokeWidth: '30',
                                    }}
                                    />
                            </span>

                            <span className='text-white text-sm' > Budget </span>

                                    <button
                                            className="text-white text-sm bg-transparent focus:outline-none flex items-center gap-1"
                                            onClick={() => setShowBudgetDropdown(!showBudgetDropdown)}
                                    >
                                            <FontAwesomeIcon 
                                            icon={faAngleDown} 
                                            className="h-4 w-4 md:ml-8 lg:ml-8" 
                                            />
                                    </button>

                                    {/* Dropdown Menu */}
                                        {showBudgetDropdown && (
                                        <div className="absolute top-12 bg-white text-black rounded-md shadow-md p-2 z-10 w-40">
                                                <ul>
                                                        <li
                                                        className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                                                        onClick={() => handleBudgetSelection("$500 - $ 1000")}
                                                        >
                                                        $100 - $1000
                                                        </li>
                                                        <li
                                                        className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                                                        onClick={() => handleBudgetSelection("$1000 - $2000")}
                                                        >
                                                        $1000 - $2000
                                                        </li>
                                                        <li
                                                        className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                                                        onClick={() => handleBudgetSelection("$2000 - $5000")}
                                                        >
                                                        $2000 - $5000
                                                        </li>
                                                        <li
                                                        className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                                                        onClick={() => handleBudgetSelection("$5000 - $10 000")}
                                                        >
                                                        $5000 - $10 000
                                                        </li>
                                                </ul>

                                                {/* Angle Down Arrow Below Dropdown */}
                                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-4 h-4 bg-white rotate-45"></div>
                                        </div>
                                        )}
                        </div>


                        {/* Guest Select Select*/}
                        <div className=" mb-4 md:mb-0 lg:mb-0 flex items-center gap-3 sm:gap-3 lg:gap-2 flex-1 space-x-2">
                                        <span className="text-white">
                                                <FontAwesomeIcon icon={faUserAlt} className="h-4 w-4 "
                                                style={{
                                                        color: 'transparent',
                                                        stroke: 'white',
                                                        strokeWidth: '30',

                                                }}
                                                />
                                        </span>

                                        <span className='text-white text-sm' > Guest </span>

                                        <button
                                                className="text-white text-sm bg-transparent focus:outline-none flex items-center gap-1"
                                                onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                                        > 
                                                <FontAwesomeIcon icon={faAngleDown} className="h-4 w-4 md:ml-8 lg:ml-8" />
                                        </button>

                                        {/* Dropdown Menu */}
                                                {showGuestDropdown && (
                                                 <div className="absolute top-12 bg-white text-black rounded-md shadow-md p-2 z-10 w-20 max-h-40 overflow-y-auto">
                                                <ul>
                                                        {Array.from({ length: 20 }, (_, i) => i + 1).map((guest) => (
                                                        <li
                                                        key={guest}
                                                        className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                                                        onClick={() => handleGuestSelection(guest)}
                                                        >
                                                        {guest}
                                                        </li>
                                                        ))}
                                                </ul>
                                                </div>
                                                )}
                        </div>



                        {/* Search Button */}
                        <button
                                className="bg-white text-gray-700 mt-5 md:mt-0 lg:-0 px-6 md:px-10 lg:px-10 py-1 md:py-2 lg:py-2 rounded-full shadow-md hover:bg-gray-200 "
                                        onClick={handleSearch}
                                >
                                Search
                        </button>

                        {/* Error Message */}
                        {error && <p className="text-red-500 text-sm"> {error} </p>}

                    
    </div>
);
};
export default SearchBar;