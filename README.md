<p align="center"><img src="https://appvital.com/images/logo-appvital-dark-top.png" align="center" height="100"/></p>
<h1 align="center">
  appvital-file-upload-widget-api-react
</h1>
<p align="center">
  React wrapper library to quickly integrate Appvital File picker & cloud uploader in your application with just few lines of code.
</p>
<p align="center">
  <img src="https://cdn.appvital.com/appsite/static/appvital-file-picker-cloud-uploader.gif"  align="center" height="340"/>
</p>

## Core Features

*   **Drag & Drop** or **Copy & Paste** any file
*   Pick files from **multiple sources** including popular **online file shares**
*   **Upload** files straight to **your own** Amazon S3, Azure Bob & SFTP storages
*   Crop, rotate, flip and **enhance photos** to perfection with **built-in photo editor**
*   Generate **thumbnails**, apply text or image **watermarks**
*   **Complete control** with configurable options and **much more**

## Demo/Examples

See file upload widget in [action here](https://appvital.com/example/file-picker) with example configurations demonstrating various features.


## Quick Start

Install it through NPM
```bash
npm install @appvitalinc/file-upload-widget-api-react
```

```javascript
import { ApvFilePicker } from '@appvitalinc/file-upload-widget-api-react'

const MyComponent = () => {
  return (
    <ApvFilePicker
      apikey={'apiKey'}
    />
  )
}
```

### Available inputs

| Name    | Type                 | Required | Default | Description                                                         |
| ------- | -------------------- | -------- | ------- | ------------------------------------------------------------------- |
| apikey  | String               | True     |         | Filepicker api key                                                  |
| options | ApvFilePickerOptions |          |         | Check [ApvFilePickerOptions](https://appvital.com/docs/file-picker) |

### Callbacks

| Name            | Function                  | Required | Default | Description                            |
| --------------- | --------------------- | -------- | ------- | -------------------------------------- |
| onOpen          | ()              |          |         | Fires when filepicker has been initialized and is ready.     |    
| onClose         | ()              |          |         | Fires when filepicker popup is closed.  |
| onCancel        | ()              |          |         | Fires when filepicker is canceled.         |
| onUploadStarted | ()              |          |         | Fires when file(s) uploading starts.  |
| onUploadDone    | (ApvFilePickerResponse) |          |         | Fires when uploading completes.     |
| onUploadError   | (error)       |          |         | Fires when file(s) upload is failed.   |

Below you can find some quick basic implementations.

#### Open picker - Single file upload

```typescript
import { ApvFilePicker } from '@appvitalinc/file-upload-widget-api-react'

const MyComponent = () => {

  apikey = 'YOUR_API_KEY';
  options =  {
      multiple: false,
      outputfileoptions: {
        width: 500,
        height: 281,
        resizetype: "fit",
        resizeconflict: "pad",
        storage: [
          {
            name: "AWS-S3-Storage-Demo",
            path: "/file-picker-demo/",
          },
        ],
      },
      inputfileoptions: {
        allowedfileformats: "jpg,jpeg,gif,bmp,png,webp,zip,pdf",
        maxfilesize: 700000000,
        note:
          "File size restricted to: 10000 KB / File type restricted to: JPG, PNG, JPEG, PDF, DOC, DOCX, TXT, XML and ZIP.",
      },
    };
  };

  onOpen = () =>  {
    console.log('Modal open');
  }

  onClose = () => {
    console.log('Modal Close');
  }

  onCancel = () => {
    console.log('On Cancel');
  }

  onUploadDone = (data) => {
      console.log('onUploadStart', data);
  }

  onUploadStart = () => {
    console.log('onUploadStart');
  }

  onUploadError = (data) => {
    console.log('onUploadError', data);
  }

  return (
    <ApvFilePicker
      apiKey={apikey}
      options={options}
      onOpen={onOpen}
      onClose={onClose}
      onCancel)={onCancel}
      onUploadDone={onUploadDone}
      onUploadStarted={onUploadStart}
      onUploadError={onUploadError} 
      />
    );
}
```


## Documentation

You can find further documentation about available filepicker options and configuration details here at https://appvital.com/docs/file-picker#Quickstart-React

## Contributing

Any of your contributions or ideas are more than welcome. Please consider that we follow the conventional commits specification to ensure consistent commit messages and changelog formatting.
