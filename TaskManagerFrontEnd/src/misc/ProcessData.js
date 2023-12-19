export const processTask = (task) => { // This is supposed to process the task after it comes out the Add new task page.
    if (task["expirationDate"])
        task["expirationDate"] = new Date(task["expirationDate"]);
    
    task["state"] = "pending";
    return task;
}