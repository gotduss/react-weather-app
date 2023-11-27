// Gets the API key from the .env.local file
export const VCROS_API_KEY = process.env.REACT_APP_VCROS_API_KEY;
// Gets the API base URL from the .env.local file
export const VCROS_API_URL = process.env.REACT_APP_VCROS_API_URL;

export const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// data used in the hourly weather carousel
export const hourlyResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 6,
    },
    laptop_lg: {
        breakpoint: { max: 1599, min: 1200 },
        items: 6,
    },
    laptop_sm: {
        breakpoint: { max: 1199, min: 992 },
        items: 6,
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
    }
};
