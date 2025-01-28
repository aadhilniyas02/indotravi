import React, {useState, useEffect, useRef} from 'react';
import soloBlog from '../../assets/soloBlog.jpg';
import jeepBlog from '../../assets/jeepBlog.jpg';
import suteBlog from '../../assets/suteBlog.jpg';
import beachBlog from '../../assets/beachBlog.jpg';


const Blog = () => {

    const [isVisible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    const initialPosts = [
        {
            id:1,
            image:soloBlog,
            date:"Nov 14, 2022",
            title: "2023 Travel Trends - what you need to know",
            description: "2023 taught us valuable life lesson, Plans don't always work out, flexibility in life is key, and...."
        },
        {
            id:2,
            image:jeepBlog,
            date:"Nov 18, 2022",
            title: "Jeep Adventure is a new attraction for tourists visiting Garut",
            description: "Jeep Adventure is one of the tourist attractions that has been popular recently. The sensation..."
        },
    ];

    const additionalPosts = [
        {
            id:3,
            image:suteBlog,
            date:"Dec 10, 2022",
            title: "Which Country is Best",
            description: "Top countries for travel ...."
        },
        {
            id:4,
            image:beachBlog,
            date:"Dec 27, 2022",
            title: "Best Place to Visit",
            description: "More pleace 2023 visited by mens...."
        }
    ];

    const [posts, setPosts] = useState(initialPosts);
    const [allPostsLoaded, setAllPostsLoaded] = useState(false); // Tracking whether all posts are loaded

    const handleViewMore = () => {
        setPosts((prevPosts) => {
            const updatedPosts = [...prevPosts, ...additionalPosts];
            if (updatedPosts.length >= initialPosts.length + additionalPosts.length) {
                setAllPostsLoaded(true); // All posts are now loaded
            }

            return updatedPosts;
        });
    };

 

    useEffect(() => {
        const observer = new IntersectionObserver (
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '200px'}
        )

        if(sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if(sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        };

    }, []);

    
  return (
    <div 
    ref={sectionRef}
    className='bg-gray-100 min-h-screen pt-20 md:pt-40 pb-20 md:pb-40'
     >
       
       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

            {/* Section Head */}
            <div className='text-center sm:mb-12 mb-8'>
                <h3 className='text-sm md:text-lg text-gray-400 tracking-wide '> Our Blog </h3>
                <h2 className='text-2xl md:text-3xl font-extrabold text-gray-900 sm:text-4xl'> Our Travel Memories </h2>
            </div>

            {/* Blog Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8'>
                {posts.map((post) => (
                    <div
                    key={post.id}
                    className='bg-white rounded-lg transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400'
                    >
                    <img
                     src={post.image}
                     alt={post.title}
                     className='w-full h-48 md:h-60 object-cover' 
                     />
                     <div className='p-4 md:p-6'>
                        <p className='text-xs md:text-sm text-gray-500'> {post.date} </p>
                        <h3 className='text-md md:text-lg font-bold text-gray-900 mt-1 md:mt-2'> {post.title} </h3>
                        <p className='text-xs md:text-sm text-gray-600 mt-1 md:mt-2'> {post.description} </p>

                     </div>
            </div>
                ))}
            </div>

             {/* View More Button */}
             {!allPostsLoaded && (
                <div className='mt-8 md:mt-14 text-center'>
                    <button
                    onClick={handleViewMore}
                    className='px-4 md:px-5 py-2 md:py-3 bg-black text-white text-xs md:text-sm font-medium rounded-full before:ease shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6'
                    >
                    View More
                    </button>
             </div>
             )}
             
        </div>
    </div>
  )
}

export default Blog