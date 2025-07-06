# New update v0.0.2

Changes:
- `withAuth` from `useAuth` hook is jet a redux action.
- `withAuth` return a user data or throw a error when occur.
- `authentication` from `useAuth` return boolean value as a flag if ser are authenticated or not.
- Local state in `useAuth` for errors and loading state.
- Packages update.

Added:
- README.md
- Error Box component for text error messages.
- Form Header component.
- Some SVG Icons.
- Exposer button for password inputs.
- authorization in some routes.
- Protected Route component (in progress).
- Check for user access to create new project.
- Path aliases in vite config for components, hooks, pages, educers, scss and utils.
- `aria-label` in some Links for accessibility.
- Some constants.

Fixed:
- Types definitions.