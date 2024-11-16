const NameDetails =  ['soham', 'paresh', 'sonal']; //created one array of name details

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1)); // random number function to call name in every refresh
}

function Testing () {
const description = NameDetails[genRandomInt(3)]; // dont use [] brackets in this use () bracket for function 
  return (
    <header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>{description} Essentials </h1>
    <p> React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  )
}
function App() {
  return (
    <div>
<Testing/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
