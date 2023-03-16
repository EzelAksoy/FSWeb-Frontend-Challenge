import Information from "../data";
import { FORM_KAYDET, HATAYI_KAYDET } from "./Action";
function reducer(state = Information, action) {
  switch (action.type) {
    case FORM_KAYDET:
      return { ...state, form: action.payload };
    case HATAYI_KAYDET:
      return { ...state, formError: action.payload };

    default:
      return state;
  }
}

export default reducer;
