import { useState } from 'react';
import './index.css';

function App() {
  const [snowing, setSnowing] = useState(false)
  const [flickering, setFlickering] = useState(false)
  const [lightsOn, setLightsOn] = useState(false)
  const [shining, setShining] = useState(false)
  const [baubles, setBaubles] = useState(false)
  const [white, setWhite] = useState(false)
  const [silverGold, setSilverGold] = useState(false)

  return (
    <div className="App">
      <div className='window'>
      <svg  viewBox='0, 0, 500, 300'>
        <defs>
          <circle id='big' cx='0' cy='0' r='9' fill='#fff' />
          <circle id='small' cx='0' cy='0' r='6' fill='#fff' />
          <filter id="blur" cx='0' cy='0'>
            <feGaussianBlur in="StrokePaint" stdDeviation="3" />
          </filter>
        </defs>

        <g id='outside'>
          <rect x='15' y='16' width='470' height='270' fill='#0000cc' />
          <use href='#big' x='120' y='40' className={snowing ? 'snowflake fast' : 'hidden'}/>
          <use href='#big' x='210' y='230' className={snowing ? 'snowflake slow' : 'hidden'} />
          <use href='#big' x='415' y='25' className={snowing ? 'snowflake fast thin' : 'hidden'}/>
          <use href='#big' x='399' y='100' className={snowing ? 'snowflake fast thin' : 'hidden'}/>
          <use href='#big' x='380' y='180' className={snowing ? 'snowflake slow thin' : 'hidden'}/>
          <use href='#big' x='30' y='200' className={snowing ? 'snowflake fast' : 'hidden'}/>
          <use href='#small' x='145' y='30' className={snowing ? 'snowflake slow' : 'hidden'}/>
          <use href='#small' x='55' y='250' className={snowing ? 'snowflake slow' : 'hidden'}/>
          <use href='#small' x='135' y='120' className={snowing ? 'snowflake fast thin' : 'hidden'}/>
        <use href='#small' x='270' y='130' className={snowing ? 'snowflake slow' : 'hidden'}/>
          <use href='#small' x='330' y='60' className={snowing ? 'snowflake fast thin' : 'hidden'}/>
          <use href='#small' x='400' y='160' className={snowing ? 'snowflake slow' : 'hidden'}/>
          <use href='#small' x='25' y='30' className={snowing ? 'snowflake slow thin' : 'hidden'}/>
          <use href='#small' x='455' y='35' className={snowing ? 'snowflake slow' : 'hidden'}/>
        </g>

        <g id='window-frame'>
        <rect x='0' y='0' width='500px' height='15px' fill='white' stroke='black' strokeWidth='3px'/>
        <line x1='15' y1='16' x2='15' y2='284' stroke='white' strokeWidth='15px'/>
        <line x1='250' y1='16' x2='250' y2='284' stroke='white' strokeWidth='15px'/>
        <line x1='485' y1='16' x2='485' y2='284' stroke='white' strokeWidth='15px'/>
        <line x1='15' y1='150' x2='485' y2='150' stroke='white' strokeWidth='15px'/>

        <rect x='0' y='285' width='500px' height='15px' fill='white' stroke='black' strokeWidth='3px'/>
        </g>

        <g className='candles'>
          <circle cx='80' cy='200' r='20' fill='none' stroke='#ffff66' strokeWidth='15px' strokeDasharray='100, 25' strokeDashoffset='80' filter='url(#blur)' className={flickering ? 'candlelight' : 'hidden'}/>
          <circle cx='135' cy='190' r='20' fill='none' stroke='#ffff66' strokeWidth='15px' strokeDasharray='100, 25' strokeDashoffset='80' filter='url(#blur)' className={flickering ? 'candlelight' : 'hidden'}/>
          <circle cx='190' cy='200' r='20' fill='none' stroke='#ffff66' strokeWidth='15px' strokeDasharray='100, 25' strokeDashoffset='80' filter='url(#blur)' className={flickering ? 'candlelight' : 'hidden'}/>
          <rect x='60' y='225' width='40' height='60' fill='#cc0000'/>
          <rect x='115' y='215' width='40' height='70' fill='#cc0000'/>
          <rect x='170' y='225' width='40' height='60' fill='#cc0000'/>
          <line x1='80' y1='225' x2='80' y2='220' stroke='#000' strokeWidth='2px'/>
          <line x1='135' y1='215' x2='135' y2='210' stroke='#000' strokeWidth='2px'/>
          <line x1='190' y1='225' x2='190' y2='220' stroke='#000' strokeWidth='2px'/>
          <ellipse cx='80' cy='212' rx='6' ry='8' fill='#ffcc00' className={flickering ? 'candlelight' : 'hidden'}/>       
          <ellipse cx='135' cy='202' rx='6' ry='8' fill='#ffcc00' className={flickering ? 'candlelight' : 'hidden'}/>       
          <ellipse cx='190' cy='212' rx='6' ry='8' fill='#ffcc00' className={flickering ? 'candlelight' : 'hidden'}/>       
          </g>
        
      </svg>
      </div>

      {/* buttons to control animations */}
      <div className='btns'>
      <button onClick={() => setSnowing(!snowing)} className='blue'>Let it Snow</button>
      <button onClick={() => setFlickering(!flickering)} className='red'>Candlelight</button>
      <button onClick={() => {setWhite(false);setLightsOn(!lightsOn)}} className='green'>Light the Tree</button>
      <button onClick={() => setShining(!shining)} className='bright'>Star Magic</button>
      <button onClick={() => {setSilverGold(false);setBaubles(!baubles)}} className='xmasy'>Baubles</button>
      <button onClick={() => {setLightsOn(false);setWhite(!white)}} className='white'>White</button>
      <button onClick={() => {setBaubles(false);setSilverGold(!silverGold)}} className='silver-gold'>Silver and Gold</button>
      </div>

      {/* svg for tree */}
      <div className='xmas-tree'>
      <svg
   width="111.1263mm"
   height="164.88632mm"
   viewBox="0 0 111.1263 164.88632"
   id="svg854">

  <defs
     id="defs851">
    <linearGradient
       id="linearGradient21450">
      <stop
         style={{stopColor:"#ffffff", stopOpacity:"0.75"}}
         offset="0"
         id="stop21446" />
      <stop
         style={{stopColor:"#ffc800", stopOpacity:"1"}}
         offset="0.51609683"
         id="stop21448" />
    </linearGradient>
    <linearGradient
       id="linearGradient21438">
      <stop
         style={{stopColor:"#ffffff", stopOpacity:"0.75"}}
         offset="0"
         id="stop21434" />
      <stop
         style={{stopColor:"#00be4b", stopOpacity:"1"}}
         offset="0.50470084"
         id="stop21436" />
    </linearGradient>
    <linearGradient
       id="linearGradient21430">
      <stop
         style={{stopColor:"#ffffff", stopOpacity:"0.69999999"}}
         offset="0"
         id="stop21426" />
      <stop
         style={{stopColor:"#ff004b", stopOpacity:"1"}}
         offset="0.39643872"
         id="stop21428" />
    </linearGradient>
    <linearGradient
       id="linearGradient21452">
      <stop
         style={{stopColor:"#ffffff", stopOpacity:"0.89999999"}}
         offset="0"
         id="stop21426" />
      <stop
         style={{stopColor:"#cbcbcb", stopOpacity:"1"}}
         offset="0.39643872"
         id="stop21428" />
    </linearGradient>
    <linearGradient
       id="linearGradient21454">
      <stop
         style={{stopColor:"#ffffff", stopOpacity:"0.89999999"}}
         offset="0"
         id="stop21426" />
      <stop
         style={{stopColor:"#f0d000", stopOpacity:"1"}}
         offset="0.39643872"
         id="stop21428" />
    </linearGradient>
    <filter
       style={{colorInterpolationFilters:"sRGB"}}
       id="filter7353"
       x="-0.29626173"
       y="-0.32290959"
       width="1.5925235"
       height="1.6458192">
      <feGaussianBlur
         result="result6"
         stdDeviation="3"
         in="SourceGraphic"
         id="feGaussianBlur7347" />
      <feColorMatrix
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 "
         result="result7"
         in="SourceGraphic"
         id="feColorMatrix7349" />
      <feComposite
         operator="in"
         in="result6"
         in2="result7"
         id="feComposite7351" />
    </filter>
  </defs>
  <g
     id="layer1"
     style={{display:"inline"}}
     transform="translate(-38.971639,-63.797526)">
    <path
       style={{display:"inline", fill:"#008000", stroke:"#008000", strokeWidth:"2.11667",strokeLinecap:"round", strokeOpacity:"1"}}
       d="m 86.804364,105.0778 c 2.134832,-3.75361 -0.943577,-14.639195 3.112269,-15.020102 6.61408,-0.621165 -1.908727,15.302862 4.19481,14.614152 1.13719,-0.12832 4.04785,-3.84721 4.930971,-3.8934 1.716846,-0.0898 -2.759041,4.93449 -2.078711,5.63136 1.01425,1.0389 6.820717,-1.37241 7.973027,-1.06138 0.50855,0.13726 -0.31465,2.34439 -0.94721,2.97695 -0.77559,0.77559 -3.33574,3.34191 -2.84164,4.33012 0.40696,0.81393 4.24522,-1.84455 6.35864,-1.86808 0.96849,-0.0108 2.98748,0.0726 2.31542,0.80143 -5.79022,6.2789 -0.0542,5.49631 4.20701,7.11625 1.87848,0.71411 -5.25603,0.66888 -6.3859,1.79874 -2.43807,2.43807 8.48882,4.6695 12.42869,3.65072 3.04671,-0.78782 -4.92735,2.87538 -6.20203,3.32941 -1.94092,0.69134 -1.72901,0.9069 -2.16717,2.22137 -0.44051,1.32153 6.74705,3.86427 9.43216,3.06736 1.49032,-0.44231 1.2701,2.45008 0.0963,2.6505 -3.93004,0.67101 3.43321,3.06439 2.7853,3.48364 -3.03401,1.96324 -7.71302,0.92372 -7.71302,1.62379 0,0.64932 6.6429,2.66035 9.80649,2.75266 11.47475,0.33481 -4.81059,3.26532 -4.63599,3.95724 0.17851,0.70742 8.55196,-1.33299 9.5656,2.93858 0.51039,2.15085 -10.39493,2.63153 -9.86472,3.07124 6.15796,5.10692 13.76271,1.22064 12.56028,4.0677 -1.5952,3.77705 -5.30574,4.64309 -6.44367,3.61425 -1.26408,-1.14289 12.45471,6.17661 12.56265,6.93219 0.18169,1.27181 -5.6552,1.03385 -6.24847,1.67782 -0.78773,0.85505 8.12316,5.35504 6.63803,5.49434 -3.60879,0.33851 -16.09186,-3.74357 -16.09186,-3.11267 0,3.19323 14.3483,4.56144 16.57987,6.79301 1.86232,1.86232 -5.6921,3.18538 -7.00357,4.18106 -0.95114,0.7221 10.52721,3.23927 9.4725,4.31395 -2.23995,2.28236 -14.21557,-0.005 -13.93728,0.25809 2.35077,2.21987 12.35229,4.70089 13.92561,4.36296 3.47702,-0.74684 -0.30027,4.48503 -3.40134,6.57574 -0.74298,0.50091 6.70488,1.44362 6.63208,2.20252 -0.18737,1.95321 -9.61976,8.42785 -10.27563,8.08069 -4.80633,-2.54408 6.22171,0.90983 12.15406,1.96757 4.67834,0.83415 -14.04836,13.62267 -17.10986,15.12025 -4.83198,2.36364 -56.607854,2.53457 -76.096632,0.0623 -7.78468,-0.98754 -17.990612,-11.22216 -14.261741,-10.35759 4.775233,1.10718 11.063092,-2.92892 11.063092,-3.23632 0,-0.85716 -10.82182,-6.1155 -11.418625,-9.69633 -0.175544,-1.05327 11.824975,-0.0189 12.034342,-1.08893 0.202902,-1.03703 -9.960394,-4.94404 -9.481926,-5.96377 0.712811,-1.51917 6.234407,-2.20587 8.436382,-2.98661 1.674418,-0.59368 -7.665439,-0.91953 -6.683587,-1.73715 3.989793,-3.3224 12.323936,-5.89238 12.120113,-5.55661 -3.237164,-1.07905 -5.412646,1.31276 -10.013396,-1.52232 -0.688053,-0.42399 9.182847,-4.68218 4.814753,-4.27277 -1.853458,0.17372 -7.641067,-3.29945 -2.668622,-3.463 1.459098,-0.048 7.003316,-3.59794 8.709431,-4.56719 1.244662,-0.70709 -9.809424,1.61378 -9.01767,0.41921 1.848422,-2.78885 13.588152,-4.36235 13.588152,-4.89545 0,-1.50655 -10.633514,-0.49223 -12.188075,-2.1789 -1.931295,-2.09542 3.235888,-0.97431 5.141594,-1.60469 1.321191,-0.43702 2.821245,-1.06938 3.602266,-2.66267 0.220324,-0.44947 -0.763922,-2.33349 -1.535828,-2.60522 -2.182575,-0.76832 -4.903915,-2.03997 -3.266387,-2.10157 2.388676,-0.0898 10.11561,-3.84179 11.223393,-4.94957 0.272496,-0.2725 -11.307437,-1.52852 -7.171757,-2.84164 1.821059,-0.57821 5.340617,-3.14948 6.594644,-4.16669 1.16055,-0.94138 -3.62667,-3.01303 -2.245367,-2.7105 0.887858,0.19445 9.46994,-2.20257 12.159297,-4.35405 0.666853,-0.53349 -1.446431,-1.11227 -1.894427,-1.08253 -2.13369,0.1416 -7.633474,-0.27391 -8.967055,-0.39911 -3.484366,-0.32714 2.311687,-0.51269 3.758626,-2.5135 1.014849,-1.40332 -3.344578,-2.7167 -2.910542,-2.90599 2.679124,-1.16839 11.583817,-5.06007 9.742766,-6.90112 -0.490826,-0.49082 -6.192637,-1.17205 -5.277333,-1.48848 3.976012,-1.37454 3.505717,-2.90399 10.148715,-7.44239 0.593228,-0.40528 -1.012429,-1.11797 -4.60075,-4.60075 -0.419835,-0.40748 3.93096,-0.43434 6.021075,-1.79878 2.489969,-1.62546 -0.266359,-3.91053 -1.387181,-5.3869 -0.825161,-1.08691 6.894442,3.03563 7.544562,2.85557 z"
       id="path2361" />
    <g
       id="layer2"
       transform="translate(-7.750324,52.72133)">
      <path
         style={{fill:"#003000", fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 92.2384,66.021261 c -1.395925,0.403057 -2.217978,2.191821 -2.645783,2.237838 -1.512129,0.162651 1.901322,-2.784645 2.308209,-0.333333 0.08592,0.517647 -0.390088,1.006152 -0.619254,1.922815"
         id="path2784" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 102.9549,71.570876 c 0.90177,7.715215 1.22025,1.665247 1.56376,1.665247 0.74741,0 4.37954,2.916576 4.75131,2.544805 0.62142,-0.621414 -1.17912,-2.587769 -3.33567,-3.531322 -1.10533,-0.483612 -2.41386,-0.820115 -2.9794,-0.67873 z"
         id="path4361" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 75.472286,133.82861 c 0.0021,0.41488 -4.127143,1.3347 -4.127143,1.48848 0,0.22844 3.264657,-0.11886 3.112273,0.33829 -0.103913,0.31173 -2.604503,2.30051 -2.435691,2.36803 1.140087,0.45604 2.740713,-0.54014 2.773981,-0.4736 0.188606,0.37721 -1.729343,3.67248 -0.473606,3.04461 0.535643,-0.26782 3.471635,-5.86962 3.315245,-6.49518 -0.190016,-0.76006 -1.632204,-0.38904 -2.165059,-0.27063 z"
         id="path5551" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 97.968915,81.527998 c -0.89753,1.468686 -0.686003,0.79842 -0.947213,2.300375 -0.52777,3.03467 0.303482,-1.439204 0.947213,-0.473607 0.491112,0.736672 -0.717698,5.466601 0.135316,5.750938 1.04384,0.347946 2.321459,-6.485805 -0.135316,-7.577706 z"
         id="path5553" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 107.71168,83.28711 c 0.0677,0.699132 0.10634,1.401677 0.20297,2.097399 0.1287,0.926587 1.41705,0.375772 1.48848,0.947214 0.0277,0.221893 -0.009,2.196544 0.40595,2.300375 0.26474,0.06619 1.41585,-0.322366 1.55614,-0.135316 0.0549,0.0732 0.66948,1.477759 0.74423,1.353161 1.41744,-2.36239 -2.64954,-5.785842 -4.39777,-6.562833 z"
         id="path5555" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 119.68716,92.217977 c 1.23195,0.590336 3.91454,1.072896 4.87139,2.029743 0.0725,0.07246 -2.81866,0.32502 -2.57101,0.473607 0.71418,0.428508 1.39804,1.480885 2.23271,1.759108 0.3013,0.100433 2.19095,0.312402 1.82677,0.676583 -1.2388,1.238803 -3.22039,-1.840368 -3.92417,-1.488477 -0.17114,0.08557 -0.44622,1.236644 -0.33829,1.488477 0.16159,0.377044 1.75211,1.918713 1.15019,1.488477 -1.05914,-0.756529 -4.16402,-5.77292 -3.24759,-6.427518 z"
         id="path5557" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 85.046218,92.150318 c -0.270512,0.105352 -3.112272,0.250327 -3.112272,1.217845 0,1.041339 3.112272,-1.311971 3.112272,-0.270632 0,0.268701 -3.959156,2.50335 -2.909297,2.50335 1.864278,0 5.138968,-3.688889 4.803725,-3.856511 -0.343178,-0.17159 -1.479156,0.405948 -1.894428,0.405948 z"
         id="path5559" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 95.090457,102.96167 c -1.220134,1.70819 -0.660249,1.17772 -2.232715,2.43569 -0.491078,0.39286 -1.073883,0.70937 -1.623796,1.01487 -0.01865,0.0104 -1.276667,1.05312 -0.947211,1.21785 0.469093,0.23455 3.135683,-0.84444 3.247588,-0.67658 0.368232,0.55235 -1.695883,5.93055 -1.894427,7.91599 -0.01347,0.13465 0.277577,0.0428 0.405948,0 1.158544,-0.38618 0.991629,-2.55938 1.691452,-2.90929 0.512506,-0.25626 0.43235,1.53551 0.744238,1.69145 0.542857,0.27143 0.541266,-3.63822 0.541266,-3.92417 0,-1.80125 1.638978,-5.19449 0.06766,-6.76581 z"
         id="path5561" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 104.92973,125.61649 c 1.18769,0.45948 -2.15226,5.43947 -2.02974,5.48031 0.79613,0.26538 1.97511,-0.7399 2.77398,-0.47361 1.91021,0.63674 -0.0453,5.32233 1.21784,5.95391 2.48782,1.24391 1.82677,-4.25645 1.82677,-5.20968 0,-0.28253 2.69046,0.30237 2.84164,1e-5 0.3154,-0.63081 -4.75232,-6.97907 -5.4803,-6.83347 -0.64218,0.12844 -0.98476,1.50529 -1.21785,2.02974"
         id="path5563" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 116.52845,118.07793 c -1.33061,-0.0677 -2.07104,1.07964 -3.99183,-0.20297 -1.05098,-0.70179 2.00831,1.85827 2.16506,3.11227 0.12429,0.99433 -0.74424,2.28971 -0.74424,3.51822 v 1.82677 c 1.35316,-3.37792 3.39671,0.67658 4.19481,0.67658 0.0763,0 -0.63956,-2.91791 -0.67659,-3.11227 -0.9609,-5.04476 3.88927,0.63004 -0.94721,-5.8186 z"
         id="path5565" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 80.317779,105.37085 c 0.111713,0.0359 -5.958308,1.01048 -5.886254,1.08253 1.16895,1.16895 5.17928,-1.45121 5.886254,-0.74424 0.412274,0.41228 -1.314858,1.53251 -1.556137,1.89443 -0.107074,0.16061 -0.466704,0.58781 -0.202973,0.54127 1.640425,-0.28949 1.018142,-0.61221 1.894426,-1.48849 0.11293,-0.11293 1.286986,-0.74127 1.285502,-0.74424 -0.168944,-0.33789 -1.055092,-0.40411 -1.420818,-0.54126 z"
         id="path5567" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 84.775129,117.30734 c -8.694309,8.90445 2.138944,-4.53709 -0.191368,4.78415 -0.552209,2.20884 -0.787352,8.90665 -1.339562,6.69781 -0.41113,-1.64452 0.574099,-2.68211 0.574099,-4.21005 0,-8.36849 4.900916,9.71102 2.105025,-2.87049"
         id="path5571" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 72.336339,120.9433 c -11.928046,8.84157 3.073781,-2.84948 -0.574098,5.35825 -0.867855,1.95267 -9.707978,6.43432 -3.061856,3.63595 1.813401,-0.76354 3.677226,-1.16195 5.358249,-1.72229"
         id="path5573" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 124.38788,106.97358 c -14.55483,-3.2536 -9.98758,-7.669989 -0.38273,3.63595"
         id="path5575" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 126.30155,133.57345 c 2.81047,1.62785 4.36812,4.1334 6.88918,6.12371 18.20948,14.37591 -14.81147,-10.67382 6.12371,0.95683"
         id="path5577" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 97.213916,118.26417 c -0.777377,1.85487 -2.100389,3.05838 -3.635954,4.21006 -1.078312,0.80873 5.740979,-4.82777 5.740979,1.14819 0,3.27709 -4.592783,5.25153 -4.592783,8.42011 0,0.0498 4.975516,-4.88439 4.975516,-10.1424"
         id="path5579" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 101.8067,102.95489 c 0.44652,1.40335 0.87386,2.81295 1.33956,4.21005 3.71295,11.13885 -1.78857,-3.76104 -1.33956,-4.21005 3.00647,-3.006466 4.66371,5.72448 6.12372,6.69781 0.0342,0.0228 -2.95203,-6.33071 -5.93235,-11.099226"
         id="path5581" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 127.06701,119.22101 c 4.5151,4.23291 1.46153,1.91763 4.21005,3.44458 9.65138,5.36188 -1.53228,-1.72094 -2.87049,-0.38273 -0.567,0.567 4.78415,3.22433 4.78415,4.59278 0,2.26248 -3.14327,-3.3896 -5.16689,-4.40141 -0.92602,-0.46301 -1.07686,1.53093 -1.72229,1.53093 -0.84807,0 0.8286,-2.5509 0.95683,-2.67913 1.16832,-1.16832 -1.39344,-3.06669 -2.10502,-3.63595"
         id="path5583" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 122.66559,139.31443 c -5.34092,-2.96518 9.66904,9.18557 7.65464,9.18557 -2.48121,0 -5.35825,-7.64809 -5.35825,-5.16688 0,1.47406 0.68064,8.22873 2.67912,8.22873 2.64319,0 -1.21294,-5.264 -2.67912,-7.46327 -0.63789,-0.95683 -4.06637,-0.33505 -3.25322,-1.1482 0.59782,-0.59782 2.1015,-0.47797 2.87049,-0.5741"
         id="path5585" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 92.047035,78.460053 c -3.973174,1.58927 -1.637107,0.84198 -5.549612,1.72229 -15.573874,3.50412 14.279547,-3.50382 1.148194,3.06186"
         id="path5587" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 77.503222,142.56765 c -1.768376,1.38065 -3.087979,2.59211 -4.223526,3.40973 -5.164286,3.71844 6.711282,-1.29006 6.711282,-0.15651 0,1.28492 -7.95559,7.16232 -7.846005,7.27191 3.13637,3.7387 11.876944,-10.16578 7.654639,-9.5683"
         id="path5589" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 110.41817,144.28995 c -8.38213,5.67087 0.73538,0.72574 1.7223,5.16688 0.0929,0.41803 -2.33772,7.31903 -1.91366,7.27191 4.45276,-0.49475 2.29639,-4.81798 2.29639,-7.65464 0,-1.93148 2.68733,-1.80772 1.53093,-3.25322 -1.49672,-1.87089 -3.16996,-0.59894 -4.40142,-3.06186"
         id="path5591" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 98.744844,142.18492 c -0.134429,4.40915 1.795306,7.98522 -2.296392,10.90786"
         id="path5593" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 90.70662,134.47672 c -2.37637,7.86165 -2.45119,10.29293 0.76546,15.11791 1.51067,2.266 -4.60637,3.85449 -0.19136,-4.97552"
         id="path5595" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 107.93041,96.257087 c 1.44336,0.39884 2.93274,1.08364 4.21005,1.72229"
         id="path5599" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 102.18943,62.76804 c 1.36735,0.480999 2.58504,1.203783 3.82732,1.91366"
         id="path5601" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 97.97938,69.274483 c -0.255154,0.829254 -0.51031,1.658506 -0.765464,2.487758 -0.191365,0.255156 -0.382733,0.51031 -0.574098,0.765463"
         id="path5603" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 99.510309,146.96907 c 0.782631,1.39321 1.698091,2.63676 2.487761,4.01869"
         id="path5605" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 105.13096,155.20037 c 1.76923,22.86932 0.75295,-2.82043 -1.91366,7.84601"
         id="path5607" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 79.608246,162.66108 c 15.082412,-9.78158 2.027382,1.20505 4.975512,2.67912 1.53254,0.76627 4.35881,-0.44267 5.74098,-0.19137"
         id="path5609" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 92.420772,98.179744 c 3.34458,-8.348368 1.24607,-5.661803 3.25322,-3.253224"
         id="path5611" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 121.86352,167.29047 c -3.21929,-9.01363 10.33147,2.03818 0.19136,-11.48196"
         id="path5613" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 105.63402,160.17332 c 1.31413,1.41519 2.36195,1.8238 3.82732,2.87049"
         id="path5615" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 104.86856,156.72873 c -1.34028,-0.26253 -1.21099,0.9688 -1.91366,1.53093"
         id="path5617" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 98.744843,124.00515 c -1.334072,0.88372 -2.654514,1.38126 -4.018685,1.7223"
         id="path5619" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 107.16495,106.01675 c 1.54015,1.56276 2.14796,1.91366 3.82732,1.91366"
         id="path5621" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 105.44265,101.99807 c 1.55555,0.28318 2.16914,0.62752 3.25322,1.53092"
         id="path5623" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 128.02384,136.25258 c 2.08344,1.93666 2.27635,4.44698 3.25322,6.88917"
         id="path5625" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 133.38209,140.65399 c 0.38273,1.33956 0.76546,2.67913 1.14819,4.01869 0.0638,0.12757 0.12758,0.25515 0.19137,0.38273"
         id="path5627" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 125.34471,146.77771 c 0.0494,1.37994 -0.75283,2.46249 -1.33956,3.63595"
         id="path5629" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 125.15335,164.00064 c 0.80054,-0.49301 1.62111,-0.30353 2.29639,1.7223"
         id="path5631" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 125.15335,159.21649 c 0.97408,-0.0806 1.93,0.21174 2.87049,0.38274"
         id="path5633" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 85.540592,158.83376 c -0.683839,-1.34675 -0.246787,-2.34446 -0.382733,-3.63595"
         id="path5635" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 84.009663,159.21649 c -0.253458,0.78417 -2.391079,-0.55179 -2.487755,-0.5741"
         id="path5637" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 82.287371,163.04381 c -0.852088,0.45176 -1.312685,1.21252 -1.91366,1.91366"
         id="path5639" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 72.719072,160.93879 c -15.670159,8.32492 7.29421,-3.79176 -5.166881,6.88917"
         id="path5641" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 62.002577,145.82087 c 2.193837,-0.54846 4.30916,-1.50416 6.123712,-3.25322 -2.042397,2.88296 -2.067196,5.12881 -5.166882,6.50645"
         id="path5643" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 135.69008,155.82795 c 3.58107,3.03887 5.23442,4.01869 9.37694,4.01869"
         id="path5645" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 136.63531,157.4942 c 0.14791,3.38971 2.42151,4.4557 4.78415,5.93235"
         id="path5647" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 103.33763,103.72036 c 0.74819,1.05763 0.95683,1.60996 0.95683,2.87049"
         id="path5649" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 100.08441,121.70876 c 0.47903,0.2721 1.0215,0.38306 1.53092,0.5741"
         id="path5651" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="M 88.219715,99.318941 C 87.182221,99.495508 86.4539,100.20729 85.731957,100.6585"
         id="path5653" />
      <path
         style={{display:"none",fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 114.05412,81.521908 c 1.12191,0.749495 2.30229,1.023239 3.44459,1.530926"
         id="path5655" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 131.08569,114.43685 c 1.74248,-0.33791 3.41504,0.80423 4.59279,1.33957"
         id="path5657" />
      <path
         style={{fill:"#006600",fillOpacity:"1",stroke:"#006600",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1"}}
         d="m 78.651417,114.05412 c -2.793299,0.89282 -5.121855,1.53093 -8.037373,1.53093"
         id="path5659" />
    </g>
  </g>
  <g
     id="g8636"
     transform="rotate(82.463912,108.58433,24.392622)">
    <ellipse
      className={shining ? "twinkle" : "hidden"}
       style={{display:"inline",fill:"#ffffff",stroke:"#ffffff",strokeWidth:"2.11667",strokeLinecap:"round",strokeOpacity:"1",filter:"url(#filter7353)"}}
       id="path7345"
       cx="90.932465"
       cy="84.843239"
       rx="13.937567"
       ry="12.787379"
       transform="rotate(-82.463912,91.673466,78.524823)" />
    <g
       id="g8701">
      <path
         fill={shining ? "#fff" : "#bbb"}
         stroke={shining ? "#00ffff" : "#2dd2d2"}
         style={{display:"inline",fillOpacity:"1",strokeWidth:"1.05833",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
         id="path7517"
         d="m 91.609059,92.962216 -8.530559,5.903611 3.240319,10.308653 -8.250755,-6.28873 -8.802795,6.26727 3.431312,-9.790256 -8.680744,-6.435261 10.371422,0.238015 3.437799,-10.244483 2.97858,9.93736 z"
         transform="rotate(-82.463912,78.365759,77.357411)" />
      <path
         fill={shining ? "#00ffff" : "#2dd2d2"}
         style={{display:"inline",fillOpacity:"1",strokeWidth:"0.264583",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
         d="m 90.458866,72.563301 c -0.03383,11.671022 -0.541264,12.279945 -0.03383,11.671022 0.507433,-0.608922 2.706322,-3.010786 2.706322,-3.010786 z"
         id="path8402"
         transform="rotate(-82.463912,91.673466,78.524823)" />
      <path
      fill={shining ? "#00ffff" : "#2dd2d2"}
         style={{display:"inline",fillOpacity:"1",strokeWidth:"0.318801",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
         d="m 95.563219,65.826498 c 2.13181,14.62435 1.67591,15.516067 2.13181,14.62435 0.455899,-0.891715 2.475501,-4.45927 2.475501,-4.45927 z"
         id="path8634" />
      <path
         fill={shining ? "#00ffff" : "#2dd2d2"}
         style={{display:"inline",fillOpacity:"1",strokeWidth:"0.318801",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
         d="m 110.79316,73.262628 c -12.791297,7.40263 -13.788495,7.309884 -12.791297,7.40263 0.997195,0.09274 5.059297,0.645497 5.059297,0.645497 z"
         id="path8687" />
      <path
         fill={shining ? "#00ffff" : "#2dd2d2"}
         style={{display:"inline",fillOpacity:"1",strokeWidth:"0.318801",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
         d="M 109.14973,90.497033 C 97.827734,80.998154 97.574751,80.029131 97.827734,80.998154 c 0.252985,0.969019 1.119053,4.976035 1.119053,4.976035 z"
         id="path8689" />
      <path
         fill={shining ? "#00ffff" : "#2dd2d2"}
         style={{display:"inline",fillOpacity:"1",strokeWidth:"0.318801",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
         d="m 92.363559,92.703629 c 5.45984,-12.15947 6.207279,-12.6116 5.45984,-12.15947 -0.747432,0.452131 -3.876183,2.164392 -3.876183,2.164392 z"
         id="path8691" />
    </g>
  </g>
  <g
     id="layer5"
     transform="translate(-38.971639,-63.797526)">
    <path
       style={{fill:"none",fillOpacity:"1",stroke:"#004100",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       d="m 80.182343,107.35631 c 7.541349,5.55525 15.347421,5.37272 23.394497,4.35358"
       id="path10280" />
    <path
       style={{fill:"none",fillOpacity:"1",stroke:"#004100",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       d="m 67.169458,132.42526 c 14.78058,-0.29222 28.730819,-2.60982 41.478572,-10.52513"
       id="path10336" />
    <path
       style={{fill:"none",fillOpacity:"1",stroke:"#004100",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       d="m 64.298969,143.33312 c 19.912898,12.9337 41.202591,11.75523 63.150771,3.82732"
       id="path10338" />
    <path
       style={{fill:"none",fillOpacity:"1",stroke:"#004100",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       d="m 53.199741,173.37757 c 26.723449,8.79502 51.738499,2.27769 79.990979,-10.33376"
       id="path10340" />
    <path
       style={{fill:"none",fillOpacity:"1",stroke:"#004100",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       d="m 49.946519,187.92139 c 31.100289,26.30378 60.455111,18.53953 92.047031,10.42944"
       id="path10342" />
    <path
      fill={white ? "#fff" : lightsOn ? "#0000ff" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 83.317664,110.06346 -1.254449,0.54566 -0.420003,0.65038 -0.245361,1.37325 0.293201,1.16235 1.258206,-0.43641 0.798977,-0.85531 0.364056,-1.05201 -0.124849,-0.95734 z"
       id="path10396" />
    <path
      fill={white ? "#fff" : lightsOn ? "#ffff00" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 90.275033,112.3832 -1.016845,0.91511 -0.192227,0.74996 0.202512,1.38022 0.646469,1.0095 1.055033,-0.81267 0.486716,-1.06444 0.01188,-1.11316 -0.421822,-0.86842 z"
       id="path10398" />
    <path
      fill={white ? "#fff" : lightsOn ? "#7300e6" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 99.02681,112.78837 -0.465013,1.28653 0.184225,0.75197 0.829567,1.12153 1.046181,0.58524 0.54701,-1.21421 -0.0729,-1.16817 -0.51454,-0.98717 -0.781552,-0.5668 z"
       id="path10400" />
    <path
      fill={white ? "#fff" : lightsOn ? "#00ff00" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 69.470165,132.5526 -1.35664,0.17584 -0.584095,0.50816 -0.617066,1.2511 -0.04112,1.19805 1.329909,-0.0698 1.005073,-0.59979 0.641883,-0.90953 0.145918,-0.95435 z"
       id="path10402" />
    <path
      fill={white ? "#fff" : lightsOn ? "#0000ff" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 77.596744,132.24273 -1.079252,0.8406 -0.244993,0.73442 0.103999,1.39112 0.573156,1.05285 1.110092,-0.73568 0.561067,-1.02719 0.09089,-1.1095 -0.359093,-0.89618 z"
       id="path10404" />
    <path
      fill={white ? "#fff" : lightsOn ? "#ffff00" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 86.155104,131.13343 -0.392015,1.31061 0.226169,0.74044 0.891252,1.07317 1.0774,0.52556 0.477972,-1.24301 -0.138372,-1.16223 -0.569187,-0.9567 -0.812153,-0.52201 z"
       id="path10406" />
    <path
      fill={white ? "#fff" : lightsOn ? "#7300e6" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 95.571005,128.65424 -0.117944,1.36289 0.371698,0.67915 1.090456,0.87002 1.161624,0.29603 0.215829,-1.31414 -0.371306,-1.10998 -0.751459,-0.82131 -0.901175,-0.34637 z"
       id="path10408" />
    <path
      fill={white ? "#fff" : lightsOn ? "#ff0066" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 103.55076,125.65415 0.24161,1.34647 0.53597,0.5587 1.27962,0.5555 1.19863,-0.0172 -0.13439,-1.32494 -0.64795,-0.97473 -0.93967,-0.59689 -0.96032,-0.0993 z"
       id="path10410" />
    <path
      fill={white ? "#fff" : lightsOn ? "#0000ff" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 70.543559,147.37456 -1.346306,0.24252 -0.558338,0.53635 -0.554636,1.27999 0.01801,1.19862 1.324849,-0.13528 0.974292,-0.64861 0.596255,-0.94008 0.09865,-0.96038 z"
       id="path10412" />
    <path
      fill={white ? "#fff" : lightsOn ? "#ffff00" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 80.90231,151.6648 -1.25482,0.54478 -0.420471,0.65009 -0.246344,1.37306 0.292384,1.16256 1.258526,-0.43548 0.799599,-0.85474 0.364799,-1.05176 -0.124203,-0.95741 z"
       id="path10414" />
    <path
      fill={white ? "#fff" : lightsOn ? "#7300e6" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 80.90231,151.6648 -1.25482,0.54478 -0.420471,0.65009 -0.246344,1.37306 0.292384,1.16256 1.258526,-0.43548 0.799599,-0.85474 0.364799,-1.05176 -0.124203,-0.95741 z"
       id="path10416" />
    <path
      fill={white ? "#fff" : lightsOn ? "#ff0066" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 90.977283,153.20701 -1.080734,0.83868 -0.246306,0.73399 0.101506,1.39129 0.571288,1.05388 1.111404,-0.7337 0.562913,-1.02619 0.09286,-1.10935 -0.357525,-0.89679 z"
       id="path10418" />
    <path
      fill={white ? "#fff" : lightsOn ? "#00ff00" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 99.642547,153.62694 -0.614896,1.222 0.09337,0.76857 0.690089,1.21234 0.96905,0.70566 0.68774,-1.14041 0.0668,-1.16854 -0.39331,-1.04144 -0.70852,-0.6558 z"
       id="path10420" />
    <path
      fill={white ? "#fff" : lightsOn ? "#0000ff" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 109.06252,152.84945 -0.11789,1.3629 0.37176,0.67913 1.09047,0.86998 1.16164,0.29598 0.21579,-1.31414 -0.37131,-1.10999 -0.75147,-0.82132 -0.9012,-0.34629 z"
       id="path10422" />
    <path
      fill={white ? "#fff" : lightsOn ? "#ffff00" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 118.54489,151.0805 0.248,1.34532 0.53865,0.55613 1.28223,0.54943 1.19854,-0.0229 -0.14067,-1.32429 -0.65255,-0.97166 -0.94247,-0.59247 -0.96078,-0.0947 z"
       id="path10424" />
    <path
      fill={white ? "#fff" : lightsOn ? "#7300e6" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 127.47576,147.6976 0.248,1.34532 0.53865,0.55613 1.28223,0.54943 1.19854,-0.0229 -0.14067,-1.32429 -0.65255,-0.97166 -0.94247,-0.59247 -0.96078,-0.0947 z"
       id="path10426" />
    <path
      fill={white ? "#fff" : lightsOn ? "#00ff00" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 53.087772,173.69356 -1.346306,0.24252 -0.558338,0.53635 -0.554636,1.27999 0.01801,1.19862 1.324849,-0.13528 0.974292,-0.64861 0.596255,-0.94008 0.09865,-0.96038 z"
       id="path10428" />
    <path
      fill={white ? "#fff" : lightsOn ? "#0000ff" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 63.720389,176.66289 -1.212077,0.63422 -0.372292,0.67883 -0.14627,1.3873 0.375801,1.13832 1.223688,-0.52546 0.735605,-0.9104 0.28768,-1.07541 -0.193205,-0.9459 z"
       id="path10430" />
    <path
      fill={white ? "#fff" : lightsOn ? "#ffff00" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 75.024565,177.97088 -1.057069,0.86832 -0.225863,0.74053 0.140036,1.38795 0.60028,1.03762 1.09064,-0.76421 0.534248,-1.04141 0.06207,-1.11149 -0.382247,-0.88653 z"
       id="path10432" />
    <path
      fill={white ? "#fff" : lightsOn ? "#7300e6" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 86.33433,177.88459 -0.355046,1.3211 0.246825,0.73381 0.921022,1.04773 1.091733,0.49509 0.442897,-1.25593 -0.170947,-1.1579 -0.595838,-0.94034 -0.826493,-0.49895 z"
       id="path10436" />
    <path
      fill={white ? "#fff" : lightsOn ? "#ff0066" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 99.46,175.65188 -0.355046,1.3211 0.246825,0.73381 0.921021,1.04773 1.09173,0.49509 0.4429,-1.25593 -0.17095,-1.1579 -0.59584,-0.94034 -0.82649,-0.49895 z"
       id="path10438" />
    <path
      fill={white ? "#fff" : lightsOn ? "#00ff00" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 108.38396,173.27515 0.0134,1.36791 0.43513,0.64036 1.16893,0.76133 1.18467,0.18315 0.0887,-1.32878 -0.47615,-1.06923 -0.82684,-0.74538 -0.93025,-0.25821 z"
       id="path10440" />
    <path
      fill={white ? "#fff" : lightsOn ? "#0000ff" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 119.20926,169.55395 0.0134,1.36791 0.43513,0.64036 1.16893,0.76133 1.18467,0.18315 0.0887,-1.32878 -0.47615,-1.06923 -0.82684,-0.74538 -0.93025,-0.25821 z"
       id="path10442" />
    <path
      fill={white ? "#fff" : lightsOn ? "#ffff00" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 129.71782,165.31898 0.32748,1.3282 0.57068,0.52319 1.31264,0.47224 1.19504,-0.0941 -0.21912,-1.31359 -0.70918,-0.93115 -0.97604,-0.53535 -0.9647,-0.0375 z"
       id="path10444" />
    <path
      fill={white ? "#fff" : lightsOn ? "#7300e6" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 52.884798,191.01403 -1.346306,0.24252 -0.558338,0.53635 -0.554636,1.27999 0.01801,1.19862 1.324849,-0.13528 0.974292,-0.64861 0.596255,-0.94008 0.09865,-0.96038 z"
       id="path10446" />
    <path
      fill={white ? "#fff" : lightsOn ? "#ffff00" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 59.863878,196.35139 -1.212077,0.63422 -0.372292,0.67883 -0.14627,1.3873 0.375801,1.13832 1.223688,-0.52546 0.735605,-0.9104 0.28768,-1.07541 -0.193205,-0.9459 z"
       id="path10448" />
    <path
      fill={white ? "#fff" : lightsOn ? "#7300e6" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 69.205969,201.24526 -1.057069,0.86832 -0.225863,0.74053 0.140036,1.38795 0.60028,1.03762 1.09064,-0.76421 0.534248,-1.04141 0.06207,-1.11149 -0.382247,-0.88653 z"
       id="path10450" />
    <path
      fill={white ? "#fff" : lightsOn ? "#ff0066" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 80.779482,204.57706 -1.023421,0.90772 -0.1977,0.74854 0.192503,1.38166 0.63915,1.01414 1.060911,-0.80497 0.494422,-1.0609 0.01993,-1.11304 -0.415549,-0.87142 z"
       id="path10452" />
    <path
      fill={white ? "#fff" : lightsOn ? "#00ff00" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 91.385075,206.48816 -0.585415,1.23639 0.111718,0.7661 0.718965,1.19546 0.985685,0.68221 0.660206,-1.15657 0.03872,-1.16981 -0.418205,-1.03168 -0.724026,-0.63861 z"
       id="path10454" />
    <path
      fill={white ? "#fff" : lightsOn ? "#0000ff" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 103.08063,206.45351 -0.83131,1.08641 -0.0512,0.77252 0.45272,1.31949 0.82099,0.87348 0.88774,-0.9927 0.2828,-1.13577 -0.19293,-1.09638 -0.57426,-0.77606 z"
       id="path10456" />
    <path
      fill={white ? "#fff" : lightsOn ? "#ffff00" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 113.08526,205.68067 -0.49637,1.27475 0.16566,0.75628 0.80182,1.14153 1.03153,0.6107 0.57664,-1.20043 -0.0442,-1.16961 -0.49024,-0.99947 -0.76743,-0.58574 z"
       id="path10458" />
    <path
      fill={white ? "#fff" : lightsOn ? "#7300e6" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 123.24665,203.75692 -0.15957,1.35864 0.3507,0.69023 1.06332,0.90298 1.15202,0.33142 0.25596,-1.3069 -0.33717,-1.12084 -0.72599,-0.84392 -0.89015,-0.37373 z"
       id="path10460" />
    <path
      fill={white ? "#fff" : lightsOn ? "#ff0066" : "#005000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0.661458',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       d="m 134.83827,200.94731 0.0134,1.36791 0.43513,0.64036 1.16893,0.76133 1.18467,0.18315 0.0887,-1.32878 -0.47615,-1.06923 -0.82684,-0.74538 -0.93025,-0.25821 z"
       id="path10462" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10516"
       width="1.6576233"
       height="1.0825294"
       x="127.31862"
       y="51.467632"
       transform="rotate(30.678638)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10846"
       width="1.6576233"
       height="1.0825294"
       x="116.11704"
       y="84.158928"
       transform="rotate(15.166664)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10848"
       width="1.6576233"
       height="1.0825294"
       x="61.941811"
       y="135.9256"
       transform="rotate(-16.75198)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10850"
       width="1.6576233"
       height="1.0825294"
       x="131.77103"
       y="69.084328"
       transform="rotate(34.574231)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10852"
       width="1.6576233"
       height="1.0825294"
       x="117.80667"
       y="97.167366"
       transform="rotate(19.98624)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10854"
       width="1.6576233"
       height="1.0825294"
       x="42.509205"
       y="150.4642"
       transform="rotate(-17.476606)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10856"
       width="1.6576233"
       height="1.0825294"
       x="8.6542263"
       y="159.39597"
       transform="rotate(-33.35328)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10858"
       width="1.6576233"
       height="1.0825294"
       x="-12.543521"
       y="161.67755"
       transform="rotate(-43.775828)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10860"
       width="1.6576233"
       height="1.0825294"
       x="149.83072"
       y="63.442284"
       transform="rotate(41.297401)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10862"
       width="1.6576233"
       height="1.0825294"
       x="144.28769"
       y="92.037949"
       transform="rotate(29.253521)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10864"
       width="1.6576233"
       height="1.0825294"
       x="139.76921"
       y="109.52409"
       transform="rotate(21.123055)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10866"
       width="1.6576233"
       height="1.0825294"
       x="102.24159"
       y="150.90318"
       transform="rotate(1.0863462)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10868"
       width="1.6576233"
       height="1.0825294"
       x="18.705523"
       y="186.26244"
       transform="rotate(-29.660316)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10870"
       width="1.6576233"
       height="1.0825294"
       x="-8.7052469"
       y="191.06175"
       transform="rotate(-40.603416)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10872"
       width="1.6576233"
       height="1.0825294"
       x="-19.564281"
       y="193.47964"
       transform="rotate(-46.43869)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10874"
       width="1.6576233"
       height="1.0825294"
       x="-30.825451"
       y="207.41022"
       transform="rotate(-46.43869)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10876"
       width="1.6576233"
       height="1.0825294"
       x="18.723032"
       y="205.76613"
       transform="rotate(-29.834748)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10878"
       width="1.6576233"
       height="1.0825294"
       x="7.5398755"
       y="203.64221"
       transform="rotate(-29.834748)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10880"
       width="1.6576233"
       height="1.0825294"
       x="31.787762"
       y="198.54977"
       transform="rotate(-20.347696)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10882"
       width="1.6576233"
       height="1.0825294"
       x="18.557957"
       y="195.98863"
       transform="rotate(-20.347696)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10884"
       width="1.6576233"
       height="1.0825294"
       x="126.66387"
       y="144.68666"
       transform="rotate(18.286771)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10886"
       width="1.6576233"
       height="1.0825294"
       x="135.31726"
       y="129.08963"
       transform="rotate(26.428815)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10888"
       width="1.6576233"
       height="1.0825294"
       x="146.24644"
       y="106.23251"
       transform="rotate(36.947327)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10890"
       width="1.6576233"
       height="1.0825294"
       x="156.63063"
       y="120.26431"
       transform="rotate(36.947327)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10892"
       width="1.6576233"
       height="1.0825294"
       x="140.65735"
       y="148.34622"
       transform="rotate(26.428815)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10894"
       width="1.6576233"
       height="1.0825294"
       x="128.57048"
       y="168.56889"
       transform="rotate(18.286771)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect10896"
       width="1.6576233"
       height="1.0825294"
       x="140.50967"
       y="168.36443"
       transform="rotate(18.286771)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect11624"
       width="1.6576233"
       height="1.0825294"
       x="30.835474"
       y="222.97009"
       transform="rotate(-15.882228)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect11626"
       width="1.6576233"
       height="1.0825294"
       x="120.56525"
       y="196.02467"
       transform="rotate(5.0281575)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect11628"
       width="1.6576233"
       height="1.0825294"
       x="34.029541"
       y="231.42062"
       transform="rotate(-20.347696)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect11630"
       width="1.6576233"
       height="1.0825294"
       x="16.81266"
       y="236.94594"
       transform="rotate(-27.02492)" />
    <rect
       style={{fill:"#004100",fillOpacity:"1",stroke:"none",strokeWidth:"0.661458",strokeLinecap:"round",strokeDasharray:"none",strokeOpacity:"1"}}
       id="rect11632"
       width="1.6576233"
       height="1.0825294"
       x="-11.88166"
       y="240.98497"
       transform="rotate(-36.569711)" />
  </g>
  <g
     id="layer4"
     transform="translate(-38.971639,-63.797526)">
    <path
      className={shining ? "twinkle" : "hidden"}
       style={{fill:'#ff99cc',fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:"1"}}
       id="path8704"
       d="m 70.770368,89.376331 -1.040901,1.937597 1.539628,1.570765 -2.16442,-0.391205 -1.018115,1.949667 -0.296784,-2.179375 -2.168858,-0.365805 1.980997,-0.955723 -0.322313,-2.175746 1.521108,1.588706 z" />
    <path
      className={shining ? "twinkle" : "hidden"}
       style={{fill:'#ffff32',fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="path9436"
       d="m 73.950294,88.699759 -0.33978,0.885359 0.743973,0.58806 -0.947024,-0.04956 -0.329378,0.889281 -0.245513,-0.915988 -0.94754,-0.03845 0.795289,-0.516552 -0.256234,-0.913047 0.737029,0.596741 z"
       transform="translate(0.54126473,-1.0825295)" />
    <path
      className={shining ? "twinkle" : "hidden"}
       style={{fill:'#00ffff',fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="path9442"
       d="m 70.770368,89.376331 -1.040901,1.937597 1.539628,1.570765 -2.16442,-0.391205 -1.018115,1.949667 -0.296784,-2.179375 -2.168858,-0.365805 1.980997,-0.955723 -0.322313,-2.175746 1.521108,1.588706 z"
       transform="rotate(175.76359,90.79554,81.981964)" />
    <path
      className={shining ? "twinkle" : "hidden"}
       style={{fill:'#ff99cc',fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:"1"}}
       id="path9444"
       d="m 73.950294,88.699759 -0.33978,0.885359 0.743973,0.58806 -0.947024,-0.04956 -0.329378,0.889281 -0.245513,-0.915988 -0.94754,-0.03845 0.795289,-0.516552 -0.256234,-0.913047 0.737029,0.596741 z"
       transform="rotate(175.76359,90.544926,82.533238)" />
    <path
      className={shining ? "twinkle" : "hidden"}
       style={{fill:'#ffff32',fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="path9450"
       d="m 70.770368,89.376331 -1.040901,1.937597 1.539628,1.570765 -2.16442,-0.391205 -1.018115,1.949667 -0.296784,-2.179375 -2.168858,-0.365805 1.980997,-0.955723 -0.322313,-2.175746 1.521108,1.588706 z"
       transform="rotate(-103.67993,90.282619,76.605268)" />
    <path
      className={shining ? "twinkle" : "hidden"}
       style={{fill:'#ff99cc',fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:"1"}}
       id="path9452"
       d="m 73.950294,88.699759 -0.33978,0.885359 0.743973,0.58806 -0.947024,-0.04956 -0.329378,0.889281 -0.245513,-0.915988 -0.94754,-0.03845 0.795289,-0.516552 -0.256234,-0.913047 0.737029,0.596741 z"
       transform="rotate(-103.67993,89.586663,76.93387)" />
  </g>
  <g
     id="layer6"
     transform="translate(-38.971639,-63.797526)">
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21454)' : baubles ? 'url(#linearGradient21450)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle17696"
       cx="130.17416"
       cy="-115.83064"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
    className={baubles ? "" : silverGold ? "" : "hidden"}
    fill={silverGold ?  'url(#linearGradient21452)' : baubles ? 'url(#linearGradient21438)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle19224"
       cx="117.45445"
       cy="-106.76444"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21452)' : baubles ? 'url(#linearGradient21430)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21420"
       cx="123.76953"
       cy="-86.096916"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21452)' : baubles ? 'url(#linearGradient21438)' : "#008000"}
       style={{fill:'',fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21440"
       cx="139.84427"
       cy="-107.52991"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21454)' : baubles ? 'url(#linearGradient21450)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21452"
       cx="143.18706"
       cy="-86.93438"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21454)' : baubles ? 'url(#linearGradient21450)' : "#008000"}
       style={{fill:'',fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21456"
       cx="166.91644"
       cy="-91.718529"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21454)' : baubles ? 'url(#linearGradient21450)' : "#008000"}
       style={{fill:'',fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21460"
       cx="176.6761"
       cy="-128.4608"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21454)' : baubles ? 'url(#linearGradient21450)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21464"
       cx="187.39261"
       cy="-65.31002"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21454)' : baubles ? 'url(#linearGradient21450)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21468"
       cx="217.2457"
       cy="-85.020714"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21454)' : baubles ? 'url(#linearGradient21450)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21472"
       cx="206.52921"
       cy="-142.04778"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21452)' : baubles ? 'url(#linearGradient21430)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21476"
       cx="159.74634"
       cy="-119.20323"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21452)' : baubles ? 'url(#linearGradient21430)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21480"
       cx="164.72185"
       cy="-56.435192"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21452)' : baubles ? 'url(#linearGradient21430)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21484"
       cx="211.41515"
       cy="-66.194855"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21454)' : baubles ? 'url(#linearGradient21430)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21488"
       cx="196.4886"
       cy="-96.047951"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21452)' : baubles ? 'url(#linearGradient21430)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21492"
       cx="183.47571"
       cy="-138.72256"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21452)' : baubles ? 'url(#linearGradient21438)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21496"
       cx="160.12906"
       cy="-72.509933"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21452)' : baubles ? 'url(#linearGradient21438)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21500"
       cx="185.77209"
       cy="-113.84499"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21452)' : baubles ? 'url(#linearGradient21438)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21504"
       cx="188.64258"
       cy="-83.22644"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21452)' : baubles ? 'url(#linearGradient21438)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21508"
       cx="213.71153"
       cy="-111.73997"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21454)' : baubles ? 'url(#linearGradient21450)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21724"
       cx="151.60716"
       cy="-60.525875"
       r="2.7063234"
       transform="rotate(90)" />
    <circle
      className={baubles ? "" : silverGold ? "" : "hidden"}
      fill={silverGold ?  'url(#linearGradient21454)' : baubles ? 'url(#linearGradient21438)' : "#008000"}
       style={{fillOpacity:'1',stroke:'none',strokeWidth:'0',strokeLinecap:'round',strokeDasharray:'none',strokeOpacity:'1'}}
       id="circle21728"
       cx="207.20508"
       cy="-49.163296"
       r="2.7063234"
       transform="rotate(90)" />
  </g>
</svg>
      </div>

      
      
    </div>
  );
}

export default App;
