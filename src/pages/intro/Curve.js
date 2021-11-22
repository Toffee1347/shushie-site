export default function Curve({arrow, inverted, topOffset, bottomOffset}) {
    return (
        <div className="curve">
            {arrow ? (
                <div className="curve-arrow" onClick={() => document.getElementById('intro').scrollIntoView({behavior: "smooth"})}>
                    &#8595;
                </div>
            ) : <></>}
            <img src={inverted ? '/static/img/curve-inverted.svg' : '/static/img/curve.svg'} alt="curve" style={topOffset ? {top: topOffset} : {bottom: bottomOffset || 0}}/>
        </div>
    );
}