import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Showday from "./showday";
import './inputvalue.css';
import { Row, Col, Stack, FormControl, FloatingLabel } from "react-bootstrap";


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


            <Stack gap={2} className="col-md-auto mx-auto">
                <Row>
                    <Col>
                        <h1>Day of the Week</h1>
                    </Col>
                </Row>
                <Row>

                    <Col>
                        <div className="inputvalue">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Enter date"
                                className="mb-3"
                            >
                                <FormControl aria-label="Small"
                                    aria-describedby="inputGroup-sizing-default"
                                    type="number" min="1" max="31"
                                    value={date}
                                    placeholder="Enter date"
                                    onChange={e => {
                                        const val = e.target.value;
                                        setDate(val)
                                    }} />
                            </FloatingLabel>
                        </div>
                    </Col>

                </Row>

                <Row>

                    <Col>
                        <div className="inputvalue">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Enter month"
                                className="mb-3"
                            >
                                <FormControl aria-label="Small" className="inputnum"
                                    aria-describedby="inputGroup-sizing-default"
                                    type="number" min="1" max="31"
                                    value={month}
                                    placeholder="Enter month"
                                    onChange={e => {
                                        const val = e.target.value;
                                        setMonth(val)
                                    }} />
                            </FloatingLabel>
                        </div>
                    </Col>

                </Row>

                <Row>

                    <Col >
                        <div className="inputvalue">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Enter year"
                                className="mb-3"
                            >
                                <FormControl aria-label="Small"
                                    aria-describedby="inputGroup-sizing-default"
                                    type="number" min="1" max="31"
                                    value={year}
                                    placeholder="Enter year"
                                    onChange={e => {
                                        const val = e.target.value;
                                        setYear(val)
                                    }} />
                            </FloatingLabel>
                        </div>

                    </Col>

                </Row>

                <Button className="btn" variant="primary"
                    onClick={e => {
                        const val = calculate(date, month, year);
                        setDayofweek(val);
                    }}> Calculate
                </Button>
                <div className="alert">
                    <Showday day={dayofweek} date={date} month={month} year={year} />
                </div>
            </Stack>


        </div>

    );
}

export default Inputvalue;