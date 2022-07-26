import React, { Component } from "react"
import styles from "./Profile.module.scss"
import Header from "../../components/header/Header"

export class Profile extends Component{

constructor(props) {
    super(props)
        this.state = {
            firstname: "Blessey",
            lastname: "Maria",
            email: "blessey@gmail.com",
            phoneno:"",
            institution: "",
            department: "",
            designation:"",
            image:null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.onImageChange = this.onImageChange.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault()
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
      };

    render(){
        return(
            <div className={styles.container}>
                <Header/>
                <div className={styles.Profile}>

                <div className={styles.Profile_Component}>

                <label className={styles.label}>Name</label>
                <div className={styles.inputstyle}>{this.state.firstname+' '+this.state.lastname}</div>

                <label className={styles.label}>Email</label>
                <div className={styles.inputstyle}>{this.state.email}</div>

                <form className={styles.form_component} onSubmit={this.handleSubmit}>
                    <label className={styles.label}>Phone No</label>
                    <input className={styles.inputstyle} type="text" name="phoneno"
                            placeholder="Phone Number" onChange={this.handleChange} />   

                    <label className={styles.label}>Institution</label>
                    <input className={styles.inputstyle} type="text" name="institution"
                            placeholder="Institution" onChange={this.handleChange} />  

                    <label className={styles.label}>Department</label>
                    <input className={styles.inputstyle} type="text" name="department"
                            placeholder="Department" onChange={this.handleChange} /> 

                    <label className={styles.label}>Designation</label>
                    <input className={styles.inputstyle} type="text" name="designation"
                            placeholder="Designation" onChange={this.handleChange} />
                    
                    <button className={styles.submit_button} type="submit">Save Changes</button>
                </form>
                </div>
                <div className={styles.Image_Component}>
                    <div><img src={this.state.image} className={styles.img_style}/></div>
                    <h1>Select Image</h1>
                    <input type="file" name="myImage" onChange={this.onImageChange} />
                </div>
                </div>
            </div>
        )
    }
}

export default Profile