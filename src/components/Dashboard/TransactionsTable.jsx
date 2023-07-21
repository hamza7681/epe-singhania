import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { FaEye, FaTrash } from "react-icons/fa";
// import { http } from "../../axios/config";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const columns = [
  { id: "sr", label: "Sr No.", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 150 },
  { id: "email", label: "Email", minWidth: 200 },
  { id: "transaction", label: "Transaction", minWidth: 50 },
  { id: "view", label: "View", minWidth: 50 },
];

const TransactionsTable = () => {
  const [rows, setRows] = useState([
    { _id: 1, name: "Hamza", email: "hamzambf@gmail.com", transaction: 500 },
    { _id: 2, name: "Hamza", email: "hamzambf@gmail.com", transaction: 500 },
    { _id: 3, name: "Hamza", email: "hamzambf@gmail.com", transaction: 500 },
    { _id: 4, name: "Hamza", email: "hamzambf@gmail.com", transaction: 500 },
    { _id: 5, name: "Hamza", email: "hamzambf@gmail.com", transaction: 500 },
    { _id: 6, name: "Hamza", email: "hamzambf@gmail.com", transaction: 500 },
    { _id: 9, name: "Hamza", email: "hamzambf@gmail.com", transaction: 500 },
    { _id: 7, name: "Hamza", email: "hamzambf@gmail.com", transaction: 500 },
    { _id: 8, name: "Hamza", email: "hamzambf@gmail.com", transaction: 500 },
  ]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  // const { token } = useSelector((s) => s.AuthReducer);
  const [editId, setEditId] = useState(null);
  // const [fetchAgain, setFetchAgain] = useState(false);
  // const [defaultData, setDefault] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (token) {
  //     const fetchCategories = async () => {
  //       const res = await http.get("/auth/get-students");
  //       setRows(res.data);
  //       setDefault(res.data);
  //       setFetchAgain(false);
  //     };
  //     fetchCategories();
  //   }
  // }, [token, fetchAgain]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="w-full">
      <Paper sx={{ width: "100%", overflow: "hidden", minHeight: "300px" }}>
        {rows.length === 0 ? (
          <p className="bg-[white] pl-[10px] text-white">No Merchants found!</p>
        ) : (
          <TableContainer sx={{ height: "280px" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        width: column.minWidth,
                        fontWeight: "bold",
                        background: "white",
                        color: "black",
                        paddingBottom: "20px",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row._id}
                        style={{ backgroundColor: "white" }}
                      >
                        <TableCell
                          style={{ fontWeight: "bold", color: "black" }}
                        >
                          {index + 1}
                        </TableCell>
                        <TableCell style={{ color: "black" }}>
                          {row.name}
                        </TableCell>

                        <TableCell style={{ color: "black" }}>
                          {row.email}
                        </TableCell>
                        <TableCell style={{ color: "black" }}>
                          {row.transaction} INR
                        </TableCell>
                        <TableCell>
                          <div className="bg-white w-fit flex justify-center items-center p-[7px] rounded-[3px] cursor-pointer">
                            <FaEye
                              className="text-green-500 text-[18px]"
                              onClick={() => navigate("/students/" + row._id)}
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{ backgroundColor: "white", color: "black" }}
        />
      </Paper>
    </div>
  );
};

export default TransactionsTable;
