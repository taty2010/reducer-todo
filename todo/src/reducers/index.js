export const initialState = [
    {
      name: "Bananas",
      id: 123,
      purchased: false
    },
    {
      name: "Torillas",
      id: 124,
      purchased: false
    },
    {
      name: "Milk",
      id: 1235,
      purchased: false
    },
    {
      name: "Pizza Sauce",
      id: 1246,
      purchased: false
    },
    {
      name: "Raw Honey",
      id: 1237,
      purchased: false
    },
    {
      name: "Granola",
      id: 1248,
      purchased: false
    }
  ];
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE":
        const toggle = () => {
          const toggleItems = state.map(state => {
            if (state.id === action.payload) {
              console.log("reducer toggle", state.id === action.payload);
              return {
                ...state,
                purchased: !state.purchased
              };
            }
            return state;
          });
          return toggleItems;
        };
        return toggle();
  
      case "ADD_ITEM":
        return [
          ...state,
          { name: action.payload, id: Date.now(), purchased: false }
        ];
      case "CLEAR_ITEM":
        const newState = state.filter(item => {
          return !item.purchased; // if(item.purchased === false) return true
        });
        return newState;
      default:
        return state;
    }
  };
  