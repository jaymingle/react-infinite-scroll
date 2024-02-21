import React, {useRef,  useCallback} from 'react';
import Post from "./Post";
import {useInfiniteQuery} from "react-query";
import {getPostsPage} from "../api/axios.js";

const Example2 = () => {

    const {
        fetchNextPage,
        hasNextPage,
        data,
        status,
        error
    } = useInfiniteQuery('/posts', ({pageParam = 1}) => getPostsPage(pageParam), {getNextPageParam: (lastPage, allPages) => {
            return lastPage.length ? allPages.length + 1 : undefined
        }})

    // const lastPostRef = useRef()
    const intObserver = useRef()
    const lastPostRef = useCallback(post => {
        if(isLoading) return

        if(intObserver.current) intObserver.current.disconnect()

        intObserver.current = new IntersectionObserver(posts => {
            if(posts[0].isIntersecting && hasNextPage){
                console.log('We are near the last post!')
                setPageNum(prev => prev + 1)
            }
        })

        if(post) intObserver.current.observe(post)

    }, [isLoading, hasNextPage])

    if (isError) return <p className="center">Error: {error.message}</p>

    const content = results.map((post, i) => {
        if(results.length === i + 1){
            return <Post ref={lastPostRef} key={post.id} post={post}/>
        }
        return <Post key={post.id} post={post}/>
    })

    return (
        <div>
            <h1 id="top">&infin; Infinite Query &amp; Scroll<br />&infin;
                Ex. 1 - React only</h1>
            {content}
            {isLoading && <p className="center">Loading More Posts...</p>}
            <p className="center"><a href="#top">Back to Top</a></p>
        </div>
    );
};

export default Example2;

