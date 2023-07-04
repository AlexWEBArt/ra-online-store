import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { catalogRequest, choseCategory } from "../../../../redux/actions/actionCreators/actionCreators";

export default function Categories() {
  const { categories, searchItems } = useSelector(state => state.catalog);

  const dispatch = useDispatch();

  const handleClickCategory = (e) => {
    const id = e.target.getAttribute('data-id');

    if (id === 'All') {
      dispatch(choseCategory(null))
      dispatch(catalogRequest(searchItems));

      return
    };
    dispatch(choseCategory(id))
    dispatch(catalogRequest(searchItems, id));
  }

  return (
    <ul className="catalog-categories nav justify-content-center">
        {
          categories[1] && categories.map(item => 
              <li key={item.id} className="nav-item">
                  <NavLink className="nav-link" data-id={item.id} to={`/ra-online-store/catalog/${item.id}`} onClick={handleClickCategory}>
                      {item.title}
                  </NavLink>
              </li>
          )
        }
    </ul>
  )
}