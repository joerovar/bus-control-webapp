import moment from 'moment'; // Make sure to install moment.js with npm or yarn

// Define the FormatDev function
const FormatDev = (value) => {
    if (value === null || value === undefined) {
        return '';
    } else if (value >= -1 && value <= 5) {
        return `${value} on-time`;
    } else if (value < -1) {
        return `${value} early`;
    } else {
        return `${value} late`;
    }
};


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
        Cell: ({ value }) => FormatDev(value)
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
        Cell: ({ row }) => <span style={{ color: row.original.rec_red > 0 ? 'red' : 'inherit' }}>{row.values.rid}</span>
    },
    {
        Header: 'Bus',
        accessor: 'vid',
        Cell: ({ row }) => <span style={{ color: row.original.rec_red > 0 ? 'red' : 'inherit' }}>{row.values.vid}</span>
    },
    {
        Header: "To",
        accessor: "pattern",
        Cell: ({ row }) => <span style={{ color: row.original.rec_red > 0 ? 'red' : 'inherit' }}>{row.values.pattern}</span>
    },
    {
        Header: 'Dev.',
        accessor: 'd_red',
        Cell: ({ row }) => (
            <span style={{ color: row.original.rec_red > 0 ? 'red' : 'inherit' }}>
                {FormatDev(row.values.d_red)}
            </span>
        )
    },
    {
        Header: "Arrives in",
        accessor: "time_from_now",
        Cell: ({ row }) => <span style={{ color: row.original.rec_red > 0 ? 'red' : 'inherit' }}>{row.values.time_from_now}</span>
    },
    {
        Header: 'Headway',
        accessor: 'h_red',
        Cell: ({ row }) => <span style={{ color: row.original.rec_red > 0 ? 'red' : 'inherit' }}>{row.values.h_red}</span>
    },
    {
        Header: 'Rec. Hold', 
        accessor: 'rec_red',
        Cell: ({ row }) => <span style={{ color: row.original.rec_red > 0 ? 'red' : 'inherit' }}>{row.values.rec_red}</span>
    },
    {
        Header: 'Front',
        accessor: 'h_msg_red',
        Cell: ({ row }) => <span style={{ color: row.original.rec_red > 0 ? 'red' : 'inherit' }}>{row.values.h_msg_red}</span>
    },
    {
        Header: 'Back', 
        accessor: 'fh_msg_red',
        Cell: ({ row }) => <span style={{ color: row.original.rec_red > 0 ? 'red' : 'inherit' }}>{row.values.fh_msg_red}</span>
    }
]

export const COLUMNS_BROWN = [
    {
        Header: 'Run',
        accessor: 'rid',
        Cell: ({ row }) => <span style={{ color: row.original.rec_brown > 0 ? 'red' : 'inherit' }}>{row.values.rid}</span>
    },
    {
        Header: 'Bus',
        accessor: 'vid',
        Cell: ({ row }) => <span style={{ color: row.original.rec_brown > 0 ? 'red' : 'inherit' }}>{row.values.vid}</span>
    },
    {
        Header: "To",
        accessor: "pattern",
        Cell: ({ row }) => <span style={{ color: row.original.rec_brown > 0 ? 'red' : 'inherit' }}>{row.values.pattern}</span>
    },
    {
        Header: 'Dev.',
        accessor: 'd_brown',
        Cell: ({ row }) => (
            <span style={{ color: row.original.rec_brown > 0 ? 'red' : 'inherit' }}>
                {FormatDev(row.values.d_brown)}
            </span>
        )
    },
    {
        Header: "Arrives in",
        accessor: "time_from_now",
        Cell: ({ row }) => <span style={{ color: row.original.rec_brown > 0 ? 'red' : 'inherit' }}>{row.values.time_from_now}</span>
    },
    {
        Header: 'Headway',
        accessor: 'h_brown',
        Cell: ({ row }) => <span style={{ color: row.original.rec_brown > 0 ? 'red' : 'inherit' }}>{row.values.h_brown}</span>
    },
    {
        Header: 'Rec. Hold', 
        accessor: 'rec_brown',
        Cell: ({ row }) => <span style={{ color: row.original.rec_brown > 0 ? 'red' : 'inherit' }}>{row.values.rec_brown}</span>
    },
    {
        Header: 'Front',
        accessor: 'h_msg_brown',
        Cell: ({ row }) => <span style={{ color: row.original.rec_brown > 0 ? 'red' : 'inherit' }}>{row.values.h_msg_brown}</span>
    },
    {
        Header: 'Back', 
        accessor: 'fh_msg_brown',
        Cell: ({ row }) => <span style={{ color: row.original.rec_brown > 0 ? 'red' : 'inherit' }}>{row.values.fh_msg_brown}</span>
    }
]

export const COLUMNS_BLUE = [
    {
        Header: 'Run',
        accessor: 'rid',
        Cell: ({ row }) => <span style={{ color: row.original.rec_blue > 0 ? 'red' : 'inherit' }}>{row.values.rid}</span>
    },
    {
        Header: 'Bus',
        accessor: 'vid',
        Cell: ({ row }) => <span style={{ color: row.original.rec_blue > 0 ? 'red' : 'inherit' }}>{row.values.vid}</span>
    },
    {
        Header: "To",
        accessor: "pattern",
        Cell: ({ row }) => <span style={{ color: row.original.rec_blue > 0 ? 'red' : 'inherit' }}>{row.values.pattern}</span>
    },
    {
        Header: 'Dev.',
        accessor: 'd_blue',
        Cell: ({ row }) => (
            <span style={{ color: row.original.rec_blue > 0 ? 'red' : 'inherit' }}>
                {FormatDev(row.values.d_blue)}
            </span>
        )
    },
    {
        Header: "Arrives in",
        accessor: "time_from_now",
        Cell: ({ row }) => <span style={{ color: row.original.rec_blue > 0 ? 'red' : 'inherit' }}>{row.values.time_from_now}</span>
    },
    {
        Header: 'Headway',
        accessor: 'h_blue',
        Cell: ({ row }) => <span style={{ color: row.original.rec_blue > 0 ? 'red' : 'inherit' }}>{row.values.h_blue}</span>
    },
    {
        Header: 'Rec. Hold', 
        accessor: 'rec_blue',
        Cell: ({ row }) => <span style={{ color: row.original.rec_blue > 0 ? 'red' : 'inherit' }}>{row.values.rec_blue}</span>
    },
    {
        Header: 'Front',
        accessor: "h_msg_blue",
        Cell: ({ row }) => <span style={{ color: row.original.rec_blue > 0 ? 'red' : 'inherit' }}>{row.values.h_msg_blue}</span>
    },
    {
        Header: 'Back', 
        accessor: "fh_msg_blue",
        Cell: ({ row }) => <span style={{ color: row.original.rec_blue > 0 ? 'red' : 'inherit' }}>{row.values.fh_msg_blue}</span>
    }
]