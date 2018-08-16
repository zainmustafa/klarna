import React from "react";
import PropTypes from "prop-types";
// import SVG from "react-inlinesvg";

import config from "config";

const Logo = ({ file }) => (
    <div className="app__logo">
        <img
            src={require(`assets/media/logos/${file}.png`)}
            alt={config.title}
        />
    </div>
);

Logo.propTypes = {
    file: PropTypes.string
};

Logo.defaultProps = {
    file: "netflix"
};

export default Logo;
