import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "../styles/popUp.css";

const AlertDialogEliminar = ({ deleteMethod, objectID, redirectMethod }) => (
  <AlertDialog.Root>
    <AlertDialog.Trigger className="btn btn-rojo" asChild>
      <button>Delete</button>
    </AlertDialog.Trigger>

    <AlertDialog.Portal>
      <AlertDialog.Overlay className="popUpOverlay" />

      <AlertDialog.Content className="popUpContent">
        <AlertDialog.Title className="popUpTitle">
          Are you sure?
        </AlertDialog.Title>

        <AlertDialog.Description className="popUpDescription">
          This action is irreversible, once you start, there's no going back.
        </AlertDialog.Description>

        <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
          <AlertDialog.Cancel asChild>
            <button className="btn btn-gris">Cancel</button>
          </AlertDialog.Cancel>

          <AlertDialog.Action asChild>
            <button
              onClick={() => deleteMethod(objectID)}
              className="btn btn-rojo"
            >
              Delete
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default AlertDialogEliminar;
