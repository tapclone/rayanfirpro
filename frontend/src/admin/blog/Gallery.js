import "./Blog.css";
import { React, useState, useEffect } from "react";
import { Backdrop, Fade, Modal } from "@mui/material";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Project() {
  const [loading, setLoading] = useState(false);
  const [Project, setProject] = useState([]);
  const adminToken = localStorage.getItem("adminToken");
  const Navigate = useNavigate();

  useEffect(() => {
    (async function () {
      await axios.get("/api/admin/view-all-blog").then((res) => {
        setProject(res.data);
      });
    })();
  }, [loading]);

  const DeleteBlog = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const config = {
            headers: {
              "auth-token": adminToken,
            },
          };
          await axios
            .delete(`/api/admin/delete-blog/${id}`, config)
            .then((res) => {
              setLoading(false);
              setLoading(true);
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (err) {
          console.log(err);
        }
      } else {
        swal("Your Data Is Safe");
      }
    });
  };
  // const DeleteProject = async (id) => {
  //   try {
  //     const { data } = await axios.delete(`/api/admin/deleting-project/${id}`);
  //     setLoading(true);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div
      className="tableMain"
      style={{ marginLeft: "5rem", marginTop: "4rem" }}
    >
      <button
        className="addBtn"
        style={{
          marginLeft: "70%",
          marginBottom: "1%",
          padding: "7px",
          marginTop:"2rem",
          color: "white",
          backgroundColor: "cornflowerblue",
          border: "aliceblue",
          borderRadius: "11px",
        }}
        onClick={() => {
          Navigate("/add-gallery-image");
        }}
      >
        ADD IMAGE
      </button>
      <div class="header_fixed">
        <table>
          <thead>
            <tr>
              <th>S No.</th>
              <th>Image</th>
              <th>Heading</th>
        
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Project.map((items, index) => {
              return (
                <tr key={index}>
                  <td >{index + 1}</td>
                  <td >
                    <img src={items?.Image} />
                  </td>
                  <td >{items.Name}</td>
            
                  <td>
                    <button
                      onClick={(e) => {
                        DeleteBlog(items._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Project;
