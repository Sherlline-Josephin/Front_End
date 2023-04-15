import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CharacterAnimationsProvider } from './contexts/CharacterAnimations';
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<MantineProvider 
    withGlobalStyles 
    withNormalizeCSS
    theme={{
        globalStyles:(_theme)=>(
            {
                body:{
                    width:"100vw",
                    height:"100vh",
                },
                "#root":{
                    width:"100%",
                    height:"100%",
                    background:"grey",
                }
            }
        )
    }}
>  
    <CharacterAnimationsProvider>
        <App />
    </CharacterAnimationsProvider>
</MantineProvider>
);


