import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useSnackbar } from "notistack";
import "./index.scss";

export const ImageInput = (props) => {
  // -------- setting ---------//
  const { enqueueSnackbar } = useSnackbar();

  // --------- props --------- //
  const { title, onChange, initImage, height } = props;

  // --------- state --------- //
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [imageReview, setImageReview] = useState();

  // --------- lifecycle --------- //
  useEffect(() => {
    if (initImage && initImage != image) {
    }
  }, [initImage]);

  // --------- handle --------- //
  const handleClickoOverlay = (event) => {
    if (imageReview) {
      event.preventDefault();
    }
  };

  const imgError = (image) => {
    setImageReview(undefined);
    return true;
  };

  const handleClickBtnUpdate = (event) => {
    //event.stopPropagation();
    document.getElementById("file-input")?.click();
  };

  const handleClickBtnRemove = async (event) => {
    event.preventDefault();
    setImageReview(undefined);
  };

  const handleChangeImg = async (event) => {
    setLoading(true);
    const file = event.target?.files[0];
    const dataForm = new FormData();
    dataForm.append("file", file[0]);

    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      setImageReview(<img src={reader.result}/>)
    }.bind(this);
  };

  // --------- render --------- //
  return (
    <>
      <h3>{title}</h3>
      <div style={{ height: height ?? "auto" }}>
        <label htmlFor="file-input">
          <div
            className="input_img_wrapper"
            style={{
              height: height ?? "300px",
              backgroundColor: "#efefef",
              borderRadius: "10px",
            }}
          >
            {/* ---------- review img ---------- */}
            {imageReview ? (
              imageReview
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              ></div>
            )}
            {/* ----------  control image ---------- */}
            <div className="overlay" onClick={(e) => handleClickoOverlay(e)}>
              {!imageReview ? (
                <div className="choose">
                  <h3 style={{ textAlign: "center" }}>click to update image</h3>
                  <CameraAltIcon sx={{ fontSize: "60px" }} />
                </div>
              ) : (
                <div className="actions">
                  <div>
                    <Button
                      variant="outlined"
                      color="success"
                      onClick={(e) => handleClickBtnUpdate(e)}
                    >
                      Update
                    </Button>
                  </div>

                  <div>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={(e) => handleClickBtnRemove(e)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </label>
        <input
          id="file-input"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => handleChangeImg(e)}
        ></input>
      </div>
      {/* {loading ? <BallTriangleLoader /> : ""} */}
    </>
  );
};
