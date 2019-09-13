/* @flow */
/** @jsx node */

import { node, type ComponentNode } from 'jsx-pragmatic/src';

import { SVGLogo, getLogoColors, type SVGLogoProps } from '../../lib';
import { LOGO_COLOR, LOGO } from '../../constants';
import { type LogoColorMap } from '../../types';

const LOGO_COLORS : LogoColorMap = {
    [ LOGO_COLOR.DEFAULT ]: {
        primary:   '#ED1C24',
        secondary: '#ffffff',
        tertiary:  '#003a7d'
    },
    [ LOGO_COLOR.WHITE ]: {
        primary:   '#ffffff',
        secondary: '#000000',
        tertiary:  '#2C2E2F'
    },
    [ LOGO_COLOR.BLACK ]: {
        primary:    '#FFFFFF',
        secondary:  '#003A7D',
        tertiary:   '#ED1C24'
    }
};

export function GiropayLogo({ logoColor = LOGO_COLOR.DEFAULT, ...props } : { logoColor? : $Values<typeof LOGO_COLOR> }) : ComponentNode<SVGLogoProps> {

    const { primary, secondary, tertiary } = getLogoColors(LOGO.GIROPAY, LOGO_COLORS, logoColor);

    return (
        <SVGLogo

            { ...props }
            name={ LOGO.GIROPAY }
            logoColor={ logoColor }
            render={ () => {
                return (
                    <svg width="75px" height="32px" viewBox="0 0 75 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>logo giropay</title>
                        <desc>Created with Sketch.</desc>
                        <defs>
                            <polygon id="path-1" points="0 0.017902439 46.0918699 0.017902439 46.0918699 19.8373984 0 19.8373984" />
                            <polygon id="path-3" points="0 19.9821138 46.0918699 19.9821138 46.0918699 0.162601626 0 0.162601626" />
                        </defs>
                        <g id="SPB_&amp;_AltPay_NewAssets" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="matrix(1.614571, 0, 0, 1.614571, -161.457123, -256.816772)">
                            <g id="logo-giropay" transform="translate(100.000000, 159.000000)">
                                <g id="Group-3" transform="translate(0.000000, 0.144715)">
                                    <mask id="mask-2" fill={  secondary }>
                                        <polygon id="" points="0 0.017902439 46.0918699 0.017902439 46.0918699 19.8373984 0 19.8373984" transform="matrix(1, 0, 0, 1, 0, 0)" />
                                    </mask>
                                    <g id="Clip-2" />
                                    <path d="M0,3.5735122 C0,1.60977236 1.5998374,0.017902439 3.57349593,0.017902439 L42.5182114,0.017902439 C44.4918699,0.017902439 46.0918699,1.60977236 46.0918699,3.5735122 L46.0918699,16.2818049 C46.0918699,18.2455447 44.4918699,19.8374146 42.5182114,19.8374146 L3.57349593,19.8374146 C1.5998374,19.8374146 0,18.2455447 0,16.2818049 L0,3.5735122 Z" id="Fill-1" fill={  tertiary } mask="url(#mask-2)" />
                                </g>
                                <path d="M1.46738211,3.84021138 L1.46738211,16.3065528 C1.46738211,17.5338699 2.46738211,18.5288293 3.70087805,18.5288293 L24.1036423,18.5288293 L24.1036423,1.61793496 L3.70087805,1.61793496 C2.46738211,1.61793496 1.46738211,2.61289431 1.46738211,3.84021138" id="Fill-4" fill={  secondary } />
                                <path d="M5.67102439,10.0205528 C5.67102439,9.34152846 6.00582114,8.77730081 6.64663415,8.77730081 C7.42126829,8.77730081 7.74630894,9.39892683 7.74630894,9.95356098 C7.74630894,10.7187642 7.25866667,11.235187 6.64663415,11.235187 C6.13004878,11.235187 5.67102439,10.795187 5.67102439,10.0205528 Z M9.41053659,7.57226016 L7.8515122,7.57226016 L7.8515122,8.47112195 L7.8324878,8.47112195 C7.46907317,7.85908943 6.87606504,7.45746341 6.13964228,7.45746341 C4.59021138,7.45746341 3.8921626,8.56689431 3.8921626,10.0491707 C3.8921626,11.5221789 4.74321951,12.5550244 6.11102439,12.5550244 C6.79964228,12.5550244 7.37346341,12.2872195 7.78468293,11.7038049 L7.80370732,11.7038049 L7.80370732,11.9716098 C7.80370732,12.9472195 7.26826016,13.4158374 6.27362602,13.4158374 C5.55622764,13.4158374 5.11622764,13.2628293 4.59021138,13.0046179 L4.50419512,14.3626667 C4.90582114,14.5060813 5.58500813,14.6782764 6.40744715,14.6782764 C8.41590244,14.6782764 9.41053659,14.0182764 9.41053659,11.9716098 L9.41053659,7.57226016 Z" id="Fill-6" fill={  primary } />
                                <mask id="mask-4" fill={  secondary }>
                                    <polygon id="" points="0 19.9821138 46.0918699 19.9821138 46.0918699 0.162601626 0 0.162601626" transform="matrix(1, 0, 0, 1, 0, 0)" />
                                </mask>
                                <g id="Clip-9" />
                                <path d="M10.5985366,6.75918699 L12.32,6.75918699 L12.32,5.49674797 L10.5985366,5.49674797 L10.5985366,6.75918699 Z M10.598374,12.5549593 L12.3198374,12.5549593 L12.3198374,7.57219512 L10.598374,7.57219512 L10.598374,12.5549593 Z" id="Fill-8" fill={  primary } mask="url(#mask-4)" />
                                <path d="M17.1133333,7.51479675 C16.9411382,7.48617886 16.7307317,7.45739837 16.5299187,7.45739837 C15.7839024,7.45739837 15.3534959,7.85918699 15.0570732,8.4904065 L15.0380488,8.4904065 L15.0380488,7.57219512 L13.4694309,7.57219512 L13.4694309,12.5549593 L15.1910569,12.5549593 L15.1910569,10.4508943 C15.1910569,9.47544715 15.6404878,8.89203252 16.4439024,8.89203252 C16.6447154,8.89203252 16.835935,8.89203252 17.0273171,8.94943089 L17.1133333,7.51479675 Z" id="Fill-10" fill={  primary } mask="url(#mask-4)" />
                                <path d="M20.0773496,11.4647154 C19.2835285,11.4647154 18.9583252,10.804878 18.9583252,10.0682927 C18.9583252,9.32243902 19.2835285,8.66243902 20.0773496,8.66243902 C20.8711707,8.66243902 21.196374,9.32243902 21.196374,10.0682927 C21.196374,10.804878 20.8711707,11.4647154 20.0773496,11.4647154 M20.0773496,12.6697561 C21.7223902,12.6697561 22.9752358,11.7133333 22.9752358,10.0682927 C22.9752358,8.41382114 21.7223902,7.45739837 20.0773496,7.45739837 C18.4323089,7.45739837 17.1794634,8.41382114 17.1794634,10.0682927 C17.1794634,11.7133333 18.4323089,12.6697561 20.0773496,12.6697561" id="Fill-11" fill={  primary } mask="url(#mask-4)" />
                                <path d="M29.3757073,10.0110244 C29.3757073,10.8048455 28.9836748,11.3500488 28.3332683,11.3500488 C27.7594472,11.3500488 27.2812358,10.8048455 27.2812358,10.0780163 C27.2812358,9.332 27.7020488,8.77720325 28.3332683,8.77720325 C29.0026992,8.77720325 29.3757073,9.35102439 29.3757073,10.0110244 Z M25.5597724,14.5633821 L27.2812358,14.5633821 L27.2812358,11.856878 L27.3002602,11.856878 C27.6254634,12.4498862 28.2758699,12.6697236 28.8783089,12.6697236 C30.360748,12.6697236 31.1545691,11.4456585 31.1545691,9.97265041 C31.1545691,8.76777236 30.399122,7.45736585 29.0218862,7.45736585 C28.2376585,7.45736585 27.5106667,7.77297561 27.166439,8.47118699 L27.147252,8.47118699 L27.147252,7.5721626 L25.5597724,7.5721626 L25.5597724,14.5633821 Z" id="Fill-12" fill={  secondary } mask="url(#mask-4)" />
                                <path d="M33.505252,10.9769919 C33.505252,10.4987805 33.9642764,10.3169919 34.5476911,10.3169919 C34.8059024,10.3169919 35.0546829,10.3361789 35.2745203,10.3457724 C35.2745203,10.929187 34.8633008,11.5221951 34.2128943,11.5221951 C33.8112683,11.5221951 33.505252,11.3212195 33.505252,10.9769919 Z M36.9769593,12.5550407 C36.900374,12.1628455 36.8813496,11.770813 36.8813496,11.3786179 L36.8813496,9.52317073 C36.8813496,8.00252033 35.7815122,7.45747967 34.5094797,7.45747967 C33.7730569,7.45747967 33.1322439,7.56268293 32.5202114,7.81130081 L32.5488293,8.97813008 C33.0270407,8.7103252 33.5816748,8.60512195 34.1364715,8.60512195 C34.7580976,8.60512195 35.2650894,8.78674797 35.2745203,9.46577236 C35.0546829,9.42756098 34.7485041,9.39894309 34.4711057,9.39894309 C33.5530569,9.39894309 31.8984228,9.58056911 31.8984228,11.1013821 C31.8984228,12.1820325 32.7784228,12.6698374 33.7634634,12.6698374 C34.4711057,12.6698374 34.9493171,12.392439 35.3415122,11.770813 L35.3606992,11.770813 C35.3606992,12.0290244 35.3893171,12.2872358 35.3989106,12.5550407 L36.9769593,12.5550407 Z" id="Fill-13" fill={  secondary } mask="url(#mask-4)" />
                                <path d="M37.750748,14.5634634 C38.1045691,14.6398862 38.4583902,14.6782602 38.8218049,14.6782602 C40.3998537,14.6782602 40.7728618,13.463626 41.2606667,12.2107805 L43.0873333,7.5722439 L41.3658699,7.5722439 L40.3426179,10.8239512 L40.3234309,10.8239512 L39.2522114,7.5722439 L37.3967642,7.5722439 L39.414813,12.6698049 C39.2904228,13.1098049 38.9653821,13.3584228 38.5445691,13.3584228 C38.3053821,13.3584228 38.0949756,13.3296423 37.8655447,13.2532195 L37.750748,14.5634634 Z" id="Fill-14" fill={  secondary } mask="url(#mask-4)" />
                            </g>
                        </g>
                    </svg>
                );
            } }
        />
    );
}
