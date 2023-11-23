import { ReactElement, useState } from 'react';
import React from "react";
import style from './Table.module.css';
import { Entity } from "../../data";
import { Graph } from "../index";

interface IProps {
    data: Array<Entity>;
}

const ExpandedRow = ({ content }: { content: React.ReactNode }) => (
    <div className={style.expandedRowContainer}>
        <div className={style.expandedRow}>
            {content}
        </div>
    </div>
);

const Table = ({ data }: IProps): ReactElement => {
    const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(null);

    const handleRowExpand = (index: number | null) => {
        setExpandedRowIndex(index);
    };

    const closeExpandedRow = () => {
        setExpandedRowIndex(null);
    };

    const headers = Object.keys(data[0]).filter((key) => key !== 'monthlyData');

    return (
        <div>
            <table>
                <thead>
                <tr>
                    {headers.map((key) => (
                        <th key={key} className={style.headers}>
                            {key}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((record, index) => (
                    <React.Fragment key={index}>
                        <tr
                            className={style.rows}
                            onMouseEnter={() => handleRowExpand(index)}
                            onMouseLeave={closeExpandedRow}
                        >
                            {headers.map((key) => (
                                <td key={key} style={getCellStyles(key, record[key])}>
                                    {record[key]}
                                </td>
                            ))}
                        </tr>
                        {expandedRowIndex === index && (
                            <tr
                                onMouseEnter={() => handleRowExpand(index)}
                            >
                                <td colSpan={headers.length}>
                                    <ExpandedRow content={getTooltipContent(data[expandedRowIndex].monthlyData)} />
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
                </tbody>
            </table>
        </div>
    );
};

const getCellStyles = (key: string, value: string): React.CSSProperties => {
    if (key === 'status') {
        if (value === 'Active') {
            return { color: 'green', backgroundColor: '#c9ffcc' };
        } else if (value === 'Inactive') {
            return { color: 'red', backgroundColor: '#ffc9c9' };
        } else if (value === 'Pending') {
            return { color: 'orange', backgroundColor: '#ffe1c9' };
        }
    }
    return {};
};

const getTooltipContent = (monthlyData: Array<any>): React.ReactNode => (
    <div className={style.graph}>
        <Graph monthlyData={monthlyData}></Graph>
    </div>
);

export default Table;
