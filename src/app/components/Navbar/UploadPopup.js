import css from "./Navbar.module.css";

export function UploadPopup({ setUploadPopup }) {
  return (
    <div className={css.uploadPopup}>
      <form
        action="https://back-portfolio-next.vercel.app/uploadApi"
        method="post"
      >
        {/* <form action='http://localhost:3005/uploadApi' method='post'> */}
        <h1>Upload API</h1>
        <input name="api_name" placeholder="API name" />
        <input name="api_endpoint" placeholder="Endpoint" />
        <input name="api_method" placeholder="Method: GET/POST/..." />
        <input name="api_input" placeholder="Input description" />
        <input name="api_output" placeholder="Output description" />
        <input name="api_source" placeholder="URL source code" />
        <input
          name="admin_password"
          type="password"
          placeholder="Admin password"
        />
        <button>Upload</button>
        {/* <input type='submit' value={'Upload'}/> */}
      </form>
      <div onClick={() => setUploadPopup(null)}>X</div>
    </div>
  );
}
