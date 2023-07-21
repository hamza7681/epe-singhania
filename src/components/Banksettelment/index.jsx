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
import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router-dom";

const columns = [
  { id: "sr", label: "Sr No.", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 150 },
  { id: "email", label: "Email", minWidth: 200 },
  { id: "view", label: "View", minWidth: 50 },
  { id: "delete", label: "Delete", minWidth: 50 },
];

const Banksettelment = () => {
  const [rows, setRows] = useState([
    { _id: 1, name: "Hamza", email: "hamzambf@gmail.com" },
    { _id: 2, name: "Hamza", email: "hamzambf@gmail.com" },
    { _id: 3, name: "Hamza", email: "hamzambf@gmail.com" },
  ]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
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

  const deleteCategory = async () => {
    // try {
    //   const res = await http.delete(`/delete-tutor/${editId}`, {
    //     headers: { Authorization: token },
    //   });
    //   toast.success(res.data.msg);
    //   setFetchAgain(true);
    //   handleClose2();
    // } catch (error) {
    //   toast.error(error.response.data.msg);
    // }
  };

  const handleSearch = (e) => {
    // const searchTerm = e.target.value;
    // if (searchTerm === "") {
    //   setRows(defaultData);
    // } else {
    //   const filterArray = rows.filter((val) => {
    //     return (
    //       val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //       val.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //       val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //       val.subject.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    //   });
    //   setRows(filterArray);
    // }
  };

  return (
    <div className="w-full">
      <div className="bg-white py-1 flex justify-between items-center rounded-[7px] ">
        <h1 className="text-[#FD5D3E] text-[26px]">Bank Settelment</h1>
      </div>
      <DeleteModal
        open={open2}
        handleClose={handleClose2}
        heading="Do you want to delete this bank settelment?"
        btn1="Cancel"
        deleteClick={deleteCategory}
        btn2="Delete"
      />
      <div className="py-[20px]">
        <div className=" w-full py-3 items-center border-b-0 bg-white">
          <input
            type="text"
            placeholder="Search here"
            className=" focus:outline-none py-[9px] px-[10px] bg-white border-[1px] border-gray-200 w-full rounded-[3px] text-white"
            onChange={handleSearch}
          />
        </div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          {rows.length === 0 ? (
            <p className="bg-[white] pl-[10px] text-white">
              No Bank Settelment found!
            </p>
          ) : (
            <TableContainer sx={{ maxHeight: 440 }}>
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
                          <TableCell>
                            <div className="bg-white w-fit flex justify-center items-center p-[7px] rounded-[3px] cursor-pointer">
                              <FaEye
                                className="text-green-500 text-[18px]"
                                onClick={() => navigate("/students/" + row._id)}
                              />
                            </div>
                          </TableCell>
                          <TableCell>
                            <div
                              className="bg-white w-fit flex justify-center items-center p-[7px] rounded-[3px] cursor-pointer"
                              onClick={() => {
                                handleOpen2();
                                setEditId(row._id);
                              }}
                            >
                              <FaTrash className="text-red-500 text-[18px]" />
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
    </div>
  );
};

export default Banksettelment;
