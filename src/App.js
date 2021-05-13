import "./App.css";
import { Fragment, useEffect } from "react";
import jsPDF from "jspdf";
import { DropzoneArea } from "material-ui-dropzone";
import GooglePicker from "react-google-picker";
import DropboxChooser from "react-dropbox-chooser";
import useState from "react-usestateref";

var axios = require("axios");

var client_id =
  "53271139406-uvv8bp7h02s88p3u12oofn7bv9t35ocj.apps.googleusercontent.com";
var key = "AIzaSyA_JbaEc0zfoF1ZzY-WEAhJzanBzGyWsnc";
// var project_id = "53271139406";
var scope = "https://www.googleapis.com/auth/drive.readonly";
var DropBox_Api_key = "929743z4hbcblk6";
const doc1 = new jsPDF("p", "pt", "a4");
var base64_Drop = [];

function App() {
  const [file, setFiles] = useState();
  const [Drivefiles, setDriveFiles, DrivefilesRef] = useState([]);
  const [DropBoxFiles, setDropBoxFiles, DropBoxFilesRef] = useState([]);
  const [progress, setProgress] = useState();
  const [mytoken, setmytoken] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    if (count === 2) {
      Drivefiles.map((image) => {
        console.log(image.id);
        var a = document.getElementById("Drive_img_grid");
        var b = document.createElement("div");
        b.setAttribute("id", image.id);
        b.style.cssText = "margin-bottom:5px";
        b.className = "col-md-4";
        a.appendChild(b);
        var c = document.createElement("img");
        var url = "https://drive.google.com/uc?id=" + image.id;
        c.src = url;
        c.setAttribute("height", 100);
        c.setAttribute("width", 100);
        c.style.cssText = "margin-left:5px";
        var button = document.createElement("button");
        button.innerHTML = "<i class='far fa-trash-alt'></i>";
        button.style.cssText =
          "overflow:visible;font-size:15px;float:left;color:red;border-radius:100px;border:hidden";
        button.onclick = function () {
          Remove_Drive_File(image.id);
        };
        b.appendChild(button);
        b.appendChild(c);
        setTimeout(() => {
          window.$("#DriveModal").modal("show");
        }, 3000);
      });
    }
  }, [Drivefiles]);

  const doc = new jsPDF("p", "pt", "a4");
  var h1 = 60;
  var height = doc.internal.pageSize.height;
  var aspectwidth1 = (height - h1) * (9 / 12);

  const GeneratePdf = async () => {
    var base64 = "";
    if (file.length > 0) {
      var f = file;
      for (var j = 0; j < f.length; j++) {
        var f1 = f[j];
        base64 = await converBase64(f1);

        doc.addImage(base64, "JPEG", 5, h1, aspectwidth1, 500);
        if (f[j + 1] !== undefined) {
          doc.addPage();
        }
        var pr = (100 / (f.length - j)).toFixed(2);
        setProgress("Initializing : " + pr + "%");
      }
      doc.save("ImgToPdf-Converted");
      window.location.reload();
    }
  };

  const converBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function Remove_Drive_File(id) {
    var f = DrivefilesRef.current.filter(function (obj) {
      return obj.id !== id;
    });
    document.getElementById(id).innerHTML = "";
    setDriveFiles(f);
  }

  const GeneratePdf1 = () => {
    window.$("#DriveModal").modal("hide");
    let promises = [];
    let res = [];
    let count = "";

    for (var i = 0; i < Drivefiles.length; i++) {
      promises.push(
        axios
          .get(
            "https://www.googleapis.com/drive/v3/files/" +
              Drivefiles[i].id +
              "?key=" +
              key +
              "&alt=media",
            {
              headers: {
                Authorization: `Bearer ${mytoken}`,
              },
              responseType: "arraybuffer",
            },
          )
          .then(
            (response) => {
              var base64 =
                "data:" +
                Drivefiles[0].mimeType +
                ";base64," +
                base64ArrayBuffer(response.data);
              res.push(base64);
              count++;
              var pr = (100 / res.length).toFixed(2);
              setProgress("Initializing : " + (100 - pr) + "%");
              if (count === i) {
                setProgress("Initializing : " + 100 + "%");
              }
              //setProgress("Initializing : " + pr + "%");
            },
            (error) => {
              var status = error.response.status;
              console.log(status);
            },
          ),
      );
    }

    Promise.all(promises).then(() => {
      for (var i = 0; i < res.length; i++) {
        doc.addImage(res[i], "JPEG", 5, h1, aspectwidth1, 500);

        if (res[i + 1] !== undefined) {
          doc.addPage();
        }
        if (res[i + 1] === undefined) {
          doc.save("ImgToPdf-Converted");
          window.location.reload();
        }
      }
    });
  };

  function base64ArrayBuffer(arrayBuffer) {
    var base64 = "";
    var encodings =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    var bytes = new Uint8Array(arrayBuffer);
    var byteLength = bytes.byteLength;
    var byteRemainder = byteLength % 3;
    var mainLength = byteLength - byteRemainder;

    var a, b, c, d;
    var chunk;

    // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
      // Combine the three bytes into a single integer
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];

      // Use bitmasks to extract 6-bit segments from the triplet
      a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
      b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
      c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
      d = chunk & 63; // 63       = 2^6 - 1

      // Convert the raw binary segments to the appropriate ASCII encoding
      base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
    }

    // Deal with the remaining bytes and padding
    if (byteRemainder === 1) {
      chunk = bytes[mainLength];

      a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

      // Set the 4 least significant bits to zero
      b = (chunk & 3) << 4; // 3   = 2^2 - 1

      base64 += encodings[a] + encodings[b] + "==";
    } else if (byteRemainder === 2) {
      chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];

      a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
      b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4

      // Set the 2 least significant bits to zero
      c = (chunk & 15) << 2; // 15    = 2^4 - 1

      base64 += encodings[a] + encodings[b] + encodings[c] + "=";
    }
    return base64;
  }

  function loop(DropBoxFiles, i) {
    if (i === DropBoxFiles.length) {
      return;
    }

    var pr = (100 / (DropBoxFiles.length - i)).toFixed(2);
    setProgress("Initializing : " + pr + "%");
    var xhr = [];
    var url = "";

    var DropBox_token =
      "YE_Jc0-GGWMAAAAAAAAAARXr7ERK4stbhRFOyFTxIJdPcoSFcql6-eoQn1G51e7M";

    xhr[i] = new XMLHttpRequest();
    url = "https://content.dropboxapi.com/2/files/download";
    xhr[i].open("POST", url, true);
    xhr[i].responseType = "arraybuffer";
    xhr[i].setRequestHeader("Authorization", "Bearer " + DropBox_token);
    xhr[i].setRequestHeader("Content-Type", "application/octet-stream");
    xhr[i].setRequestHeader(
      "Dropbox-API-Arg",
      JSON.stringify({
        path: DropBoxFiles[i].id,
      }),
    );

    xhr[i].onload = function () {
      if (xhr[i].readyState === 4 && xhr[i].status === 200) {
        base64_Drop[i] =
          "data:" +
          "image/jpeg" +
          ";base64," +
          base64ArrayBuffer(xhr[i].response);
        console.log(base64_Drop.length);

        if (DropBoxFiles[i + 1] === undefined) {
          for (var j = 0; j < base64_Drop.length; j++) {
            doc1.addImage(base64_Drop[j], "JPEG", 5, h1, aspectwidth1, 500);
            if (base64_Drop[j + 1] !== undefined) {
              doc1.addPage();
            }
            if (base64_Drop[j + 1] === undefined) {
              //doc1.output("dataurlnewwindow");
              doc1.save("ImgToPdf-Converted");
              window.location.reload();
            }
          }
        }
        loop(DropBoxFiles, ++i);
      }
    };
    xhr[i].send();
  }

  const GeneratePdf2 = () => {
    loop(DropBoxFilesRef.current, 0);
    window.$("#exampleModal").modal("hide");
  };

  function Remove_DropBox_File(files, id) {
    var f = DropBoxFilesRef.current.filter(function (obj) {
      return obj.id !== id;
    });
    document.getElementById(id).innerHTML = "";
    setDropBoxFiles(f);
    base64_Drop = [];
  }

  const handelSuccess = (files) => {
    setDropBoxFiles(files);
    files.map((image) => {
      var a = document.getElementById("DropBox_img_grid");
      var b = document.createElement("div");
      b.setAttribute("id", image.id);
      b.style.cssText = "margin-bottom:5px";
      b.className = "col-md-4";
      a.appendChild(b);
      var c = document.createElement("img");
      c.src = image.thumbnailLink;
      c.style.cssText = "margin-left:5px";
      var button = document.createElement("button");
      button.innerHTML = "<i class='far fa-trash-alt'></i>";
      button.style.cssText =
        "overflow:visible;font-size:15px;float:left;color:red;border-radius:100px;border:hidden";
      button.onclick = function () {
        Remove_DropBox_File(files, image.id);
      };
      b.appendChild(button);
      b.appendChild(c);
      window.$("#exampleModal").modal("show");
    });
  };

  return (
    <Fragment>
      <h1
        style={{
          marginBottom: "3%",
          marginLeft: "59px",
          marginTop: "3%",
        }}
        className="text-danger">
        Image to pdf Converter
      </h1>
      <div class="container-fluid">
        <div className="row" style={{ marginLeft: "30px" }}>
          <div className="col-md-11">
            <DropzoneArea
              acceptedFiles={["image/*"]}
              onChange={(files) => setFiles(files)}
              dropzoneText={"Drag and drop an image here or click"}
              filesLimit={100}
              showPreviewsInDropzone={true}
              showAlerts={false}
            />
          </div>
          <div className="col-md-1">
            <GooglePicker
              clientId={client_id}
              developerKey={key}
              scope={scope}
              onChange={(data) => setDriveFiles(data.docs)}
              onAuthenticate={(token) => setmytoken(token)}
              onAuthFailed={(data) => console.log("on auth failed :" + data)}
              multiselect={true}
              navHidden={true}
              authImmediate={false}
              mimeTypes={["image/png", "image/jpeg", "image/jpg"]}
              viewId={"DOCS_IMAGES"}>
              <button
                className="btn btn-danger"
                style={{ borderRadius: "60%" }}>
                <i
                  class="fab fa-google-drive"
                  style={{ color: "white", fontSize: "20px" }}></i>
              </button>
            </GooglePicker>
            <br />
            <DropboxChooser
              appKey={DropBox_Api_key}
              success={handelSuccess}
              cancel={() => console.log("canceled")}
              multiselect={true}>
              <button
                className="btn btn-danger"
                style={{ borderRadius: "60%" }}>
                <i
                  class="fa fa-dropbox"
                  style={{ color: "white", fontSize: "20px" }}></i>{" "}
              </button>
            </DropboxChooser>
          </div>
        </div>
      </div>
      <br />
      <button
        style={{ marginLeft: "654px" }}
        className="btn btn-danger btn-lg"
        onClick={() => GeneratePdf()}>
        Generate PDF
      </button>
      <br />
      <br />
      <br />
      <h3 style={{ marginLeft: "610px" }} className="text-danger">
        {progress > 0 ? "Intializing" : ""} {progress}
      </h3>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content" style={{ height: "500px" }}>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Choose Picture
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" id="modal-body">
              <div id="DropBox_img_grid" className="row"></div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => GeneratePdf2()}>
                {" "}
                Generate PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="DriveModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content" style={{ height: "500px" }}>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Choose Picture
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" id="modal-body">
              <div id="Drive_img_grid" className="row"></div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => GeneratePdf1()}>
                {" "}
                Generate PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

// client id : 53271139406-g1uonvkoclpkh2e5fsrt62vpj82pi7sj.apps.googleusercontent.com
// api key : AIzaSyD7TJ5uboHH0IY-XLqsL3tFUGdDAVicJAo
// project id : 53271139406
