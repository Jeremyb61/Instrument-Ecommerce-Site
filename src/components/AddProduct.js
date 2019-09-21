import React, { Component } from 'react'

export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tpye: "",
            price: "",
            description: "",
            dept: "",
            images: [],
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange = (event) => {
        const name = event.target.name;
        const type = event.target.type;
        const price = event.target.price;
        const desc = event.target.desc;
        const depts = event.target.depts;
        
        this.setState({
            [name]: event.target.value
        });
        console.log(this.state.name);
    }
    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <h1>Add Product:</h1>
                <form 
                    onChange={this.handleChange}
                >
                    Name:
                        <input type="text" name="name" onChange={this.handleChange()} />
                    <br />
                    <br />
                    Type:
                        <input type="text" name="type" />
                    <br />
                    <br />
                    Price:
                        <input type="text" name="price" />
                    <br />
                    <br />
                    Description:
                        <textarea name="desc" rows="5" cols="30" />
                    <br />
                    <br />
                    <select name="depts">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                    <br />
                    <br />

                    <input type="submit" value="Submit" />

                </form>
            </div>
        )
    }
}
