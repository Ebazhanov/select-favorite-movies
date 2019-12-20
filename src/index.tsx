import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreProvider} from "./Store";
import {RouteComponentProps, Router} from '@reach/router'
import HomerPage from "./HomerPage";
import FavPage from './FavPage'

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

ReactDOM.render(
    <StoreProvider>
        <Router>
            <App path='/'>
                <RouterPage pageComponent={<HomerPage/>} path='/'/>
                <RouterPage pageComponent={<FavPage/>} path='/faves'/>
            </App>
        </Router>
    </StoreProvider>,
    document.getElementById('root')
);
