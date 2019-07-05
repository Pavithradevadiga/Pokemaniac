import React,{Component} from 'react'  
import './App.css';


function Pokemon(props){
  return(
  <div className="pokemon">
  <h1 style={{fontFamily: 'Ariel'}}>Choose your Pokemon</h1>
  <h1 className="pok-name" style={{fontFamily: 'Audiowide'}} >{props.poke}</h1>  
  <input type="text" value={props.poke} onChange={props.update_poke} placeholder="Enter a new pokemon"/>   
  <button onClick={()=>(props.onenteringpoke())}>Go</button>  
  <img className="rotate" src={props.image}  
  alt={props.poke}/>  
  
  </div>
  );
}  

function AddPokemon(props){
  return(
  <div>
  <input type="text"  placeholder="Enter a new pokemon"/>   
  <input type="text" style={{width: 300 + 'px',marginLeft:50+'px'}}   placeholder="Enter the url of the image"/> 
  <br/>  
  <button style={{marginRight:150+'px'}}>Add</button>  
   </div>
  );
}




class App extends Component{  
  constructor(props){
  super(props);
  this.state={        
  poke:'PIKACHU',
  image:'https://www.freeiconspng.com/uploads/pikachu-transparent-hd-1.png',
  loading:'false'
 }
  this.searchpoke = this.searchpoke.bind(this)
  this.update_pokemon = this.update_pokemon.bind(this)   
  }
  
  componentDidMount(){
    this.setState({
      loading:'false'
    })
  } 
  componentDidUpdate(prevProps,prevState){
     if(prevState.poke.toLowerCase() != this.state.poke.toLowerCase() & 
      prevState.image == this.state.image){
     this.setState({
      image:'https://ih0.redbubble.net/image.731955024.9007/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
     })
     } 
   
    }
  
