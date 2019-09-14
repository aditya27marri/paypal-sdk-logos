
/* @flow */
/** @jsx node */

import { node, type ComponentNode } from 'jsx-pragmatic/src';

import { SVGLogo, getLogoColors, type SVGLogoProps } from '../../lib';
import { LOGO_COLOR, LOGO } from '../../constants';
import { type LogoColorMap } from '../../types';

const LOGO_COLORS : LogoColorMap = {
    [ LOGO_COLOR.DEFAULT ]: {
        primary:    '#020202',
        secondary:  '#64CC07'
    },
    [ LOGO_COLOR.WHITE ]: {
        primary:    '#000000',
        secondary:  '#000000'
    },
    [ LOGO_COLOR.BLACK ]: {
        primary:    '#FFFFFF',
        secondary:  '#FFFFFF'
    }
};

export function TrustlyLogo({ logoColor = LOGO_COLOR.DEFAULT, ...props } : { logoColor? : $Values<typeof LOGO_COLOR> }) : ComponentNode<SVGLogoProps> {

    const { primary, secondary  } = getLogoColors(LOGO.VERKKOPANKKI, LOGO_COLORS, logoColor);

    return (
        <SVGLogo

            { ...props }
            name={ LOGO.TRUSTLY }
            render={ () => {
                return (
                    <svg width="70px" height="22px" viewBox="0 0 70 22" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <defs>
                            <polygon id="path-1" points="0.0103141832 0.0376094598 8.42702073 0.0376094598 8.42702073 10.4348955 0.0103141832 10.4348955" />
                            <polygon id="path-3" points="0.0163296552 0.144733127 4.23050511 0.144733127 4.23050511 4.4 0.0163296552 4.4" />
                        </defs>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="SPB_&amp;_AltPay_NewAssets" transform="translate(-100.000000, -159.000000)">
                                <g transform="translate(100.000000, 159.000000)">
                                    <path d="M57.9530181,6.77372667 C58.0233808,6.75539333 58.0971891,6.75631 58.1704534,6.75539333 C58.8242098,6.75667667 59.4772409,6.75502667 60.1309974,6.75631 C60.2972927,6.75906 60.4775518,6.76016 60.6211788,6.85861 C60.7218264,6.93249333 60.7421373,7.06852667 60.7428627,7.18604333 C60.7428627,10.36266 60.7425,13.5390933 60.7428627,16.7153433 C60.7421373,16.84936 60.7318005,16.9985933 60.6360492,17.10181 C60.5343135,17.19916 60.3876036,17.2160267 60.2541321,17.2165767 C59.5459715,17.2160267 58.8374482,17.2176767 58.1294689,17.2158433 C58.0048834,17.2110767 57.863614,17.2141933 57.7655052,17.12491 C57.6782772,17.00666 57.6904275,16.84991 57.6857124,16.7105767 C57.6853497,13.5363433 57.6857124,10.3619267 57.6857124,7.18714333 C57.6715674,7.00857667 57.776386,6.82212667 57.9530181,6.77372667" fill={ primary } />
                                    <path d="M20.3658109,6.94398833 C20.6247746,6.89118833 20.8913549,6.905855 21.1544896,6.90383833 C21.7431425,6.914655 22.3307073,6.90154646 22.9199041,6.90347167 C23.3788938,6.91813833 23.8380648,6.893205 24.2974171,6.907505 C24.5192047,6.92858833 24.7413549,6.888805 24.9636865,6.91263833 C25.3952927,6.91703833 25.8263549,6.91098833 26.2577798,6.903105 C26.6892047,6.90897167 27.1206295,6.89393833 27.5516917,6.91263833 C27.9025984,6.905855 28.2565881,6.88202167 28.6051373,6.936105 C28.7476762,6.95792167 28.8847746,7.07342167 28.8791528,7.22888833 C28.8838679,7.83682167 28.8787902,8.44438833 28.8818731,9.05232167 C28.8773394,9.138855 28.8913031,9.241705 28.8265622,9.31027167 C28.7513031,9.38727167 28.6374171,9.399555 28.536044,9.401205 C27.8282461,9.403955 27.1202668,9.39918833 26.4128316,9.40322167 C26.2891528,9.39717167 26.1348264,9.45987167 26.1491528,9.60947167 C26.1438938,11.977405 26.1482461,14.3455217 26.146614,16.713455 C26.1408109,16.8502217 26.1272098,17.0097217 26.0086088,17.0982717 C25.8550078,17.2093717 25.6564326,17.2121217 25.4750855,17.216155 C24.7798005,17.2168883 24.0846969,17.216155 23.3894119,17.2165217 C23.2191269,17.2121217 23.0405,17.2223883 22.8812772,17.1510717 C22.7434534,17.0942383 22.7091788,16.9272217 22.7100855,16.792655 C22.7091788,14.411155 22.7120803,12.030205 22.7088161,9.648705 C22.7225984,9.51578833 22.6185052,9.401205 22.4853964,9.40762167 C21.793013,9.391305 21.0989974,9.411105 20.4062513,9.39808833 C20.2586347,9.40432167 20.1059404,9.29322167 20.1188161,9.13262167 C20.1122876,8.510205 20.1153705,7.88797167 20.117728,7.26573833 C20.1090233,7.11338833 20.2181943,6.97332167 20.3658109,6.94398833" fill={ primary } />
                                    <path d="M53.4974456,8.01104333 C53.9424715,7.94156 54.3849585,7.85392667 54.8314352,7.79471 C54.9973679,7.76427667 55.2260466,7.81377667 55.239285,8.02021 C55.2715648,8.56434333 55.2441813,9.11104333 55.2539741,9.65646 C55.5600881,9.65829333 55.8665648,9.65352667 56.1728601,9.65829333 C56.3115907,9.65719333 56.4323679,9.75637667 56.4913057,9.87866 C56.5622124,10.0280767 56.5790777,10.19766 56.5770829,10.3619267 C56.5758135,10.67946 56.5770829,10.99681 56.5767202,11.3143433 C56.5732746,11.4281933 56.5687409,11.55451 56.4954767,11.64801 C56.4245699,11.7273933 56.3119534,11.73931 56.2125751,11.7385767 C55.9264093,11.7385767 55.6396995,11.73821 55.3535337,11.73821 C55.3528083,12.7615767 55.3522642,13.7851267 55.3540777,14.8084933 C55.344285,14.9426933 55.4356839,15.0653433 55.5551917,15.1161267 C55.7249326,15.1914767 55.9142591,15.17406 56.0946995,15.1615933 C56.1779378,15.2336433 56.1977047,15.3509767 56.2290777,15.45181 C56.3237409,15.85056 56.3737927,16.2601267 56.3931969,16.67006 C56.3953731,16.81966 56.407342,16.9723767 56.3766943,17.1201433 C56.175399,17.2495767 55.922057,17.2609433 55.694285,17.3161267 C54.8791295,17.4462933 53.9821865,17.51211 53.2335855,17.0939267 C52.6318756,16.7661267 52.2800622,16.0811933 52.2671865,15.40176 C52.2548549,14.1668267 52.2622902,12.9318933 52.2671865,11.6967767 C52.0606321,11.6885267 51.8515389,11.7158433 51.6477047,11.67991 C51.4250104,11.6195933 51.3865648,11.3552267 51.3914611,11.15796 C51.394544,10.79496 51.385114,10.43141 51.3959948,10.0685933 C51.3959948,9.88581 51.5135078,9.70119333 51.700658,9.67186 C51.9385855,9.64014333 52.1803212,9.66397667 52.4198808,9.65682667 C52.4229637,9.32261 52.4182487,8.98857667 52.4216943,8.65436 C52.4191554,8.46296 52.5533523,8.30071 52.7118497,8.21179333 C52.9501399,8.07172667 53.2328601,8.06219333 53.4974456,8.01104333" fill={ primary } />
                                    <path d="M45.7866373,9.817885 C46.6879326,9.40446833 47.6974922,9.330585 48.6745907,9.361935 C49.1888912,9.39255167 49.7160674,9.398785 50.2082435,9.569835 C50.3063523,9.589635 50.3623886,9.67946833 50.3694611,9.77590167 C50.4120777,10.1838183 50.3366373,10.5965017 50.2216632,10.986635 C50.1594611,11.157685 50.1014301,11.3604517 49.9335026,11.4545017 C49.6157824,11.4495517 49.3027772,11.376585 48.9870518,11.3437683 C48.6163782,11.3052683 48.2333731,11.2449517 47.8672332,11.3401017 C47.7156269,11.369435 47.5712746,11.5599183 47.6838912,11.701635 C47.8246166,11.8499517 48.0166632,11.9330017 48.1952902,12.0257683 C48.788114,12.3007683 49.3921813,12.5801683 49.8887098,13.017235 C50.2086062,13.2981017 50.4829845,13.6433183 50.6349534,14.0470183 C50.7404974,14.3112017 50.7829326,14.5959183 50.7970777,14.8791683 C50.800886,15.4038683 50.6969741,15.9511183 50.3821554,16.379935 C49.9855492,16.9328683 49.3201865,17.203835 48.6754974,17.320435 C47.7910674,17.4720517 46.8861451,17.4192517 45.9989948,17.3189683 C45.4518705,17.2403183 44.8960415,17.164235 44.3777513,16.9605517 C44.2990466,16.742385 44.2887098,16.508635 44.2691244,16.2796517 C44.2542539,15.958085 44.2518964,15.633585 44.3106528,15.3164183 C44.3374922,15.1994517 44.3665078,15.064885 44.4716891,14.9930183 C44.5485803,14.974685 44.6252902,15.0100683 44.7009119,15.0251017 C45.2641762,15.1811183 45.8502902,15.2407017 46.4335026,15.2377683 C46.7347202,15.2328183 47.0557047,15.2594017 47.3337098,15.1195183 C47.4880363,15.0482017 47.5480622,14.811335 47.4015337,14.7009683 C47.1779326,14.5084683 46.8885026,14.422485 46.6259119,14.298185 C46.1973886,14.1137517 45.7677772,13.919235 45.3909378,13.6391017 C45.0093834,13.356035 44.6867668,12.9730517 44.5391503,12.512885 C44.3610674,11.952985 44.3661451,11.308385 44.6601088,10.7884517 C44.9089171,10.3429517 45.3341762,10.0281683 45.7866373,9.817885" fill={ primary } />
                                    <path d="M31.1743912,9.64921833 C31.8377591,9.622635 32.5023964,9.642435 33.1664896,9.63216833 C33.6505052,9.63601833 34.1348834,9.62336833 34.618899,9.63051833 C34.7394948,9.62226833 34.8662565,9.71155167 34.863899,9.84171833 C34.8673446,10.4005183 34.8655311,10.9598683 34.8646244,11.519035 C34.868614,11.6611183 34.7688731,11.8079683 34.6212565,11.817135 C34.1843912,11.838585 33.7371891,11.8222683 33.3121114,11.9438183 C33.0451684,12.0369517 32.772785,12.1731683 32.6070337,12.4131517 C32.4721114,12.613535 32.4383808,12.8628683 32.4391062,13.1001017 C32.4387435,14.276735 32.4391062,15.4533683 32.4387435,16.6300017 C32.4367487,16.783635 32.4218782,16.9510183 32.3232254,17.0760517 C32.2318264,17.1827517 32.085842,17.218135 31.9512824,17.2161183 C31.3094948,17.216485 30.6671632,17.2174017 30.025013,17.2157517 C29.8433031,17.2141017 29.6474482,17.1633183 29.5241321,17.020135 C29.4060751,16.8811683 29.3805052,16.6886683 29.3825,16.5117517 C29.3835881,14.765685 29.381956,13.019985 29.3832254,11.2739183 C29.3828627,10.8616017 29.4829663,10.4183017 29.7907124,10.1266183 C30.1619301,9.779385 30.6860233,9.679835 31.1743912,9.64921833" fill={ primary } />
                                    <path d="M36.1322047,9.67501333 C36.237386,9.63174667 36.3527228,9.63614667 36.464614,9.63688 C37.0811943,9.63963 37.6985,9.63486333 38.315443,9.63926333 C38.6204689,9.64879667 38.9517902,9.87576333 38.9604948,10.20723 C38.9619456,11.4357467 38.9601321,12.6648133 38.9612202,13.89333 C38.9623083,14.1120467 39.0081891,14.3621133 39.190443,14.50218 C39.4341736,14.6680967 39.8213497,14.61438 39.9794845,14.3522133 C40.0556503,14.2275467 40.0853912,14.0783133 40.0877487,13.9331133 C40.0877487,12.71523 40.0870233,11.4971633 40.0881114,10.27928 C40.0924637,10.11043 40.0908316,9.91939667 40.2056244,9.78299667 C40.2966606,9.66988 40.4486295,9.63926333 40.5864534,9.63724667 C41.2146399,9.63724667 41.8431891,9.63761333 42.4717383,9.63724667 C42.6494585,9.64091333 42.8409611,9.67703 42.9747953,9.80481333 C43.1102617,9.93773 43.1445363,10.13848 43.1452617,10.3214467 C43.1445363,11.8828967 43.144899,13.4441633 43.1452617,15.0057967 C43.1345622,15.4831967 43.0651062,15.9752633 42.8293549,16.3967467 C42.6278782,16.76103 42.2856762,17.04593 41.8867124,17.1594133 C41.5798731,17.2578633 41.2547176,17.2332967 40.9380855,17.23568 L38.5832927,17.23568 C37.9979041,17.22523 37.3807798,17.2974633 36.8331114,17.0402467 C36.3991477,16.8514133 36.0756244,16.4565133 35.9309093,16.0066133 C35.7408575,15.46853 35.7863756,14.89103 35.7820233,14.3307633 C35.7827487,12.9953633 35.7809352,11.6595967 35.7831114,10.3241967 C35.7938109,10.07468 35.8817642,9.77694667 36.1322047,9.67501333" fill={ primary } />
                                    <g transform="translate(61.476684, 9.598600)">
                                        <mask id="mask-2" fill="white">
                                            <use href="#path-1" />
                                        </mask>
                                        <g />
                                        <path d="M0.065738342,0.1661 C0.16511658,0.0570166667 0.323795337,0.0462 0.461619171,0.03905 C1.15599741,0.0383166667 1.85037565,0.0396 2.54475389,0.0386833333 C2.6867487,0.04015 2.83708549,0.0227333333 2.9701943,0.0878166667 C3.18490933,0.192316667 3.34703368,0.393066667 3.42591969,0.618933333 C3.75959845,1.56841667 4.08656736,2.52083333 4.4240544,3.4694 C4.73832902,2.6697 5.05895078,1.8733 5.37485751,1.07451667 C5.46516839,0.8646 5.53081606,0.643133333 5.64306995,0.44385 C5.77055699,0.23595 5.9771114,0.0399666667 6.23335492,0.03905 C6.82182642,0.03905 7.41066062,0.03795 7.99949482,0.0396 C8.13840674,0.0515166667 8.31159326,0.0553666667 8.40299223,0.181133333 C8.44923575,0.281966667 8.42130829,0.4015 8.38286269,0.50105 C7.08876943,3.5761 5.79340674,6.65041667 4.49949482,9.72546667 C4.38252591,10.0419 4.16037565,10.39775 3.79641192,10.4327667 C3.22534974,10.4338667 2.65410622,10.4379 2.08340674,10.43075 C1.94050518,10.42195 1.74156736,10.3906 1.70910622,10.2202833 C1.69641192,10.1097333 1.74555699,10.0059667 1.78472798,9.90641667 C2.11840674,9.10965 2.44900259,8.3116 2.78286269,7.5152 C2.80226684,7.46991667 2.81876943,7.42023333 2.79229275,7.37421667 C1.88428756,5.104 0.976463731,2.8336 0.0682772021,0.563383333 C0.0205829016,0.44 -0.0327331606,0.27885 0.065738342,0.1661" fill={ primary } mask="url(#mask-2)" />
                                    </g>
                                    <path d="M5.64392228,6.89753167 C5.66314508,6.26649833 5.63920725,5.636015 5.6616943,5.00534833 C5.70195337,4.226365 6.02275648,3.467915 6.54358549,2.89389833 C7.05679793,2.32043167 7.7651399,1.92864833 8.52117617,1.80764833 C9.37931088,1.662815 10.2893109,1.86649833 11.0049067,2.367915 C11.8978601,2.976765 12.4681969,4.03423167 12.4906839,5.12323167 C12.4926788,5.71539833 12.4906839,6.30738167 12.4914093,6.89954833 C10.2087927,6.898265 7.92653886,6.90303167 5.64392228,6.89753167 M11.3588964,10.277465 C11.3668756,10.3702317 11.2665907,10.410015 11.1904249,10.410015 C10.7760466,10.4222983 10.3607617,10.4002983 9.94656477,10.421565 C9.93042487,10.4928817 9.9159171,10.565115 9.91646114,10.6389983 C9.91827461,11.7628317 9.9159171,12.8870317 9.91754922,14.010865 C9.91428497,14.1353483 9.92843005,14.2629483 9.90177202,14.385965 C9.85788601,14.5005483 9.72278238,14.5175983 9.61723834,14.5199817 C9.30205699,14.5260317 8.98723834,14.5199817 8.67205699,14.522365 C8.49488083,14.5199817 8.30881865,14.541065 8.1436114,14.4620483 C8.12674611,14.3663483 8.11187565,14.269915 8.11187565,14.1727483 C8.11387047,13.0476317 8.11133161,11.9223317 8.11296373,10.797215 C8.11133161,10.685015 8.12166839,10.570615 8.10172021,10.459515 C8.0128601,10.378115 7.87666839,10.4250483 7.7678601,10.4118483 C7.43581347,10.3980983 7.09705699,10.4499817 6.77008808,10.3749983 C6.74143523,10.013465 6.75956995,9.64918167 6.75757513,9.286915 C6.74107254,9.13933167 6.91135751,9.099915 7.02415544,9.104315 C8.3728342,9.103215 9.7216943,9.104315 11.0703731,9.10394833 C11.1779119,9.10229833 11.3400363,9.11788167 11.3565389,9.25354833 C11.3668756,9.594365 11.3625233,9.936465 11.3588964,10.277465 M17.8946477,7.30544833 C17.5986891,7.006615 17.1638187,6.912565 16.7590518,6.90028167 C15.9665648,6.89863167 15.173715,6.90064833 14.3806839,6.89954833 C14.3830415,6.40069833 14.3748808,5.90148167 14.3873938,5.40263167 C14.4019016,4.26138167 14.0348549,3.12123167 13.3660466,2.20218167 C12.6558912,1.21823167 11.607342,0.488565 10.4407358,0.180198333 C9.59565803,-0.0475016667 8.69599482,-0.0590516667 7.84456995,0.144081667 C6.71078756,0.411565 5.67420725,1.07229833 4.9428342,1.98694833 C4.18716062,2.919565 3.76371503,4.11618167 3.75428497,5.32049833 L3.75428497,6.899915 C2.9601658,6.90064833 2.16604663,6.898265 1.37192746,6.90064833 C0.942860104,6.915315 0.468637306,7.025315 0.186823834,7.37969833 C-0.00866839378,7.61693167 -0.0289792746,7.947665 0.0274196891,8.239165 C0.60519171,10.850015 1.18115026,13.4615983 1.75892228,16.0724483 C1.83907772,16.445165 2.04780829,16.802665 2.37640933,17.0013983 C2.64879275,17.1740983 2.97775648,17.2252483 3.29456995,17.2144317 C7.18120207,17.2133317 11.0676528,17.214065 14.9541036,17.2138817 C15.3244145,17.2180983 15.7106839,17.1038817 15.9783523,16.835665 C16.1994145,16.6259317 16.3305285,16.337915 16.3927306,16.0418317 C16.9674197,13.4359317 17.5446477,10.8305817 18.1200622,8.22449833 C18.1929637,7.90549833 18.1302176,7.54249833 17.8946477,7.30544833" fill={ secondary } />
                                    <path d="M5.15798446,17.6518833 C5.64272539,17.57085 6.15466839,17.66545 6.57666321,17.9208333 C7.1854456,18.2827333 7.59692228,18.9696833 7.60472021,19.68725 C7.62466839,20.1604333 7.47668912,20.6363667 7.19723316,21.0164167 C6.87806218,21.4575167 6.3831658,21.7647833 5.84927979,21.8515 C5.30233679,21.9486667 4.72021244,21.8087833 4.2704715,21.48025 C3.83197409,21.16125 3.51951295,20.6686333 3.4273886,20.12945 C3.32601554,19.5726667 3.45712953,18.97665 3.78482383,18.5174 C4.10472021,18.0594333 4.61031606,17.7408 5.15798446,17.6518833" fill={ secondary } />
                                    <g transform="translate(10.518135, 17.481933)">
                                        <mask id="mask-4" fill="white">
                                            <use href="#path-3" />
                                        </mask>
                                        <g />
                                        <path d="M1.78171762,0.16951 C2.21695078,0.106443333 2.6739456,0.160893333 3.06728756,0.366043333 C3.5901114,0.629126667 3.99632902,1.12027667 4.15228756,1.69007667 C4.31513731,2.27436 4.22210622,2.92904333 3.88806477,3.43559333 C3.57959326,3.91647667 3.07037047,4.26096 2.51182124,4.36271 C1.96342746,4.47124333 1.37495596,4.33961 0.917779793,4.01602667 C0.465862694,3.69702667 0.142520725,3.19542667 0.0494896373,2.64487667 C-0.0529715026,2.07929333 0.0848523316,1.47447667 0.423608808,1.01247667 C0.7455,0.56716 1.24275389,0.25696 1.78171762,0.16951" fill={ secondary } mask="url(#mask-4)" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                );
            } }
        />
    );
}
