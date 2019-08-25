import React, {Component} from 'react';
import data from '../data'

class Displaycontent extends Component{
    constructor(){
        super();
        this.state ={
            counter: 0,
            index: 1
        }
        this.decrement = this.decrement.bind(this)
        this.increment = this.increment.bind(this)
    }
    
    increment() {
        this.setState({counter: this.state.counter + 1,
            index: this.state.index + 1
        })
    }

    decrement() {
        this.setState({counter: this.state.counter - 1,
            index: this.state.counter - 1
        })

    }

    render(){
        return(
            <section>
                
            <div className='Container-box'>

                
                <h1 className='number'>{this.state.index}/{data.length}</h1>
                <h1>{data[this.state.counter].name.first}, {data[this.state.counter].name.last}</h1>
                <h1>From: {data[this.state.counter].city}, {data[this.state.counter].country}</h1>
                <h1> Job Title: {data[this.state.counter].title} </h1>
                <h1> Employer: {data[this.state.counter].employer} </h1>

                <h1>Favorite Movies:</h1>  

                <ol className='ordered-list'>

                <li>{data[this.state.counter].favoriteMovies[0]}</li>
                <li>{data[this.state.counter].favoriteMovies[1]}</li>
                <li>{data[this.state.counter].favoriteMovies[2]}</li>

                </ol>
                

            </div>

            <h2 className="previous"  onClick={this.decrement}> {"<"} Previous </h2>
            <h2 className='next' onClick={this.increment}> Next > </h2>

            </section>
        )
    }
}


export default Displaycontent;