  searchpoke(){     
  const pokemons = [{      
  poke:'pikachu',
  image:'https://www.freeiconspng.com/uploads/pikachu-transparent-hd-1.png'
  },
  {
  poke:'ivysaur',
  image:'https://www.freeiconspng.com/uploads/ivysaur-pokemon-png-17.png'
  },
  {
  poke:'bulbasaur',
  image:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/109af611-6d08-4e4b-a8e4-a67472999222/dazd0yp-797b6603-9e41-4d38-a42e-f48f022cc0bc.png/v1/fill/w_872,h_917,strp/bulbasaur__transparent_background__by_jerber7_dazd0yp-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY4MiIsInBhdGgiOiJcL2ZcLzEwOWFmNjExLTZkMDgtNGU0Yi1hOGU0LWE2NzQ3Mjk5OTIyMlwvZGF6ZDB5cC03OTdiNjYwMy05ZTQxLTRkMzgtYTQyZS1mNDhmMDIyY2MwYmMucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.E7JB3PeW_7cCUGen1VZ9N2Zp6JqQyTIMfI4SkrAW9Eg'
  },
  {
  poke:'venusaur',
  image:'https://www.stickpng.com/assets/images/585965d64f6ae202fedf2871.png'
  },
  {
  poke:'charmander',
  image:'https://clipart.info/images/ccovers/1528080667Charmander-pokemon-transparent.png'
  },
  {
  poke:'charmeleon',
  image:'https://vignette.wikia.nocookie.net/pokemon/images/4/4a/005Charmeleon.png/revision/latest?cb=20140328191309'
  },
  {
  poke:'charizard',
  image:'https://vignette.wikia.nocookie.net/pokemon/images/7/7e/006Charizard.png/revision/latest?cb=20140328191325'
  },
  {
  poke:'squirtle',
  image:'https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png'
  },
  {
  poke:'wartortle',
  image:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png'
  },
  {
  poke:'blastoise',
  image:'https://cdn.bulbagarden.net/upload/thumb/0/02/Blasty.png/230px-Blasty.png'
  },
  {
  poke:'caterpie',
  image:'https://cdn.bulbagarden.net/upload/thumb/5/5d/010Caterpie.png/250px-010Caterpie.png'
  },
  {
  poke:'metapod',
  image:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png'
  },
  {
  poke:'butterfree',
  image:'https://cdn.bulbagarden.net/upload/thumb/d/d1/012Butterfree.png/250px-012Butterfree.png'
  },
  {
  poke:'weedle',
  image:'https://static.pokemonpets.com/images/monsters-images-300-300/13-Weedle.png'
  },
  {
  poke:'beedrill',
  image:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015_f2.png'
  },
  {
  poke:'kakuna',
  image:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png'
  },
  {
  poke:'pidgeotto',
  image:'https://vignette.wikia.nocookie.net/pokemon/images/7/7a/017Pidgeotto.png/revision/latest?cb=20140328192046'
  },
  {
  poke:'pidgey',
  image:'https://cdn.bulbagarden.net/upload/thumb/5/55/016Pidgey.png/250px-016Pidgey.png'
  },
  {
  poke:'pidgeot',
  image:'https://cdn.bulbagarden.net/upload/thumb/7/7a/017Pidgeotto.png/250px-017Pidgeotto.png'
  },
  {
  poke:'rattata',
  image:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png'
  },
  {
  poke:'raticate',
  image:'https://www.pngkey.com/png/full/230-2308386_shiny-raticate-pokdex-pokemon-shiny-raticate.png'
  },
  {
  poke:'spearow',
  image:'https://cdn.bulbagarden.net/upload/thumb/8/8b/021Spearow.png/250px-021Spearow.png'
  },
  {
  poke:'fearow',
  image:'https://cdn.bulbagarden.net/upload/thumb/a/a0/022Fearow.png/250px-022Fearow.png'
  },
  {
  poke:'ekans',
  image:'https://cdn.bulbagarden.net/upload/thumb/f/fa/023Ekans.png/250px-023Ekans.png'
  },
  {
  poke:'raichu',
  image:'https://static.pokemonpets.com/images/monsters-images-300-300/26-Raichu.png'
  },
  {
  poke:'sandshrew',
  image:'http://assets.stickpng.com/thumbs/585965614f6ae202fedf2868.png'
  },
  {
  poke:'sandslash',
  image:'https://static.pokemonpets.com/images/monsters-images-300-300/2028-Shiny-Sandslash.png'
  },
  {
  poke:'nidoran',
  image:'https://cdn.bulbagarden.net/upload/thumb/4/4a/032Nidoran.png/250px-032Nidoran.png'
  },
  {
  poke:'nidorina',
  image:'https://assets.pokemon.com/assets/cms2/img/pokedex/full//031.png'
  },
  {
  poke:'clefairy',
  image:'https://www.pngkey.com/png/full/737-7370134_035-clefairy-dw-shiny.png'
  },
  {
  poke:'vulpix',
  image:'https://static.pokemonpets.com/images/monsters-images-300-300/37-Vulpix.png'
  },
  {
  poke:'ninetales',
  image:'https://cdn.bulbagarden.net/upload/thumb/0/05/038Ninetales.png/1200px-038Ninetales.png'
  },
  {
  poke:'jigglypuff',
  image:'https://static.pokemonpets.com/images/monsters-images-300-300/39-Jigglypuff.png'
  },
  {
  poke:'zubat',
  image:'https://www.sccpre.cat/mypng/full/250-2505779_pokemon-zubat.png'
  },
  {
  poke:'golbat',
  image:'https://cdn.bulbagarden.net/upload/thumb/0/0c/042Golbat.png/250px-042Golbat.png'
  },
  {
  poke:'oddish',
  image:'https://static.pokemonpets.com/images/monsters-images-300-300/2043-Shiny-Oddish.png'
  },
  {
  poke:'glume',
  image:'https://static.pokemonpets.com/images/monsters-images-300-300/2044-Shiny-Gloom.png'
  },
  {
  poke:'paras',
  image:'http://static.pokemonpets.com/images/monsters-images-800-800/2046-Shiny-Paras.png'
  },
  {
  poke:'venomoth',
  image:'https://static.pokemonpets.com/images/monsters-images-300-300/49-Venomoth.png'
  },
  {
  poke:'diglett',
  image:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png'
  },
  {
  poke:'meowth',
  image:'http://kiribbean.net/wp-content/uploads/2017/06/04-10-280x350.png'
  },
  {
  poke:'persian',
  image:'https://cdn.bulbagarden.net/upload/1/13/053Persian.png'
  },
  {
  poke:'psyduck',
  image:'https://vignette.wikia.nocookie.net/pokemon/images/e/e3/054Psyduck_OS_anime.png/revision/latest/scale-to-width-down/170?cb=20141128030337'
  },
  {
  poke:'mankey',
  image:'https://static.pokemonpets.com/images/monsters-images-300-300/2056-Shiny-Mankey.png'
  },
  {
  poke:'arcanine',
  image:'https://cdn.bulbagarden.net/upload/thumb/b/b8/059Arcanine.png/1200px-059Arcanine.png'
  },
  {
  poke:'poliwag',
  image:'https://static.pokemonpets.com/images/monsters-images-300-300/2060-Shiny-Poliwag.png'
  },
  {
  poke:'abra',
  image:'https://static.pokemonpets.com/images/monsters-images-300-300/63-Abra.png'
  },
  {
  poke:'machoke',
  image:'https://cdn.bulbagarden.net/upload/thumb/8/8e/067Machoke.png/250px-067Machoke.png'
  },
  {
  poke:'bellsprout',
  image:'https://cdn.bulbagarden.net/upload/thumb/a/a2/069Bellsprout.png/1200px-069Bellsprout.png'
  },
  {
  poke:'tentacruel',
  image:'https://cdn.bulbagarden.net/upload/thumb/f/f6/073Tentacruel.png/250px-073Tentacruel.png'
  },
  {
  poke:'graveler',
  image:'http://static.pokemonpets.com/images/monsters-images-800-800/2075-Shiny-Graveler.png'
  },
  {
  poke:'golem',
  image:'https://cdn.bulbagarden.net/upload/thumb/f/f2/076Golem.png/250px-076Golem.png'
  },
  {
  poke:'ponyta',
  image:'https://cdn.bulbagarden.net/upload/thumb/3/3b/077Ponyta.png/250px-077Ponyta.png'
  },
  {
  poke:'onix',
  image:'https://cdn.bulbagarden.net/upload/thumb/9/9a/095Onix.png/250px-095Onix.png'
  },
  {
  poke:'magneton',
  image:'http://pre07.deviantart.net/1f53/th/pre/i/2014/228/d/8/082___magneton_by_nganlamsong-d7vhspu.png'
  }
  ]
  
  pokemons.map((poke_mon)=>
   this.state.poke.toLowerCase() == poke_mon.poke?
     this.setState({
      image:poke_mon.image,
      }) 
    :console.log('not found')
    ) 
   }

  update_pokemon(e){    
  this.setState({
  poke:e.target.value
})
}
  render(){
    return (
      <div className="App"> 
        <Pokemon
         onenteringpoke={this.searchpoke}  
         update_poke={this.update_pokemon}
         image={this.state.image}
         poke={this.state.poke.toUpperCase()}
        />
        <div   className="App-header">
        <h1>Add a new pokemon</h1>
        <AddPokemon/>
        </div>
      </div>
    );
  }
}

export default App;
