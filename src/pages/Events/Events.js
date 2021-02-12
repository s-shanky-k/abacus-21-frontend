import styles from "./Events.module.css"
import Navbar from "../../components/Navbar/Navbar"

export default function Events() {
    return (
        
        <div className={`${styles.parent}`}>
            <Navbar />
            <section className={`${styles.child1} ${styles.child}`}>
                <h1>I</h1>
            </section>

            <section className={`${styles.child2} ${styles.child}`}>
                <h1>II</h1>
            </section>

            <section className={`${styles.child3} ${styles.child}`}>
                <h1>III</h1>
            </section>

            <section className={`${styles.child4} ${styles.child}`}>
                <h1>IV</h1>
            </section>

        </div>
    )
}