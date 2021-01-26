import React from "react";
import { ApvFilePicker } from "@appvitalinc/file-upload-widget-api-react";
import {
  ApvFilePickerFile,
  ApvFilePickerOptions,
  ApvFilePickerResponse,
} from "@appvitalinc/file-upload-widget-api-react/lib/models/appvital-options.model";

export const MultiFileUpload = () => {
  const apiKey = "YOUR-API-KEY";

  const options: ApvFilePickerOptions = {
    multiple: true,
    outputfileoptions: {
      width: 500,
      height: 281,
      resizetype: "fit",
      resizeconflict: "crop",
      storage: [
        {
          code: "AWS-S3-Storage-Demo",
          path: "/file-picker-demo/",
        },
      ],
    },
    inputfileoptions: {
      sources: "",
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
