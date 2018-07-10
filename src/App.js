import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function maintitle(title){
  return <h1>{title}</h1>;
}

function section(title){
  return <h2>{title}</h2>
}


function item(name, price){

  return <p>{name}</p>
}




class App extends Component {

  render(){

    return(
<div class="Block-Main">

<Titleblock/>


<h2>Appetizers</h2>

<ul>


<div class='itemli'>
Edamame $4
</div>

<div class='itemli'>
Miso Soup $2.50
</div>


<div class='itemli'>

Shrimp Tenpura Small $5.50
</div>

<div class='itemli'>

Ohitashi $3.50
</div>
</ul>

<h2>Noodles</h2>
<ul>

<div class='itemli'>

Miso Ramen $8.50
</div>

<div class='itemli'>

Nabeyaki Udon $11.50
</div>
</ul>


<h2>Sushi</h2>

<ul>

<div class= 'itemli'>
Sushi Regular $25
</div>

<div class= 'itemli'>
Sushi Deluxe $35
</div>


<div class= 'itemli'>
Sushi Omakase, 5 course $65
</div>

</ul>


<h2>Drinks</h2>
<ul>
<div class= 'itemli'>
Green Tea $3.50
</div>
</ul>
</div>
)
}
}


class Titleblock extends Component{


  render() {
    return (
    maintitle("金山 寿司: Kinzan Sushi")
    )
  }

}













export default App;
