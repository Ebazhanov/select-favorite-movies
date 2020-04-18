import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {RouteComponentProps, Router} from '@reach/router'
import {StoreProvider} from "./app/Store";
import App from "./app/App";
import HomerPage from "./pages/HomerPage";
import FavPage from "./pages/FavPage";

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

ReactDOM.render(
    <StoreProvider>
        <Router>
            <App path='/'>
                <RouterPage pageComponent={<HomerPage/>} path='/'/>
                <RouterPage pageComponent={<FavPage/>} path='/favorite'/>
            </App>
        </Router>
    </StoreProvider>,
    document.getElementById('root')
);
