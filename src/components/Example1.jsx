import React, {useState} from 'react';
import '../App.css'
import usePosts from "../hooks/usePosts.jsx";

const Example1 = () => {

    const [pageNum, setPageNum] = useState(1)
    const {
        isLoading,
        isError,
        error,
        results,
        hasNextPage,
    } = usePosts(pageNum)

    if (isError) return <p className="center">Error: {error.message}</p>

    return (
        <>
            <h1 id="top">&infin; Infinite Query &amp; Scroll<br />&infin; Ex. 1 - React only</h1>
            <p className="center">Loading More Posts...</p>
            <p className="center"><a href="#top">Back to Top</a></p>
        </>
    );
};

export default Example1;
