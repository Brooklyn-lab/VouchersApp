import { Link } from 'react-router-dom'
import { AppRoute } from '../../const'
import './logo.scss'

type LogoProps = {
  className?: string
}

function Logo({ className }: LogoProps): JSX.Element {
  return (
    <Link to={AppRoute.Main}>
      <svg xmlns="http://www.w3.org/2000/svg" width="195" height="50" viewBox="0 0 195 50" fill="none" className="logo">
        <g clipPath="url(#clip0_708_108)">
          <path
            d="M58.9902 15.7333H54.7408V34.1906H57.626V27.2559H58.9902C61.8755 27.2559 63.292 25.6475 63.292 22.6943V20.2949C63.292 17.3417 61.8755 15.7333 58.9902 15.7333ZM58.9902 18.3701C59.9081 18.3701 60.4062 18.7919 60.4062 20.1104V22.8789C60.4062 24.1973 59.9081 24.6192 58.9902 24.6192H57.626V18.3701H58.9902Z"
            fill="#232D37"
            className={className}
          />
          <path
            d="M73.727 34.1906C73.4386 33.505 73.4123 32.8458 73.4123 31.9493V29.1016C73.4123 27.1768 72.9404 25.7794 71.4976 25.1729C72.7828 24.5664 73.3859 23.3272 73.3859 21.4287V19.9785C73.3859 17.1308 72.1007 15.7333 69.1106 15.7333H64.7562V34.1906H67.6419V26.6758H68.6382C69.9498 26.6758 70.5271 27.3087 70.5271 29.0225V31.9229C70.5271 33.4259 70.632 33.7159 70.7891 34.1906H73.727ZM69.032 18.3701C70.0547 18.3701 70.5007 18.9502 70.5007 20.2685V22.0879C70.5007 23.5645 69.8449 24.0391 68.7695 24.0391H67.6419V18.3701H69.032Z"
            fill="#232D37"
            className={className}
          />
          <path
            d="M77.9591 19.9785C77.9591 18.6601 78.5363 18.1592 79.4541 18.1592C80.3725 18.1592 80.9492 18.6601 80.9492 19.9785V29.9454C80.9492 31.2638 80.3725 31.7647 79.4541 31.7647C78.5363 31.7647 77.9591 31.2638 77.9591 29.9454V19.9785ZM75.0739 29.7608C75.0739 32.714 76.6216 34.4015 79.4541 34.4015C82.2871 34.4015 83.8349 32.714 83.8349 29.7608V20.1631C83.8349 17.2099 82.2871 15.5224 79.4541 15.5224C76.6216 15.5224 75.0739 17.2099 75.0739 20.1631V29.7608Z"
            fill="#232D37"
            className={className}
          />
          <path
            d="M88.595 18.3701H93.3427V15.7333H85.7098V34.1906H88.595V26.5704H92.32V23.9336H88.595V18.3701Z"
            fill="#232D37"
            className={className}
          />
          <path d="M94.7264 34.1906H97.6116V15.7333H94.7264V34.1906Z" fill="#232D37" className={className} />
          <path
            d="M98.8819 18.3701H101.898V34.1906H104.784V18.3701H107.801V15.7333H98.8819V18.3701Z"
            fill="#232D37"
            className={className}
          />
          <path
            d="M115.295 15.7333H112.383L115.216 34.1906H119.518L122.351 15.7333H119.701L117.498 30.7892L115.295 15.7333Z"
            fill="#232D37"
            className={className}
          />
          <path
            d="M126.321 19.9785C126.321 18.6601 126.898 18.1592 127.816 18.1592C128.734 18.1592 129.311 18.6601 129.311 19.9785V29.9454C129.311 31.2638 128.734 31.7647 127.816 31.7647C126.898 31.7647 126.321 31.2638 126.321 29.9454V19.9785ZM123.436 29.7608C123.436 32.714 124.983 34.4015 127.816 34.4015C130.649 34.4015 132.197 32.714 132.197 29.7608V20.1631C132.197 17.2099 130.649 15.5224 127.816 15.5224C124.983 15.5224 123.436 17.2099 123.436 20.1631V29.7608Z"
            fill="#232D37"
            className={className}
          />
          <path
            d="M133.94 15.7333V29.7872C133.94 32.7404 135.41 34.4279 138.242 34.4279C141.075 34.4279 142.544 32.7404 142.544 29.7872V15.7333H139.816V29.9717C139.816 31.2902 139.239 31.7647 138.321 31.7647C137.403 31.7647 136.826 31.2902 136.826 29.9717V15.7333H133.94Z"
            fill="#232D37"
            className={className}
          />
          <path
            d="M150.162 27.3087V29.9454C150.162 31.2638 149.585 31.7384 148.667 31.7384C147.749 31.7384 147.172 31.2638 147.172 29.9454V19.9785C147.172 18.6601 147.749 18.1592 148.667 18.1592C149.585 18.1592 150.162 18.6601 150.162 19.9785V21.9561H152.89V20.1631C152.89 17.2099 151.421 15.5224 148.589 15.5224C145.756 15.5224 144.287 17.2099 144.287 20.1631V29.7608C144.287 32.714 145.756 34.4015 148.589 34.4015C151.421 34.4015 152.89 32.714 152.89 29.7608V27.3087H150.162Z"
            fill="#232D37"
            className={className}
          />
          <path
            d="M157.526 26.2803H160.805V34.1906H163.742V15.7333H160.805V23.6436H157.526V15.7333H154.641V34.1906H157.526V26.2803Z"
            fill="#232D37"
            className={className}
          />
          <path
            d="M168.72 18.3701H173.704V15.7333H165.835V34.1906H173.704V31.5538H168.72V26.1485H172.681V23.5117H168.72V18.3701Z"
            fill="#232D37"
            className={className}
          />
          <path
            d="M184.462 34.1906C184.174 33.505 184.148 32.8458 184.148 31.9493V29.1016C184.148 27.1768 183.675 25.7794 182.233 25.1729C183.518 24.5664 184.121 23.3272 184.121 21.4287V19.9785C184.121 17.1308 182.836 15.7333 179.846 15.7333H175.492V34.1906H178.377V26.6758H179.374C180.685 26.6758 181.263 27.3087 181.263 29.0225V31.9229C181.263 33.4259 181.367 33.7159 181.525 34.1906H184.462ZM179.767 18.3701C180.79 18.3701 181.236 18.9502 181.236 20.2685V22.0879C181.236 23.5645 180.58 24.0391 179.505 24.0391H178.377V18.3701H179.767Z"
            fill="#232D37"
            className={className}
          />
          <path
            d="M185.678 20.1631C185.678 25.4366 191.318 26.1485 191.318 29.9454C191.318 31.2638 190.74 31.7384 189.823 31.7384C188.904 31.7384 188.327 31.2638 188.327 29.9454V28.627H185.6V29.7608C185.6 32.714 187.068 34.4015 189.901 34.4015C192.734 34.4015 194.203 32.714 194.203 29.7608C194.203 24.4873 188.563 23.7754 188.563 19.9785C188.563 18.6601 189.088 18.1592 190.006 18.1592C190.924 18.1592 191.449 18.6601 191.449 19.9785V20.7431H194.177V20.1631C194.177 17.2099 192.734 15.5224 189.928 15.5224C187.121 15.5224 185.678 17.2099 185.678 20.1631Z"
            fill="#232D37"
            className={className}
          />
          <path
            d="M24.8844 49.801C38.6277 49.801 49.7688 38.6527 49.7688 24.9005C49.7688 11.1483 38.6277 0 24.8844 0C11.1411 0 0 11.1483 0 24.9005C0 38.6527 11.1411 49.801 24.8844 49.801Z"
            fill="#FFC200"
          />
          <path
            d="M4.24855 6.98428C6.82803 11.6911 6.67629 32.9476 6.06937 41.1466C8.64884 44.335 15.4769 49.9527 25.6431 49.9527C33.7797 49.9527 40.2602 44.993 42.4856 42.513C42.9712 41.7842 43.5478 13.6649 40.0579 0L37.4784 2.58115L34.2919 1.06283L31.7125 3.64398L28.3743 2.27748L25.6431 4.85863L22.4566 3.34031L19.7255 5.76965L16.3873 4.55497L13.8078 6.98428L10.4697 5.76965L7.73844 8.19896L4.24855 6.98428Z"
            fill="#F6F6F6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42.4236 17.8746L6.31165 22.0993C6.06852 16.1686 5.50833 10.4769 4.40028 6.98428L7.73844 8.19895L10.4697 5.76965L13.8078 6.98428L16.3873 4.55497L19.7255 5.76965L22.4567 3.34031L25.6431 4.85863L28.3743 2.27748L31.7124 3.64397L34.2919 1.06283L37.4784 2.58115L40.0578 0C41.2653 4.33888 42.0003 11.0459 42.4236 17.8746Z"
            fill="#232D37"
          />
          <path
            d="M19.0614 26.5887C19.1367 25.6104 19.5764 25.2317 20.2984 25.2873C20.9891 25.3405 21.397 25.7846 21.3218 26.7629L20.7389 34.3363C20.6636 35.3146 20.1925 35.6909 19.5019 35.6377C18.7798 35.5821 18.4032 35.1404 18.4786 34.1621L19.0614 26.5887ZM16.2931 33.835C16.1182 36.107 17.1827 37.4588 19.3489 37.6257C21.5151 37.7927 22.7738 36.6199 22.9486 34.3479L23.5072 27.09C23.6821 24.8179 22.6176 23.4662 20.4514 23.2993C18.2853 23.1323 17.0265 24.3051 16.8517 26.5771L16.2931 33.835ZM18.7393 45.5463L20.7799 45.7035L31.1446 24.282L29.1041 24.1248L18.7393 45.5463ZM29.3334 35.5065C29.4087 34.5282 29.8484 34.1495 30.5704 34.2051C31.2611 34.2583 31.6691 34.7024 31.5938 35.6807L31.0109 43.2541C30.9357 44.2324 30.4646 44.6087 29.7739 44.5555C29.0518 44.4999 28.6753 44.0582 28.7505 43.08L29.3334 35.5065ZM26.5651 42.7528C26.3903 45.0248 27.4547 46.3766 29.6209 46.5435C31.7871 46.7105 33.0458 45.5377 33.2207 43.2657L33.7792 36.0078C33.9541 33.7358 32.8896 32.384 30.7235 32.2171C28.5572 32.0502 27.2985 33.2229 27.1237 35.495L26.5651 42.7528Z"
            fill="#232D37"
          />
        </g>
        <defs>
          <clipPath id="clip0_708_108">
            <rect width="194.203" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  )
}

export default Logo
