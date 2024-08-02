import React, { FC } from 'react';
import LinearGradient from '../linearGradient/linearGradient';

const Logo: FC = () => {
  return (
    <>
      <svg
        className="logo"
        viewBox="0 0 73 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <LinearGradient className="logo" />
        </defs>
        <path
          d="M62.0494 3.88123C60.0619 3.8811 58.1195 4.38658 56.467 5.33378C54.8146 6.28097 53.5267 7.62731 52.7661 9.20255C52.0055 10.7778 51.8064 12.5112 52.194 14.1835C52.5816 15.8558 53.5385 17.392 54.9436 18.5977C56.3487 19.8034 58.1391 20.6245 60.0885 20.9572C62.0369 21.2899 64.0574 21.1192 65.8938 20.4668C67.7294 19.8143 69.2986 18.7093 70.4025 17.2916C71.5072 15.8739 72.0963 14.2071 72.0963 12.5021C72.0932 10.2166 71.034 8.02552 69.1506 6.4094C67.2672 4.79327 64.7132 3.88408 62.0494 3.88123ZM62.0494 17.8043C60.8273 17.8044 59.6325 17.4936 58.6159 16.911C57.5996 16.3285 56.8074 15.5004 56.3395 14.5316C55.8716 13.5628 55.7492 12.4966 55.9875 11.468C56.2259 10.4395 56.8144 9.49469 57.6786 8.75306C58.5429 8.01146 59.6443 7.5064 60.843 7.30176C62.0416 7.09712 63.2842 7.20208 64.4131 7.60338C65.5428 8.00467 66.508 8.68427 67.1872 9.55626C67.8657 10.4282 68.2284 11.4534 68.2284 12.5021C68.2261 13.9075 67.5743 15.2548 66.4156 16.2487C65.2576 17.2426 63.6876 17.802 62.0494 17.8043ZM39.0476 3.88123C37.0604 3.88123 35.1177 4.38683 33.4655 5.3341C31.8131 6.28138 30.5253 7.62777 29.7648 9.20302C29.0043 10.7783 28.8054 12.5116 29.1931 14.1839C29.5808 15.8562 30.5377 17.3923 31.9428 18.5979C33.348 19.8036 35.1383 20.6246 37.0874 20.9573C39.0364 21.2899 41.0567 21.1192 42.8927 20.4667C44.7287 19.8142 46.2978 18.7093 47.4019 17.2916C48.506 15.8738 49.0953 14.2071 49.0953 12.5021C49.0921 10.2165 48.0325 8.02531 46.1489 6.40917C44.2653 4.79302 41.7115 3.88389 39.0476 3.88123ZM39.0476 17.8043C37.9088 17.8048 36.7921 17.5353 35.8206 17.0256C34.8491 16.5159 34.0606 15.7858 33.5422 14.9158C33.0238 14.0459 32.7956 13.0699 32.8829 12.0958C32.9702 11.1216 33.3694 10.187 34.0367 9.39527C34.7039 8.60354 35.6132 7.98536 36.664 7.609C37.7149 7.23263 38.8666 7.11273 39.9918 7.2625C41.1172 7.41229 42.1723 7.82593 43.0409 8.45778C43.9095 9.08963 44.5577 9.91514 44.914 10.8431H39.0476V14.161H44.914C44.5059 15.2199 43.7197 16.1418 42.6667 16.7957C41.6137 17.4497 40.3475 17.8025 39.0476 17.8043Z"
          fill="#FF70D9"
          className="logo__fill"
        />
        <path
          d="M22.6547 20.1278C22.2021 19.5222 21.5326 19.0566 20.5609 19.2084C18.315 19.5594 19.5081 17.8047 17.8939 18.5066C16.6025 19.0681 15.6713 20.6589 15.3672 21.3842C15.2736 20.9397 14.918 19.9664 14.2443 19.6295C13.402 19.2084 13.1213 19.9103 12.63 19.2084C12.1387 18.5066 12.1387 17.524 11.7176 16.5414C11.2965 15.5588 13.1213 14.0849 14.2443 14.6464C15.3672 15.2079 16.0691 14.857 16.6305 15.6992C17.192 16.5414 17.8939 17.5942 17.8939 14.6464C17.8939 11.6986 19.2976 10.3651 19.9292 10.4353C20.5609 10.5055 22.5261 9.80349 22.1752 9.10179C21.8242 8.40009 19.9292 8.04901 19.9292 7.41735C19.9292 6.78568 20.7715 5.45233 19.9292 4.82067C19.087 4.189 16.9815 2.92567 15.3672 3.06604C13.753 3.20641 13.2556 3.83849 13.2556 4.39997C13.2556 4.96145 15.3672 6.01439 14.2443 6.71587C13.1213 7.41735 9.47167 8.53994 9.47167 7.41735C9.47167 6.29475 9.26112 3.90846 9.96297 3.90846C10.6648 3.90846 10.8754 2.15384 11.2965 2.22402C11.7176 2.29421 13.4722 1.52262 14.2443 1.87332C14.4809 1.98084 15.2586 1.77834 16.1343 1.41344M22.6547 20.1278C24.1286 18.1347 25 15.6691 25 13C25 7.45694 21.2417 2.79168 16.1343 1.41344M22.6547 20.1278C20.4689 23.0835 16.9583 25 13 25C12.2953 25 11.6048 24.9393 10.9334 24.8227M10.9334 24.8227C11.0241 24.3006 11.1428 23.8692 11.2965 23.6301C11.9281 22.6475 14.0337 23.3494 14.2443 22.8581C14.4548 22.3668 13.5424 21.8053 12.63 21.3842C11.7176 20.9631 10.1735 20.542 9.96297 18.5066C9.75241 16.4712 8.76982 16.8221 8.55926 16.5414C8.34871 16.2607 5.89223 15.4886 5.11998 14.0849C4.34773 12.6812 5.1202 10.2949 5.11998 9.66327C5.11983 9.21675 3.18372 8.73743 1.87768 8.48668M10.9334 24.8227C5.29078 23.8433 1 18.9227 1 13C1 11.4036 1.31174 9.87994 1.87768 8.48668M1.87768 8.48668C3.66115 4.09599 7.96902 1 13 1C14.0844 1 15.1351 1.14383 16.1343 1.41344"
          stroke="#FF70D9"
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
          className="logo__stroke"
        />
      </svg>
    </>
  );
};

export default Logo;
