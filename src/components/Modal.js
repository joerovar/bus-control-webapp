import React, { useState, useEffect } from "react"
import "./modal.css"

export function ModalNavyPier(props) {
    console.log('Modal rowData:', props.rowData);
    const trip_id = (props.rowData["trip_id"]);
    const [data, setData] = useState([]);
    const toggleConfUrl = "https://bus-control-web-demo.ue.r.appspot.com/bus/toggle?trip_id=".concat(trip_id).concat("&field=conf_np");
    const toggleOnUrl = "https://bus-control-web-demo.ue.r.appspot.com/bus/toggle?trip_id=".concat(trip_id).concat("&field=on");

    // Function to toggle confirmation
    const toggleConfirmation = async () => {
        try {
            const response = await fetch(toggleConfUrl); // GET is the default method
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Assuming the API response includes the new state, you'd update some state here
        } catch (error) {
            console.error("Error toggling confirmation:", error);
        }
    };

    // Function to toggle on/off status
    const toggleOnStatus = async () => {
        try {
            const response = await fetch(toggleOnUrl); // GET is the default method
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Assuming the API response includes the new state, you'd update some state here
        } catch (error) {
            console.error("Error toggling on/off status:", error);
        }
    };

    // Utility function to get the desired substring of prdatm_np
    const formatPrdatmNp = (prdatmNp) => {
        if (prdatmNp && prdatmNp.length >= 8) {
            // Return the substring from -8 to -3, exclusive
            return prdatmNp.slice(-8, -3);
        }
        return prdatmNp; // Or return some default value or empty string if you prefer
    };

    // Function to format the move trip text
    const formatMoveTrip = (recNp) => {
            if (recNp > 0) {
                return { text: `${recNp} back`, color: 'red' };
            } else if (recNp < 0) {
                return { text: `${Math.abs(recNp)} up`, color: 'red' };
            } else {
                return { text: '', color: 'inherit' };
            }
        };

    useEffect(() => {
        // Set the local state with the prop data only if it is not null or undefined
        if (props.rowData) {
          setData(props.rowData);
        }
      }, [props.rowData]);

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => props.closeModal(false)}> x </button>
                </div>
                <div className="title">
                    <h1>Run {data.rid} Bus {data.vid} Badge {data.oid}</h1>
                </div>
                <div className="body">
                    <div className="bodySection">
                        <li>
                            <strong>Move trip by:</strong> 
                            <span style={{ color: formatMoveTrip(data.rec_np).color }}>
                                {formatMoveTrip(data.rec_np).text}
                            </span>
                        </li>
                        <li><strong>arrival:</strong> {formatPrdatmNp(data.prdatm_np)}</li>
                        <li><strong>instructed:</strong>  {data.conf_np}</li>
                        <li><strong>normal headway:</strong>  {data.sh_np}</li>
                        <li><strong>headway:</strong>  {data.h_np}</li>
                        <li><strong>next headway:</strong>  {data.fh_np}</li>
                        <li><strong>in relief:</strong> {data.relieved}</li>
                        <li><strong>ebus?:</strong>  {data.ebus}</li>
                        <li><strong>next recovery:</strong>  {data.recovery}</li>
                        <li><strong>trip ID:</strong>  {data.trip_id}</li>
                    </div>
                    <div className="bodySection">
                        {/* <p className="buttonTitle"></p> */}
                        <button onClick={toggleConfirmation}>instructed</button>
                    <div className="bodySection">
                        {/* <p className="buttonTitle"></p> */}
                        <button onClick={toggleOnStatus}>fill/cancel</button>
                    </div>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={() => props.closeModal(false)}>close</button>
                </div>
            </div>
        </div>
    )
}


export function ModalRed(props) {

    const rid = (props.rowData["rid"]);
    const oid = (props.rowData["oid"]);
    const vid = (props.rowData["vid"]);
    const trip_id = (props.rowData["trip_id"]);
    const [data, setData] = useState([]);
    const toggleConfUrl = "https://bus-control-web-demo.ue.r.appspot.com/bus/toggle?trip_id=".concat(trip_id).concat("&field=conf_red");

    // Function to toggle confirmation
    const toggleConfirmation = async () => {
        try {
            const response = await fetch(toggleConfUrl); // GET is the default method
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Assuming the API response includes the new state, you'd update some state here
        } catch (error) {
            console.error("Error toggling confirmation:", error);
        }
    };

    useEffect(() => {
        // Set the local state with the prop data only if it is not null or undefined
        if (props.rowData) {
          setData(props.rowData);
        }
      }, [props.rowData]);

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => props.closeModal(false)}> x </button>
                </div>
                <div className="title">
                    <h1>Run {rid} Bus {vid} Badge {oid}</h1>
                </div>
                <div className="body">
                    <div className="bodySection">
                        <ul>
                            <li><strong>hold back:</strong> {data.rec_red}</li>
                            <li><strong>instructed:</strong> {data.conf_red}</li>
                            <li><strong>in relief:</strong> {data.relieved}</li>
                            <li><strong>normal headway:</strong>  {data.sh_np}</li>
                            <li><strong>next recovery:</strong>  {data.recovery}</li>
                            <li><strong>trip ID:</strong>  {data.trip_id}</li>
                        </ul>
                    </div>
                    <div className="bodySection">
                        {/* <p className="buttonTitle"></p> */}
                        <button onClick={toggleConfirmation}>instructed</button>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={() => props.closeModal(false)}>close</button>
                </div>
            </div>
        </div>
    )
}

