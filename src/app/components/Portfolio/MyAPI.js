import css from "./Portfolio.module.css";
import { GitHub } from "./GitHub";

export function MyAPI({
  api_name,
  api_endpoint,
  api_method,
  api_input,
  api_output,
  api_href,
}) {
  return (
    <div className={css.api_card}>
      <h1>
        {api_name} <GitHub href={api_href} />
      </h1>
      <p>
        <strong>Endpoint:</strong> {api_endpoint}
      </p>
      <p>
        <strong>Method:</strong> {api_method}
      </p>
      <p>
        <strong>Input:</strong> {api_input}
      </p>
      <p>
        <strong>Output:</strong> {api_output}
      </p>
    </div>
  );
}
