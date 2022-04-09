export const initialState = {
  data: {},
  allData:[],
  checked:[],
  clicked: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CLICKED':
      return {
        ...state,
        clicked: state.change
      }

    case 'UNCHECKED':
      const index = state.checked.findIndex((checkedItem) => checkedItem === action.uncheckedItem);
      let newChecked = [...state.checked];
      if (index >= 0) {
        newChecked.splice(index, 1);
      } else {
        console.warn(`Can't remove the product (id: ${action.uncheckedItem})
        as it is not in the checked basket!`);
      }
      return {
        ...state,
        checked: newChecked,

      }

    case 'TO_DELETE':
      return {
        ...state,
        checked: [...state.checked, action.remove],
      }

    case 'ADD':
      return {
        ...state,
        data: action.item
      }
    case 'ADD_ALL':
      return {
        ...state,
        allData: action.all
      }

    case 'EMPTY_CHECKED':
      return {
        ...state,
        checked: [],
        clicked: state.clicked
      }

    case 'DELETE':
      const index2 = state.allData.findIndex((checkedItem) => checkedItem === action.provided);
      let newAllData = [...state.allData];
      if (index2 >= 0) {
        newAllData.splice(index2, 1);
      } else {
        console.warn(`Can't remove the product (sku: ${action.provided})
        as it is not in the basket!`);
      }
        return {
          ...state,
          allData: newAllData,
          // checked: []
        }

      // return {
      //   ...state,
      //   allData: []
      // }
    case 'EMTPY':
      return {
        ...state,
        data: {}
      }
    default:
      return state;
  }
}

export default reducer;
