import React, {lazy} from "react";
import {Store} from "../app/components/Store";
import {IEpisodeProps} from "../app/components/interfaces";

const EpisodeList = lazy<any>(() => import('../app/components/episodes-list/EpisodesList'));

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
