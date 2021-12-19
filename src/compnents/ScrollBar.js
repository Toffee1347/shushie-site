import React from 'react';

export default class ScrollBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: window.scrollbars?.visible || false,
            yOffset: 0,
        }
    }

    componentDidMount() {   
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll.bind(this));
        document.getElementById('scrollBarImg').addEventListener('mousedown', (ev) => {
            document.getElementById('bodyLayer').classList.add('no-select');
        });
        document.getElementById('scrollBarImg').addEventListener('mousemove', (ev) => {
            if (ev.buttons === 1) {
                window.scrollTo({
                    top: (window.pageYOffset || document.documentElement.scrollTop) + ev.offsetY,
                    left: 0,
                    behavior: 'smooth',
                });
            }
        });
        window.addEventListener('mouseup', (ev) => {
            document.getElementById('bodyLayer').classList.remove('no-select');
        });
    }

    handleScroll() {
        const viewPort = {
            top: window.pageYOffset || document.documentElement.scrollTop,
        }
        viewPort.bottom = viewPort.top + window.innerHeight;

        const scrollBarHeight = (viewPort.bottom - viewPort.top) / document.body.scrollHeight;
        const imgPosition = ((scrollBarHeight / 2) + (viewPort.top / document.body.scrollHeight)) * 100;
        this.setState({
            yOffset: imgPosition + '%',
        });
    }

    render() {
        return this.state.visible ? (
            <div id="scrollBarImg" className="scrollbar" style={{top: this.state.yOffset}}>
                <img src="/static/img/scrollbar.png" className="no-select" alt=""/>
            </div>
        ) : null;
    }
}