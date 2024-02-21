import React, {useState, useRef} from 'react';
import usePosts from "../hooks/usePosts.jsx";
import Post from "./Post.jsx";

const Example1 = () => {

    const [pageNum, setPageNum] = useState(1)
    const {
        isLoading,
        isError,
        error,
        results,
        hasNextPage,
    } = usePosts(pageNum)

    const lastPostRef = useRef()

    if (isError) return <p className="center">Error: {error.message}</p>

    const content = results.map((post, i) => {
        if(results.length === i + 1){
            return <Post ref={lastPostRef} key={post.id} post={post}/>
        }
        return <Post key={post.id} post={post}/>
    })

    return (
        <>
            <p>Ghana</p>
            <h1 id="top">&infin; Infinite Query &amp; Scroll<br />&infin;
                Ex. 1 - React only</h1>
            {content}
            {isLoading && <p className="center">Loading More Posts...</p>}
            <p className="center"><a href="#top">Back to Top</a></p>
        </>
    );
};

export default Example1;
