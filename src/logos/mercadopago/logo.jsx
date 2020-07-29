/* @flow */
/** @jsx node */

import { node, type ComponentNode } from 'jsx-pragmatic/src';

import { SVGLogo, getLogoColors, type SVGLogoProps } from '../../lib';
import { LOGO_COLOR, LOGO } from '../../constants';
import { type LogoColorMap } from '../../types';

const LOGO_COLORS : LogoColorMap = {
    [ LOGO_COLOR.DEFAULT ]: {
        primary:    '#2D3277',
        secondary:  '#FFFFFF',
        tertiary:   '#009EE3',
        quaternary: '#009EE3'
    },
    [ LOGO_COLOR.WHITE ]: {
        primary:    '#FFFFFF',
        secondary:  '#000000',
        tertiary:   '#FFFFFF',
        quaternary: '#000000'
    },
    [ LOGO_COLOR.BLACK ]: {
        primary:    '#2D3277',
        secondary:  '#FFFFFF',
        tertiary:   '#009EE3',
        quaternary: '#009EE3'
    }
};

// eslint-disable-next-line flowtype/require-exact-type
export function MercadoPagoLogo({ logoColor = LOGO_COLOR.DEFAULT, ...props } : { logoColor? : $Values<typeof LOGO_COLOR> }) : ComponentNode<SVGLogoProps> {

    const { primary, secondary, tertiary, quaternary } = getLogoColors(LOGO.MERCADOPAGO, LOGO_COLORS, logoColor);

    return (
        <SVGLogo

            { ...props }
            name={ LOGO.MERCADOPAGO }
            logoColor={ logoColor }
            render={ () => {
                return (
                    <svg width="180px" height="48px" viewBox="0 0 180 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>MercadoPago</title>
                        <g id="Logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="MercadoPago">
                                <path d="M65.881119,22.019212 C65.881119,10.1498687 51.1338846,0.474650362 32.9417221,0.474650362 C14.7505085,0.474650362 0.00374861327,10.1498687 0.00374861327,22.019212 C0.00374861327,22.3257442 -4.74508009e-05,23.1732155 -4.74508009e-05,23.2804543 C-4.74508009e-05,35.8719988 12.8894881,46.0705995 32.9374515,46.0705995 C53.109736,46.0705995 65.881119,35.8748459 65.881119,23.2828268 L65.881119,22.019212 Z" id="background_border" fill={ primary } />
                                <path d="M64.6197819,22.0085356 C64.6197819,33.1983835 50.440059,42.2695531 32.9477958,42.2695531 C15.456007,42.2695531 1.2767587,33.1983835 1.2767587,22.0085356 C1.2767587,10.8177387 15.456007,1.74656908 32.9477958,1.74656908 C50.440059,1.74656908 64.6197819,10.8177387 64.6197819,22.0085356" id="background" fill={ quaternary } />
                                <path d="M22.4316544,15.616106 C22.4150466,15.6478981 22.0990243,15.9748341 22.3035372,16.2377115 C22.8036686,16.8759248 24.3472432,17.242245 25.9083746,16.8920581 C26.8379357,16.6832745 28.0294254,15.7356821 29.1834288,14.8198816 C30.4342319,13.8262618 31.6750704,12.8312185 32.9225519,12.4354788 C34.2435822,12.0150648 35.08963,12.1953778 35.6486005,12.3643026 C36.2621393,12.5474627 36.9833915,12.9512691 38.1340734,13.8143991 C40.3011515,15.4438596 49.0150166,23.0497485 50.5206305,24.3650847 C51.733473,23.817028 57.1224604,21.4971583 64.446017,19.8828821 C63.8097018,15.9786302 61.4347892,12.4065339 57.8327989,9.48166649 C52.8129787,11.5903801 46.6780646,12.6902896 40.6788599,9.76020269 C40.6484914,9.74786548 37.401433,8.21140855 34.1989785,8.28685532 C29.4391886,8.39694118 27.3769768,10.457255 25.1947145,12.6380938 L22.4316544,15.616106 Z" id="righthand" fill={ secondary } />
                                <path d="M50.1667424,25.1920098 C50.0647232,25.1013788 39.920691,16.225232 37.6221742,14.4975483 C36.2926027,13.5001325 35.5528447,13.2457962 34.7760751,13.146624 C34.3717943,13.0944281 33.8132984,13.1694004 33.4227783,13.2766392 C32.3537117,13.5675126 30.9562857,14.5022934 29.7144982,15.4859485 C28.4295305,16.5094623 27.2181116,17.473188 26.0944766,17.7251518 C24.6576663,18.0468682 22.9038847,17.6672618 22.1033897,17.1258482 C21.7793008,16.908049 21.5510624,16.6560852 21.4414511,16.3998509 C21.1458326,15.7141868 21.6910423,15.1661301 21.7807243,15.07455 L24.579847,12.0467144 C24.9053595,11.7216764 25.2332446,11.397113 25.5682472,11.0768201 C24.6652585,11.1944981 23.8301244,11.4251089 23.0172922,11.6514493 C22.002794,11.9366286 21.0276801,12.2080472 20.0407034,12.2075726 C19.6288305,12.2075726 17.4209447,11.845523 17.0019541,11.7316411 C14.4690304,11.0383849 12.2454858,10.36316 8.92440428,8.81246784 C4.94470561,11.7752959 2.2836647,15.4793054 1.51496172,19.5595997 C2.08674387,19.7104933 3.00776392,19.9847589 3.39496245,20.0706449 C12.40065,22.0730687 15.2054668,24.135755 15.7146139,24.5666083 C16.2655177,23.9535439 17.0598441,23.5653964 17.9471741,23.5653964 C18.9436409,23.5668199 19.8414101,24.0674258 20.3870943,24.8413484 C20.9028845,24.433746 21.614172,24.0859316 22.5337685,24.0864062 C22.9513355,24.0864062 23.3845614,24.163751 23.8215832,24.312272 C24.8379794,24.6610354 25.3623107,25.3376838 25.6342038,25.9497991 C25.9753751,25.795584 26.3938911,25.6821766 26.8873795,25.6836001 C27.3723267,25.6836001 27.8767287,25.794635 28.3854013,26.0138577 C30.0457048,26.7265687 30.3043117,28.3574527 30.1534181,29.5873775 C30.2715706,29.5731423 30.3906721,29.5679227 30.5116717,29.5679227 C32.4804054,29.5693462 34.0818699,31.1693872 34.0809209,33.1390699 C34.0809209,33.7483382 33.9248078,34.3215439 33.6538637,34.8249969 C34.1895832,35.1263095 35.5552173,35.8072285 36.7538245,35.6553859 C37.7118562,35.5348609 38.0758038,35.2069759 38.205819,35.0233413 C38.294552,34.8961731 38.3894536,34.7486011 38.3016696,34.6423113 L35.7606792,31.8194632 C35.7606792,31.8194632 35.3421632,31.4237235 35.480245,31.2714064 C35.6240209,31.1143443 35.8821533,31.3392611 36.0648389,31.4920526 C37.3583477,32.5725074 38.9375104,34.2019679 38.9375104,34.2019679 C38.9640828,34.2195247 39.0684746,34.4264102 39.6525939,34.5312764 C40.1550979,34.6209585 41.0443259,34.5687626 41.6607118,34.0624625 C41.8163505,33.9348199 41.9715146,33.7753852 42.1015298,33.6107309 C42.0910906,33.6187975 42.083024,33.6297112 42.0730593,33.6335073 C42.7226608,32.8021693 42.0014086,31.9608666 42.0014086,31.9608666 L39.0347845,28.6293458 C39.0347845,28.6293458 38.6105744,28.2374022 38.7543503,28.079391 C38.883891,27.9427327 39.1567331,28.1491437 39.3422657,28.3038333 C40.2817916,29.0891441 41.6089905,30.4210881 42.8811464,31.6671461 C43.1293141,31.8484082 44.247255,32.5402408 45.72772,31.5679739 C46.6254891,30.978635 46.8062767,30.2550103 46.7806533,29.7088516 C46.7180182,28.9857013 46.1543027,28.4708602 46.1543027,28.4708602 L42.1015298,24.3967344 C42.1015298,24.3967344 41.6739981,24.0313632 41.8248916,23.8463051 C41.9487382,23.6906665 42.2267999,23.9151088 42.4085365,24.0674258 C43.7001473,25.1474061 47.1944242,28.3512841 47.1944242,28.3512841 C47.2442476,28.3863977 48.4518705,29.2462062 49.9437236,28.2962412 C50.4770706,27.9550699 50.8182419,27.4407033 50.8476614,26.8437722 C50.8984338,25.8074467 50.1667424,25.1920098 50.1667424,25.1920098" id="lefthand" fill={ secondary } />
                                <path d="M30.5112446,30.3568871 C29.882996,30.349295 29.1959084,30.7227328 29.1057519,30.6681644 C29.056403,30.6354233 29.144187,30.3829851 29.203026,30.2373111 C29.2632885,30.0925862 30.0908305,27.6028427 28.073697,26.7382891 C26.5301224,26.0749269 25.5868005,26.821328 25.262237,27.1582286 C25.1773001,27.2460126 25.1393394,27.2393695 25.1293748,27.1264366 C25.0985317,26.6785011 24.8978148,25.4651841 23.5653964,25.0590052 C21.6616702,24.4758349 20.4374396,25.8049318 20.1266368,26.2846594 C19.987606,25.1994596 19.070382,24.3567334 17.946747,24.3562573 C16.7253634,24.3548353 15.7350652,25.3441845 15.7336415,26.5646191 C15.7331672,27.7850537 16.7229909,28.7748774 17.9439,28.7748774 C18.5375095,28.776301 19.0751271,28.539047 19.4718158,28.158017 C19.4846275,28.1698797 19.4893726,28.1907581 19.483204,28.2325148 C19.3902004,28.779148 19.218903,30.7654385 21.2991461,31.5740002 C22.1333312,31.8980892 22.8427207,31.6570391 23.4306361,31.2446916 C23.6057295,31.120845 23.6346745,31.1735154 23.6095256,31.3376952 C23.5345533,31.8487403 23.6294549,32.9424813 25.1630648,33.5645613 C26.3294055,34.0385948 27.0202892,33.5531731 27.4724953,33.1351315 C27.6694161,32.9557675 27.7230355,32.9847125 27.7334747,33.2622997 C27.7889921,34.7403921 29.0170189,35.9143249 30.507923,35.9157497 C32.04438,35.917172 33.289489,34.67491 33.2899647,33.1389276 C33.291387,31.6024707 32.047227,30.3734949 30.5112446,30.3568871" id="fingers" fill={ secondary } />
                                <path d="M30.5112446,35.7178312 C29.1185636,35.7164077 27.986862,34.6345294 27.9356151,33.2556091 C27.9318191,33.1374566 27.9199564,32.8228578 27.6542319,32.8228578 C27.5446205,32.8228578 27.4497189,32.8888144 27.3401076,32.9875121 C27.0345244,33.2712679 26.6444788,33.5597688 26.0745947,33.5597688 C25.8164624,33.5597688 25.5365026,33.4995062 25.2408841,33.3785067 C23.7703838,32.7829991 23.74998,31.7732461 23.809768,31.3670672 C23.8259013,31.2588794 23.8315954,31.1459465 23.7570976,31.058637 L23.6664666,30.9774962 L23.5748865,30.9774962 C23.5003888,30.9774962 23.423044,31.0078647 23.3191267,31.0814134 C22.893493,31.379879 22.4858906,31.5250784 22.0711706,31.5250784 C21.8424578,31.5250784 21.6085253,31.4790511 21.3741184,31.3888946 C19.4381257,30.6353759 19.5909173,28.8080455 19.6858189,28.2580908 C19.6995796,28.1470559 19.6720581,28.0602209 19.6013564,28.0028055 L19.4646981,27.8903471 L19.336581,28.0127701 C18.9588726,28.3762433 18.4658588,28.5755366 17.946747,28.5755366 C16.8382963,28.5741131 15.9357821,27.6734969 15.9367303,26.5645717 C15.9376801,25.455172 16.8406689,24.5550303 17.9495941,24.5564521 C18.951755,24.5564521 19.8049204,25.309498 19.932563,26.3107099 L20.0018412,26.8507 L20.2984087,26.3937488 C20.3316243,26.3401294 21.143982,25.1116282 22.6372587,25.1130517 C22.921489,25.1130517 23.2147349,25.159079 23.5098789,25.2501845 C24.700894,25.6136576 24.9025599,26.6931634 24.9334029,27.1429969 C24.9547558,27.4049254 25.1412375,27.4177371 25.1777746,27.4177371 C25.2807428,27.4177371 25.3561896,27.352255 25.409809,27.296263 C25.6347258,27.0618561 26.1239435,26.6718105 26.8897995,26.6718105 C27.2399864,26.6727595 27.6134242,26.7557984 27.9982502,26.9214017 C29.8901136,27.7332849 29.0322031,30.137617 29.021764,30.1627659 C28.8594822,30.5613526 28.8528391,30.7373951 29.0056307,30.8389398 L29.0801284,30.8745279 L29.1356459,30.8745279 C29.2205828,30.8745279 29.3268726,30.8375163 29.5019661,30.7782028 C29.7596239,30.6889953 30.148246,30.555184 30.5117191,30.5561331 L30.5126681,30.5561331 C31.9371412,30.5713173 33.0954152,31.7310149 33.0949409,33.1388801 C33.0935172,34.5614552 31.9347686,35.7178312 30.5112446,35.7178312 M50.559208,24.1293966 C47.4345727,21.402399 40.2125608,15.1241836 38.2566388,13.6560558 C37.139647,12.8152276 36.3771126,12.3715626 35.7080563,12.1722693 C35.4076927,12.0811637 34.9915492,11.9781955 34.4558297,11.977721 C33.9590198,11.977721 33.4247238,12.067403 32.8667024,12.244869 C31.602613,12.6448792 30.3432688,13.6456166 29.1252067,14.613613 L29.0625716,14.6634363 C27.928023,15.5650015 26.7555137,16.4983588 25.8681837,16.6967031 C25.4805107,16.7840126 25.0823985,16.8286163 24.6852353,16.8286163 C23.691141,16.8271928 22.7981169,16.54059 22.4635888,16.1140073 C22.4085458,16.0433056 22.4436594,15.9289492 22.5732001,15.7642949 L22.5902824,15.7424675 L25.3391073,12.780114 C27.4919501,10.6272712 29.5256915,8.59447886 34.206713,8.48676555 C34.2835833,8.48439301 34.3628261,8.48296948 34.4401709,8.48296948 C37.3541246,8.48486751 40.2671293,9.78929003 40.5935908,9.94065809 C43.3258079,11.2730766 46.1453345,11.9501995 48.9805198,11.952572 C51.9348067,11.9535211 54.9830462,11.2223042 58.1878732,9.74658431 C57.8300942,9.44527173 57.4576054,9.15250028 57.0742029,8.86494843 C54.2589469,10.085383 51.5765532,10.7022434 48.988112,10.7012944 C46.3451024,10.6989219 43.7039908,10.0645047 41.1397495,8.81322706 C41.0045147,8.74869397 37.7882994,7.23216637 34.4415944,7.23074285 C34.354285,7.23074285 34.2650775,7.23216637 34.177768,7.23358989 C30.2455201,7.32564445 28.0305167,8.72164701 26.5415106,9.94540317 C25.0928376,9.98051676 23.8429835,10.3297547 22.7312113,10.6400829 C21.739015,10.915772 20.8820536,11.1549241 20.0459705,11.1544496 C19.7019521,11.1544496 19.0822447,11.123132 19.0267272,11.121234 C18.065374,11.092289 13.2234943,9.90459548 9.37191279,8.44595786 C8.97854565,8.72449406 8.60036276,9.01204591 8.23214455,9.30481735 C12.255498,10.9542072 17.1524206,12.2306337 18.6978932,12.3302804 C19.1277975,12.3582764 19.5861722,12.4071507 20.0440724,12.4080997 C21.0666372,12.4080997 22.0868294,12.1210224 23.0742806,11.8448587 C23.6574509,11.6811535 24.3008838,11.503213 24.9780067,11.3731978 C24.7972191,11.5506638 24.6169061,11.7305023 24.4361186,11.9117644 L21.6431644,14.9329569 C21.4234672,15.1550266 20.9461121,15.7472126 21.260711,16.4765314 C21.3859811,16.7707264 21.6398429,17.0521096 21.9952494,17.2917362 C22.6605096,17.7396717 23.8524737,18.0428823 24.9595009,18.0438314 C25.378966,18.0443059 25.7761292,18.0020747 26.1419748,17.9199848 C27.3125861,17.6571073 28.5406128,16.6791463 29.8417138,15.6447189 C30.8780393,14.8214475 32.3509121,13.7756318 33.4783432,13.4681506 C33.7934165,13.3827392 34.1801405,13.3291198 34.4914178,13.3291198 C34.5844213,13.3300688 34.6722053,13.3329158 34.7533462,13.3447785 C35.4987983,13.4392056 36.2186269,13.6925929 37.5045436,14.6577422 C39.7968918,16.3797318 49.9423476,25.2549296 50.0415197,25.3427136 C50.0486374,25.3479331 50.6953918,25.9059546 50.6503135,26.8336177 C50.6265881,27.3508315 50.3390363,27.8106297 49.8398538,28.1290246 C49.4071025,28.4037647 48.960116,28.5437446 48.5083844,28.5437446 C47.8303124,28.5423211 47.3633965,28.2248752 47.333028,28.2030478 C47.2955419,28.1726793 43.8197707,24.985409 42.5414462,23.914919 C42.3374077,23.7464686 42.1395379,23.5941515 41.9392955,23.5941515 C41.8320567,23.5932025 41.7376296,23.6392298 41.673571,23.7194217 C41.4723796,23.9671148 41.6977709,24.3106586 41.9634954,24.536999 L46.0233859,28.6177678 C46.02908,28.6220384 46.529686,29.0913268 46.5842544,29.7172029 C46.6160464,30.3938513 46.2929065,30.9599394 45.6205286,31.4002828 C45.1412755,31.7158306 44.6563283,31.8762143 44.1813458,31.8762143 C43.5578423,31.8762143 43.1198714,31.5924585 43.0230718,31.5250784 L42.4408505,30.9509237 C41.3760545,29.9036845 40.2770939,28.8208573 39.4728029,28.1494284 C39.276831,27.9861977 39.066624,27.8357786 38.8673306,27.8357786 C38.768633,27.8357786 38.6799,27.8723158 38.6115708,27.9439665 C38.5199908,28.0459857 38.4559322,28.2296203 38.6846451,28.5333054 C38.7790721,28.6585755 38.8896325,28.7620183 38.8896325,28.7620183 L41.8524605,32.0897429 C41.8771349,32.1196369 42.4631523,32.8162147 41.9193662,33.5099454 L41.8144999,33.6428077 C41.7262414,33.7405563 41.6303908,33.8302383 41.5392852,33.9085321 C41.0339342,34.3232521 40.3587093,34.3673814 40.0910868,34.3673814 C39.9487344,34.3673814 39.8106526,34.3550442 39.6910765,34.3332168 C39.3983051,34.2810209 39.2018588,34.1994055 39.1069572,34.0869471 L39.0713691,34.049461 C38.9090873,33.8824342 37.4158106,32.35784 36.1797173,31.3262596 C36.0174355,31.1896012 35.8143461,31.0178293 35.6036645,31.0178293 C35.5002218,31.0178293 35.4076927,31.058637 35.3365165,31.1374054 C35.0916704,31.4050279 35.4589396,31.8055126 35.6145782,31.9521356 L38.1418079,34.7389212 C38.1389608,34.7635956 38.1071688,34.821011 38.0459573,34.9092695 C37.9553262,35.0345396 37.6487941,35.3410718 36.7320446,35.4559028 C36.6224332,35.4706125 36.5090258,35.4763066 36.3965674,35.4763066 C35.4513475,35.4763066 34.443018,35.0174574 33.9234317,34.7417682 C34.1597367,34.2425858 34.2826343,33.6921565 34.2826343,33.1403037 C34.2835833,31.0605351 32.5948093,29.3684395 30.5150407,29.367016 C30.4704369,29.367016 30.4229861,29.3684395 30.3788569,29.369863 C30.4467115,28.4203725 30.3124257,26.6219871 28.4665896,25.8305078 C27.9356151,25.6008459 27.4055897,25.4836424 26.8907485,25.4836424 C26.4878912,25.4836424 26.1002181,25.5524461 25.735796,25.692426 C25.3533425,24.9493464 24.7184508,24.4079328 23.8899598,24.1256005 C23.4325341,23.9671148 22.9770064,23.886923 22.536663,23.886923 C21.768909,23.886923 21.0614176,24.1132633 20.4303219,24.5621479 C19.8253242,23.8100527 18.9123708,23.3649642 17.9500686,23.3649642 C17.1087659,23.3649642 16.2992552,23.7018649 15.6990026,24.2959489 C14.9127428,23.6952217 11.7923781,21.7127273 3.44103718,19.8165933 C3.03675636,19.7254877 2.10861869,19.4588142 1.53968359,19.2927364 C1.445731,19.7449426 1.37360578,20.2018938 1.32615498,20.6626411 C1.32615498,20.6626411 2.86640798,21.0318083 3.1696186,21.0996629 C11.7007981,22.9948479 14.5198502,24.9650052 14.9962562,25.337494 C14.8349235,25.7246925 14.7509356,26.1432086 14.7499866,26.5645717 C14.7490375,28.3268944 16.1825262,29.7622812 17.946747,29.7637047 C18.1441424,29.7637047 18.3401142,29.7466224 18.5327644,29.7110343 C18.7980144,31.0078647 19.6469092,31.9910453 20.9442141,32.4959218 C21.323346,32.6415958 21.7067485,32.716568 22.0830333,32.716568 C22.3269305,32.7170425 22.5717766,32.6861995 22.8109286,32.624988 C23.0500807,33.2337817 23.5895963,33.9920455 24.7943721,34.4817378 C25.2171587,34.6516117 25.6394709,34.7403447 26.0503948,34.7403447 C26.385872,34.7403447 26.713757,34.6815057 27.0264578,34.5666747 C27.603934,35.9731165 28.9785837,36.9050539 30.5102956,36.9050539 C31.5257427,36.9064737 32.5003822,36.4927028 33.2111952,35.7610114 C33.8204635,36.0993356 35.1049566,36.7114509 36.402736,36.713349 C36.5711864,36.713349 36.728723,36.7010118 36.8862597,36.682506 C38.1750235,36.5192752 38.7752761,36.0153477 39.0509652,35.6234041 C39.1007886,35.5550749 39.1453923,35.4824752 39.183353,35.4070284 C39.4879871,35.4943379 39.8225153,35.5659886 40.2059177,35.5669376 C40.9100876,35.5669376 41.585787,35.3268366 42.268604,34.8290777 C42.9395584,34.3450795 43.4164389,33.6508743 43.4852426,33.0591628 C43.4866661,33.0515707 43.4880896,33.042555 43.4890386,33.0340139 C43.7149045,33.0805157 43.9469389,33.1047156 44.1789733,33.1047156 C44.903547,33.1047156 45.6167326,32.8788498 46.2981261,32.4323377 C47.6120387,31.5706312 47.8407516,30.4455727 47.8189242,29.7086617 C48.0485861,29.7565871 48.2834676,29.7812615 48.5169255,29.7812615 C49.1978445,29.7812615 49.8654773,29.5767485 50.5027415,29.1705697 C51.3174718,28.6500344 51.8076386,27.8528609 51.8816618,26.9251978 C51.9329087,26.2945766 51.776321,25.6582614 51.4436909,25.1111536 C53.6458826,24.1626121 58.67804,22.3267406 64.6041705,20.9914751 C64.5681079,20.5316769 64.5021513,20.0780472 64.4200614,19.6263156 C57.2497709,21.2173409 51.8992186,23.53294 50.559208,24.1293966" id="handoutline" fill={ primary } />
                                <path d="M152.355791,37.4166173 C151.780213,38.1829477 150.95362,38.5658757 149.876486,38.5658757 C148.798879,38.5658757 147.96849,38.1829477 147.389115,37.4166173 C146.805471,36.6526594 146.516021,35.5636635 146.516021,34.1529512 C146.516021,32.7427134 146.805471,31.6560901 147.389115,30.8959282 C147.96849,30.1329194 148.798879,29.754262 149.876486,29.754262 C150.95362,29.754262 151.780213,30.1329194 152.355791,30.8959282 C152.934216,31.6560901 153.221293,32.7427134 153.221293,34.1529512 C153.221293,35.5636635 152.934216,36.6526594 152.355791,37.4166173 M155.303909,28.8735751 C154.112894,27.3826709 152.307391,26.6391169 149.885977,26.6391169 C147.468833,26.6391169 145.662855,27.3826709 144.473738,28.8735751 C143.283672,30.3621067 142.689588,32.1211079 142.689588,34.1529512 C142.689588,36.2194336 143.283672,37.9846034 144.473738,39.4551037 C145.662855,40.9194354 147.468833,41.6549228 149.885977,41.6549228 C152.307391,41.6549228 154.112894,40.9194354 155.303909,39.4551037 C156.492077,37.9846034 157.084263,36.2194336 157.084263,34.1529512 C157.084263,32.1211079 156.492077,30.3621067 155.303909,28.8735751" id="pago_o" fill={ tertiary } />
                                <path d="M131.5312,34.2614237 C131.5312,36.733136 132.245809,38.1030406 133.674078,38.3739847 C135.0995,38.6382856 136.153857,38.307079 136.832404,37.3770433 C137.15412,36.9855742 137.384731,36.3653923 137.527558,35.5250386 C137.669436,34.6837359 137.680349,33.8500253 137.555079,33.0262794 C137.432182,32.200161 137.135614,31.4656226 136.671071,30.8207662 C136.208426,30.1773333 135.529405,29.8532443 134.636855,29.8532443 C133.422589,29.8532443 132.603588,30.3030779 132.174158,31.195153 C131.743305,32.0929221 131.5312,33.1135889 131.5312,34.2614237 M137.635746,40.440467 L137.635746,39.5303607 C136.993736,40.5353686 136.126336,41.1579231 135.038289,41.4108359 C133.948344,41.6599526 132.869313,41.5707451 131.800721,41.1398918 C130.728807,40.7118856 129.808262,39.9137631 129.040033,38.750744 C128.274652,37.5825053 127.890775,36.0507934 127.890775,34.1518124 C127.890775,31.9330129 128.399447,30.130357 129.415369,28.7514367 C130.433663,27.3725165 132.067869,26.7433188 134.316088,26.6816328 C136.53204,26.6232683 137.820329,27.1248233 139.081572,28.0800079 C140.460492,29.1267726 141.276186,30.7325077 141.276186,33.238859 L141.276186,40.8200734 C141.281865,43.2324722 139.599734,47.7032866 134.316088,47.3241547 C131.042931,47.0869007 129.226515,45.7440431 128.212491,42.7014977 L132.120539,42.7014977 C132.406193,43.2016291 132.84274,43.5869296 133.434926,43.8536031 C134.020469,44.1259707 134.612655,44.1957234 135.197724,44.0699788 C135.786113,43.9447087 136.322782,43.5940473 136.807255,43.0232141 C137.286508,42.4495339 137.562671,41.5883019 137.635746,40.440467" id="pago_g" fill={ tertiary } />
                                <path d="M122.844524,35.7562663 C122.821273,36.9933087 122.466341,37.842678 121.786846,38.3105429 C121.107825,38.7765098 120.364271,39.0099677 119.558082,39.0099677 C119.047511,39.0099677 118.615709,38.8690389 118.260777,38.5890791 C117.904896,38.3086449 117.726955,37.8512192 117.726955,37.2201235 C117.726955,36.5131066 118.017829,35.9897243 118.60005,35.6518746 C118.946441,35.4540047 119.510157,35.2841309 120.298789,35.1493706 L121.140092,34.9927829 C121.56098,34.9130656 121.890763,34.8290777 122.128966,34.7374976 C122.373812,34.6487646 122.609168,34.5310866 122.844524,34.3820911 L122.844524,35.7562663 Z M124.719306,27.7043399 C123.512632,27.0945971 122.132762,26.7856924 120.581121,26.7856924 C118.191973,26.7856924 116.508893,27.4082469 115.527611,28.6509834 C114.912174,29.4467333 114.564834,30.4621805 114.485117,31.6987483 L118.052942,31.6987483 C118.140252,31.1530641 118.314396,30.7212618 118.578697,30.4023925 C118.946441,29.9705902 119.572317,29.7542145 120.454428,29.7542145 C121.246856,29.7542145 121.842838,29.8628769 122.25044,30.0849466 C122.656619,30.3055928 122.861132,30.7046541 122.861132,31.2840283 C122.861132,31.7594854 122.596357,32.1091978 122.063959,32.3345891 C121.76834,32.4641298 121.277224,32.5718431 120.586815,32.658678 L119.322726,32.8128931 C117.887339,32.9946297 116.796445,33.2987893 116.059534,33.7220505 C114.707661,34.4997691 114.03386,35.7562663 114.03386,37.4929656 C114.03386,38.8315527 114.450952,39.8678782 115.292255,40.5976715 C116.128338,41.3274649 117.194083,41.6354206 118.480474,41.6947341 C126.543314,42.0548856 126.453158,37.4440913 126.526707,36.4855851 L126.526707,31.1791621 C126.526707,29.4771018 125.92503,28.3197768 124.719306,27.7043399 L124.719306,27.7043399 Z" id="pago_a" fill={ tertiary } />
                                <path d="M109.304391,34.2595732 C109.304391,32.8611981 109.032023,31.7864374 108.484916,31.0319697 C107.94018,30.2817725 107.15914,29.9016916 106.14132,29.9016916 C105.160987,29.9016916 104.397029,30.2817725 103.849447,31.0319697 C103.342672,31.7143122 103.089285,32.7928689 103.089285,34.2595732 C103.089285,35.6266307 103.361178,36.6439759 103.906862,37.3263184 C104.450648,38.0807862 105.233112,38.4565965 106.250457,38.4565965 C107.194254,38.4565965 107.94018,38.0807862 108.484916,37.3263184 C109.032023,36.5732742 109.304391,35.5545055 109.304391,34.2595732 L109.304391,34.2595732 Z M103.089285,44.2935195 C103.089285,44.795549 102.907074,45.2264023 102.541703,45.5841813 C102.180128,45.9433839 101.74358,46.1227479 101.233959,46.1227479 L99.3824284,46.1227479 L99.3824284,33.2365339 C99.3824284,30.7306571 100.226578,29.1609846 101.616887,28.1004592 C102.53506,27.3991364 103.904015,26.7300801 106.468257,26.7300801 C108.199736,26.7300801 110.227309,27.4019834 111.322948,28.737249 C112.551924,30.2390668 113.064392,31.9126565 113.064392,34.0982404 C113.064392,36.3592711 112.519183,38.1832799 111.429712,39.5854511 C110.339767,40.9496616 108.93902,41.6286825 107.231265,41.6286825 C106.323057,41.6286825 105.523986,41.4668753 104.833576,41.1465824 C104.104258,40.7869053 103.525832,40.231731 103.089285,39.4777377 L103.089285,44.2935195 Z" id="pago_p" fill={ tertiary } />
                                <path d="M175.174786,16.83711 C174.59731,17.602966 173.772615,17.9858939 172.693584,17.9858939 C171.616925,17.9858939 170.787485,17.602966 170.206213,16.83711 C169.624466,16.0722031 169.334067,14.9827327 169.334067,13.5710714 C169.334067,12.1613081 169.624466,11.0746848 170.206213,10.3135739 C170.787485,9.55198858 171.616925,9.17143315 172.693584,9.17143315 C173.772615,9.17143315 174.59731,9.55198858 175.174786,10.3135739 C175.751313,11.0746848 176.040289,12.1613081 176.040289,13.5710714 C176.040289,14.9827327 175.751313,16.0722031 175.174786,16.83711 M178.121006,8.2916953 C176.931889,6.80174016 175.127335,6.05723709 172.704972,6.05723709 C170.28593,6.05723709 168.480902,6.80174016 167.292734,8.2916953 C166.102667,9.78070144 165.507634,11.5406516 165.507634,13.5710714 C165.507634,15.6380283 166.102667,17.4041471 167.292734,18.8746474 C168.480902,20.3399282 170.28593,21.0754156 172.704972,21.0754156 C175.127335,21.0754156 176.931889,20.3399282 178.121006,18.8746474 C179.311072,17.4041471 179.904207,15.6380283 179.904207,13.5710714 C179.904207,11.5406516 179.311072,9.78070144 178.121006,8.2916953" id="mercado_o" fill={ primary } />
                                <path d="M159.95627,16.8677158 C159.414857,17.6440109 158.620056,18.0312094 157.578985,18.0312094 C156.534593,18.0312094 155.757823,17.6402148 155.246304,16.8610727 C154.734784,16.080507 154.479024,14.9440603 154.479024,13.6439084 C154.479024,12.4372345 154.72909,11.427007 155.233492,10.6127512 C155.736471,9.7994445 156.526052,9.39089311 157.604134,9.39089311 C158.311151,9.39089311 158.930384,9.6153354 159.466104,10.0627964 C160.336351,10.8044525 160.771001,12.1340239 160.771001,13.8560135 C160.771001,15.0883108 160.499582,16.0918952 159.95627,16.8677158 L159.95627,16.8677158 Z M164.404783,1.7180986 C164.404783,1.7180986 160.668981,1.31903736 160.668981,4.31982601 L160.666134,8.29240707 C160.252838,7.62857036 159.71522,7.1094586 159.051858,6.73554629 C158.389919,6.36115947 157.63213,6.17230528 156.776592,6.17230528 C154.924113,6.17230528 153.447444,6.86271443 152.338993,8.24021119 C151.230542,9.62008048 150.679164,11.60732 150.679164,14.0107031 C150.679164,16.0956913 151.240982,17.8058181 152.365091,19.1368131 C153.489201,20.4663845 155.694239,21.0500294 157.652534,21.0500294 C164.480704,21.0500294 164.401936,15.1946006 164.401936,15.1946006 L164.404783,1.7180986 Z" id="mercado_d" fill={ primary } />
                                <path d="M145.862813,15.0980382 C145.837664,16.333657 145.483681,17.1849244 144.803711,17.6518403 C144.123267,18.1187562 143.380187,18.3526886 142.574472,18.3526886 C142.063902,18.3526886 141.6321,18.2112852 141.276219,17.930851 C140.921287,17.6499423 140.744295,17.1934656 140.744295,16.5623699 C140.744295,15.854404 141.034219,15.3319706 141.615492,14.9941209 C141.961883,14.7962511 142.526547,14.6259027 143.315179,14.4906679 L144.157431,14.3345548 C144.576422,14.2548375 144.906205,14.1699005 145.147255,14.078795 C145.391152,13.990062 145.626508,13.8728585 145.862813,13.723863 L145.862813,15.0980382 Z M147.735696,7.04611178 C146.529971,6.43447096 145.150102,6.12604075 143.597037,6.12604075 C141.210262,6.12604075 139.525759,6.74954427 138.54495,7.99228075 C137.927616,8.7889797 137.582174,9.80395233 137.501507,11.0395712 L141.06791,11.0395712 C141.155694,10.4943615 141.330787,10.0625592 141.594139,9.7432153 C141.961883,9.31141302 142.58681,9.09551187 143.470818,9.09551187 C144.261348,9.09551187 144.85828,9.2036997 145.266831,9.42671846 C145.67301,9.64641567 145.877523,10.0464259 145.877523,10.6243767 C145.877523,11.1007827 145.613696,11.4495461 145.080824,11.6754119 C144.784256,11.8054271 144.292666,11.9131404 143.603206,11.9995009 L142.339117,12.1551395 C140.902781,12.3359271 139.812836,12.6396122 139.074027,13.0638224 C137.724052,13.8420155 137.049301,15.0980382 137.049301,16.8356865 C137.049301,18.1737991 137.467343,19.2101246 138.307696,19.9403924 C139.144729,20.6706602 140.210474,20.9771924 141.496865,21.0369804 C149.561603,21.3966575 149.470972,16.7868122 149.544995,15.8278315 L149.544995,10.5209339 C149.544995,8.81982272 148.940472,7.66012514 147.735696,7.04611178 L147.735696,7.04611178 Z" id="mercado_a" fill={ primary } />
                                <path d="M129.345854,9.28716566 C130.267823,9.28716566 130.944471,9.57187046 131.381967,10.1408056 C131.682331,10.5621687 131.869287,11.0371512 131.942836,11.5633806 L135.920162,11.5633806 C135.702363,9.5562117 135.000091,8.15498955 133.81477,7.36113765 C132.624704,6.5706073 131.101059,6.17249508 129.23814,6.17249508 C127.047337,6.17249508 125.326296,6.84582195 124.08356,8.18915412 C122.837027,9.53438433 122.214473,11.4139106 122.214473,13.8305798 C122.214473,15.970611 122.777714,17.7149024 123.90467,19.0591836 C125.032576,20.4025158 126.791577,21.0753681 129.180725,21.0753681 C131.573669,21.0753681 133.380121,20.2696535 134.596759,18.6577498 C135.360717,17.659385 135.788723,16.5988596 135.87888,15.4780717 L131.913891,15.4780717 C131.833224,16.2187787 131.601665,16.8233019 131.217788,17.2883197 C130.835334,17.751914 130.190952,17.9858465 129.278948,17.9858465 C127.994455,17.9858465 127.120885,17.4007781 126.656342,16.2268453 C126.40248,15.6009692 126.273414,14.7720037 126.273414,13.7404233 C126.273414,12.6580706 126.40248,11.7906699 126.656342,11.1353744 C127.139391,9.90450058 128.036211,9.28716566 129.345854,9.28716566" id="mercado_c" fill={ primary } />
                                <path d="M121.147636,6.17230528 C112.976134,6.17230528 113.459183,13.4080779 113.459183,13.4080779 L113.459183,20.7577325 L117.167938,20.7577325 L117.167938,13.8640801 C117.167938,12.734751 117.310765,11.8981934 117.593571,11.3544072 C118.102244,10.3906815 119.095864,9.90668331 120.57965,9.90668331 C120.690685,9.90668331 120.838257,9.91285192 121.019045,9.92091855 C121.199358,9.92993421 121.404345,9.94606748 121.64065,9.97358894 L121.64065,6.20030125 C121.475521,6.18891306 121.369232,6.18416798 121.32273,6.17989741 C121.275753,6.17610135 121.216914,6.17230528 121.147636,6.17230528" id="mercado_r" fill={ primary } />
                                <path d="M102.540801,10.0128308 C103.06276,9.47711121 103.794926,9.20853968 104.740146,9.20853968 C105.609444,9.20853968 106.336865,9.46050343 106.925255,9.96775249 C107.511273,10.473578 107.839158,11.2166576 107.905114,12.1927205 L101.560468,12.1927205 C101.692855,11.2754966 102.02074,10.5499738 102.540801,10.0128308 L102.540801,10.0128308 Z M107.525982,16.9178713 C107.370344,17.1399411 107.202368,17.3302188 107.018259,17.4782653 C106.494402,17.9100676 105.78264,18.0410318 104.944659,18.0410318 C104.15223,18.0410318 103.532523,17.9209812 102.970705,17.5669983 C102.045889,16.9985377 101.52488,16.0357609 101.469362,14.6231506 L111.730598,14.6231506 C111.744359,13.4069865 111.705449,12.4755273 111.607226,11.8273494 C111.436877,10.7241183 111.061541,9.75137684 110.485963,8.91481922 C109.845852,7.9658032 109.032071,7.27112348 108.050314,6.82935652 C107.069031,6.39186014 105.965325,6.17121391 104.740146,6.17121391 C102.673189,6.17121391 100.995803,6.82271341 99.7022943,8.12381437 C98.4083109,9.42776238 97.7587095,11.2968494 97.7587095,13.7372441 C97.7587095,16.3422931 98.4761656,18.2222938 99.9106033,19.3772463 C101.342668,20.5326733 102.998701,21.1115731 104.872534,21.1115731 C107.143054,21.1115731 108.910597,20.4263835 110.171839,19.0560044 C110.852283,18.3347522 111.278392,17.6210922 111.45823,16.9178713 L107.525982,16.9178713 Z" id="mercado_e" fill={ primary } />
                                <path d="M96.2702253,20.7564513 L92.8827126,20.7564513 L92.8827126,12.2266953 C92.8827126,11.4475532 92.6250548,9.59412489 90.3905965,9.59412489 C88.9015904,9.59412489 87.8235082,10.668411 87.8235082,12.2266953 L87.8235082,20.7564513 L84.432674,20.7564513 L84.432674,12.2266953 C84.432674,11.4475532 84.2011141,9.59412489 81.9680794,9.59412489 C80.4525008,9.59412489 79.399093,10.668411 79.399093,12.2266953 L79.399093,20.7564513 L76.0096823,20.7564513 L76.0096823,12.3078362 C76.0096823,8.78603775 78.3461597,6.1230988 81.9680794,6.1230988 C83.7659902,6.1230988 85.2284239,6.87851555 86.1798125,8.08803647 C87.1805499,6.87851555 88.669556,6.1230988 90.3905965,6.1230988 C94.0884375,6.1230988 96.2702253,8.67832443 96.2702253,12.3078362 L96.2702253,20.7564513 Z" id="mercado_m" fill={ primary } />
                            </g>
                        </g>
                    </svg>
                );
            } }
        />
    );
}
