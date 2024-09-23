import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../clientes.css';
import cliente1 from '../imagens/cliente1.png'
import cliente2 from '../imagens/cliente2.jpeg'
import cliente3 from '../imagens/cliente3.jpg'
import cliente4 from '../imagens/cliente4.png'
import cliente5 from '../imagens/cliente5.png'
import cliente6 from '../imagens/cliente6.png'

const Clientes = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 4, // Quantidade de logos a serem mostradas ao mesmo tempo
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    cssEase: "linear",
  };

  return (
    <div className="clientes-section">
      <h2>+ CLIENTES</h2>
      <p>Algumas das empresas que acreditam no nosso trabalho</p>
      <Slider {...settings} className='slide'>
        <div className='div'>
          <img src={cliente1} />
        </div>
        <div>
          <img src={cliente2}/>
        </div>
        <div>
          <img src={cliente3}  />
        </div>
        <div>
          <img src={cliente4}/>
        </div>
        <div>
          <img src={cliente5} />
        </div>
        <div>
          <img src={cliente6} />
        </div>
        {/* Adicione quantos logos forem necessários */}
      </Slider>
      <div className="parceria">
        <p>
          Deseja iniciar uma parceria?{' '}
          <a href="https://wa.me/00000000000" target="_blank" rel="noopener noreferrer">
            Clique aqui e converse diretamente no whatsapp
          </a>
        </p>
      </div>
    </div>
  );
};

export default Clientes;
