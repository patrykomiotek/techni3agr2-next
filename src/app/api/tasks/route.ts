import { BrowserUseClient } from "browser-use-sdk";

// http://localhost:3000/api/hello

// GET, POST, PATCH, PUT, DELETE
export const POST = async (request: Request) => {
  const body = await request.json();

  const client = new BrowserUseClient({
    apiKey: process.env.BROWSER_USE_API_KEY!, // Optional if BROWSER_USE_API_KEY is set
  });

  const task = await client.tasks.createTask({
    task: body.task,
  });

  const result = await task.complete();

  return Response.json({
    status: "success",
    result,
  });
};
