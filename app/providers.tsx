'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import store from './store'
import { Provider } from 'react-redux'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <ParallaxProvider>{children}</ParallaxProvider>
        </Provider>)
}