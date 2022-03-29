import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-helsinki',
    predictionPlace: {
      address: 'Midtjylland, Danmark',
      bounds: new LatLngBounds(new LatLng(56.8729966995766, 11.7609968845274), new LatLng(55.6031775143111, 7.99758580203607)),
    },
  },
  {
    id: 'default-turku',
    predictionPlace: {
      address: 'Nordjylland, Danmark',
      bounds: new LatLngBounds(new LatLng(57.8052466993118, 11.3001276978709), new LatLng(56.5504110062672, 8.11367660042932)),
    },
  },
  {
    id: 'default-tampere',
    predictionPlace: {
      address: 'Syddanmark, danmark',
      bounds: new LatLngBounds(new LatLng(55.9566299889953, 11.1181650851614), new LatLng(54.66448010157448, 7.97272240106995)),
    },
  },
  {
    id: 'default-oulu',
    predictionPlace: {
      address: 'Sjælland, Danmark',
      bounds: new LatLngBounds(new LatLng(56.39584604, 12.63496885), new LatLng(54.84477417, 10.65428283)),
    },
  },
  {
    id: 'default-ruka',
    predictionPlace: {
      address: 'Hovestaden, Danmark',
      bounds: new LatLngBounds(new LatLng(55.97898491, 12.79930498), new LatLng(55.25031814, 11.86906396)),
    },
  },
];
export default defaultLocations;
