import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _LOGO_COLORS;

/** @jsx node */
import { node } from 'jsx-pragmatic/src';
import { SVGLogo, getLogoColors } from '../../lib';
import { LOGO_COLOR, LOGO } from '../../constants';
var LOGO_COLORS = (_LOGO_COLORS = {}, _LOGO_COLORS[LOGO_COLOR.DEFAULT] = {
  primary: '#d03238',
  secondary: '#b3b1b1'
}, _LOGO_COLORS[LOGO_COLOR.WHITE] = {
  primary: '#ffffff',
  secondary: '#ffffff'
}, _LOGO_COLORS[LOGO_COLOR.BLACK] = {
  primary: '#d03238',
  secondary: '#b3b1b1'
}, _LOGO_COLORS);
export function P24Logo(_ref) {
  var _ref$logoColor = _ref.logoColor,
      logoColor = _ref$logoColor === void 0 ? LOGO_COLOR.DEFAULT : _ref$logoColor,
      props = _objectWithoutPropertiesLoose(_ref, ["logoColor"]);

  var _getLogoColors = getLogoColors(LOGO.P24, LOGO_COLORS, logoColor),
      primary = _getLogoColors.primary,
      secondary = _getLogoColors.secondary;

  return node(SVGLogo, _extends({}, props, {
    name: LOGO.P24,
    logoColor: logoColor,
    render: function render() {
      return node("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        viewBox: "0 0 100 32",
        height: "32",
        width: "100",
        preserveAspectRatio: "xMinYMin meet"
      }, node("g", {
        transform: "matrix(1.2953205,0,0,1.4482638,-127.73674,-229.48747)"
      }, node("g", {
        transform: "translate(99,159)"
      }, node("path", {
        transform: "matrix(0.77200971,0,0,0.69048194,-0.38599675,-0.54304623)",
        d: "M 34.123047 14.666016 L 32.416016 14.667969 L 30.496094 27.771484 L 32.208984 27.773438 L 34.123047 14.666016 z M 2.4082031 14.669922 L 0.5 27.771484 L 2.2753906 27.773438 L 2.9785156 22.916016 L 6.421875 22.933594 C 6.421875 22.933594 7.7610468 22.994689 8.7128906 22.419922 C 9.6646511 21.844634 9.9179688 20.537109 9.9179688 20.537109 C 9.9179688 20.537109 10.021944 20.051453 10.107422 19.458984 C 10.201364 18.808401 10.297704 18.027313 10.347656 17.611328 C 10.369589 17.428799 10.382812 17.316406 10.382812 17.316406 C 10.382812 17.316406 10.406035 17.181738 10.408203 16.972656 C 10.411247 16.680039 10.373345 16.24144 10.173828 15.824219 C 10.107822 15.686199 10.023752 15.551336 9.9179688 15.423828 C 9.7749921 15.251532 9.573657 15.118146 9.3457031 15.015625 C 9.1093266 14.909344 8.8444066 14.836083 8.5878906 14.785156 C 8.2611582 14.720236 7.9481918 14.691729 7.7226562 14.679688 C 7.5151753 14.668598 7.3808594 14.669922 7.3808594 14.669922 L 4.5292969 14.669922 L 2.4082031 14.669922 z M 3.9023438 16.636719 L 6.5097656 16.644531 C 6.5097656 16.644531 6.6871684 16.640189 6.9335938 16.644531 C 7.2136679 16.6496 7.5842469 16.667097 7.8886719 16.712891 C 8.149399 16.752066 8.3620627 16.811675 8.4277344 16.90625 C 8.5143382 17.03109 8.5484972 17.190294 8.5605469 17.335938 C 8.5776425 17.542977 8.5477921 17.723762 8.546875 17.736328 C 8.5451652 17.758038 8.3882592 18.81021 8.1777344 20.056641 C 8.0971356 20.533644 7.7783765 20.790093 7.4101562 20.878906 C 6.8022654 21.025453 6.1484375 21 6.1484375 21 L 3.2695312 20.990234 L 3.9023438 16.636719 z M 27.246094 18.195312 C 26.565902 18.205016 26.253806 18.2403 26 18.302734 C 26 18.302734 24.790129 18.501565 24.103516 19.472656 C 23.416902 20.4437 23.212891 22.568359 23.212891 22.568359 C 23.212891 22.568359 22.804576 24.916796 22.923828 25.699219 C 23.042829 26.481642 23.256401 27.206424 24.033203 27.546875 C 24.810173 27.88723 25.46875 27.873047 25.46875 27.873047 C 25.46875 27.873047 26.853325 27.996517 27.896484 27.714844 C 28.939685 27.433792 29.490234 26.595703 29.490234 26.595703 C 29.490234 26.595703 29.735609 26.235379 29.912109 25.804688 C 30.088777 25.374043 30.140682 25.073949 30.148438 25.037109 L 30.257812 24.53125 L 28.484375 24.533203 C 28.484375 24.533203 28.385914 25.868868 27.429688 25.992188 C 26.473716 26.115218 25.960314 26.068498 25.775391 26.060547 C 25.593178 26.052871 24.567122 26.102566 24.650391 25.125 C 24.650808 25.111821 24.651179 25.091912 24.652344 25.064453 C 24.69996 23.94948 24.808594 23.660156 24.808594 23.660156 L 30.375 23.642578 L 30.613281 22.072266 C 30.883598 20.286624 30.683916 18.929319 29.257812 18.398438 C 28.779056 18.220288 27.947801 18.185366 27.246094 18.195312 z M 37.748047 18.197266 C 37.067855 18.206824 36.755758 18.242238 36.501953 18.304688 C 36.501953 18.304688 35.292082 18.503803 34.605469 19.474609 C 33.918854 20.445938 33.714844 22.570313 33.714844 22.570312 C 33.714844 22.570312 33.306572 24.918749 33.425781 25.701172 C 33.545028 26.483643 33.758145 27.207998 34.535156 27.548828 C 35.311959 27.889232 35.970703 27.875 35.970703 27.875 C 35.970703 27.875 37.355488 27.998135 38.398438 27.716797 C 39.441597 27.435412 39.992187 26.597656 39.992188 26.597656 C 39.992188 26.597656 40.237604 26.237189 40.414062 25.806641 C 40.590771 25.376138 40.642384 25.077855 40.650391 25.041016 L 40.759766 24.533203 L 38.986328 24.535156 C 38.986328 24.535156 38.887867 25.871106 37.931641 25.994141 C 36.975669 26.117315 36.462059 26.072303 36.277344 26.064453 C 36.095172 26.056777 35.06916 26.104467 35.152344 25.126953 C 35.152802 25.113774 35.153175 25.093967 35.154297 25.066406 C 35.201874 23.951433 35.310547 23.662109 35.310547 23.662109 L 40.876953 23.644531 L 41.115234 22.076172 C 41.385759 20.290531 41.185607 18.931462 39.759766 18.400391 C 39.280716 18.222193 38.449796 18.187223 37.748047 18.197266 z M 46.277344 18.304688 L 43.757812 24.96875 L 43.179688 18.316406 L 41.541016 18.318359 L 42.371094 27.773438 L 44.355469 27.765625 L 46.90625 21.148438 L 47.486328 27.765625 L 49.505859 27.765625 L 53.117188 18.316406 L 51.417969 18.318359 L 48.898438 24.996094 L 48.300781 18.3125 L 46.277344 18.304688 z M 11.253906 18.310547 L 9.7929688 27.720703 L 11.617188 27.720703 L 12.427734 22.507812 C 12.596271 21.449811 13.285209 20.144531 14.638672 20.144531 L 15.582031 20.140625 L 15.865234 18.310547 L 14.873047 18.310547 C 14.184891 18.310547 13.533952 18.621542 12.978516 18.96875 L 13.076172 18.310547 L 11.253906 18.310547 z M 23.574219 18.310547 L 17.048828 18.320312 L 16.789062 20.167969 L 20.960938 20.167969 L 15.732422 25.884766 L 15.451172 27.771484 L 22.191406 27.769531 L 22.457031 25.939453 L 17.880859 25.951172 L 23.335938 20.005859 L 23.574219 18.310547 z M 59.283203 18.3125 L 56.183594 25.228516 L 55.087891 18.320312 L 53.347656 18.316406 L 54.962891 27.882812 L 54.755859 28.283203 C 54.755859 28.283203 54.42297 29.081956 54.011719 29.267578 C 53.600426 29.452827 52.910156 29.304688 52.910156 29.304688 L 52.650391 31.068359 L 53.066406 31.152344 C 53.459811 31.231491 53.623329 31.198848 54.033203 31.152344 C 54.443329 31.10608 54.748768 30.903232 55.25 30.449219 C 55.751441 29.99568 56.560547 28.207031 56.560547 28.207031 L 61.027344 18.330078 L 59.283203 18.3125 z M 37.816406 20.023438 C 38.153219 20.022293 38.536406 20.045829 38.880859 20.126953 C 39.109271 20.180351 39.326106 20.327316 39.382812 20.544922 C 39.516491 21.058003 39.375 21.841797 39.375 21.841797 L 35.558594 21.835938 L 35.710938 21.144531 C 35.710938 21.144531 35.842858 20.605552 36.107422 20.375 C 36.372026 20.144305 36.710486 20.103629 37.029297 20.068359 C 37.188702 20.050872 37.479594 20.024582 37.816406 20.023438 z M 27.330078 20.027344 C 27.666911 20.026207 28.050203 20.04988 28.394531 20.130859 C 28.623194 20.184445 28.839945 20.329507 28.896484 20.546875 C 29.030121 21.059954 28.886719 21.84375 28.886719 21.84375 L 25.072266 21.839844 L 25.224609 21.148438 C 25.224609 21.148438 25.35653 20.607886 25.621094 20.376953 C 25.885906 20.146258 26.224367 20.107486 26.542969 20.072266 C 26.702373 20.054561 26.993245 20.028481 27.330078 20.027344 z ",
        fill: primary
      }), node("path", {
        d: "m 18.656138,16.774358 c -0.0046,0.0239 -0.0083,0.04735 -0.01154,0.07058 -0.0065,0.118231 0.01306,-0.07708 0.01154,-0.07058",
        fill: primary
      }), node("path", {
        d: "m 26.763669,16.775893 c -0.0046,0.02391 -0.0083,0.04743 -0.01154,0.07066 -0.0065,0.118089 0.01306,-0.07731 0.01154,-0.07066",
        fill: primary
      }), node("path", {
        transform: "matrix(0.77200971,0,0,0.69048194,-0.38599675,-0.54304623)",
        d: "M 51.226562 0.78710938 C 50.728893 0.78574323 50.439453 0.79296875 50.439453 0.79296875 L 48.318359 5.6542969 C 48.318359 5.6542969 49.531198 5.9719517 51.199219 6.5273438 C 54.144731 7.5791572 56.515625 9.2929688 56.515625 9.2929688 L 66.666016 3.234375 C 66.745656 3.1868271 63.084253 2.0998969 59.082031 1.3945312 C 56.08052 0.86568549 52.71957 0.7912078 51.226562 0.78710938 z M 47.589844 0.90820312 C 47.589844 0.90820313 43.781742 1.1966088 40.910156 1.8066406 C 38.038322 2.4166724 34.904297 3.3691406 34.904297 3.3691406 L 35.34375 6.2011719 C 35.34375 6.2011719 37.385444 5.5830734 39.835938 5.25 C 42.979007 4.7627651 46.330078 5.2851562 46.330078 5.2851562 L 47.589844 0.90820312 z M 32.949219 4.0429688 C 32.949219 4.0429687 31.321834 4.6211203 28.267578 6.0117188 C 25.213321 7.4021267 22.914062 8.8925781 22.914062 8.8925781 L 25.453125 10.84375 C 25.453125 10.84375 27.099522 9.6851386 28.839844 8.8378906 C 30.525001 7.9290065 33.464844 6.8066406 33.464844 6.8066406 L 32.949219 4.0429688 z M 71.046875 5.0175781 L 58.333984 10.615234 L 60.566406 12.546875 L 78.900391 12.546875 C 78.900391 12.546875 78.861436 11.867776 78.373047 10.908203 C 78.067288 10.306786 77.515959 9.6724399 76.935547 9.0117188 C 76.724772 8.771647 75.878829 8.0196942 75.248047 7.5527344 C 73.629269 6.3552786 72.725403 5.8908131 71.046875 5.0175781 z M 20.621094 10.361328 C 20.621094 10.361328 18.007768 12.208509 16.898438 13.080078 C 15.819753 13.883157 13.6875 15.744141 13.6875 15.744141 L 19.160156 15.744141 C 19.160156 15.744141 20.387652 14.611026 21.257812 13.884766 C 22.127974 13.158363 23.712891 12.011719 23.712891 12.011719 L 20.621094 10.361328 z M 66.779297 14.519531 C 65.231195 14.543948 64.467235 14.626145 63.683594 14.955078 C 62.899953 15.283726 62.446574 15.882838 62.158203 16.728516 C 61.840059 17.527168 61.65625 19.259766 61.65625 19.259766 L 63.453125 19.261719 L 63.560547 18.464844 C 63.560547 18.464844 63.753461 17.029388 64.181641 16.751953 C 64.31878 16.663088 64.538495 16.579747 64.792969 16.529297 C 65.262594 16.436347 65.860733 16.425312 66.345703 16.445312 C 67.093861 16.476103 67.374266 16.483376 68.134766 16.582031 C 68.895557 16.68089 68.701172 17.517578 68.701172 17.517578 L 68.552734 18.767578 C 68.552734 18.767578 68.488006 19.327955 68.3125 19.677734 C 68.157306 19.987057 67.733373 20.195678 67.488281 20.287109 C 66.896194 20.507571 64.871094 21.095703 64.871094 21.095703 L 63.275391 21.619141 C 63.275391 21.619141 62.297563 21.944394 61.748047 22.636719 C 61.19878 23.329281 60.983257 24.116118 60.908203 24.527344 C 60.833113 24.938283 60.412109 27.769531 60.412109 27.769531 L 69.009766 27.773438 L 69.296875 25.810547 L 62.496094 25.820312 L 62.619141 25.021484 C 62.619141 25.021484 62.697988 24.196554 62.990234 23.927734 C 63.082461 23.842591 63.127078 23.730658 63.669922 23.509766 C 63.993778 23.377829 65.103516 23.039062 65.103516 23.039062 L 67.669922 22.240234 C 67.669922 22.240234 69.069743 21.828553 69.621094 20.957031 C 70.172403 20.085747 70.384766 18.416016 70.384766 18.416016 C 70.384766 18.416016 70.533003 16.793571 70.419922 16.285156 C 70.307099 15.776804 69.886071 15.166455 69.375 14.90625 C 68.863719 14.646045 68.327565 14.495353 66.779297 14.519531 z ",
        fill: secondary
      }), node("g", {
        transform: "translate(53.596306,9.56338)"
      }, node("path", {
        d: "M 4.7408782,5.7106164 1.839113,5.7061141 5.3711256,1.8647573 Z M 6.112171,5.7095319 7.0417209,0.01876197 5.3948175,0.01774319 0.26289873,5.6444944 0.02981113,7.0693723 4.5178982,7.0688465 4.1894639,9.0682502 l 1.376733,0.00181 0.3251187,-2.001047 1.2714396,0.00269 0.2297076,-1.3639812 z",
        fill: secondary
      })))));
    }
  }));
}