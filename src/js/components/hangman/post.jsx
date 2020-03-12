import React from 'react';
import PropTypes from 'prop-types';
import { getHangmanColour } from '../../utils/styles';

const Post = ({ failed }) => (
    <path d="M112.235,439.026 L112.19,437.304 L112.099,433.919 L112.006,430.619
        L111.91,427.406 L111.812,424.276 L111.711,421.229 L111.609,418.263
        L111.504,415.374 L111.398,412.562 L111.29,409.824 L111.181,407.159
        L111.07,404.564 L110.958,402.038 L110.845,399.578 L110.731,397.183
        L110.617,394.851 L110.502,392.58 L110.387,390.367 L110.271,388.211
        L110.155,386.11 L110.04,384.062 L109.924,382.066 L109.809,380.118
        L109.694,378.218 L109.58,376.364 L109.467,374.552 L109.357,372.783
        L109.247,371.053 L109.085,368.529 L108.876,365.283 L108.674,362.161
        L108.482,359.147 L108.301,356.227 L108.132,353.386 L107.976,350.606
        L107.836,347.873 L107.656,343.816 L107.518,339.78 L107.454,337.082
        L107.411,334.336 L107.39,331.539 L107.394,328.672 L107.423,325.719
        L107.479,322.663 L107.54,320.301 L107.589,318.687 L107.617,317.87
        L107.617,317.87 C107.62,317.798 107.621,317.725 107.622,317.653
        L107.622,317.653 L107.616,314.434 L107.604,308.068 L107.594,301.798
        L107.59,295.623 L107.587,289.542 L107.584,283.555 L107.58,277.66
        L107.576,271.858 L107.572,266.146 L107.57,260.526 L107.574,254.995
        L107.578,249.553 L107.582,244.2 L107.585,238.934 L107.588,233.756
        L107.595,228.663 L107.605,223.655 L107.614,218.733 L107.623,213.894
        L107.634,209.138 L107.647,204.465 L107.661,199.873 L107.676,195.362
        L107.693,190.931 L107.712,186.58 L107.73,182.308 L107.749,178.113
        L107.766,173.995 L107.788,169.954 L107.81,165.989 L107.831,162.098
        L107.852,158.282 L107.873,154.539 L107.897,150.869 L107.921,147.271
        L107.944,143.744 L107.967,140.287 L107.99,136.9 L108.017,133.582
        L108.042,130.333 L108.067,127.151 L108.091,124.035 L108.115,120.986
        L108.137,118.002 L108.159,115.082 L108.184,112.226 L108.211,109.433
        L108.236,106.703 L108.261,104.033 L108.285,101.425 L108.309,98.877
        L108.331,96.388 L108.353,93.957 L108.374,91.585 L108.394,89.269
        L108.414,87.01 L108.435,84.806 L108.458,82.657 L108.481,80.562
        L108.502,78.521 L108.523,76.532 L108.543,74.595 L108.562,72.709
        L108.581,70.873 L108.599,69.087 L108.616,67.35 L108.632,65.661
        L108.648,64.019 L108.664,62.424 L108.681,60.875 L108.698,59.371
        L108.714,57.911 L108.729,56.495 L108.744,55.122 L108.758,53.791
        L108.772,52.501 L108.785,51.252 L108.797,50.043 L108.809,48.874
        L108.821,47.742 L108.839,46.116 L108.861,44.075 L108.881,42.174
        L108.899,40.408 L108.917,38.77 L108.933,37.254 L108.947,35.855
        L108.96,34.567 L108.972,33.384 L108.984,32.3 L108.994,31.308
        L109.003,30.404 L109.012,29.581 L109.02,28.834 L109.027,28.157
        L109.035,27.544 L109.042,26.99 L109.048,26.489 L109.059,25.821
        L109.074,25.063 L109.091,24.418 L109.1,24.134 L109.1,24.134
        C109.153,20.268 106.061,17.092 102.196,17.039 C98.33,16.987
        95.154,20.078 95.101,23.944 L95.102,24.302 L95.108,25.027
        L95.119,25.833 L95.13,26.524 L95.14,27.038 L95.15,27.602
        L95.163,28.22 L95.177,28.9 L95.192,29.649 L95.208,30.471
        L95.226,31.373 L95.246,32.362 L95.267,33.444 L95.289,34.624
        L95.313,35.908 L95.338,37.303 L95.365,38.814 L95.394,40.448
        L95.422,42.211 L95.452,44.107 L95.484,46.145 L95.509,47.769
        L95.526,48.898 L95.542,50.066 L95.559,51.274 L95.576,52.521
        L95.593,53.809 L95.611,55.138 L95.629,56.509 L95.648,57.924
        L95.667,59.382 L95.686,60.884 L95.706,62.432 L95.723,64.026
        L95.741,65.666 L95.758,67.353 L95.777,69.089 L95.795,70.874
        L95.814,72.708 L95.833,74.593 L95.853,76.529 L95.872,78.516
        L95.892,80.557 L95.913,82.65 L95.934,84.798 L95.952,87.001
        L95.969,89.259 L95.985,91.573 L96.002,93.945 L96.019,96.375
        L96.036,98.863 L96.053,101.41 L96.071,104.017 L96.089,106.685
        L96.107,109.415 L96.125,112.207 L96.141,115.062 L96.153,117.981
        L96.166,120.964 L96.178,124.013 L96.191,127.128 L96.203,130.309
        L96.216,133.558 L96.228,136.875 L96.237,140.261 L96.244,143.717
        L96.251,147.243 L96.258,150.841 L96.265,154.51 L96.268,158.253
        L96.269,162.068 L96.271,165.958 L96.272,169.923 L96.271,173.964
        L96.266,178.08 L96.261,182.275 L96.255,186.547 L96.248,190.897
        L96.238,195.327 L96.226,199.838 L96.212,204.429 L96.195,209.102
        L96.176,213.857 L96.153,218.695 L96.13,223.617 L96.106,228.624
        L96.079,233.716 L96.046,238.894 L96.013,244.159 L95.979,249.512
        L95.944,254.953 L95.908,260.483 L95.865,266.103 L95.818,271.813
        L95.771,277.615 L95.723,283.509 L95.673,289.496 L95.623,295.576
        L95.571,301.75 L95.511,308.02 L95.449,314.385 L95.417,317.604
        L95.422,317.388 L95.383,318.241 L95.312,319.916 L95.222,322.366
        L95.127,325.525 L95.062,328.584 L95.024,331.557 L95.012,334.459
        L95.024,337.306 L95.059,340.122 L95.147,344.285 L95.274,348.431
        L95.379,351.223 L95.498,354.049 L95.629,356.926 L95.771,359.87
        L95.923,362.896 L96.081,366.021 L96.246,369.262 L96.372,371.779
        L96.458,373.501 L96.543,375.261 L96.629,377.061 L96.714,378.903
        L96.799,380.789 L96.884,382.722 L96.968,384.702 L97.052,386.733
        L97.135,388.815 L97.217,390.953 L97.297,393.146 L97.377,395.398
        L97.454,397.709 L97.529,400.084 L97.602,402.522 L97.672,405.027
        L97.74,407.601 L97.806,410.244 L97.867,412.96 L97.926,415.751
        L97.981,418.617 L98.033,421.562 L98.08,424.588 L98.123,427.695
        L98.162,430.887 L98.195,434.165 L98.224,437.534 L98.236,439.257
        C98.3,443.122 101.486,446.204 105.351,446.14 C109.217,446.077
        112.298,442.891 112.235,439.026 L112.235,439.026" fill={getHangmanColour(failed)} />
);

Post.propTypes = {
    failed: PropTypes.bool.isRequired
};

export default Post;