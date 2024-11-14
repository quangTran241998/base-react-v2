import { useMemo, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import kiểu mặc định của Quill

const BlockEmbed = Quill.import("blots/block/embed");

class CustomVideoBlot extends BlockEmbed {
  static create(value: any) {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "video-wrapper"); // Áp dụng class cho container

    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", value);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    iframe.setAttribute("allowfullscreen", "true");

    wrapper.appendChild(iframe); // Thêm iframe vào trong div

    return wrapper;
  }

  static value(node: any) {
    return node.querySelector("iframe").getAttribute("src");
  }
}

CustomVideoBlot.blotName = "customVideo";
CustomVideoBlot.tagName = "div";
Quill.register(CustomVideoBlot);

function Editor() {
  const [value, setValue] = useState("");
  const quillRef = useRef<any>(null);

  // console.log(value, "123");

  const imageHandler = () => {
    const editor = quillRef.current.getEditor();
    const input: any = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (/^image\//.test(file.type)) {
        console.log(file);
        const formData = new FormData();
        formData.append("image", file);
        // const res = await ImageUpload(formData); // upload data into server or aws or cloudinary
        // const url = res?.data?.url;
        editor.insertEmbed(editor.getSelection(), "image", url);
      } else {
        console.log("You could only upload images.");
      }
    };
  };

  const insertVideo = () => {
    const videoUrl = prompt("Nhập URL của video:");
    if (videoUrl) {
      const editor = quillRef.current.getEditor();
      const range = editor.getSelection();
      editor.insertEmbed(range.index, "customVideo", videoUrl);
    }
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          ["link", "image", "video"],
        ],

        handlers: {
          image: imageHandler,
          video: insertVideo,
        },
        history: {
          delay: 500,
          maxStack: 100,
          userOnly: true,
        },
      },
    }),
    []
  );

  const url =
    "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474094rTf/anh-doremon-vay-chao_033146925.png";

  return (
    <div>
      <h1>Nhúng video trong React Quill</h1>
      <ReactQuill theme="snow" ref={quillRef} value={value} modules={modules} onChange={setValue} />
    </div>
  );
}

export default Editor;
