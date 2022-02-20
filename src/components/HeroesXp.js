import './HeroesXp.css';
import bike from '../images/bike.png';
import wedding from '../images/wedding.png';
import katie from '../images/katie.png';
import star from '../images/star.png';

const HeroesXp = () => {
  return (
    <div className='heroesXp'>
      <div className='heroes'>
        <img className='heroesPicture' src={bike} alt='airbnb bike' />
        <img className='star' src={star} alt=' star ' />
        <p>Note</p>
        <p>Life lessons with Katies Zaferes</p>
        <p>From $136 /person</p>
      </div>
      <div className='heroes'>
        <img className='heroesPicture' src={katie} alt='airbnb katie' />
        <img className='star' src={star} alt=' star ' />
        <p>Note</p>
        <p>Life lessons with Katies Zaferes</p>
        <p>From $136 /person</p>
      </div>
      <div className='heroes'>
        <img className='heroesPicture' src={wedding} alt='airbnb wedding' />
        <img className='star' src={star} alt=' star ' />
        <p>Note</p>
        <p>Life lessons with Katies Zaferes</p>
        <p>From $136 /person</p>
      </div>
    </div>
  );
};

export default HeroesXp;
