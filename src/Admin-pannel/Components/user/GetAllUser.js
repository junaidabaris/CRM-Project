// import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

import "./user.css";

import { Segmented, Table } from "antd";

import { CSVLink } from "react-csv";
import UserPrivateComponent from "../PrivateRoutes/UserPrivateComponent";
import ColVisibilityDropdown from "../Shared/ColVisibilityDropdown";
import { CsvLinkBtn } from "../UI/CsvLinkBtn";

function CustomTable({ list }) {
  
  return (
    <div className='ant-card p-4 rounded mt-5'>
      <div className='flex my-2 justify-between'>
        <div className='w-50'>
          <h4 className='text-2xl mb-2'>Employee List</h4>
        </div>
        
          <div className='flex justify-end mr-4'>
            <div className='mt-0.5'>
              {/* <CsvLinkBtn>
                <CSVLink
                  // data={list}
                  className='btn btn-dark btn-sm'
                  style={{ marginTop: "5px" }}
                  filename='staffs'
                >
                  Download CSV
                </CSVLink>
              </CsvLinkBtn> */}
            </div>

            <div>
              <Segmented
                className='text-center rounded text-red-500'
                size='middle'
                options={[
                  {
                    label: (
                      <span>
                        <i className='bi bi-person-lines-fill'></i> Active
                      </span>
                    ),
                    value: "true",
                  },
                  {
                    label: (
                      <span>
                        <i className='bi bi-person-dash-fill'></i> Inactive
                      </span>
                    ),
                    value: "false",
                  },
                ]}
                
              />
            </div>
          </div>
      
      </div>

        <div style={{ marginBottom: "30px" }}>
          <ColVisibilityDropdown
            
          />
        </div>
      
      <Table
        scroll={{ x: true }}
      
        pagination={{
          defaultPageSize: 20,
        }}
      />
    </div>
  );
}

const GetAllCust = (props) => {

  return (
    // <UserPrivateComponent permission={"readAll-user"}>
      <div className='card card-custom'>
        <div className='card-body'>
          <CustomTable />
        </div>
      </div>
    // </UserPrivateComponent>
  );
};

export default GetAllCust;
