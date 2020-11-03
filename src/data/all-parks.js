import parks from './parks.js';

let allParks = parks;

export const getAllParks = () => allParks;
export const setAllParks = newParks => allParks = newParks;