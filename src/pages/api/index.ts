import type { APIContext } from "astro";
import { getTasks, toggleTask } from "../../services/Task"
import { deletedCompletedtasks } from "../../services/Task"
import { createTask} from "../../services/Task"

export async function GET() {
    const taskList = await getTasks();
    return new Response(
      JSON.stringify({
        taskList
      })
    )
}

export async function POST(context: APIContext) {
  const data: {tittle: string} = await context.request.json();
  const taskList = await createTask(data.tittle);
  return new Response(
    JSON.stringify({
      taskList
    })
  )
}

export async function PUT(context: APIContext) {
  const data: {id: string} = await context.request.json();
  const task = await toggleTask(data.id);
  return new Response(
    JSON.stringify({
      task
    })
  )
}


export async function PATCH() {
  const task = deletedCompletedtasks();
  return new Response(
    JSON.stringify({
      task
    })
  )
}

