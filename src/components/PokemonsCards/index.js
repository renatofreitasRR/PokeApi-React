import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
class PokemonsCard extends Component {

    state = {
        pokemonObject: {
            sprites: {},
            types: [],
            abilities: []
        }
    };

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}/`)
            .then(response => response.data)
            .then(response => {
                this.setState({
                    pokemonObject: response
                })
            })
    };

    render() {
        const { sprites, name, types, abilities } = this.state.pokemonObject;

        return (
            <div className="pokemons-container">
                <div className="pokemon">
                    <h3>{name}</h3>
                    <div className="content-pokemon" >
                        <div className="element" > {
                            types.map(type => {
                                return (<small key={type.type.name} > {type.type.name} </small>
                                )
                            })
                        }
                        </div>
                        <img src={sprites.front_default} alt="" />
                    </div>
                    <h4>Skills</h4>
                    {abilities.map(abilitie => {
                        return (
                            <small key={abilitie.ability.name}><br />{abilitie.ability.name}</small>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default PokemonsCard;