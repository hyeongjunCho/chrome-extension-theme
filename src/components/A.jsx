import { useEffect } from "react";

const A = () => {
  useEffect(() => {
    var playSelectedFile = function (event) {
      var file = this.files[0];
      var type = file.type;
      var videoNode = document.querySelector("video");
      var canPlay = videoNode.canPlayType(type);
      if (canPlay === "") canPlay = "no";
      var isError = canPlay === "no";

      if (isError) {
        return;
      }

      console.log(file);
      var fileURL = URL.createObjectURL(file);
      videoNode.src = fileURL;
      videoNode.playbackRate = 0.1;
    };
    var inputNode = document.querySelector("input");
    inputNode.addEventListener("change", playSelectedFile, false);
  });

  return (
    <div>
      <input type="file" accept="video/*" />
      <video controls autoPlay></video>
    </div>
  );
};

export default A;