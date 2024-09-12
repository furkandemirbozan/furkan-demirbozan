import styles from './BlogStyles.module.css';
import blogIconDark from '../../assets/blog-dark.svg';
import blogIconLight from '../../assets/blog-light.svg';
import BlogPost from '../../common/BlogPost';
import { useTheme } from '../../common/ThemeContext';

function Blog() {
    const { theme } = useTheme();
    const blogIcon = theme === 'light' ? blogIconLight : blogIconDark;

    return (
        <section id="blog" className={styles.container}>
            <h1 className="sectionTitle">Blog</h1>

            <h3>Recent Posts</h3>
            <hr />
            <div className={styles.blogList}>
                <BlogPost src={blogIcon} title="Understanding ASP.NET Core" description="Learn the core concepts of ASP.NET Core and how to build scalable applications." />
                <BlogPost src={blogIcon} title="Mastering Entity Framework Core" description="A deep dive into Entity Framework Core for efficient database management." />
                <BlogPost src={blogIcon} title="Building REST APIs" description="Everything you need to know about creating RESTful APIs with Node.js and Express." />
                <BlogPost src={blogIcon} title="Exploring Microservices Architecture" description="An introduction to microservices and how to implement them in your applications." />
                <BlogPost src={blogIcon} title="Using Redis for Caching" description="Learn how Redis can improve your application's performance through efficient caching." />
                <BlogPost src={blogIcon} title="RabbitMQ for Message Queuing" description="Understanding RabbitMQ and its role in message queuing and microservices." />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </section>
    );
}

export default Blog;
