Confirmation that an action just completed. Transient, dismissible, never blocking.

```jsx
<ToastStack toasts={toasts} onDismiss={dismiss} />

push({ id: 1, message: 'Saved to Branding', tone: 'success' });
push({ id: 2, message: '3 files deleted', action: <Button size="sm" variant="ghost">Undo</Button> });
```

**Past tense, no exclamation mark, no apology.** "Saved to Branding". "3 files deleted".
Not "Successfully saved!" and not "Oops, something went wrong".

**`Toast` for events, `Banner` for conditions.** A toast says something happened and then
leaves. A banner says something *is true* and stays until it is not. "Saved" is a toast.
"You are offline" is a banner.

Undo belongs in a toast more than almost anywhere else — it is the moment right after the
action, when the person still has it in mind. Prefer an undoable action plus a toast over
a confirmation dialog.

Auto-dismiss around 5 seconds, longer if there is an action to click. Errors people need
to act on should not auto-dismiss at all.

One at a time where possible. A stack of five toasts means the app is narrating itself.
