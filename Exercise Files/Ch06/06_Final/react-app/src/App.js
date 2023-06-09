import "./App.css";

const tahoe_peaks = [
    {name: "Freel Peak", elevation: 10891},
    {name: "Monument Peak", elevation: 10067},
    {name: "Pyramid Peak", elevation: 9983},
    {name: "Mt. Tallac", elevation: 9735},
];

function List({data, renderItem, renderEmpty}) {
    return !data.length
        ? (renderEmpty)
        : (
            <ul>
                {data.map((item) => (
                    <li key={item.name}>{renderItem(item)}</li>
                ))}
            </ul>
        )
}

function App() {
    return (
        <List
            data={tahoe_peaks}
            renderEmpty={<p>This list is empty</p>}
            renderItem={item => (
                <>
                    {item.name} - {item.elevation.toLocaleString()}ft
                </>
            )}
        />
    );
}

export default App;
