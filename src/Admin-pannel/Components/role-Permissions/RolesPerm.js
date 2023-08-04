import { Select } from "antd"
import Multiselect from "multiselect-react-dropdown/dist";
import { Table } from "react-bootstrap";

function RolesPerm() {
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

    return <div classname="ant-card-body">
        <div className="d-flex justify-between" style={{ justifyContent: "space-between" }}>
            <h5 className=" text-2xl">
                <span className="ml-4">Accounts List</span>
            </h5>
            <button data-toggle="modal" data-target="#ModalSlide" id="btn-drawer" type="button" className="ant-btn ant-btn-primary" ant-click-animating-without-extra-node="false"><span role="img" aria-label="plus" className="anticon anticon-plus"><svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true"><defs><style dangerouslySetInnerHTML={{ __html: "" }} /></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" /><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" /></svg></span>
                <span>Add Account</span>
            </button>



            <div class="modal fade" id="ModalSlide" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div class="modal-dialog modal-dialog-slideout" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title align-right" id="exampleModalLabel">Hi. I'm Modal.</h5>

                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
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
                        <th>Account</th>
                        <th>Account Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </Table>

        </div>

    </div>

}
export default RolesPerm