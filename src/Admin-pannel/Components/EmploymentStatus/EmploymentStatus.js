import Multiselect from "multiselect-react-dropdown/dist";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom"

function EmploymentStatus() {
    const myData = [
        { text: 'Books', value: 1 },
        { text: 'Movies, Music & Games', value: 2 },
        { text: 'Electronics & Computers', value: 3 },
        { text: 'Home, Garden & Tools', value: 4 },
        { text: 'Health & Beauty', value: 5 },
        { text: 'Toys, Kids & Baby', value: 6 },
        { text: 'Clothing & Jewelry', value: 7 },
        { text: 'Sports & Outdoors', value: 8 },
        { text: 'Automotive & Industrial', value: 9 }
    ];
    return <div className="aiz-main-content" >
        <div className="px-15px px-lg-25px">

            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6"> Employment Status List</h5>
                    <div className="col-md-6 text-md-right">
                        <Link to='#' className="btn btn-circle btn-info">
                            <span>Add EmploymentStatus</span>
                        </Link>
                    </div>
                    {/* <ModalAddDesig show={modalShow}
                        onHide={() => setModalShow(false)} /> */}
                </div>
            </div>
        </div>
        <div className="flex items-center gap-3 my-5 ">
            <div className=" ml-5 ">
                <div className="ant-select ant-select-multiple ant-select-show-arrow ant-select-show-search" style={{ width: 400 }}>

                    <Multiselect
                        isObject={true}
                        displayValue="text"
                        options={myData}
                        showCheckbox
                        selectedValues={[]}
                    // onRemove={(selectedCat) => {
                    //     const selectedIds = selectedCat.map((cat) => {
                    //         return cat._id
                    //     })
                    //     setFinalCatD(selectedIds)
                    // }}
                    // onSelect={(selectedCat) => {
                    //     // setFinalCatD(event)
                    //     const selectedIds = selectedCat.map((cat) => {
                    //         return cat._id
                    //     })
                    //     setFinalCatD(selectedIds)
                    // }}
                    />
                </div>
            </div>
            <Table striped bordered hover style={{width:"1200px", margin: "20px auto" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Color Code</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    </div >
}
export default EmploymentStatus