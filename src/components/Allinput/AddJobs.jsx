import addJobLogo from '../../assets/addJob.svg'

const AddJobs = () => {


    const handleAddJobField =(e) =>{
        e.preventDefault()
    }

    return (
        <div>
            <div className='flex flex-col md:flex-row items-center gap-2'>
                <div className='w-full md:w-1/3'>
                    <img className='' src={addJobLogo} alt="" />
                </div>
                <div className="shadow-2xl bg-base-100">
                    <form onSubmit={handleAddJobField} className="card-body">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-base font-bold">Job Title *</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-base font-bold">Category *</span>
                                </label>
                                <select type="select" name="brand" className="select select-bordered w-full">
                                    <option disabled selected>Choose Your Category</option>
                                    <option value="On-site">On-site</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Part-Time">Part-Time</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-base font-bold">Salary *</span>
                                </label>
                                <input type="text" placeholder="Price" name="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-base font-bold">Post by </span>
                                </label>
                                <input type="text" placeholder="Rating" name="rating" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-base font-bold">Type *</span>
                                </label>
                                <input type="text" placeholder="Category" name="type" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-base font-bold">Job Banner *</span>
                            </label>
                            <input type="text" placeholder="Image Link" name="image" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-base font-bold">Job Description *</span>
                            </label>
                            <textarea className="input input-bordered" placeholder="Write Your Short description" name="description" id="" cols="30" rows="10" required></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Job</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJobs;