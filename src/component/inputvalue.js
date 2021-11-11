import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Showday from "./showday";
import './inputvalue.css';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Stack } from "react-bootstrap";

function calculate(d, m, y) {

    var w;
    var k;
    var c;

    d = parseFloat(d);
    m = parseFloat(m);
    y = parseFloat(y);

    var yc = (y / 4) % 1;

    if ((d > 31) || (m == (4, 6, 9, 11) && d > 30)
        || ((yc == 0 && m == 2 && d > 29 && y != 1900) || (yc > 0 && m == 2 && d > 28))
        || (d < 1) || (m < 1 || m > 12) || (y < 1900) || (y == 1900 && m == 2 && d > 28)
    ) {
        return w = 100;
    } else {

        if (y == 1900 && m < 3) {
            d = d + 1;
        }
        c = Math.floor(y / 100);
        k = y % 100;


        if (m < 3) {
            m = m + 12;
            k = k - 1;

        }

        w = (Math.floor(d + (26 * (m + 1)) / 10) + k + Math.floor(k / 4) + Math.floor(c / 4) - (2 * c)) % 7

        if (w < 0) {
            w = w + 7;
        }

        return w;

    }

}

function Inputvalue() {
    const [dayofweek, setDayofweek] = useState()
    const [date, setDate] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();

    return (
        <div className="container">

            <Stack gap={4} className="col-md-auto mx-auto">
                <Row>
                    <Col>
                        <h1>Day of the Week</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="2" sm="2">
                        date :
                    </Col>
                    <Col ><input type="text" value={date} maxLength="2"

                        placeholder="Enter date"
                        onChange={e => {
                            const val = e.target.value;
                            setDate(val)
                        }} />
                    </Col>

                </Row>

                <Row>
                    <Col md="2" sm="2" >
                        month :
                    </Col>
                    <Col> <input type="text" value={month} maxlength="2"
                        placeholder="Enter month"
                        onChange={e => {
                            const val = e.target.value;
                            setMonth(val)
                        }} />
                    </Col>

                </Row>

                <Row>
                    <Col md="2" sm="2">
                        year :
                    </Col>
                    <Col> <input type="text" value={year} maxlength="4"
                        placeholder="Enter year"
                        onChange={e => {
                            const val = e.target.value;
                            setYear(val)
                        }} />
                    </Col>

                </Row>

                <Button className="btn" variant="info"
                    onClick={e => {
                        const val = calculate(date, month, year);
                        setDayofweek(val);
                    }}> Calculate
                </Button>
                <Showday day={dayofweek} date={date} month={month} year={year} />
            </Stack>


        </div>

    );
}

export default Inputvalue;