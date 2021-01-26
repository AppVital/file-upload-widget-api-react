import React from "react";
import { ApvFilePicker } from "@appvitalinc/file-upload-widget-api-react";
import {
  ApvFilePickerFile,
  ApvFilePickerOptions,
  ApvFilePickerResponse,
} from "@appvitalinc/file-upload-widget-api-react/lib/models/appvital-options.model";

export const ApplyWatermark = () => {
  const apiKey = "YOUR-API-KEY";

  const options: ApvFilePickerOptions = {
    multiple: false,
    outputfileoptions: {
      width: 500,
      height: 281,
      resizetype: "fit",
      resizeconflict: "crop",
      watermark: {
        type: "image",
        url:
          "https://apv-customer.s3.amazonaws.com/watermark/demo-watermark.png", //your watermakr image url
        position: "bottomright",
        margin: 30,
        opacity: 0.8,
        scale: 1.0, // 0.1-10
        rotate: 0, //0-360
        repeat: "no-repeat", //repeat | repeat-top| repeat-bottom| repeat-middle | repeat-brick
      },
      storage: [
        {
          code: "AWS-S3-Storage-Demo",
          path: "/file-picker-demo/",
        },
      ],
    },
    inputfileoptions: {
      allowedfileformats: "jpg,jpeg,gif,bmp,png,zip,pdf,doc,docx,txt,xml",
      note:
        "File type restricted to: JPG, JPEG, PNG, GIF, BMP, PDF, DOC, DOCX, TXT, XML and ZIP.",
    },
  };

  /**
   * Manage filepicker handler
   * @param data ApvFilePickerResponse
   */
  const handleFileUpload = (data: ApvFilePickerResponse) => {
    // YOUR-STORAGE-CODE
    console.log("files uploaded !!");
    console.log(data); //array of file metadata object received

    if (data.files) {
      data.files.forEach((file: ApvFilePickerFile) => {
        console.log(file);
        console.log(
          "YOUR-STORAGE-CODE-ALIAS | YOUR-STORAGE-PATH-IF-ANY",
          file.fileName
        );
      });
    }
  };

  return (
    <ApvFilePicker
      apikey={apiKey}
      options={options}
      onUploadDone={handleFileUpload}
    />
  );
};
