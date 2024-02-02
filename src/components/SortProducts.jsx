import { Form } from "react-bootstrap";

const SortProducts = ({ products, SetProducts }) => {
  const handleChange = (e) => {
    let val = products;

    if(e.target.value === "ascending"){
      val = [...products].sort((a, b) => a.title > b.title ? 1 : -1);
      console.log(val);
    }
    else if(e.target.value === "descending"){
      val = [...products].sort((a, b) => a.title > b.title ? -1 : 1);
      console.log(val);
    }

    SetProducts(val);
  }

  return (
    <div className="sort-container">
        <Form.Select className="sort" name="sort" id="sort" onChange={handleChange}>
            <option>Select...</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
        </Form.Select>
    </div>
  )
}
export default SortProducts