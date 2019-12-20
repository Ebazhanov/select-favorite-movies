import React from 'react';
import {Store} from "./Store";
import {IAction, IEpisode} from "./interfaces";

export default function App(): JSX.Element {
    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction()
    });

    const fetchDataAction = async () => {
        const URL = 'https://api.tvmaze.com/singlesearch/shows?q=love&embed=episodes';
        const data = await fetch(URL);
        const dataJSON = await data.json();
        return dispatch({
            type: 'FETCH_DATA',
            payload: dataJSON._embedded.episodes
        })
    };

    const toggleFavAction = (episode: IEpisode): IAction => dispatch({
        type: 'ADD_FAV',
        payload: episode
    });

    return (
        <React.Fragment>
            <header className="header">
                <h1>Love Stories </h1>
                <p>Pick your favorite episode !!!</p>
            </header>
            <section className="episode-layout">
                {state.episodes.map((episode: IEpisode) => {
                    return (
                        <section key={episode.id} className="episode-box">
                            <img src={episode.image.medium} alt={`Love Stories' ${episode.name}`}/>
                            <div>{episode.name}</div>
                            <section>
                                <div>Season: {episode.season} Number: {episode.number}</div>
                                <button type="button" onClick={() => toggleFavAction(episode)}>Favorites</button>
                            </section>
                        </section>
                    )
                })}
            </section>
        </React.Fragment>
    )
}
