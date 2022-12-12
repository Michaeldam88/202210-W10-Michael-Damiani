import { useState } from 'react';
import { gentlemen } from '../../models/gentleman';
import { Gentleman } from '../gentleman/gentleman';
import { Header } from '../header/header';
import { Info } from '../info/info';

function App() {
    const [elements, setElement] = useState(gentlemen);

    const removeElement = (id: string) => {
        const eliminatedElement = elements.filter((el) => 'id_' + el.id === id);
        if (eliminatedElement[0].selected) {
            removePointingGent();
        }

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

    const removePointingGent = () => {
        setTotalSelected(totalSelected - 1);
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
