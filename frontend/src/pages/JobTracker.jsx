import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrackerColumn from '../components/TrackerColumn';

const transformData = (data) => {
    const jobs = {};
    const columns = {
      'column-1': {
          id: 'column-1',
          title: 'New',
          jobIds: []
      },
      'column-2': {
          id: 'column-2',
          title: 'In Progress',
          jobIds: []
      },
      'column-3': {
          id: 'column-3',
          title: 'Done',
          jobIds: []
      }
    };
  
    data.forEach(job => {
        jobs[job._id] = { id: job._id, title: job.title };
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
            console.log(transformedData);
            setData(transformedData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div>
            {data && (
                <TrackerColumn data={data} />
            )}
        </div>
    );
};

export default JobTracker;