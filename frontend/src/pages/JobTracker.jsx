import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrackerColumn from '../components/TrackerColumn';

const transformData = (data) => {
    const jobs = {};
    const columns = {
      'column-1': {
            id: 'column-1',
            colTitle: 'New',
            applicationStatus: 'new',
            jobIds: [],
        },
        'column-2': {
            id: 'column-2',
            colTitle: 'Applied',
            applicationStatus: 'applied',
            jobIds: [],
        },
        'column-3': {
            id: 'column-3',
            colTitle: 'Interview',
            applicationStatus: 'interview',
            jobIds: [],
        },
        'column-4': {
            id: 'column-4',
            colTitle: 'Offer',
            applicationStatus: 'offer',
            jobIds: [],
        },
        'column-5': {
            id: 'column-5',
            colTitle: 'Rejected',
            applicationStatus: 'rejected',
            jobIds: [],
        }
    };
  
    data.forEach(job => {
        jobs[job._id] = { id: job._id, company_name: job.company_name, title: job.title, salary: job.salary_range, application_status: job.application_status };
        columns['column-1'].jobIds.push(job._id);
    });
  
    return { jobs, columns };
  };

const JobTracker = ({url}) => {
    const [data, setData] = useState(null);

    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/api/post/list`);
            const transformedData = transformData(response.data.data);

            //Optionally load persisted state form localStorage if needed, this is to avoid if there's a saved state in localStorage, we don't want it to override the fresh data fetched from the backend
            const savedState = localStorage.getItem('drag-and-drop-state');
            if(savedState){
                const parsedData = JSON.parse(savedState);
                setData(prevData => parsedData || transformedData);
            }else{
                setData(transformedData);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div className='w-full'>
            {data && (
                <TrackerColumn data={data} setData={setData} url={url} fetchList={fetchList} />
            )}
        </div>
    );
};

export default JobTracker;