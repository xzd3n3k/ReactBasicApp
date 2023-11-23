import React, {ReactElement} from "react";
import Navbar from "../../Navbar/Navbar";
import {Table} from "../../index";
import data from "../../../data";

export default function HomePage(): ReactElement {
    return (
        <div>
            <Table data={data}></Table>
        </div>
    )
}
