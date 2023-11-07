const data = [
    {
        topic: 'Client Insights & Product Personalization​',
        explanation: 'Utilizing advanced analytics on advisor and client data to provide personalized services and tailored investment solutions, improving the client experience.',
    },
    {
        topic: 'Performance Monitoring & Analysis​',
        explanation: 'Enhanced analytics offer insights into investment performance, helping assess strategies, identify trends, and optimize portfolio performance and service delivery through data-driven decisions.',
    },
    {
        topic: 'Client Retention & Growth',
        explanation: 'Analyze client needs to enhance satisfaction, encouraging client retention and potential investment growth, contributing to business expansion.',
    },
    {
        topic: 'Market Research, Trends & Product​',
        explanation: 'Data and analytics for market insights, informed product decisions, and adapting to market changes.',
    },
    {
        topic: 'Operational Efficiency​',
        explanation: 'Data-driven insights optimize processes, resources, and workflows for streamlined operations, increased productivity, and client satisfaction.',
    },
    {
        topic: 'Compliance & Regulation​',
        explanation: 'Data ensures compliance, aids in reporting, audit trails, and meets regulatory standards.',
    },
    {
        topic: 'Fraud Detection & Security​',
        explanation: 'Enhanced data consistency and analytics detect financial anomalies for fraud prevention, bolstering security for the organization and its stakeholders.',
    },
    {
        topic: 'Risk Assessment & Management',
        explanation: 'Accurate, timely data and advanced analytics aid risk evaluation for informed investment decisions and effective portfolio management.',
    },
    {
        topic: 'Business & Strategic Planning​',
        explanation: 'Enhanced data insights on performance, market, and client demographics inform long-term strategies and data-driven decisions.',
    },

];

const Outcomes = () => {
    return (
        <div className="table-container">
            <table className="table">
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.topic}</td>
                            <td>{item.explanation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Outcomes;