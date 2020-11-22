import { FC, useState, useEffect } from "react";
import styles from "../styles/logo.module.css";

const Logo: FC = () => {
  const classList = [styles.logo];

  return (
    <svg
      className={classList.join(" ")}
      width="439px"
      height="79px"
      viewBox="0 0 439 79"
      version="1.1"
      xmlnsXlink="http://www.w3.org/2000/svg"
    >
      <title>sundaycode</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M15.48,20.36 C17.5600104,20.36 19.5199908,20.5866644 21.36,21.04 C23.2000092,21.4933356 24.5999952,21.986664 25.56,22.52 C26.1466696,22.8400016 26.6266648,23 27,23 C28.12,23 28.7866656,22.1466752 29,20.44 L30.6,20.44 C30.3866656,23.2133472 30.28,28.0132992 30.28,34.84 L28.68,34.84 C28.2533312,31.3199824 27.2533412,28.3466788 25.68,25.92 C24.1066588,23.4933212 21.8266816,22.28 18.84,22.28 C17.50666,22.28 16.3866712,22.679996 15.48,23.48 C14.5733288,24.280004 14.12,25.3733264 14.12,26.76 C14.12,28.5200088 14.7066608,30.0799932 15.88,31.44 C17.0533392,32.8000068 18.8933208,34.4666568 21.4,36.44 C21.5066672,36.4933336 22.2799928,37.1066608 23.72,38.28 C26.7066816,40.7333456 28.8933264,42.9066572 30.28,44.8 C31.6666736,46.6933428 32.36,49.0266528 32.36,51.8 C32.36,54.1466784 31.6400072,56.2666572 30.2,58.16 C28.7599928,60.0533428 26.8000124,61.5199948 24.32,62.56 C21.8399876,63.6000052 19.133348,64.12 16.2,64.12 C12.8399832,64.12 10.093344,63.45334 7.96,62.12 C7.0533288,61.6399976 6.3066696,61.2933344 5.72,61.08 C5.1333304,60.8666656 4.5466696,60.76 3.96,60.76 C2.9466616,60.76 2.2000024,61.693324 1.72,63.56 L0.12,63.56 C0.3333344,60.5199848 0.44,55.1867048 0.44,47.56 L2.04,47.56 C2.5200024,51.9333552 3.693324,55.45332 5.56,58.12 C7.426676,60.78668 9.7733192,62.12 12.6,62.12 C13.93334,62.12 15.0399956,61.7466704 15.92,61 C16.8000044,60.2533296 17.24,59.1600072 17.24,57.72 C17.24,56.2266592 16.9333364,54.8933392 16.32,53.72 C15.7066636,52.5466608 14.9600044,51.493338 14.08,50.56 C13.1999956,49.626662 11.7733432,48.2800088 9.8,46.52 C7.5599888,44.4399896 5.8533392,42.7866728 4.68,41.56 C3.5066608,40.3333272 2.5066708,38.9066748 1.68,37.28 C0.8533292,35.6533252 0.44,33.8533432 0.44,31.88 C0.44,29.5866552 1.1333264,27.5600088 2.52,25.8 C3.9066736,24.0399912 5.7466552,22.693338 8.04,21.76 C10.3333448,20.826662 12.81332,20.36 15.48,20.36 Z M78.6,54.28 C78.6,56.7333456 78.93333,58.5199944 79.6,59.64 C80.26667,60.7600056 81.4266584,61.32 83.08,61.32 L83.08,63 C81.4266584,62.8399992 79.7733416,62.76 78.12,62.76 C72.5733056,62.76 67.933352,63.1333296 64.2,63.88 L64.2,58.12 C61.799988,62.12002 57.5600304,64.12 51.48,64.12 C47.213312,64.12 44.2000088,63.053344 42.44,60.92 C41.64,59.9599952 41.0533352,58.6666748 40.68,57.04 C40.3066648,55.4133252 40.12,53.26668 40.12,50.6 L40.12,30.2 C40.12,27.7466544 39.78667,25.9600056 39.12,24.84 C38.45333,23.7199944 37.2933416,23.16 35.64,23.16 L35.64,21.48 C37.2933416,21.6400008 38.9466584,21.72 40.6,21.72 C46.1466944,21.72 50.786648,21.3466704 54.52,20.6 L54.52,54.92 C54.52,56.6266752 54.8266636,57.8933292 55.44,58.72 C56.0533364,59.5466708 57.0533264,59.96 58.44,59.96 C59.9866744,59.96 61.3333276,59.4133388 62.48,58.32 C63.6266724,57.2266612 64.2,55.8533416 64.2,54.2 L64.2,30.2 C64.2,27.7466544 63.86667,25.9600056 63.2,24.84 C62.53333,23.7199944 61.3733416,23.16 59.72,23.16 L59.72,21.48 C61.3733416,21.6400008 63.0266584,21.72 64.68,21.72 C70.2266944,21.72 74.866648,21.3466704 78.6,20.6 L78.6,54.28 Z M117.8,20.36 C122.066688,20.36 125.079991,21.426656 126.84,23.56 C127.640004,24.5200048 128.226665,25.8133252 128.6,27.44 C128.973335,29.0666748 129.16,31.21332 129.16,33.88 L129.16,55.56 C129.16,57.7466776 129.49333,59.2533292 130.16,60.08 C130.82667,60.9066708 131.986658,61.32 133.64,61.32 L133.64,63 C127.879971,62.7866656 124.146675,62.68 122.44,62.68 C120.626658,62.68 116.840029,62.7866656 111.08,63 L111.08,61.32 C112.466674,61.32 113.426664,60.9066708 113.96,60.08 C114.493336,59.2533292 114.76,57.7466776 114.76,55.56 L114.76,29.56 C114.76,27.8533248 114.453336,26.5866708 113.84,25.76 C113.226664,24.9333292 112.226674,24.52 110.84,24.52 C109.293326,24.52 107.946672,25.0666612 106.8,26.16 C105.653328,27.2533388 105.08,28.6266584 105.08,30.28 L105.08,55.56 C105.08,57.7466776 105.346664,59.2533292 105.88,60.08 C106.413336,60.9066708 107.373326,61.32 108.76,61.32 L108.76,63 C103.42664,62.7866656 99.9066752,62.68 98.2,62.68 C96.3866576,62.68 92.3866976,62.7866656 86.2,63 L86.2,61.32 C87.8533416,61.32 89.01333,60.9066708 89.68,60.08 C90.34667,59.2533292 90.68,57.7466776 90.68,55.56 L90.68,30.2 C90.68,27.7466544 90.34667,25.9600056 89.68,24.84 C89.01333,23.7199944 87.8533416,23.16 86.2,23.16 L86.2,21.48 C87.9066752,21.6400008 89.559992,21.72 91.16,21.72 C96.7066944,21.72 101.346648,21.3466704 105.08,20.6 L105.08,26.36 C107.480012,22.35998 111.71997,20.36 117.8,20.36 Z M177.48,54.2 C177.48,56.6533456 177.81333,58.44 178.48,59.56 C179.14667,60.6800056 180.306658,61.24 181.96,61.24 L181.96,62.92 C180.306658,62.7599992 178.653342,62.68 177,62.68 C171.453306,62.68 166.813352,63.0533296 163.08,63.8 L163.08,58.12 C161.959994,60.2000104 160.640008,61.7199952 159.12,62.68 C157.599992,63.6400048 155.666678,64.12 153.32,64.12 C148.413309,64.12 144.466682,62.2933516 141.48,58.64 C138.493318,54.9866484 137,49.426704 137,41.96 C137,34.8666312 138.586651,29.4933516 141.76,25.84 C144.933349,22.1866484 149.266639,20.36 154.76,20.36 C158.17335,20.36 160.946656,21.02666 163.08,22.36 L163.08,10.04 C163.08,7.5866544 162.74667,5.8000056 162.08,4.68 C161.41333,3.5599944 160.253342,3 158.6,3 L158.6,1.32 C160.253342,1.4800008 161.906658,1.56 163.56,1.56 C169.106694,1.56 173.746648,1.1866704 177.48,0.44 L177.48,54.2 Z M157.32,59.96 C158.866674,59.96 160.213328,59.4133388 161.36,58.32 C162.506672,57.2266612 163.08,55.8533416 163.08,54.2 L163.08,24.04 C161.906661,23.3466632 160.65334,23 159.32,23 C156.813321,23 154.96,24.5866508 153.76,27.76 C152.559994,30.9333492 151.96,35.7466344 151.96,42.2 C151.96,48.7600328 152.439995,53.3599868 153.4,56 C154.360005,58.6400132 155.666658,59.96 157.32,59.96 Z M195.32,63.56 C191.90665,63.56 189.333342,62.6400092 187.6,60.8 C185.866658,58.9599908 185,56.6533472 185,53.88 C185,51.479988 185.62666,49.4933412 186.88,47.92 C188.13334,46.3466588 189.613325,45.1333376 191.32,44.28 C193.026675,43.4266624 195.239986,42.5466712 197.96,41.64 C200.840014,40.6799952 202.94666,39.800004 204.28,39 C205.61334,38.199996 206.28,37.0800072 206.28,35.64 L206.28,28.52 C206.28,26.8133248 205.853338,25.29334 205,23.96 C204.146662,22.62666 202.68001,21.96 200.6,21.96 C198.946658,21.96 197.45334,22.4133288 196.12,23.32 C197.933342,23.9600032 199.279996,24.9066604 200.16,26.16 C201.040004,27.4133396 201.48,28.8133256 201.48,30.36 C201.48,32.4400104 200.746674,34.1066604 199.28,35.36 C197.813326,36.6133396 196.04001,37.24 193.96,37.24 C191.87999,37.24 190.240006,36.5866732 189.04,35.28 C187.839994,33.9733268 187.24,32.3066768 187.24,30.28 C187.24,28.679992 187.639996,27.2933392 188.44,26.12 C189.240004,24.9466608 190.493325,23.8800048 192.2,22.92 C195.186682,21.2133248 199.453306,20.36 205,20.36 C207.933348,20.36 210.466656,20.6399972 212.6,21.2 C214.733344,21.7600028 216.546659,22.8133256 218.04,24.36 C219.106672,25.4800056 219.813332,26.8799916 220.16,28.56 C220.506668,30.2400084 220.68,32.5733184 220.68,35.56 L220.68,57 C220.68,58.33334 220.773332,59.2399976 220.96,59.72 C221.146668,60.2000024 221.479998,60.44 221.96,60.44 C222.333335,60.44 222.733331,60.3200012 223.16,60.08 C223.586669,59.8399988 223.986665,59.5600016 224.36,59.24 L225.16,60.6 C222.866655,62.5733432 219.586688,63.56 215.32,63.56 C212.119984,63.56 209.880006,63.0133388 208.6,61.92 C207.319994,60.8266612 206.626667,59.346676 206.52,57.48 C204.013321,61.5333536 200.280025,63.56 195.32,63.56 Z M203.32,57.16 C204.440006,57.16 205.426662,56.7066712 206.28,55.8 L206.28,38.92 C205.799998,39.720004 204.920006,40.7599936 203.64,42.04 C202.199993,43.4266736 201.10667,44.7733268 200.36,46.08 C199.61333,47.3866732 199.24,49.1599888 199.24,51.4 C199.24,55.2400192 200.599986,57.16 203.32,57.16 Z M260.68,21.8 C263.720015,21.8 265.773328,21.6933344 266.84,21.48 L266.84,23.16 C265.719994,23.5333352 264.693338,24.3066608 263.76,25.48 C262.826662,26.6533392 261.960004,28.4666544 261.16,30.92 L251.16,60.68 L247.8,70.36 C246.839995,73.1333472 245.666674,75.053328 244.28,76.12 C242.626658,77.4000064 240.146683,78.04 236.84,78.04 C234.17332,78.04 231.693345,77.4133396 229.4,76.16 C227.106655,74.9066604 225.96,73.0266792 225.96,70.52 C225.96,68.653324 226.679993,67.1600056 228.12,66.04 C229.560007,64.9199944 231.453322,64.36 233.8,64.36 C236.040011,64.36 237.799994,64.8666616 239.08,65.88 C240.360006,66.8933384 241,68.3599904 241,70.28 C241,71.5600064 240.560004,72.7733276 239.68,73.92 C238.799996,75.0666724 237.506675,75.906664 235.8,76.44 C236.333336,76.5466672 237.24,76.6 238.52,76.6 C242.200018,76.6 244.733326,74.466688 246.12,70.2 L246.52,68.84 L227.88,27.64 C227.079996,25.8266576 226.293337,24.6266696 225.52,24.04 C224.746663,23.4533304 223.98667,23.16 223.24,23.16 L223.24,21.48 C227.506688,21.8000016 231.853311,21.96 236.28,21.96 C239.746684,21.96 243.613312,21.8000016 247.88,21.48 L247.88,23.16 C246.333326,23.16 245.146671,23.2666656 244.32,23.48 C243.493329,23.6933344 243.08,24.1733296 243.08,24.92 C243.08,25.3466688 243.186666,25.7733312 243.4,26.2 L253.24,49.64 L256.6,39.4 C257.613338,36.3066512 258.12,33.5866784 258.12,31.24 C258.12,28.7333208 257.586672,26.7866736 256.52,25.4 C255.453328,24.0133264 254.040009,23.2666672 252.28,23.16 L252.28,21.48 C254.253343,21.6933344 257.053315,21.8 260.68,21.8 Z M288.6,20.36 C290.786678,20.36 292.799991,20.5866644 294.64,21.04 C296.480009,21.4933356 297.986661,22.0666632 299.16,22.76 C300.653341,23.6133376 301.826662,24.7599928 302.68,26.2 C303.533338,27.6400072 303.96,29.2666576 303.96,31.08 C303.96,33.3200112 303.240007,35.173326 301.8,36.64 C300.359993,38.106674 298.520011,38.84 296.28,38.84 C293.986655,38.84 292.186673,38.1866732 290.88,36.88 C289.573327,35.5733268 288.92,33.8266776 288.92,31.64 C288.92,29.7199904 289.54666,28.026674 290.8,26.56 C292.05334,25.093326 293.613324,24.1200024 295.48,23.64 C294.679996,22.9999968 293.61334,22.68 292.28,22.68 C288.86665,22.68 286.466674,24.5066484 285.08,28.16 C283.693326,31.8133516 283,36.1466416 283,41.16 C283,46.2800256 283.95999,49.9333224 285.88,52.12 C287.80001,54.3066776 290.173319,55.4 293,55.4 C296.893353,55.4 300.119987,53.6133512 302.68,50.04 L304.04,50.52 C302.866661,54.253352 300.880014,57.45332 298.08,60.12 C295.279986,62.78668 291.693355,64.12 287.32,64.12 C281.506638,64.12 276.840018,62.386684 273.32,58.92 C269.799982,55.453316 268.04,49.9067048 268.04,42.28 C268.04,34.9732968 269.919981,29.4933516 273.68,25.84 C277.440019,22.1866484 282.413302,20.36 288.6,20.36 Z M328.92,20.36 C335.480033,20.36 340.546649,22.0799828 344.12,25.52 C347.693351,28.9600172 349.48,34.546628 349.48,42.28 C349.48,50.013372 347.693351,55.5866496 344.12,59 C340.546649,62.4133504 335.480033,64.12 328.92,64.12 C322.359967,64.12 317.293351,62.4133504 313.72,59 C310.146649,55.5866496 308.36,50.013372 308.36,42.28 C308.36,34.546628 310.146649,28.9600172 313.72,25.52 C317.293351,22.0799828 322.359967,20.36 328.92,20.36 Z M328.92,21.96 C327.213325,21.96 325.853338,23.6399832 324.84,27 C323.826662,30.3600168 323.32,35.4532992 323.32,42.28 C323.32,49.1067008 323.826662,54.18665 324.84,57.52 C325.853338,60.85335 327.213325,62.52 328.92,62.52 C330.626675,62.52 331.986662,60.85335 333,57.52 C334.013338,54.18665 334.52,49.1067008 334.52,42.28 C334.52,35.4532992 334.013338,30.3600168 333,27 C331.986662,23.6399832 330.626675,21.96 328.92,21.96 Z M394.92,54.2 C394.92,56.6533456 395.25333,58.44 395.92,59.56 C396.58667,60.6800056 397.746658,61.24 399.4,61.24 L399.4,62.92 C397.746658,62.7599992 396.093342,62.68 394.44,62.68 C388.893306,62.68 384.253352,63.0533296 380.52,63.8 L380.52,58.12 C379.399994,60.2000104 378.080008,61.7199952 376.56,62.68 C375.039992,63.6400048 373.106678,64.12 370.76,64.12 C365.853309,64.12 361.906682,62.2933516 358.92,58.64 C355.933318,54.9866484 354.44,49.426704 354.44,41.96 C354.44,34.8666312 356.026651,29.4933516 359.2,25.84 C362.373349,22.1866484 366.706639,20.36 372.2,20.36 C375.61335,20.36 378.386656,21.02666 380.52,22.36 L380.52,10.04 C380.52,7.5866544 380.18667,5.8000056 379.52,4.68 C378.85333,3.5599944 377.693342,3 376.04,3 L376.04,1.32 C377.693342,1.4800008 379.346658,1.56 381,1.56 C386.546694,1.56 391.186648,1.1866704 394.92,0.44 L394.92,54.2 Z M374.76,59.96 C376.306674,59.96 377.653328,59.4133388 378.8,58.32 C379.946672,57.2266612 380.52,55.8533416 380.52,54.2 L380.52,24.04 C379.346661,23.3466632 378.09334,23 376.76,23 C374.253321,23 372.4,24.5866508 371.2,27.76 C369.999994,30.9333492 369.4,35.7466344 369.4,42.2 C369.4,48.7600328 369.879995,53.3599868 370.84,56 C371.800005,58.6400132 373.106658,59.96 374.76,59.96 Z M427.32,55.4 C431.213353,55.4 434.439987,53.6133512 437,50.04 L438.36,50.52 C437.186661,54.253352 435.200014,57.45332 432.4,60.12 C429.599986,62.78668 426.013355,64.12 421.64,64.12 C416.039972,64.12 411.560017,62.386684 408.2,58.92 C404.839983,55.453316 403.16,49.9067048 403.16,42.28 C403.16,34.9732968 405.039981,29.4933516 408.8,25.84 C412.560019,22.1866484 417.533302,20.36 423.72,20.36 C433.80005,20.36 438.84,26.3332736 438.84,38.28 L418.2,38.28 C418.146666,38.9200032 418.12,39.8799936 418.12,41.16 C418.12,46.2800256 419.013324,49.9333224 420.8,52.12 C422.586676,54.3066776 424.759987,55.4 427.32,55.4 Z M423.16,22.2 C420.173318,22.2 418.413336,27.0532848 417.88,36.76 L427.16,36.76 C427.213334,32.493312 426.90667,29.0000136 426.24,26.28 C425.57333,23.5599864 424.546674,22.2 423.16,22.2 Z"
          id="sundaycode"
          fill="#000000"
          className="fill-current text-black dark:text-white"
          fillRule="nonzero"
        ></path>
      </g>
    </svg>
  );
};

export default Logo;