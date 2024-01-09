import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { SvgUpload } from "../svg-icon";

const props = {
  action: "//jsonplaceholder.typicode.com/posts/",
  listType: "picture",
  previewFile(file) {
    console.log("Your upload file:", file);
    // Your process logic. Here we just mock to the same file
    return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
      method: "POST",
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

const UploadButton = () => {
  return (
    <Upload {...props}>
      <Button
        icon={<SvgUpload />}
        style={{
          border: "2px solid #3259da",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: '#3259DA'
        }}
      >
        Change Photo
      </Button>
    </Upload>
  );
};
export default UploadButton;
