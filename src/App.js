import React from "react";
import "./styles.css";

export default () => {
  const fileRef = React.useRef();
  const titleRef = React.useRef();
  const contentRef = React.useRef();
  const shareData = () => {
    const title = titleRef.current.value;
    const text = contentRef.current.value;
    const file = fileRef.current.files[0];
    const files = [file];
    if (
      navigator.share &&
      navigator.canShare({
        files: files
      })
    ) {
      navigator
        .share({
          title,
          text,
          files: files
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      console.log("Web Share API is not supported in your browser.");
    }
  };
  return (
    <div className="App">
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input type="text" ref={titleRef} placeholder="Title please..." />
        </div>
        <div>
          <input type="text" ref={contentRef} placeholder="Say something..." />
        </div>
        <div>
          <input type="file" name="file" ref={fileRef} />
        </div>
        <div>
          <button onClick={shareData}>ShareContent</button>
        </div>
      </form>
    </div>
  );
};
