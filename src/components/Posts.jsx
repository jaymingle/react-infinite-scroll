import React from 'react';

const Posts = React.forwardRef(({post}, ref) => {

    const postBody = (
        <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Post ID: {post.id}</p>
        </>
    )

    return (
        <div>

        </div>
    );
});

export default Posts;
