import Loader from "./Loader/Loader"
import Navbar from "../../components/Navbar/Navbar"
import styles from "./Homepage.module.css"

export default function Homepage() {
    return (


        <div className={`${styles.parent}`}>

            <Navbar />
            <section>
                <Loader />
            </section>

            <section className={`${styles.child1}`}>
                <h1>I</h1>
            </section>
            <section className={`${styles.child2}`}>
                <h1>II</h1>
            </section>
            <section className={`${styles.child3}`}>
                <h1>III</h1>
            </section>

        </div>

    )
}
