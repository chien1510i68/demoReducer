// App.jsx / App.tsx

import React, { Component, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Form } from "antd";

function Editor({ onChange }) {
  return (
    <div className="App">
      <CKEditor 
        editor={ClassicEditor} 
        config={{
          extraPlugins: []
        }}
        onChange={onChange} />
    </div>
  );
}

export default Editor;
