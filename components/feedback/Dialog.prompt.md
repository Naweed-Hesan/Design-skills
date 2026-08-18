A modal that stops everything else. The heaviest thing in the system — use it when the
person genuinely cannot continue without deciding.

```jsx
<Dialog open={open} onClose={close}
        title="Delete board?"
        description="This removes 42 saves. It cannot be undone."
        footer={<>
          <Button onClick={close}>Cancel</Button>
          <Button variant="danger" onClick={confirm}>Delete board</Button>
        </>} />
```

**Prefer an undoable action and a toast.** Most confirmation dialogs exist because the
action was not made reversible. Deleting with an Undo toast is better than asking "are you
sure" — it is faster when they meant it and safer when they did not.

Closes on Escape, the scrim, and the close button. Omit `onClose` only for a genuinely
blocking state, and then say in the body why there is no way out.

**Buttons: Cancel first, the action last, and label the action with the verb** — "Delete
board", not "OK". Someone reading only the buttons should understand what happens.

The title is a question or a noun phrase; the description states the consequence including
anything irreversible. Do not hide "this cannot be undone" in a tooltip.

Never open a dialog from a dialog. If a flow needs two steps, it needs a different shape.
