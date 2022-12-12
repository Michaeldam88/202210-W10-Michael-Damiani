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
            selected: false,
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

    const removeElement = (id: string) => {
        const newElements = elements.filter((el) => 'id_' + el.id !== id);
        setElement(newElements);
    };
    let startingPoint = 0;

    gentlemen.forEach((ele) => {
        if (ele.selected) {
            startingPoint++;
        }
    });

    const [totalSelected, setTotalSelected] = useState(startingPoint);

    const addPointingGent = () => {
        setTotalSelected(totalSelected + 1);
    };

    return (
        <div className="container">
            <Header></Header>
            <Info totalSelected={totalSelected}></Info>
            <main className="main">
                <ul className="gentlemen">
                    {elements.map((gentlemanInfo) => (
                        <Gentleman
                            key={gentlemanInfo.id}
                            gentlemanInfo={gentlemanInfo}
                            deleteGentleman={removeElement}
                            getTotalSelected={addPointingGent}
                        ></Gentleman>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default App;
