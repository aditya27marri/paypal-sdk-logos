/* @flow */
/** @jsx node */

import { node, type ComponentNode } from 'jsx-pragmatic/src';

import { SVGLogo, getLogoColors, type SVGLogoProps } from '../../lib';
import { LOGO_COLOR, LOGO } from '../../constants';
import { type LogoColorMap } from '../../types';

const LOGO_COLORS : LogoColorMap = {
    [ LOGO_COLOR.DEFAULT ]: {
        primary:   '#EC1D24',
        secondary: '#EDA42D',
        tertiary:  '#FEFEFE'
    },
    [ LOGO_COLOR.WHITE ]: {
        primary:   '#EC1D24',
        secondary: '#EDA42D',
        tertiary:  '#FEFEFE'
    },
    [ LOGO_COLOR.BLACK ]: {
        primary:   '#EC1D24',
        secondary: '#EDA42D',
        tertiary:  '#FEFEFE'
    }
};

export function OxxoLogo({ logoColor = LOGO_COLOR.DEFAULT, ...props } : { logoColor? : $Values<typeof LOGO_COLOR> }) : ComponentNode<SVGLogoProps> {

    const { primary, secondary } = getLogoColors(LOGO.OXXO, LOGO_COLORS, logoColor);

    return (
        <SVGLogo

            { ...props }
            name={ LOGO.OXXO }
            logoColor={ logoColor }
            render={ () => {
                return (
                    <svg width="42px" height="20px" viewBox="0 0 42 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="SPB_&amp;_AltPay_NewAssets" transform="translate(-100.000000, -159.000000)">
                                <g id="logo-OXXO" transform="translate(100.000000, 159.000000)">
                                    <path d="M0.142456528,1.48437917 C0.142456528,0.77043992 0.728159303,0.186243119 1.44446761,0.186243119 L40.6503931,0.186243119 C41.3667014,0.186243119 41.9524042,0.77043992 41.9524042,1.48437917 L41.9524042,18.1011373 C41.9524042,18.8150765 41.3667014,19.3990362 40.6503931,19.3990362 L1.44446761,19.3990362 C0.728159303,19.3990362 0.142456528,18.8150765 0.142456528,18.1011373 L0.142456528,1.48437917 Z" id="Fill-2" fill={ secondary } />
                                    <polygon id="Fill-4" fill="#FEFEFE" points="0.142480318 17.5124813 41.952428 17.5124813 41.952428 2.07265562 0.142480318 2.07265562" />
                                    <path d="M35.5752619,6.08262231 C33.662331,6.08262231 32.1029152,7.63763417 32.1029152,9.54463469 C32.1029152,11.4511608 33.662331,13.0064099 35.5752619,13.0064099 C37.4877171,13.0064099 39.0471329,11.4511608 39.0471329,9.54463469 C39.0471329,7.63763417 37.4877171,6.08262231 35.5752619,6.08262231" id="Fill-6" fill={ primary } />
                                    <path d="M6.95585459,6.08262231 C5.04268574,6.08262231 3.48326994,7.63763417 3.48326994,9.54463469 C3.48326994,11.4511608 5.04268574,13.0064099 6.95585459,13.0064099 C8.86807185,13.0064099 10.4277255,11.4511608 10.4277255,9.54463469 C10.4277255,7.63763417 8.86807185,6.08262231 6.95585459,6.08262231" id="Fill-7" fill={ primary } />
                                    <path d="M35.5752619,15.0141446 C32.5537303,15.0141446 30.0893537,12.5573397 30.0893537,9.54480072 C30.0893537,6.53155015 32.5537303,4.07521964 35.5752619,4.07521964 C38.5970315,4.07521964 41.0609322,6.53155015 41.0609322,9.54480072 C41.0609322,12.5573397 38.5970315,15.0141446 35.5752619,15.0141446 Z M12.4411918,9.54480072 C12.4411918,12.5573397 9.97729109,15.0141446 6.95575943,15.0141446 C3.93351408,15.0141446 1.46985124,12.5573397 1.46985124,9.54480072 C1.46985124,6.53155015 3.93351408,4.07521964 6.95575943,4.07521964 C9.97729109,4.07521964 12.4411918,6.53155015 12.4411918,9.54480072 Z M35.3028697,3.03585692 C32.0884035,2.9620911 30.5772808,5.01709763 28.384107,7.55170056 L26.3151155,9.94232969 L29.591435,13.8526295 C30.3719756,15.0542296 28.8822636,16.2465793 27.9580332,15.1472077 L24.9288888,11.5447794 L21.9772989,14.9562705 C21.0373673,16.0421223 19.5645461,14.8288999 20.3617394,13.6386849 L23.5659761,9.92382894 L21.4667717,7.42693908 L22.8173138,5.75949957 L24.9522028,8.31639828 L26.7923372,6.18217058 C27.6953948,5.13569219 28.6162946,3.74884741 29.8098246,3.03585692 L0.142385159,3.03585692 L0.142385159,16.549707 L7.07875226,16.549707 C10.2934564,16.549707 11.7529554,14.6332189 13.8866549,12.0492806 L15.8999784,9.61097649 L12.5334959,5.77752594 C11.726073,4.59418943 13.1874752,3.36815887 14.1371606,4.44594623 L17.2483795,7.9779294 L20.1209875,4.49931378 C21.0354641,3.39164059 22.5356435,4.57118208 21.7662842,5.77942346 L18.6486421,9.56757088 L20.8051797,12.0153626 L19.4463112,13.6197098 L17.2997653,11.2058361 L15.5095892,13.3813347 C14.6310351,14.4484486 13.7415376,15.8094397 12.5646605,16.549707 L41.9523328,16.549707 L41.9523328,3.03585692 L35.3028697,3.03585692 Z" id="Fill-8" fill={ primary } />
                                </g>
                            </g>
                        </g>
                    </svg>
                );
            } }
        />
    );
}
