import React, { useState } from 'react';
import random from '../../assets/random.png';

interface TrendingTopicProps {
    topic: string;
}

const TrendingTopic: React.FC<TrendingTopicProps> = ({ topic }) => (
    <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">{topic}</p>
);

const SearchBar: React.FC = () => {
    const [focusBox, setFocusBox] = useState<boolean>(false);

    const focusHandler = (): void => {
        setFocusBox(!focusBox);
    };

    const trendingTopics = ['Valentine\'s Day', 'Generative AI', 'Job Fair', 'Concerts', 'Conference', 'Environment', 'Yoga'];
    const upcomingEvents = [{ 'event': 'Spring Tech Innovators Summit', 'date': '24th March' }, { 'event': 'Global Food Expo', 'date': '15th April' }, { 'event': 'Art & Design Workshop', 'date': '5th May' }, { event: 'Marktok Ski', date: '12th February' }];

    return (
        <div className="relative z-40">
            <input
                type="text"
                placeholder="Search by Events, Collaborators, Cities"
                onFocus={focusHandler}
                onBlur={focusHandler}
                className="bg-white bg-opacity-50 focus:bg-opacity-100 border-[1px] border-white outline-none px-4 py-2 rounded-md sm:w-[500px] w-[300px] placeholder-white"
            />
            {focusBox && (
                <div className="bg-white px-4 py-4 absolute top-[2.4rem] left-0 w-full text-[12px] border-t-[1px] border-t-black search_drop_shadow rounded-br-md rounded-bl-md">
                    <h2 className="uppercase text-gray-400 font-bold">Trending Topics</h2>
                    <div className="my-4 flex items-center gap-2 flex-wrap">
                        {trendingTopics.map((topic) => (
                            <TrendingTopic key={topic} topic={topic} />
                        ))}
                    </div>
                    <div>
                        <h2 className="uppercase text-gray-400 font-bold py-4">Upcoming Events</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {upcomingEvents.map((event, index) => (
                                <div key={index} className="flex items-center gap-2 flex-wrap border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white border-gray-500">
                                    <img src={random} alt="random" className="w-12 h-12 rounded-full" />
                                    <div>
                                        <h1 className="font-light capitalize text-base">{event.event.length >= 14 ? event.event.substring(0, 14) + '...' : event.event}</h1>
                                        <p className="opacity-40">{event.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
