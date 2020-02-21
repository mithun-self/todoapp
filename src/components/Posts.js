import React from 'react'

const Posts = (props) => {
    const { posts }  = props
    const postList = posts.length ? (
        posts.map(post => {
            return (
                <div className="single-post" key={post.id}>
                    <div className="post-body">
                        <h5>{post.title}</h5>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })
    ) : (
        <p className="center"> You have no posts ! </p>
    )
    return (
        <div className="container posts">
            <h4 style={{ textAlign :"center"}} className="post-title">Posts</h4>
            {postList}
        </div>
    )

}

export default Posts