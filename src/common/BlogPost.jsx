import styles from './BlogPost.module.css';

function BlogPost({ src, title, description }) {
    return (
        <div className={styles.blogPost}>
            <img src={src} alt="blog icon" className={styles.blogIcon} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default BlogPost;
