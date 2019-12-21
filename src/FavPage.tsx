import React from "react";
import {Store} from "./Store";
import EpisodesList from "./EpisodesList";
import {IEpisodeProps} from "./interfaces";

export default function FavPage():JSX.Element {
    const {state, dispatch} = React.useContext(Store);
    const props: IEpisodeProps = {
        episodes: state.favorites,
        store: {state, dispatch},
        toggleFavAction: dispatch,
        favorites: state.favorites
    };
    return (
        <React.Suspense fallback={<div>loading ...</div>}>
            <div className="episode-layout">
                <EpisodesList {...props}/>
            </div>
        </React.Suspense>
    )
}
