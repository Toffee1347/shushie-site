export default function Curve() {
    return (
        <div className="curve">
            <div className="curve-arrow" onClick={() => document.getElementById('intro').scrollIntoView({behavior: "smooth"})}>
                &#8595;
            </div>
            <img src="/static/img/curve.svg" alt="curve"/>
        </div>
    );
}