import moment from 'moment'; // Make sure to install moment.js with npm or yarn


export const COLUMNS_NAVY_PIER = [
    {
        Header: 'Run',
        accessor: 'rid',
    },
    {
        Header: 'Bus',
        accessor: 'vid',
    },
    {
        Header: "To",
        accessor: "pattern",
    },
    {
        Header: "Departs in",
        accessor: "time_from_now",
    },
    {
        Header: 'Dev.',
        accessor: 'd_np',
    },
    {
        Header: "Rec. Adjust",
        accessor: "rec_np"
    },
    {
        Header: "On",
        accessor: "on"
    },
    {
        Header: 'Recovery',
        id: 'availableLayover', // This can be any unique string
        accessor: data => {
            // Check if prdatm_np is empty or null
            if (!data.prdatm_np || !data.schdtm_np) {
                return ''; // Return an empty string if there is no data
            }
            // Parse the timestamps
            const prdatm = moment(data.prdatm_np, 'YYYY-MM-DD HH:mm:ss');
            const schdtm = moment(data.schdtm_np, 'YYYY-MM-DD HH:mm:ss');
            // Calculate the difference in minutes
            const diff = schdtm.diff(prdatm, 'minutes');
            // Return the difference or 0 if it's negative, as a string
            return Math.max(diff, 0).toString();
        },
        Cell: ({ value }) => {
            // If the value is an empty string, just return it
            if (value === '') {
                return value;
            }
            // Determine the color based on the value
            const color = parseInt(value) >= 5 ? 'green' : 'red';
            // Style the cell content
            return <span style={{ color: color }}>{value}</span>;
        }
    }
    
]

export const COLUMNS_RED = [
    {
        Header: 'Run',
        accessor: 'rid',
    },
    {
        Header: 'Bus',
        accessor: 'vid',
    },
    {
        Header: "To",
        accessor: "pattern",
    },
    {
        Header: "Arrives in",
        accessor: "time_from_now",
    },
    {
        Header: 'Dev.',
        accessor: 'd_red',
    },
    {
        Header: 'Headway',
        accessor: 'h_red'
    },
    {
        Header: 'Front Status',
        accessor: 'h_msg_red',
    },
    {
        Header: 'Back Status', 
        accessor: 'fh_msg_red'
    },
    {
        Header: 'Rec. Hold', 
        accessor: 'rec_red'
    }
]

export const COLUMNS_BROWN = [
    {
        Header: 'Run',
        accessor: 'rid',
    },
    {
        Header: 'Bus',
        accessor: 'vid',
    },
    {
        Header: "To",
        accessor: "pattern",
    },
    {
        Header: "Arrives in",
        accessor: "time_from_now",
    },
    {
        Header: 'Dev.',
        accessor: 'd_brown',
    },
    {
        Header: 'Headway',
        accessor: 'h_brown'
    },
    {
        Header: 'Front Status',
        accessor: 'h_msg_brown',
    },
    {
        Header: 'Back Status', 
        accessor: 'fh_msg_brown'
    },
    {
        Header: 'Rec. Hold', 
        accessor: 'rec_brown'
    }
]

export const COLUMNS_BLUE = [
    {
        Header: 'Run',
        accessor: 'rid',
    },
    {
        Header: 'Bus',
        accessor: 'vid',
    },
    {
        Header: "To",
        accessor: "pattern",
    },
    {
        Header: "Arrives in",
        accessor: "time_from_now",
    },
    {
        Header: 'Dev.',
        accessor: 'd_blue',
    },
    {
        Header: 'Headway',
        accessor: 'h_blue'
    },
    {
        Header: 'Front Status',
        accessor: 'h_msg_blue',
    },
    {
        Header: 'Back Status', 
        accessor: 'fh_msg_blue'
    },
    {
        Header: 'Rec. Hold', 
        accessor: 'rec_blue'
    }
]