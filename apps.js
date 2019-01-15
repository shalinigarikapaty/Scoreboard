const players = [
  
];

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

const Player = (props) => {
  console.log(props.removePlayer)
  return (
    <div className="player">
      <span className="player-name">
          <button className = "remove-player" onClick = {()=>props.removePlayer(props.id) }>x</button>
        { props.name }
      </span>

      <Counter score={props.score} />
    </div>
  );
}

class Counter extends React.Component {
  state = {
      score:0 
};
  incrementScore(){
       this.setState( prevState => {
          score: prevState.score + 1
         
       });
  }
  decrementScore(){
      this.setState( prevState => {
          score: prevState.score - 1
      }); 
  }
  render(){
    return (
    <div className="counter">
      <button className="counter-action decrement" onClick = {this.state.decrementScore}> - </button>
      <span className="counter-score">{ this.state.score }</span>
      <button className="counter-action increment" onClick={this.state.incrementScore}>+ </button>
    </div>
  );
  }
  
}
//How to create class using state
class App extends React.Component {
    state = {
  players:[{
    name: "Guil",
    id: 1
  },
  {
    name: "Treasure",
    
    id: 2
  },
  {
    name: "Ashley",
   
    id: 3
  },
  {
    name: "James",
    id: 4
  }]
};
handleRemovePlayer = (id) =>{
    this.setState(prevState=> {
      return{
        players: prevState.players.filter(p => p.id !== id)
      };
    });
   
}
  render(){
      return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard.Bowling" 
        totalPlayers={this.state.players.length} 
      />

      {/* Players list */}
      {this.state.players.map( player =>
        <Player 
          name={player.name}
          id = {player.id}
          score={player.score}
          key={player.id.toString()}
          removePlayer = {this.handleRemovePlayer}
        />
      )}
    </div>
  );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);