import React, { Component } from 'react';
import axios from 'axios';
import PokemonsCards from '../PokemonsCards/index';
import Header from '../Header/index';
class Pokemons extends Component {

    state = {
        pokemons: []
    };

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
            .then(response => response.data.results)
            .then(response => {
                this.setState({
                    pokemons: response
                })
            })
    };

    render() {
        const { pokemons } = this.state;
        return (
            <>
                <Header />
                <div className="div-container">
                    {pokemons.map(pokemon => (
                        <PokemonsCards
                            pokemonName={pokemon.name}
                            key={pokemon.name}
                            onClick={''}
                        />
                    ))}
                </div>
            </>
        );
    }
}
export default Pokemons;