export function ModalBrown(props) {

    const rid = (props.rowData["rid"])
    const oid = (props.rowData["oid"])
    const vid = (props.rowData["vid"])
    const trip_id = (props.rowData["trip_id"]);
    const [data, setData] = useState([]);
    const toggleConfUrl = "https://bus-control-web-demo.ue.r.appspot.com/bus/toggle?trip_id=".concat(trip_id).concat("&field=conf_brown");

    // Function to toggle confirmation
    const toggleConfirmation = async () => {
        try {
            const response = await fetch(toggleConfUrl); // GET is the default method
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Assuming the API response includes the new state, you'd update some state here
        } catch (error) {
            console.error("Error toggling confirmation:", error);
        }
    };

    useEffect(() => {
        // Set the local state with the prop data only if it is not null or undefined
        if (props.rowData) {
          setData(props.rowData);
        }
      }, [props.rowData]);

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => props.closeModal(false)}> x </button>
                </div>
                <div className="title">
                    <h1>Run {rid} Bus {vid} Badge {oid}</h1>
                </div>
                <div className="body">
                    <div className="bodySection">
                        <ul>
                            <li><strong>hold back:</strong> {data.rec_brown}</li>
                            <li><strong>instructed:</strong> {data.conf_brown}</li>
                            <li><strong>in relief:</strong> {data.relieved}</li>
                            <li><strong>normal headway:</strong>  {data.sh_np}</li>
                            <li><strong>next recovery:</strong>  {data.recovery}</li>
                            <li><strong>trip ID:</strong>  {data.trip_id}</li>
                        </ul>
                    </div>
                    <div className="bodySection">
                        {/* <p className="buttonTitle"></p> */}
                        <button onClick={toggleConfirmation}>instructed</button>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={() => props.closeModal(false)}>close</button>
                </div>
            </div>
        </div>
    )
}

export function ModalBlue(props) {

    const rid = (props.rowData["rid"])
    const oid = (props.rowData["oid"])
    const vid = (props.rowData["vid"])
    const trip_id = (props.rowData["trip_id"]);
    const [data, setData] = useState([]);
    const toggleConfUrl = "https://bus-control-web-demo.ue.r.appspot.com/bus/toggle?trip_id=".concat(trip_id).concat("&field=conf_blue");

    // Function to toggle confirmation
    const toggleConfirmation = async () => {
        try {
            const response = await fetch(toggleConfUrl); // GET is the default method
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Assuming the API response includes the new state, you'd update some state here
        } catch (error) {
            console.error("Error toggling confirmation:", error);
        }
    };

    useEffect(() => {
        // Set the local state with the prop data only if it is not null or undefined
        if (props.rowData) {
          setData(props.rowData);
        }
      }, [props.rowData]);

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => props.closeModal(false)}> x </button>
                </div>
                <div className="title">
                    <h1>Run {rid} Bus {vid} Badge {oid}</h1>
                </div>
                <div className="body">
                    <div className="bodySection">
                        <ul>
                            <li><strong>hold back:</strong> {data.rec_blue}</li>
                            <li><strong>instructed:</strong> {data.conf_blue}</li>
                            <li><strong>in relief:</strong> {data.relieved}</li>
                            <li><strong>normal headway:</strong>  {data.sh_np}</li>
                            <li><strong>next recovery:</strong>  {data.recovery}</li>
                            <li><strong>trip ID:</strong>  {data.trip_id}</li>
                        </ul>
                    </div>
                    <div className="bodySection">
                        {/* <p className="buttonTitle"></p> */}
                        <button onClick={toggleConfirmation}>instructed</button>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={() => props.closeModal(false)}>close</button>
                </div>
            </div>
        </div>
    )
}
