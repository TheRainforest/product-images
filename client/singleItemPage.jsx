import React from 'react';
import ReactDOM from 'react-dom';
import AltImageContainer from './components/altImageContainer.jsx';
import MainImageContainer from './components/mainImageContainer.jsx';
import ModalContainer from './components/modalContainer.jsx';
import style from './css/style.css';

class SingleItemPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: '',
      images: [],
      selected: {},
      hovering: false,
      x: 0,
      y: 0,
      sX: 0,
      sY: 0,
      id: 0,
    };
    this.onHoverAlt = this.onHoverAlt.bind(this);
    this.onHoverMain = this.onHoverMain.bind(this);
    this.onLeaveMain = this.onLeaveMain.bind(this);
    this.exit = this.exit.bind(this);
  }

  componentDidMount() {
    this.getImages();
  }

  onHoverMain(e) {
    const modal = document.getElementById('modal-image');
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.remove(style.none);
    const mags = document.getElementById(style.mags);
    mags.classList.remove(style.none);
    const valueX = -Math.abs(e.clientX) + 350;
    const valueY = -Math.abs(e.clientY) + 150;
    e.persist(e.clientX);
    e.persist(e.clientY);

    requestAnimationFrame(() => {
      this.setState({
        x: valueX,
        y: valueY,
        sX: Math.abs(e.clientX),
        sY: Math.abs(e.clientY),
      });
    });
  }

  onLeaveMain(e) {
    this.setState({
      hovering: false,
    });
  }

  onHoverAlt(e) {
    const index = e.target.getAttribute('value');
    if (this.state.selected.classList) {
      this.state.selected.classList.remove(style.selected);
    }
    e.target.classList.add(style.selected);
    this.setState({
      mainImage: this.state.images[index],
      selected: e.target,
    });
  }

  getImages() {
    const params = new URLSearchParams(document.location.search.substring(1));
    const id = params.get('id') || 1;
    fetch(`/api/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          mainImage: data.images[0],
          images: data.images,
        });
      })
      .catch((err) => console.log(err));
  }

  exit() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.add(style.none);
  }

  render() {
    return (
      <div className={style.singleItemContainer}>
        <AltImageContainer images={this.state.images} onHoverAlt={this.onHoverAlt} />
        <MainImageContainer image={this.state.mainImage} exit={this.exit} onHover={this.onHoverMain} onLeave={this.onLeaveMain} x={this.state.sX} y={this.state.sY} />
        <ModalContainer image={this.state.mainImage} x={this.state.x} y={this.state.y} />
      </div>
    );
  }
}

ReactDOM.render(<SingleItemPage />, document.getElementById('singleItemPage'));
