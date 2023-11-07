import { useContext, useState } from 'react';
import addJobLogo from '../../assets/addJob.svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../Provider/AuthProvider';

const AddJobs = () => {
    const { user } = useContext(AuthContext)

    const [dedlineDate, setDedlineDate] = useState(new Date())
    const currentDate = new Date()






    const handleAddJobField = (e) => {

        e.preventDefault()
        const form = new FormData(e.currentTarget);

        const jobTitle = form.get('job-title')
        const jobCategory = form.get('category')
        const salary = form.get('salary')
        const bannerImg = form.get('image')
        const description = form.get('description')
        const userName = user.displayName;

        const newPostedJob = { jobTitle, jobCategory, userName, currentDate, dedlineDate, salary, bannerImg, description }
        console.log(newPostedJob);

        fetch('http://localhost:5000/api/v1/post-job', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newPostedJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data) {
                //     Swal.fire({
                //         position: 'center',
                //         icon: 'success',
                //         title: 'New Product Added',
                //         showConfirmButton: false,
                //         timer: 2000
                //     })
                //     e.target.reset()
                // }
            })
    }

    return (
        <div>
            <div className='flex flex-col md:flex-row items-center gap-2'>
                <div className='w-full md:w-1/3'>
                    <img className='' src={addJobLogo} alt="" />
                </div>
                <div className="shadow-2xl bg-base-100 w-full md:w-2/3">
                    <form onSubmit={handleAddJobField} className="card-body">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-base font-bold">Job Title *</span>
                                </label>
                                <input type="text" placeholder="Job Title" name="job-title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-base font-bold">Category *</span>
                                </label>
                                <select type="select" name="category" className="select select-bordered w-full">
                                    <option disabled selected>Choose Your Category</option>
                                    <option value="On-site">On-site</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Part-Time">Part-Time</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-base font-bold">Salary *</span>
                                </label>
                                <input type="text" placeholder="Salary" name="salary" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-base font-bold">Post by</span>
                                </label>
                                <input type="text" defaultValue={user.displayName} name="rating" className="input input-bordered" required readOnly />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-base font-bold">Post date</span>
                                </label>
                                <DatePicker
                                    selected={dedlineDate}
                                    dateFormat="dd-MM-yyyy"
                                    readOnly
                                    className="input input-bordered"
                                ></DatePicker>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-base font-bold">Set Deadline</span>
                                </label>
                                <DatePicker
                                    selected={dedlineDate}
                                    onChange={date => setDedlineDate(date)}
                                    dateFormat="dd-MM-yyyy"
                                    className="input input-bordered"
                                />
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
                        {/* <DatePicker selected={postDate} onChange={(date) => setPostDate(date)} /> */}
                        {/* <input type="date" name="" value={postDate} onChange={e=>setPostDate(e.target.value)} id="" /> */}


                        {/* <DatePicker
                            selected={postDate}
                            onChange={(date) => setPostDate(date)}
                            selectsStart
                            postDate={postDate}
                            dedlineDate={dedlineDate}
                            dateFormat="dd-MM-yyyy"
                        />
                        <DatePicker
                            selected={dedlineDate}
                            onChange={(date) => setDedlineDate(date)}
                            selectsEnd
                            postDate={postDate}
                            dedlineDate={dedlineDate}
                            minDate={postDate} // Optional: prevent selecting dates earlier than the start date
                            dateFormat="dd-MM-yyyy"
                        /> */}

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