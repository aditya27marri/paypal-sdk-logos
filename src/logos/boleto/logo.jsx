/* @flow */
/** @jsx node */

import { node, type ComponentNode } from 'jsx-pragmatic/src';

import { SVGLogo, getLogoColors, type SVGLogoProps } from '../../lib';
import { LOGO_COLOR, LOGO } from '../../constants';
import { type LogoColorMap } from '../../types';

const LOGO_COLORS : LogoColorMap = {
    [ LOGO_COLOR.DEFAULT ]: {
        primary:   '#1A1919',
        secondary: '#FFFFFE'
    },
    [ LOGO_COLOR.WHITE ]: {
        primary:   '#1A1919',
        secondary: '#FFFFFE'
    },
    [ LOGO_COLOR.BLACK ]: {
        primary:   '#1A1919',
        secondary: '#FFFFFE'
    }
};

export function BoletoLogo({ logoColor = LOGO_COLOR.DEFAULT, ...props } : { logoColor? : $Values<typeof LOGO_COLOR> }) : ComponentNode<SVGLogoProps> {

    const { primary, secondary } = getLogoColors(LOGO.BOLETO, LOGO_COLORS, logoColor);

    return (
        <SVGLogo

            { ...props }
            name={ LOGO.BOLETO }
            logoColor={ logoColor }
            render={ () => {
                return (
                    <svg width="50px" height="23px" viewBox="0 0 50 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="SPB_&amp;_AltPay_NewAssets" transform="translate(-100.000000, -159.000000)">
                                <g id="Group-38-Copy-2" transform="translate(100.000000, 159.000000)">
                                    <polygon id="Fill-1" fill={ primary } points="3.77543103 22.2594828 6.12112069 22.2594828 6.12112069 0.294827586 3.77543103 0.294827586" />
                                    <polygon id="Fill-3" fill={ primary } points="6.86077586 22.2594828 7.58793103 22.2594828 7.58793103 0.294827586 6.86077586 0.294827586" />
                                    <polygon id="Fill-4" fill={ primary } points="8.22112069 22.2594828 9.52241379 22.2594828 9.52241379 0.294827586 8.22112069 0.294827586" />
                                    <polygon id="Fill-5" fill={ primary } points="10.7771552 22.2594828 11.5043103 22.2594828 11.5043103 0.294827586 10.7771552 0.294827586" />
                                    <polygon id="Fill-6" fill={ primary } points="11.8202586 22.2594828 12.3806034 22.2594828 12.3806034 0.294827586 11.8202586 0.294827586" />
                                    <polygon id="Fill-7" fill={ primary } points="1.99181034 22.2594828 2.71896552 22.2594828 2.71896552 0.294827586 1.99181034 0.294827586" />
                                    <polygon id="Fill-8" fill={ primary } points="0.388793103 22.2594828 1.69008621 22.2594828 1.69008621 0.294827586 0.388793103 0.294827586" />
                                    <polygon id="Fill-9" fill={ primary } points="16.2655172 22.2594828 18.6112069 22.2594828 18.6112069 0.294827586 16.2655172 0.294827586" />
                                    <polygon id="Fill-10" fill={ primary } points="19.350431 22.2594828 20.0775862 22.2594828 20.0775862 0.294827586 19.350431 0.294827586" />
                                    <polygon id="Fill-11" fill={ primary } points="20.7112069 22.2594828 22.0125 22.2594828 22.0125 0.294827586 20.7112069 0.294827586" />
                                    <polygon id="Fill-12" fill={ primary } points="23.2668103 22.2594828 23.9939655 22.2594828 23.9939655 0.294827586 23.2668103 0.294827586" />
                                    <polygon id="Fill-13" fill={ primary } points="24.3099138 22.2594828 24.8702586 22.2594828 24.8702586 0.294827586 24.3099138 0.294827586" />
                                    <polygon id="Fill-14" fill={ primary } points="14.4814655 22.2594828 15.2086207 22.2594828 15.2086207 0.294827586 14.4814655 0.294827586" />
                                    <polygon id="Fill-15" fill={ primary } points="12.8784483 22.2594828 14.1797414 22.2594828 14.1797414 0.294827586 12.8784483 0.294827586" />
                                    <polygon id="Fill-16" fill={ primary } points="25.7918103 22.2594828 27.0931034 22.2594828 27.0931034 0.294827586 25.7918103 0.294827586" />
                                    <polygon id="Fill-17" fill={ primary } points="28.3474138 22.2594828 29.074569 22.2594828 29.074569 0.294827586 28.3474138 0.294827586" />
                                    <polygon id="Fill-18" fill={ primary } points="29.3909483 22.2594828 29.9512931 22.2594828 29.9512931 0.294827586 29.3909483 0.294827586" />
                                    <polygon id="Fill-19" fill={ primary } points="32.0521552 22.2594828 32.7793103 22.2594828 32.7793103 0.294827586 32.0521552 0.294827586" />
                                    <polygon id="Fill-20" fill={ primary } points="30.4491379 22.2594828 31.750431 22.2594828 31.750431 0.294827586 30.4491379 0.294827586" />
                                    <polygon id="Fill-21" fill={ primary } points="33.7456897 22.2594828 34.4728448 22.2594828 34.4728448 0.294827586 33.7456897 0.294827586" />
                                    <polygon id="Fill-22" fill={ primary } points="34.7887931 22.2594828 35.3491379 22.2594828 35.3491379 0.294827586 34.7887931 0.294827586" />
                                    <polygon id="Fill-23" fill={ primary } points="37.450431 22.2594828 38.1775862 22.2594828 38.1775862 0.294827586 37.450431 0.294827586" />
                                    <polygon id="Fill-24" fill={ primary } points="35.8474138 22.2594828 37.1487069 22.2594828 37.1487069 0.294827586 35.8474138 0.294827586" />
                                    <polygon id="Fill-25" fill={ primary } points="38.8112069 22.2594828 41.1568966 22.2594828 41.1568966 0.294827586 38.8112069 0.294827586" />
                                    <polygon id="Fill-26" fill={ primary } points="41.8961207 22.2594828 42.6232759 22.2594828 42.6232759 0.294827586 41.8961207 0.294827586" />
                                    <polygon id="Fill-27" fill={ primary } points="43.2564655 22.2594828 44.5577586 22.2594828 44.5577586 0.294827586 43.2564655 0.294827586" />
                                    <polygon id="Fill-28" fill={ primary } points="45.8125 22.2594828 46.5396552 22.2594828 46.5396552 0.294827586 45.8125 0.294827586" />
                                    <polygon id="Fill-29" fill={ primary } points="46.8556034 22.2594828 47.4159483 22.2594828 47.4159483 0.294827586 46.8556034 0.294827586" />
                                    <polygon id="Fill-30" fill={ primary } points="48.3375 22.2594828 49.6387931 22.2594828 49.6387931 0.294827586 48.3375 0.294827586" />
                                    <polygon id="Fill-31" fill={ secondary } points="3.04224138 22.3090517 48.0056034 22.3090517 48.0056034 9.9987069 3.04224138 9.9987069" />
                                    <path d="M3.89008621,21.837069 L3.89008621,10.6991379 L8.06939655,10.6991379 C8.91982759,10.6991379 9.6012931,10.8107759 10.1172414,11.0362069 C10.6306034,11.2616379 11.0327586,11.6090517 11.3228448,12.0784483 C11.6159483,12.5452586 11.7612069,13.0349138 11.7612069,13.5482759 C11.7612069,14.0228448 11.6314655,14.4715517 11.375,14.8913793 C11.1181034,15.3116379 10.7293103,15.6512931 10.2081897,15.9103448 C10.8823276,16.1073276 11.4008621,16.4443966 11.7612069,16.9215517 C12.1241379,17.3956897 12.3056034,17.9586207 12.3056034,18.6068966 C12.3056034,19.1301724 12.1939655,19.6150862 11.9737069,20.0637931 C11.7534483,20.512069 11.4810345,20.8568966 11.1568966,21.1008621 C10.8327586,21.3418103 10.4258621,21.5258621 9.93836207,21.650431 C9.44827586,21.775 8.84956897,21.837069 8.13922414,21.837069 L3.89008621,21.837069 Z M5.36767241,15.3814655 L7.7762931,15.3814655 C8.42974138,15.3814655 8.8987069,15.3375 9.18146552,15.2517241 C9.55732759,15.1400862 9.84008621,14.9538793 10.0293103,14.6943966 C10.2185345,14.4353448 10.3146552,14.1112069 10.3146552,13.7193966 C10.3146552,13.3487069 10.2262931,13.0219828 10.0474138,12.7422414 C9.87112069,12.4594828 9.61724138,12.2650862 9.28793103,12.1612069 C8.95862069,12.0577586 8.39310345,12.0056034 7.59482759,12.0056034 L5.36767241,12.0056034 L5.36767241,15.3814655 Z M5.36767241,20.5301724 L8.14181034,20.5301724 C8.61896552,20.5301724 8.95344828,20.512069 9.14784483,20.4758621 C9.48491379,20.4163793 9.77025862,20.3150862 9.99827586,20.1724138 C10.2262931,20.0301724 10.412931,19.8228448 10.5607759,19.550431 C10.7086207,19.2780172 10.7810345,18.9646552 10.7810345,18.6094828 C10.7810345,18.1918103 10.675,17.8314655 10.4594828,17.5228448 C10.2469828,17.2142241 9.9512931,16.9991379 9.57284483,16.874569 C9.19698276,16.750431 8.65258621,16.687931 7.94482759,16.687931 L5.36767241,16.687931 L5.36767241,20.5301724 Z" id="Fill-32" fill={ primary } />
                                    <path d="M13.6435345,17.800431 C13.6435345,16.3094828 14.0581897,15.2051724 14.8905172,14.487069 C15.5827586,13.8905172 16.4306034,13.5926724 17.4288793,13.5926724 C18.5357759,13.5926724 19.4431034,13.9556034 20.1482759,14.6814655 C20.8508621,15.4047414 21.2034483,16.4081897 21.2034483,17.6862069 C21.2034483,18.7232759 21.0478448,19.5375 20.737069,20.1310345 C20.4258621,20.725 19.9719828,21.1862069 19.3758621,21.5155172 C18.7818966,21.8448276 18.1314655,22.0081897 17.4288793,22.0081897 C16.2982759,22.0081897 15.3857759,21.6478448 14.6883621,20.924569 C13.9909483,20.2012931 13.6435345,19.1590517 13.6435345,17.800431 Z M15.0435345,17.8030172 C15.0435345,18.8349138 15.2689655,19.6073276 15.7202586,20.1181034 C16.1737069,20.6314655 16.7418103,20.8883621 17.4288793,20.8883621 C18.1077586,20.8883621 18.6732759,20.6314655 19.1267241,20.1155172 C19.5780172,19.599569 19.8034483,18.8142241 19.8034483,17.7590517 C19.8034483,16.7633621 19.575431,16.0090517 19.1215517,15.4982759 C18.6681034,14.9849138 18.1030172,14.7280172 17.4288793,14.7280172 C16.7418103,14.7280172 16.1737069,14.9823276 15.7202586,15.4926724 C15.2689655,16.0034483 15.0435345,16.7737069 15.0435345,17.8030172 Z" id="Fill-33" fill={ primary } />
                                    <polygon id="Fill-34" fill={ primary } points="22.7771552 21.837069 24.1461207 21.837069 24.1461207 10.6991379 22.7771552 10.6991379" />
                                    <path d="M31.7711207,19.2237069 L33.1866379,19.4103448 C32.9663793,20.2323276 32.5543103,20.8724138 31.9525862,21.3262931 C31.3512931,21.7801724 30.5836207,22.0081897 29.6478448,22.0081897 C28.4706897,22.0081897 27.5375,21.6452586 26.8478448,20.9193966 C26.1581897,20.1961207 25.8133621,19.1771552 25.8133621,17.8676724 C25.8133621,16.5146552 26.1607759,15.4616379 26.8581897,14.7150862 C27.5556034,13.9659483 28.4603448,13.5926724 29.5724138,13.5926724 C30.6487069,13.5926724 31.5275862,13.9581897 32.2094828,14.6918103 C32.8909483,15.425431 33.2331897,16.4573276 33.2331897,17.7875 C33.2331897,17.8676724 33.2306034,17.9896552 33.225431,18.150431 L27.2133621,18.150431 C27.2650862,19.0344828 27.5142241,19.7137931 27.9650862,20.1831897 C28.4137931,20.6521552 28.9762931,20.8883621 29.6478448,20.8883621 C30.1482759,20.8883621 30.5758621,20.7560345 30.9284483,20.4913793 C31.2836207,20.2271552 31.5637931,19.8043103 31.7711207,19.2237069 Z M27.2909483,17.0301724 L31.7866379,17.0301724 C31.7271552,16.3512931 31.5534483,15.8431034 31.2706897,15.5034483 C30.837931,14.9771552 30.2724138,14.7125 29.5801724,14.7125 C28.9530172,14.7125 28.4267241,14.9224138 27.9987069,15.3426724 C27.5737069,15.7625 27.337931,16.325 27.2909483,17.0301724 Z" id="Fill-35" fill={ primary } />
                                    <path d="M37.887069,20.6159483 L38.0737069,21.8241379 C37.6900862,21.9047414 37.3452586,21.9461207 37.0443966,21.9461207 C36.549569,21.9461207 36.1655172,21.8681034 35.8909483,21.7099138 C35.6185345,21.5517241 35.4267241,21.3469828 35.3155172,21.0905172 C35.2038793,20.8336207 35.149569,20.2943966 35.149569,19.4724138 L35.149569,14.8215517 L34.1383621,14.8215517 L34.1383621,13.7637931 L35.149569,13.7637931 L35.149569,11.7672414 L36.5181034,10.9456897 L36.5181034,13.7637931 L37.887069,13.7637931 L37.887069,14.8215517 L36.5181034,14.8215517 L36.5181034,19.550431 C36.5181034,19.9418103 36.5413793,20.1935345 36.5909483,20.3047414 C36.6375,20.4163793 36.7155172,20.5043103 36.8241379,20.5719828 C36.9331897,20.6366379 37.0887931,20.6702586 37.2909483,20.6702586 C37.4413793,20.6702586 37.6409483,20.6521552 37.887069,20.6159483" id="Fill-36" fill={ primary } />
                                    <path d="M38.724569,17.800431 C38.724569,16.3094828 39.1396552,15.2051724 39.9715517,14.487069 C40.6637931,13.8905172 41.5116379,13.5926724 42.5099138,13.5926724 C43.6168103,13.5926724 44.524569,13.9556034 45.2297414,14.6814655 C45.9323276,15.4047414 46.2849138,16.4081897 46.2849138,17.6862069 C46.2849138,18.7232759 46.1293103,19.5375 45.8181034,20.1310345 C45.5068966,20.725 45.0534483,21.1862069 44.4568966,21.5155172 C43.8633621,21.8448276 43.2125,22.0081897 42.5099138,22.0081897 C41.3797414,22.0081897 40.4668103,21.6478448 39.7693966,20.924569 C39.0719828,20.2012931 38.724569,19.1590517 38.724569,17.800431 Z M40.124569,17.8030172 C40.124569,18.8349138 40.350431,19.6073276 40.8012931,20.1181034 C41.2551724,20.6314655 41.8228448,20.8883621 42.5099138,20.8883621 C43.1892241,20.8883621 43.7543103,20.6314655 44.2081897,20.1155172 C44.6590517,19.599569 44.8849138,18.8142241 44.8849138,17.7590517 C44.8849138,16.7633621 44.6564655,16.0090517 44.2030172,15.4982759 C43.7491379,14.9849138 43.1840517,14.7280172 42.5099138,14.7280172 C41.8228448,14.7280172 41.2551724,14.9823276 40.8012931,15.4926724 C40.350431,16.0034483 40.124569,16.7737069 40.124569,17.8030172 Z" id="Fill-37" fill={ primary } />
                                </g>
                            </g>
                        </g>
                    </svg>
                );
            } }
        />
    );
}
