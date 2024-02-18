import { useEffect, useState } from 'react'
import BlogList from "./BlogList"

export default function Blog(){
    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        fetchData()
    },[])

    function fetchData(){
        fetch('http://localhost:3000/blogs')
        .then(res => { return res.json();})
        .then(data => {
            setBlogs(data)
            setIsLoading(false)
        })
    }
    return (
        <>
        <div className="row mt-3">
            <div className="col-12">
               { isLoading && <div>Loading...</div> }
               { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
            </div>
        </div>
        </>
    )
}