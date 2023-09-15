import facebook from '../images/fa-brands_facebook-square.svg';
import instagram from '../images/fa-brands_instagram.svg';
import twitter from '../images/fa-brands_twitter.svg';
import youtube from '../images/fa-brands_youtube.svg';
const SocialMediaIcon = () => {
    return (
        <div className='footer'>
            <img src={facebook} alt='facebook' />
            <img src={instagram} alt='instagram' />
            <img src={twitter} alt='twitter' />
            <img src={youtube} alt='youtube' />
        </div>
    );
}

export default SocialMediaIcon;
