import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import eticaret from '../../assets/eticaret.png';
import hrms from '../../assets/hrms.png';
import ProjectCard from '../../common/ProjectCard';


function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard
                    src={viberr}
                    link="https://github.com/furkandemirbozan/ChatApp"
                    h3="Viber"
                    p="Chat App"
                />
                <ProjectCard
                    src={freshBurger}
                    link="https://github.com/furkandemirbozan/BurgerSiparisUygulamsi"
                    h3="Order Burger"
                    p="Hamburger Restaurant"
                />
                <ProjectCard
                    src={eticaret}
                    link="https://github.com/furkandemirbozan/EticaretAPI"
                    h3="E-Ticaret"
                    p="Shop App"
                />
                <ProjectCard
                    src={hrms}
                    link="https://github.com/furkandemirbozan/Staff-Management-App"
                    h3="Staff Management"
                    p="HRMS App"
                />
            </div>
        </section>
    )
}

export default Projects