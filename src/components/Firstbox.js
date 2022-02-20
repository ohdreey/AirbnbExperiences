import './Firstbox.css';
import grid from '../images/grid.png';

const Firstbox = () => {
  return (
    <div className='firstbox'>
      <div className='textbox'>
        <img className='grid' src={grid} alt='airbnb grid hero' />
      </div>
      <div className='bigtitle'>
        <h1>Online Experiences</h1>
        <p className='descriptionBox'>
          Join unique interactive activities led by one-of-a-kinds hosts-all
          without living home.
        </p>
      </div>
    </div>
  );
};

export default Firstbox;
