import React, { Component } from 'react'
//http cycle library
import axios from 'axios'
// Servers port
const url = 'http://localhost:8000';


export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            type: "",
            price: "",
            description: "",
            dept: "",
            image1:"",
            image2:"",
            image3:"",
            image4:"",
            image5:"",
            departments: []
        }
        this.handleChange = this.handleChange.bind(this);
        
    }
    // Uses props to get departments from Browse.js
    displayDepartments () {
        const { departments } = this.props.location.state
        const departmentList = departments.map((item) => {
            return  <option key={item.id} value={item.name}>{item.name}</option>
        });
        this.setState({
            departments: departmentList
        });
    }
    //Handles Form input changes
    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    // Handles From submissions
    async handleSubmit (e) {
        e.preventDefault();

        let imageArray = [];
        if(this.state.image1 !== "") {
            imageArray.push(this.state.image1);
        }
        if(this.state.image2 !== "") {
            imageArray.push(this.state.image2);
        }
        if(this.state.image3 !== "") {
            imageArray.push(this.state.image3);
        }
        if(this.state.image4 !== "") {
            imageArray.push(this.state.image4);
        }
        if(this.state.image5 !== "") {
            imageArray.push(this.state.image5);
        }
        const body = {
            images: imageArray,
            name: this.state.name,
            type: this.state.type,
            price: this.state.price,
            description: this.state.description,
            dept: this.state.dept,
        }
        await axios.post(`${url}/api/products/add`,body)
        .then((response) => {
            console.log('POST response: ', response);
        });
    }
    //Lifecycle method that fires on componenet initialization
    componentDidMount() {
        this.displayDepartments();
        this.setState({
            dept: "Guitars"
        })
        
    }
    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <h1>Add Product:</h1>
            
                <form>
                    Name:
                        <input 
                            onChange={this.handleChange}
                            name="name"
                            type="text"
                            value={this.state.name} 
                            />
                    <br />
                    <br />
                    Type:
                        <input 
                            name="type" 
                            type="text" 
                            value={this.state.type}
                            onChange={this.handleChange}
                            />
                    <br />
                    <br />
                    Price:
                        <input 
                            name="price" 
                            type="text" 
                            value={this.state.price} 
                            onChange={this.handleChange}   
                            />
                        <br />
                        <br />
                    Image 1:
                        <input 
                            name="image1" 
                            type="text" 
                            value={this.state.image1} 
                            onChange={this.handleChange}   
                            />
                            <br />
                            <br />
                    Image 2:
                        <input 
                            name="image2" 
                            type="text" 
                            value={this.state.image2} 
                            onChange={this.handleChange}   
                            />
                            <br />
                    <br />
                    Image 3:
                        <input 
                            name="image3" 
                            type="text" 
                            value={this.state.image3} 
                            onChange={this.handleChange}   
                            />
                            <br />
                    <br />
                    Image 4:

                        <input 
                            name="image4" 
                            type="text" 
                            value={this.state.image4} 
                            onChange={this.handleChange}   
                            />
                            <br />
                    <br />
                    Image 5:
                        <input 
                            name="image5" 
                            type="text" 
                            value={this.state.image5} 
                            onChange={this.handleChange}   
                            />
                    <br />
                    <br />
                    Description:
                        <textarea 
                            name="description" 
                            rows="5" 
                            cols="30" 
                            value={this.state.description} 
                            onChange={this.handleChange}                            />
                    <br />
                    <br />
                    Departments: 
                    <select name="dept" value={this.state.dept} onChange={this.handleChange}>
                        {this.state.departments}
                    </select>
                    <br />
                    <br />

                    <button onClick={(e) => this.handleSubmit(e)} >Submit</button>

                </form>
            </div>
        )
    }
}
