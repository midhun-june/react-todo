export default function BlogList({ blogs, title }) {
    return (
      <div className="blog-list">
        <h2 className="text-danger">{ title }</h2>
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            <h6>{ blog.title }</h6>
            <p>Written by { blog.author }</p>
            <p>{ blog.body }</p>
            <p>Written by { blog.author }</p>
          </div>
        ))}
      </div>
    );
  }
