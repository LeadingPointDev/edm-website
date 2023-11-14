import roadmap from '../roadmap.png';
import roadmap1 from '../roadmap1.png';
import roadmap2 from '../roadmap2.png';
import roadmap3 from '../roadmap3.png';

function Roadmap() {
    return (
        <div>
            <h2 class="title">Data strategy is being executed via a multi-year journey</h2>
            <img class="image" src={roadmap1} />
            <h2 class="title">Current areas of focus represent critical enablers of scale</h2>
            <img class="image" src={roadmap2} />
            <h2 class="title">How we are measuring progress</h2>
            <img class="image" src={roadmap3} />
            <h2 class="title">Delivery Roadmap</h2>
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
            <img class="image" src={roadmap} />
        </div>
    );
}

export default Roadmap;