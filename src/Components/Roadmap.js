import roadmap from '../roadmap.png';

function Roadmap() {
    return (
        <div>
            <h2>Data Foundation: Delivery Roadmap</h2>
            <p>High level view of the delivery roadmap, adjustments have been proposed to support the
                strategic project, Granite.</p>
            <ul>
                <li>Planning details, work breakdowns and progress updates can be found in the project
                    Confluence site,
                    <a href="https://lplfinancial.atlassian.net/wiki/spaces/GRANITE/overview"
                        style={{ padding: 0, border: 0 }}> click here.
                    </a>
                </li>
            </ul>
            <img src={roadmap} width="1000px" alt="roadmap diagram" />
        </div>
    );
}

export default Roadmap;