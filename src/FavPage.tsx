import React from "react";
import {Store} from "./Store";
import {IEpisodeProps} from "./interfaces";

const EpisodeList = React.lazy<any>(() => import('./EpisodesList'));

export default function FavPage(): JSX.Element {
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
                <EpisodeList {...props}/>
            </div>
        </React.Suspense>
    )
}
