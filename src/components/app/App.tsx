import { Gentelman } from '../gentleman/gentelman';
import { Header } from '../header/header';
import { Info } from '../info/info';

function App() {
    const gentelmen = [
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
    return (
        <div className="container">
            <Header></Header>
            <Info></Info>
            <ul className="gentelmen">
                {gentelmen.forEach((el) => (
                    <Gentelman></Gentelman>
                ))}
            </ul>
        </div>
    );
}

export default App;
