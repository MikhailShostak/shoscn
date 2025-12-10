# CLAUDE.md

Guidance for working with the shoscn custom shadcn/ui registry project.

## Project Structure

```
shoscn/
├── components/ui/{category}/     # Source components (chat, input, layouts, media, utils)
├── components/hooks/              # React hooks
├── components/examples/           # Preview examples
├── content/docs/                  # MDX documentation
├── registry/components/           # Registry copies (mirror of components/)
└── registry/registry.json         # Registry manifest
```

## Adding a Component (Checklist)

- [ ] **Create** `components/ui/{category}/component-name.tsx`
  - Export both named and default: `export const X = ...; export default X;`
  - Export Props interface: `export interface XProps { className?: string; }`
  - Add `'use client'` if using hooks/browser APIs

- [ ] **Copy** to `registry/components/ui/{category}/component-name.tsx`

- [ ] **Add entry** to `registry/registry.json`
  - `dependencies`: npm packages (e.g., "lucide-react")
  - `registryDependencies`: shadcn (e.g., "button") or shoscn (e.g., "@shoscn/typing-dots")

- [ ] **Create examples** in `components/examples/{category}-examples.tsx`
  - Use `'use client'` directive
  - Wrap in `<div className="p-4">` for spacing

- [ ] **Create docs** at `content/docs/components/{component-name}.mdx`
  - Must include: Preview (ComponentPreview), Installation, API Reference table

- [ ] **Update** `components/sidebar-nav.tsx` (alphabetically in category)

- [ ] **Commit** with clean message (no AI attribution)

## Hook Rules

- Initialize useRef: `useRef<Type | undefined>(undefined)`
- Export options interface
- Location: `components/hooks/use-hook-name.ts`
- Registry type: `"registry:hook"`

## Categories

- `chat/` - Chat and messaging
- `input/` - Input and forms
- `layouts/` - Layout and containers
- `media/` - Media display
- `utils/` - Utilities
