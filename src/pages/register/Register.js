import React from 'react'
import styles from './Register.module.scss'
//import bgImage from '../../assets/img/bg-register.jpg'
import {Link} from 'react-router-dom'
import Nav from '../navbar/Navbar'
class Register extends React.Component {
    render() {
        return (
              <Nav/>
            // <div className={styles.container}>
            //     <div className={styles.register_box}>
            //             <form className={styles.form}>
            //             <h2 className={styles.register_title}>REGISTER</h2>
            //                 <div className={styles.nameinput}>
            //                     <div className={styles.firstname}>
            //                         <label className={styles.name}>First Name</label>
            //                         <input className={styles.inputstyle} type="text"/>
            //                     </div>

            //                     <div className={styles.lastname}>
            //                         <label className={styles.name}>Last Name</label>
            //                         <input className={styles.inputstyle} type="text"/>
            //                     </div>
            //                 </div>
       
            //                 <label className={styles.name}>Email Address</label>
            //                 <input className={styles.inputstyle} type="email"/>
                           
            //                 <label className={styles.name}>Institution</label>
            //                 <input className={styles.inputstyle} type="text"/>
                           
            //                 <label className={styles.name}>Designation</label>
            //                 <input className={styles.inputstyle} type="text"/>
            //                 <label className={styles.name}>Department</label>
            //                 <input className={styles.inputstyle} type="text"/>
                           
            //                 <label className={styles.name}>Password</label>
            //                 <input className={styles.inputstyle} type="password"/>
                           
            //                 <div className={styles.register_submit}>
            //                     <button className={styles.register_button}>Register</button>
            //                 </div>
            //                 <h4 className={styles.register_subtitle}>Already registered? <Link to='/login'>Login</Link></h4>
            //             </form>      
            //         {/* </div> */}
            //     </div>
            // </div>
        )
    }
}

export default Register