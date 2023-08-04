import RolesPerm from "./RolesPerm"

function RolePermission() {
    return <div className="min-h-screen min-w-full">
    <section className="ant-layout layout">
        <main className="ant-layout-content">
            <main className="ant-layout-content">
                <section className="ant-layout ant-layout-has-sider">
                    <main className="ant-layout-content px-4 overflow-y-auto overflow-x-hidden">
                        <div>
                            <div className="ant-card ant-card-bordered">
                                <RolesPerm />
                            </div>
                        </div>
                    </main>
                </section>
            </main>
        </main>
    </section>
    </div>
}
export default RolePermission