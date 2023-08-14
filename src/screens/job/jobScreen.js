import React from "react";


const JobScreen = ({ jobList }) => {
    const openJobDetails = (job) => {
        // Replace this logic with your navigation code
    // You can use React Router or any other routing library
    // to navigate to the JobDetailsScreen component with the selected job.
    console.log(`Opening job details for: ${job.position}`);
    };
    return (
        <div>
            <h1>Job Opportunities</h1>
            <u1>
                {jobList.map((job, index) => (
                    <li key={index}>
                        <div>
                            <img src={job.companyLogo} alt="Company Logo" />
                        </div>
                        <div>
                            <h2>{job.position}</h2>
                            <p>{job.companyName}</p>
                        </div>
                        <div>
                            <button onClick={() => openJobDetails(job)}>Check details</button>
                        </div>
                    </li>
                ))}
            </u1>
        </div>
    );
};

export default JobScreen;