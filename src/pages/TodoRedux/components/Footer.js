import { VisibilityFilter } from "../../../reducers/action";
import FilterLink from "../containers/FilterLink";

const Footer = () => (
  <div>
    <span>See:</span>
    <FilterLink filter={VisibilityFilter.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default Footer;
