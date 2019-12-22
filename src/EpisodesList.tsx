import React from 'react'
import {IEpisode} from "./interfaces";

export default function EpisodesList(props: any) {
    const {episodes, toggleFavAction, favorites, store} = props;
    const {state, dispatch} = store;
    return episodes.map((episode: IEpisode) => {
        return (
            <section key={episode.id}
                     className="episode-box">
                <img src={episode.image.medium}
                     alt={`Love Stories' ${episode.name}`}/>
                <div>{episode.name}</div>
                <section style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        Season: {episode.season}
                        Number: {episode.number}</div>
                    <button type="button"
                            onClick={() => toggleFavAction(state, dispatch, episode)}>
                        {favorites.find((fav: IEpisode) => fav.id === episode.id) ? 'Undo Favorite' : 'add Favorite'}
                    </button>
                </section>
            </section>
        )
    })
}
