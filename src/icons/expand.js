import React from 'react';
import PropTypes from 'prop-types';
import {slate} from '../variables/colors';

const Expand = ({
                    className, width, height, color, ...props
                }) => (
                    <svg
                        width={width}
                        height={height}
                        viewBox="0 0 22 22"
                        xmlns="http://www.w3.org/2000/svg"
                        className={className}
                        {...props}
                    >
                        <g
                            stroke="none"
                            strokeWidth="1"
                            fill={color}
                            fillRule="nonzero"
                        >
                            <path
                                d="M8.57578125,18.95625 L3.62578125,18.95625 L9.065625,13.5164063 C9.46875,13.1132812 9.46875,12.4617188 9.065625,12.0585938 C8.6625,11.6554687 8.0109375,11.6554687 7.6078125,12.0585938 L2.08125,17.5828125 L2.08125,12.675 C2.08125,12.1054688 1.61953125,11.64375 1.05,11.64375 C0.48046875,11.64375 0.01875,12.1054688 0.01875,12.675 L0.01875,19.9875 C0.01875,20.5570312 0.48046875,21.01875 1.05,21.01875 L8.5734375,21.01875 C9.14296875,21.01875 9.6046875,20.5570312 9.6046875,19.9875 C9.6046875,19.4179688 9.1453125,18.95625 8.57578125,18.95625 Z M19.9664063,0.01875 L12.4429688,0.01875 C11.8734375,0.01875 11.4117188,0.48046875 11.4117188,1.05 C11.4117188,1.61953125 11.8734375,2.08125 12.4429688,2.08125 L17.390625,2.08125 L11.9507813,7.51875 C11.5476563,7.921875 11.5476563,8.5734375 11.9507813,8.9765625 C12.1523438,9.178125 12.4171875,9.27890625 12.6796875,9.27890625 C12.9445313,9.27890625 13.2070313,9.178125 13.4085938,8.9765625 L18.9328125,3.45234375 L18.9328125,8.36015625 C18.9328125,8.9296875 19.3945313,9.39140625 19.9640625,9.39140625 C20.5335938,9.39140625 20.9953125,8.9296875 20.9953125,8.36015625 L20.9953125,1.04765625 C20.9976563,0.48046875 20.5359375,0.01875 19.9664063,0.01875 Z"
                            />
                        </g>
                    </svg>
);

Expand.defaultProps = {
    className: '',
    width: 22,
    height: 22,
    color: slate,
};

Expand.propTypes = {
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
};

export default Expand;
