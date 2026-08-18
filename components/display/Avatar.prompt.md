A person, in a table row, a comment, a member list, an account menu.

```jsx
<Avatar name="Ada Lovelace" src={user.photo} />
<Avatar name="Ada Lovelace" size="lg" status="online" />
<AvatarGroup people={members} max={4} />
```

**Always pass `name`, even with a `src`.** It is the alt text, the initials fallback, and
the source of the colour. An avatar with no name is an anonymous circle.

The fallback colour is derived from the name, so the same person is always the same colour
without storing anything. Do not override it per-user — that is what makes a member list
scannable.

`status` only where presence is real and current. A stale green dot is worse than none.

`AvatarGroup` for "these people did this" — collaborators on a document, members of a
team. Cap it at four or five; past that the "+n" is the useful part and the faces are not.
