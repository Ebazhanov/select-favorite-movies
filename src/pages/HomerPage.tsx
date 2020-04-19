import React, {useEffect, useContext} from 'react';
import {IEpisodeProps} from "../app/components/interfaces";
import EpisodesList from "../app/components/episodes-list/EpisodesList";
import {fetchDataAction, toggleFavAction} from "../app/components/Actions";
import {Store} from "../app/components/Store";

export default function HomerPage() {

    const {state, dispatch} = useContext(Store);

    useEffect(() => {
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
