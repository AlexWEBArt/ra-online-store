import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { catalogCategoryRequest, catalogRequest, choseCategory } from "../../../../redux/actions/actionCreators/actionCreators";

export default function Categories() {
  const { categories } = useSelector(state => state.categories)

  const dispatch = useDispatch();

  const handleClickCategory = (e) => {
    const id = e.target.getAttribute('data-id');

    if (id === 'All') {
      dispatch(choseCategory(null))
      dispatch(catalogRequest());

      return
    };
    dispatch(choseCategory(id))
    dispatch(catalogCategoryRequest(id));
  }

  return (
    <ul className="catalog-categories nav justify-content-center">
        {
          categories[1] && categories.map(item => 
              <li key={item.id} className="nav-item">
                  <NavLink className="nav-link" data-id={item.id} href="#" onClick={handleClickCategory}>
                      {item.title}
                  </NavLink>
              </li>
          )
        }
    </ul>
  )
}