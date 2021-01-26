import React from "react";
import { ApvFilePicker } from "@appvitalinc/file-upload-widget-api-react";
import {
  ApvFilePickerFile,
  ApvFilePickerOptions,
  ApvFilePickerResponse,
} from "@appvitalinc/file-upload-widget-api-react/lib/models/appvital-options.model";

export const GenerateThumbnails = () => {
  const apiKey = "YOUR-API-KEY";

  const options: ApvFilePickerOptions = {
    multiple: true,
    maxfiles: 3,
    outputfileoptions: {
      width: 500,
      height: 281,
      resizetype: "fit",
      resizeconflict: "crop",
      thumbnails: [
        {
          width: 400,
          height: 225,
          resizetype: "fit",
          resizeconflict: "crop",
          fileformat: "png",
          filenamesuffix: "thumb400",
        },
        {
          width: 200,
          height: 200,
          resizetype: "fit",
          resizeconflict: "pad",
          backgroundcolor: "#6D7E8F",
          fileformat: "png",
          filenamesuffix: "thumb200",
        },
        {
          width: 50,
          height: 50,
          resizetype: "fit",
          resizeconflict: "crop",
          fileformat: "png",
          filenamesuffix: "thumb50",
        },
      ],
      storage: [
        {
          code: "AWS-S3-Storage-Demo",
          path: "/file-picker-demo/",
        },
      ],
    },
    inputfileoptions: {
      sources: "",
      allowedfileformats: "jpg,jpeg,gif,bmp,png",
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
