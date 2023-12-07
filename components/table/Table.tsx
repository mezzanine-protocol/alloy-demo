import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import styles from './table.module.css';

type TableData = {
  date: string;
  payee: string;
  amount: string;
};

const caseData = new Array(8).fill({
  date: 'Jan 9, 2023',
  payee: 'VENMO PAYMENT 1024436942467 WEB ID: 3264681992',
  amount: `-$200.00`,
});

const columnHelper = createColumnHelper<TableData>();

const columns = [
  columnHelper.accessor('date', {
    header: 'Date',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('payee', {
    header: 'Payee',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('amount', {
    header: 'Amount',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
];

const Table = () => {
  const [data] = React.useState(() => [...caseData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.tableContainer}>
      <table className={styles.recentActivityTable}>
        <thead className={styles.tableHead}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={styles.tableHeaderRow}>
              {headerGroup.headers.map((header) => (
                <th className={styles.tableHeader} key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={styles.tableBody}>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={styles.tableRow}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={styles.tableData}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
    </div>
  );
};

export default Table;
