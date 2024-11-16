import reactimg from "./assets/react-core-concepts.png"
import reactimg2 from "./assets/components.png"

const NameDetails =  ['soham', 'paresh', 'sonal']; //created one array of name details

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1)); // random number function to call name in every refresh
}

function Testing () {
const description = NameDetails[genRandomInt(3)]; // dont use [] brackets in this use () bracket for function 
  return (
    <header>
    <img src= {reactimg} alt="Stylized atom" />
    <h1>{description} Essentials </h1>
    <p> React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  )
}
function CoreConcept (props) {
  return (
    <li>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.descriptions}</p>
    </li>
  );

}
function App() {
  return (
    <div>
<Testing/>
<main id ="core-concepts">
<CoreConcept
image = {reactimg2}
title ="Hello soham here"
descriptions = "hello soham here i am developer learning react js and currently practicing"

/>
<coreconcepts/>
<coreconcepts/>
</main>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
