import { Button, ButtonGroup } from "react-bootstrap";
import Data from "../utils/Data";

const Buttons = ({ productCategories, filterItems, SetProducts }) => {
  return (
    <ButtonGroup className="buttons">
        <Button className="me-2 rounded px-3 btn btn-dark" onClick={() => SetProducts(Data)}>All</Button>
        {productCategories.map((val, i) => {
            return (
                <Button  className="me-2 rounded px-3 btn btn-dark" key={i} onClick={() => filterItems(val)}>
                    {val}
                </Button>
            );
        })}
    </ButtonGroup>
  )
}
export default Buttons