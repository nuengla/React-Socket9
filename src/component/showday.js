import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from "react-bootstrap/Alert";
import './showday.css';

function Showday(props) {

    return (
        <div>
            {
                props.day === 100 &&
                <Alert variant="danger">
                    <p>The search date was not found, please enter a valid date.</p>
                </Alert>
            }
            {
                props.day === 0 &&
                <p className="saturday">{props.date} / {props.month} / {props.year} : Saturday</p>
            }
            {
                props.day === 1 &&
                <p className="sunday">{props.date} / {props.month} / {props.year} : Sunday</p>
            }
            {
                props.day === 2 &&
                <p className="monday">{props.date} / {props.month} / {props.year} : Monday</p>
            }
            {
                props.day === 3 &&
                <p className="tuesday">{props.date} / {props.month} / {props.year} : Tuesday</p>
            }
            {
                props.day === 4 &&
                <p className="wednesday">{props.date} / {props.month} / {props.year} : Wednesday</p>
            }
            {
                props.day === 5 &&
                <p className="thursday">{props.date} / {props.month} / {props.year} : Thursday</p>
            }
            {
                props.day === 6 &&
                <p className="friday">{props.date} / {props.month} / {props.year} : Friday</p>
            }


        </div>
    );


}

export default Showday;