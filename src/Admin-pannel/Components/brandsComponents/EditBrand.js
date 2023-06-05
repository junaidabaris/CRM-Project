import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDeleteBrandMutation, useGetBrandsQuery, useEditDataBrandMutation, useDeleteCategoryMutation, useGetPlaceByIdQuery } from '../all-products/allproductsApi/allProductsApi';

function EditBrand() {
    const [inputval, setInputval] = useState({
        name: '',
        logo: '',
        meta_title: '',
        meta_description: '',
        slug: ''
    });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };
    const submitEditBrandData = () => {
        // addNewBrand(inputval)
        console.log(inputval)
        document.getElementById("create-course-form").reset();
    };

    const params = useParams()
    console.log(params.id);

    const { data, res } = useGetPlaceByIdQuery(params.id);
    console.log(data)
    useEffect(() => {
        // editF(params.id);

    }, [params.id])


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <h5 className="mb-0 h6">Brand Information</h5>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <div className="card">
                            <div className="card-body p-0">

                                <form className="p-4" id="create-course-form" onSubmit={submitEditBrandData}>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label" htmlFor="name">Name <i className="las la-language text-danger" title="Translatable" />
                                        </label>
                                        <div className="col-sm-9">
                                            <input type="text" placeholder="Name" id="name" name="name" defaultValue="ETG" className="form-control" required fdprocessedid="zp6g3o" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Logo <small>(120x80)</small></label>
                                        <div className="col-md-9">

                                            <div className="input-group" data-type="image">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                </div>
                                                <div className="form-control file-amount">
                                                    <input type="file" name="logo" onChange={onChangeHandler} />
                                                </div>
                                            </div>

                                            {/* <div className="file-preview box sm">
                                                <div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={1} title="etglogo.png">
                                                    <div className="align-items-center align-self-stretch d-flex justify-content-center thumb">
                                                        <img src="https://bucket-name.s3.region.amazonaws.com/uploads/all/AkvOmGh1LRAnHZmlVDsgPA5f5jgYesnZxVtONnhX.png" className="img-fit" />
                                                    </div>
                                                    <div className="col body">
                                                        <h6 className="d-flex"><span className="text-truncate title">etglogo</span><span className="ext flex-shrink-0">.png</span></h6>
                                                        <p>2 KB</p>
                                                    </div>
                                                    <div className="remove">
                                                        <button className="btn btn-sm btn-link remove-attachment" type="button" fdprocessedid="oom2bs"><i className="la la-close" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Meta Title</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="meta_title" defaultValue="ETG" placeholder="Meta Title" fdprocessedid="vrvrin" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label">Meta description</label>
                                        <div className="col-sm-9">
                                            <textarea name="meta_description" rows={8} className="form-control" defaultValue={"ETG"} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-from-label" htmlFor="name">Slug</label>
                                        <div className="col-sm-9">
                                            <input type="text" placeholder="Slug" id="slug" name="slug" defaultValue="etg-brand" className="form-control" fdprocessedid="8y6egs" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group mb-0 text-right">
                                        <button type="submit" className="btn btn-primary" fdprocessedid="rcbhrk">Save</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>

        </>
    )
}

export default EditBrand