/**
 * Reports web vitals metrics using the web-vitals library.
 * This function conditionally imports the web-vitals library and calls its measurement functions
 * if a valid callback function is provided.
 * @param {Function} onPerfEntry - Callback function to handle performance entries.
 *                                 This function will be called for each web vital measurement.
 * @returns {void} This function doesn't return a value.
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
