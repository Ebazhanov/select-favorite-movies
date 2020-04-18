import React from 'react';
import {IEpisodeProps} from "../app/interfaces";
import EpisodesList from "../app/EpisodesList";
import {fetchDataAction, toggleFavAction} from "../app/Actions";
import {Store} from "../app/Store";

export default function HomerPage() {

    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch)
    });

    const props: IEpisodeProps = {
        episodes: state.episodes,
        store: {state, dispatch},
        toggleFavAction,
        favorites: state.favorites
    };

    return (
        <React.Fragment>
            <React.Suspense fallback={<div>loading ...</div>}>
                <section className='episode-layout'>
                    <EpisodesList{...props}/>
                </section>
            </React.Suspense>
        </React.Fragment>
    )
};
