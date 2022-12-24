import {combineReducers} from 'redux';

const initialListReducer = [
  {
    id: 1,
    name: 'Julia Mareta',
    img: require('../assets/img/avatar-1.png'),
  },
  {
    id: 2,
    name: 'Rapik Kurnia',
    img: require('../assets/img/avatar-2.png'),
  },
  {
    id: 3,
    name: 'Lola Lita',
    img: require('../assets/img/avatar-3.png'),
  },
  {
    id: 4,
    name: 'Lisa Kirana',
    img: require('../assets/img/avatar-4.png'),
  },
  {
    id: 5,
    name: 'Charlie Calzoni',
    img: require('../assets/img/avatar-5.png'),
  },
  {
    id: 6,
    name: 'Resti',
    img: require('../assets/img/avatar-6.png'),
  },
  {
    id: 7,
    name: 'Firman Maul',
    img: require('../assets/img/avatar-7.png'),
  },
  {
    id: 8,
    name: 'Rajib GB',
    img: require('../assets/img/avatar-8.png'),
  },
  {
    id: 9,
    name: 'Eko Loso',
    img: require('../assets/img/avatar-9.png'),
  },
  {
    id: 10,
    name: 'Resi Melisa',
    img: require('../assets/img/avatar-10.png'),
  },
  {
    id: 11,
    name: 'Karina Kuy',
    img: require('../assets/img/avatar-11.png'),
  },
  {
    id: 12,
    name: 'Angel',
    img: require('../assets/img/avatar-12.png'),
  },
  {
    id: 13,
    name: 'Carla Dias',
    img: require('../assets/img/avatar-13.png'),
  },
  {
    id: 14,
    name: 'Terry Gouse',
    img: require('../assets/img/avatar-14.png'),
  },
];

const listReducer = (state = initialListReducer, action) => {
  if (action.type == 'SET_LIST') {
    return action.value;
  }

  return state;
};

const reducer = combineReducers({
  listReducer,
});

export default reducer;
