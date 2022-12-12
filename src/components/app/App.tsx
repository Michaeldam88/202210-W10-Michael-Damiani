import { useState } from 'react';
import { Gentleman } from '../gentleman/gentleman';
import { Header } from '../header/header';
import { Info } from '../info/info';

function App() {
    const gentlemen = [
        {
            id: 1,
            name: 'Bertin Osborne',
            status: 'Alive',
            profession: 'Youtuber',
            twitter: '@osbourne',
            picture: 'bertin.jpg',
            alternativeText: 'Osbourne pointing at you',
            selected: true,
        },
        {
            name: 'The Farytale',
            status: 'RIP',
            profession: 'Influencer',
            twitter: 'pending',
            picture: 'fary.jpg',
            alternativeText: 'The Fary pointing at you',
            id: 2,
            selected: false,
        },
        {
            id: 3,
            name: 'Julius Churchs',
            status: 'Alive',
            profession: 'Java developer',
            twitter: '@julius_churchs',
            picture: 'julio.jpg',
            alternativeText: 'Churchs pointing at you',
            selected: true,
        },
    ];

    const [elements, setElement] = useState(gentlemen);

    const removeElement = (id: number) => {
        const newElements = elements.filter((el) => el.id !== id);
        setElement(newElements);
    };

    return (
        <div className="container">
            <Header></Header>
            <Info></Info>
            <main className="main">
                <ul className="gentlemen">
                    {elements.map((gentlemanInfo) => (
                        <Gentleman
                            key={gentlemanInfo.name}
                            gentlemanInfo={gentlemanInfo}
                        ></Gentleman>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default App;
