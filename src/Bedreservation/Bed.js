import styles from './Bed.module.css'
// import './BedJs'

const Bed = () => {
    return (
        <>
            <div className={styles.top}>
                <div className={styles.red}>
                    <h3>booked</h3>
                </div>
                <div className={styles.green}>
                    <h3>
                        not
                        <br />
                        booked
                    </h3>
                </div>
            </div>
            <div id="main"></div>
        </>
    )
}

export default Bed 