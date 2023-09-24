import arch1 from "../arch1.png"
import arch2 from "../arch2.png"

function Architecture() {
    return (
        <div>
            <h2>Data Foundation: Architecture</h2>
            <p>The strategy is to progressively move to a Domain-Driven Architecture, with centralized common
                data elements and structures, and a unified data abstraction layer for consumers.</p>
            <ul>
                <li>The following depicts a very high-level view of the target state architecture, with a focus on
                    project Granite, showing the formation of System of Record as the data masters, and consumers
                    provided with a standardised API to access all their data requirements.
                </li>
            </ul>
            <img src={arch1} style={{ float: "left", width: "40vw" }}></img>
            <p>Detailed functional and technical architectural diagrams with supporting
                definition and delivery plans can be found in the Confluence library using the following links:</p>
            <ul>
                <li>Confluence link 1</li>
                <li>Confluence link 2</li>
                <li>Confluence link 3</li>
            </ul>
            <img src={arch2} style={{ width: "30vw" }} />
        </div>
    );
}

export default Architecture;