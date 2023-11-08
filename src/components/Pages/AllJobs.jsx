import { useLoaderData } from "react-router-dom";


const AllJobs = () => {
    const allJobs = useLoaderData()
    return (
        <div>
            <h2>All Jobs</h2>
            <div className="">

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    Post by
                                </th>
                                <th>Job Title</th>
                                <th className="hidden md:block">Post Date</th>
                                <th>Deadline</th>
                                <th>Salary</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allJobs.map(job => <tr key={job._id}>
                                    <th>
                                        {job.userName}
                                    </th>
                                    <td>
                                        {job.jobTitle}
                                    </td>
                                    <td className="hidden md:block">
                                        {job.currentDate.substring(0, 10)}
                                    </td>
                                    <td>
                                        {job.dedlineDate.substring(0, 10)}
                                    </td>
                                    <td>{job.salary}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllJobs;