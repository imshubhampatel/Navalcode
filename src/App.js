import { useState } from "react";
import "./App.css";

export default function App() {
  // var count = 0;
  const imgSrc1 =
    "data:image/svg+xml;base64,PHN2ZyBpZD0iZmxhdCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xMjggODAuMzY1YTguNzE4IDguNzE4IDAgMCAwIC04LjgzMy04LjIyMmgtMy42OTdhOC40ODEgOC40ODEgMCAwIDAgOC40NzgtOC43NDIgOC43MTcgOC43MTcgMCAwIDAgLTguODMzLTguMjIxaC0yNi40MzhhNC4zNjYgNC4zNjYgMCAwIDEgLTMuNzc3LTYuNjI3bC4wMzktLjA1OGMxLjk1Mi0yLjk2NiA1LjEwOS00LjkgOC4yNDctNi41NjFzNy4zMDgtNS44ODkgOS41NjMtOC42MzNjNS40NzYtNi42NjcgNS4zLTE3LjY1MSAxLjM3Mi0yNC40MThhNi42NDUgNi42NDUgMCAwIDAgLTQuMzUxLTMuMjgzYy00LjM2NS0uODYzLTcuNDE1IDIuNzU3LTguODcyIDYuMzMzLTcuMiAxNy42ODMtMjEuNTkgMjMuNTItMzQuODQ4IDI4Ljk5M2wtMjMuNjczIDE0LjI1NC0uOTE5IDU3LjY4OSAzMi44NCA5LjY2Mmg0Ni4yNzRhOC40NTkgOC40NTkgMCAwIDAgOC41NzItNy45NzcgOC4yMyA4LjIzIDAgMCAwIC04LjIyNi04LjQ4M2g0LjJhOC43MTcgOC43MTcgMCAwIDAgOC44MzMtOC4yMjEgOC40ODIgOC40ODIgMCAwIDAgLTguNDc4LTguNzQzaDQuMDQ4YTguNDgyIDguNDgyIDAgMCAwIDguNDc5LTguNzQyeiIgZmlsbD0iI2YwYzE5MSIvPjxyZWN0IGZpbGw9IiM2YmIzZDkiIGhlaWdodD0iNzAuMDk4IiByeD0iMy42NDEiIHdpZHRoPSIzNi4yNTEiIHk9IjQ3LjM3OCIvPjwvc3ZnPg==";
  const imgSrc2 =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZERDFBMzsiIGQ9Ik01MTIsMjg2LjhjMCwyOS42Ni0yNC4xMyw1My43OS01My43OCw1My43OWwtMTA1LjM5LTAuMDFsMTYuMDgsNTUuNTR2MjYuNjINCgljMCw0OS4wNC0zOS44OSw4OC45My04OC45Myw4OC45M2MtMTEuODksMC0yMS41Ny05LjY3LTIxLjU3LTIxLjU2di01OWMtOC4zOC0xMy40MS01Ni42LTY3LjM0LTEwNy43NC0xMjIuMTh2MjcuMzZoLTMwVjQ3LjUzDQoJbDg1LjgzLTMyLjE4YzI2LjU3LTkuOTcsNTQuNDMtMTUuMDIsODIuODEtMTUuMDJINDIyLjhjMjkuNjUsMCw1My43OCwyNC4xMyw1My43OCw1My43OGMwLDEyLjU0LTQuMzEsMjQuMDktMTEuNTQsMzMuMjUNCgljMTQuMDksOS43MSwyMy4zNSwyNS45NSwyMy4zNSw0NC4zMmMwLDEyLjU0LTQuMzMsMjQuMDgtMTEuNTYsMzMuMjRjNS4zNiwzLjY5LDEwLjAzLDguMzMsMTMuNzUsMTMuNjcNCgljNi4wNiw4LjcsOS42MSwxOS4yNyw5LjYxLDMwLjY1YzAsMTIuNTQtNC4zMywyNC4wOS0xMS41NSwzMy4yNEM1MDIuNzQsMjUyLjE5LDUxMiwyNjguNDMsNTEyLDI4Ni44eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQkI4NTsiIGQ9Ik01MTIsMjg2LjhjMCwyOS42Ni0yNC4xMyw1My43OS01My43OCw1My43OWwtMTA1LjM5LTAuMDFsMTYuMDgsNTUuNTR2MjYuNjINCgljMCw0OS4wNC0zOS44OSw4OC45My04OC45Myw4OC45M2MtMTEuODksMC0yMS41Ny05LjY3LTIxLjU3LTIxLjU2di01OWMtOC4zOC0xMy40MS01Ni42LTY3LjM0LTEwNy43NC0xMjIuMTh2MjcuMzZoLTMwdi0xNTcuNw0KCWgzNjkuOTFjNi4wNiw4LjcsOS42MSwxOS4yNyw5LjYxLDMwLjY1YzAsMTIuNTQtNC4zMywyNC4wOS0xMS41NSwzMy4yNEM1MDIuNzQsMjUyLjE5LDUxMiwyNjguNDMsNTEyLDI4Ni44eiIvPg0KPHJlY3QgeT0iMTIuMDkiIHN0eWxlPSJmaWxsOiM3OTg1RUI7IiB3aWR0aD0iMTUwLjY3IiBoZWlnaHQ9IjM1My42NCIvPg0KPHJlY3QgeT0iMTc4LjU5IiBzdHlsZT0iZmlsbDojNEI1QkU2OyIgd2lkdGg9IjE1MC42NyIgaGVpZ2h0PSIxODcuMTQiLz4NCjxyZWN0IHg9IjYwLjUiIHk9IjI4MC45OSIgc3R5bGU9ImZpbGw6I0UxRTRGQjsiIHdpZHRoPSIyOS42NzMiIGhlaWdodD0iMjkuNjczIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==";

  const [count, setCount] = useState(0);
  function increaseHandler() {
    setCount(count + 1);

  }
  function decreaseHandler() {
    if(count !== 0){
      setCount(count - 1);
    }
    else{
      setCount(count)
    }
  }
  return (
    <div className="App">
      <h1>like and dislike</h1>
      <button  className='like' onClick={increaseHandler}>
        <img className="likes" src={imgSrc2} alt="mypic"/>
      </button>
      <button className="unlike" onClick={decreaseHandler}>
        <img src={imgSrc2} alt="mypic"/>
      </button>
      <div className="output">You have got <span>{count}</span> likes</div>

     
    </div>
  );
}