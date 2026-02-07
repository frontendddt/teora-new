 
'use client';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'; 
class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  async upload() {
    const file = await this.loader.file;

    const formData = new FormData();
    formData.append('upload', file);

    const response = await fetch('/api/upload/ckeditor', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (!response.ok || !data.url) {
      throw new Error(data?.error || 'Upload failed');
    }

    return { default: data.url }; 
  }

  abort() {}
} 
function uploadPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = loader => new MyUploadAdapter(loader);
} 
const MyEditor = ({ editorData, setEditorData }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={editorData}
      onChange={(event, editor) => {
        setEditorData(editor.getData());
      }}
      config={{
        extraPlugins: [uploadPlugin], 
        removePlugins: ['ImageBase64UploadAdapter'], 
        clipboard: { pasteFilter: null },
      }}
    />
  );
};

export default MyEditor;

 
 