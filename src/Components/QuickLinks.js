import { Link } from 'react-router-dom';

function QuickLinks() {
    return (
        <div className="quicklinks">
            <h3>Quick Links</h3>

            <Link to="/edm">Data Model</Link>
            <p><a href="">Log in to Waltz</a></p>
            <p>Data Policy & Standards</p>
            <ul>
                <li><a href=""
                    style={{ color: "blue", padding: 0, border: 0 }}>Enterprise Data Governance Policy</a>
                </li>
                <li><a href=""
                    style={{ color: "blue", padding: 0, border: 0 }}>Enterprise Data Catalog Standard</a>
                </li>
                <li><a href=""
                    style={{ color: "blue", padding: 0, border: 0 }}>Enterprise Data Governance Asset Designation Standard</a>
                </li>
                <li><a href=""
                    style={{ color: "blue", padding: 0, border: 0 }}>Enterprise Data Governance Classification & Sensitivity Standard</a>
                </li>
                <li><a href=""
                    style={{ color: "blue", padding: 0, border: 0 }}>Enterprise Data Quality Standard</a>
                </li>
            </ul>
        </div >
    )
}

export default QuickLinks