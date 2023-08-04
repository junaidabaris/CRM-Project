import { Navigate } from "react-router-dom";
import AddUser from "./addUser";

const UserList = (props) => {


  return (
    <section className="ant-layout layout">
      <main className="ant-layout-content">
        <main className="ant-layout-content">
          <section className="ant-layout ant-layout-has-sider">
            <main className="ant-layout-content px-4 overflow-y-auto overflow-x-hidden" style={{ height: 'calc(100vh - 102px)' }}>
              <div className="card card-custom">
                <div className="card-body">
                  <div className="ant-card p-4 rounded mt-5">
                    <div className="flex my-2 justify-between">
                      <div className="w-50">
                        <h4 className="text-2xl mb-2">Employee List</h4>
                      </div>
                      <div className="flex justify-end mr-4">
                        <div className="mt-0.5"><div className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-1 px-3 rounded mr-2">
                          <a download="staffs" className="btn btn-dark btn-sm" target="_self" href="blob:https://crmosf.netlify.app/65ccd12b-b964-46f1-bddd-f12f60da437a" style={{ marginTop: 5 }}>Download CSV</a>
                        </div>
                        </div>
                        <div>
                          <div className="ant-segmented text-center rounded text-red-500">
                            <div className="ant-segmented-group">
                              <label className="ant-segmented-item ant-segmented-item-selected">
                                <input className="ant-segmented-item-input" type="radio" defaultChecked />
                                <div className="ant-segmented-item-label">
                                  <span><i className="bi bi-person-lines-fill" /> Active</span>
                                </div>
                              </label>
                              <label className="ant-segmented-item">
                                <input className="ant-segmented-item-input" type="radio" />
                                <div className="ant-segmented-item-label"><span>
                                  <i className="bi bi-person-dash-fill" /> Inactive</span>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div></div></div>
                    <div style={{ marginBottom: 30 }}><div className="ant-select ant-select-multiple ant-select-show-arrow ant-select-show-search" style={{ width: 180 }}>
                      <div className="ant-select-selector">
                        <div className="ant-select-selection-overflow">
                          <div className="ant-select-selection-overflow-item ant-select-selection-overflow-item-rest" style={{ opacity: 1 }}><span className="ant-select-selection-item" title="Column Selected"><span className="ant-select-selection-item-content">Column Selected</span>
                          </span>
                          </div>
                          <div className="ant-select-selection-overflow-item ant-select-selection-overflow-item-suffix" style={{ opacity: 1 }}>
                            <div className="ant-select-selection-search" style={{ width: 0 }}>
                              <input type="search" autoComplete="off" className="ant-select-selection-search-input" role="combobox" aria-haspopup="listbox" aria-owns="rc_select_30_list" aria-autocomplete="list" aria-controls="rc_select_30_list" aria-activedescendant="rc_select_30_list_1" defaultValue id="rc_select_30" aria-expanded="false" readOnly unselectable="on" style={{ opacity: 0 }} />
                              <span className="ant-select-selection-search-mirror" aria-hidden="true">&nbsp;</span></div></div></div></div><span className="ant-select-arrow" unselectable="on" aria-hidden="true" style={{ userSelect: 'none' }}><span role="img" aria-label="down" className="anticon anticon-down ant-select-suffix">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
                                </svg>
                              </span>
                      </span>
                    </div>
                    </div>
                    <div className="ant-table-wrapper">
                      <div className="ant-spin-nested-loading">
                        <div className="ant-spin-container">
                          <div className="ant-table ant-table-scroll-horizontal">
                            <div className="ant-table-container">
                              <div className="ant-table-content" style={{ overflow: 'auto hidden' }}>
                                <table style={{ width: 'auto', minWidth: '100%', tableLayout: 'auto' }}>
                                  <colgroup>
                                  </colgroup>
                                  <thead className="ant-table-thead">
                                    <tr>
                                      <th className="ant-table-cell">ID</th>
                                      <th className="ant-table-cell">Name</th>
                                      <th className="ant-table-cell">Usr Name</th>
                                      <th className="ant-table-cell">Designation</th>
                                      <th className="ant-table-cell">E-Status</th>
                                      <th className="ant-table-cell">Department</th>
                                      <th className="ant-table-cell">Shift</th>
                                      <th className="ant-table-cell">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody className="ant-table-tbody">
                                    <tr aria-hidden="true" className="ant-table-measure-row" style={{ height: 0, fontSize: 0 }}>
                                      <td style={{ padding: 0, border: 0, height: 0 }}>
                                        <div style={{ height: 0, overflow: 'hidden' }}>
                                          &nbsp;
                                        </div>
                                      </td>
                                      <td style={{ padding: 0, border: 0, height: 0 }}>
                                        <div style={{ height: 0, overflow: 'hidden' }}>&nbsp;
                                        </div>
                                      </td>
                                      <td style={{ padding: 0, border: 0, height: 0 }}>
                                        <div style={{ height: 0, overflow: 'hidden' }}>&nbsp;</div>
                                      </td>
                                      <td style={{ padding: 0, border: 0, height: 0 }}>
                                        <div style={{ height: 0, overflow: 'hidden' }}>&nbsp;</div></td><td style={{ padding: 0, border: 0, height: 0 }}><div style={{ height: 0, overflow: 'hidden' }}>&nbsp;</div></td><td style={{ padding: 0, border: 0, height: 0 }}><div style={{ height: 0, overflow: 'hidden' }}>&nbsp;</div></td><td style={{ padding: 0, border: 0, height: 0 }}><div style={{ height: 0, overflow: 'hidden' }}>&nbsp;</div></td><td style={{ padding: 0, border: 0, height: 0 }}>
                                        <div style={{ height: 0, overflow: 'hidden' }}>&nbsp;</div></td></tr><tr data-row-key={1} className="ant-table-row ant-table-row-level-0"><td className="ant-table-cell">1</td><td className="ant-table-cell">OMEGA SOLUTION</td><td className="ant-table-cell">admin</td><td className="ant-table-cell">N/A</td><td className="ant-table-cell">Intern</td><td className="ant-table-cell">IT</td><td className="ant-table-cell">Morning</td><td className="ant-table-cell"><div className="flex justify-start"><div><a href="/admin/setup/staffs/1/" target="_self"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-2 rounded mr-2"><i className="bi bi-eye-fill" /></button></a></div></div></td></tr></tbody></table></div></div></div></div></div></div></div></div></div>
            </main>

          </section>
        </main>
      </main>
    </section>
  )
}

export default UserList