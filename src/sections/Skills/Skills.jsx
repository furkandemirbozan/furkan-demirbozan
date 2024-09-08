import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>

            <h3>Backend Skills</h3>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="ASP.NET Core" />
                <SkillList src={checkMarkIcon} skill="Entity Framework Core" />
                <SkillList src={checkMarkIcon} skill="RestAPI" />
                <SkillList src={checkMarkIcon} skill="Node.js" />
                <SkillList src={checkMarkIcon} skill="Web APIs" />
                <SkillList src={checkMarkIcon} skill="Express.js" />
                <SkillList src={checkMarkIcon} skill="LINQ" />
                <SkillList src={checkMarkIcon} skill="SignalR" />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <h3>Tools & Technologies</h3>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Visual Studio" />
                <SkillList src={checkMarkIcon} skill="Postman" />
                <SkillList src={checkMarkIcon} skill="GitHub" />
                <SkillList src={checkMarkIcon} skill="MS SQL Server Management Studio" />
                <SkillList src={checkMarkIcon} skill="Scrum" />
                <SkillList src={checkMarkIcon} skill="Git" />
                <SkillList src={checkMarkIcon} skill="Visual Studio Code" />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* Software Development Principles */}
            <h3>Software Development Principles</h3>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Domain Driven Design" />
                <SkillList src={checkMarkIcon} skill="SOLID Principles" />
                <SkillList src={checkMarkIcon} skill="Repository Pattern" />
                <SkillList src={checkMarkIcon} skill="Unit of Work" />
                <SkillList src={checkMarkIcon} skill="N-Tier Architecture" />
                <SkillList src={checkMarkIcon} skill="Clean Code" />
                <SkillList src={checkMarkIcon} skill="IOC Container" />
                <SkillList src={checkMarkIcon} skill="Design Patterns" />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            {/* Database Skills */}
            <h3>Database Skills</h3>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="MS SQL" />
                <SkillList src={checkMarkIcon} skill="MongoDB" />
                <SkillList src={checkMarkIcon} skill="NoSQL" />
                <SkillList src={checkMarkIcon} skill="T-SQL" />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            {/* Frontend Skills */}

            <h3>Frontend Skills</h3>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="JavaScript" />
                <SkillList src={checkMarkIcon} skill="React.js" />
                <SkillList src={checkMarkIcon} skill="Next.js" />
                <SkillList src={checkMarkIcon} skill="HTML" />
                <SkillList src={checkMarkIcon} skill="CSS" />
                <SkillList src={checkMarkIcon} skill="TailwindCSS" />
                <SkillList src={checkMarkIcon} skill="Bootstrap" />
                <SkillList src={checkMarkIcon} skill="JQuery" />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </section>
    );
}

export default Skills;
