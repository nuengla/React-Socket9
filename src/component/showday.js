import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from "react-bootstrap/Alert";
import './showday.css';

function Showday(props) {
let months ;
if(props.month == 1){
    months = "January";
}else if(props.month == 2){
    months = "February";

}else if(props.month == 3){
    months = "March";

}else if(props.month == 4){
    months = "April";

}else if(props.month == 5){
    months = "May";

}else if(props.month == 6){
    months = "June";

}else if(props.month == 7){
    months = "July";

}else if(props.month == 8){
    months = "August";

}else if(props.month == 9){
    months = "September";

}else if(props.month == 10){
    months = "October";

}else if(props.month == 11){
    months = "November";

}else if(props.month == 12){
    months = "December";

}
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
                <p className="saturday">{props.date}  {months}  {props.year} : Saturday</p>
            }
            {
                props.day === 1 &&
                <p className="sunday">{props.date}  {months}  {props.year} : Sunday</p>
            }
            {
                props.day === 2 &&
                <p className="monday">{props.date}  {months}  {props.year} : Monday</p>
            }
            {
                props.day === 3 &&
                <p className="tuesday">{props.date}  {months}  {props.year} : Tuesday</p>
            }
            {
                props.day === 4 &&
                <p className="wednesday">{props.date}  {months} {props.year} : Wednesday</p>
            }
            {
                props.day === 5 &&
                <p className="thursday">{props.date}  {months}  {props.year} : Thursday</p>
            }
            {
                props.day === 6 &&
                <p className="friday">{props.date}  {months}  {props.year} : Friday</p>
            }


        </div>
    );


}

export default Showday;