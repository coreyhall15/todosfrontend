import url from "./url"
import { redirect } from "react-router-dom"

//createAction => create a todo from form submissions to `/create`
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    // send request to backend
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    })

    // redirect back to index page
    return redirect("/")
}

export async function updateAction({ request, params }) {
    // get the form data
    const formData = await request.formData();
  
    // construct new todo
    const newTodo = {
      subject: formData.get("subject"),
      details: formData.get("details"),
    };
  
    // request to update route in backend
    await fetch(url + params.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
  
    // redirect back to the index page
    return redirect("/");
  }

//deleteAction => delete a todo from form submissions to `/delete/:id`
export const deleteAction = async ({params}) => {
    // get todo id
    const id = params.id

    // send request to backend
    await fetch(url + id + "/", {
        method: "delete",
    })

    // redirect back to show page page
    return redirect("/")
}

