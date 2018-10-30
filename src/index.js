const PropTypes = require("prop-types");

function useMatchMedia(screenSizes) {
  console.log(screenSizes);
}

useMatchMedia([
  { small: "max-width: 500px" },
  { medium: "max-width: 1024px" },
  { large: "min-width: 1024px" }
]);

// useMatchMedia.propTypes = {
//   screenSizes: PropTypes.array.isRequired
// };

// useMatchMedia.defaultProps = {
//   screenSizes: [
//     { small: "max-width: 500px" },
//     { medium: "max-width: 1024px" },
//     { large: "min-width: 1024px" }
//   ]
// };

module.exports = useMatchMedia;
