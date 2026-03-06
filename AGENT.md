# Landing Cafe - Agent Guide

## Architecture

Dashboard-style cafe management app (not a traditional landing page). `App.tsx`
manages a tab-based layout with four views routed via `useState<Tab>`:

| Tab | Component(s) | Purpose |
|-----|--------------|---------|
| `dashboard` | `OverviewCards`, `RecentOrders`, `PopularItems` | KPI cards + order/item summaries |
| `menu` | `MenuGrid` -> `MenuCard`, `AddItemDialog` | CRUD grid for menu items |
| `orders` | `OrdersTable`, `OrdersFilters`, `OrderDetailDialog` | Filterable order list |
| `settings` | `SettingsForm` | App configuration form |

Shared layout components: `AppSidebar` (icon rail, desktop), `Header` (top bar
with mobile nav), `MobileNav` (sheet-based nav for small screens).

Data layer lives in `data/` with typed exports:
- `menu-items.ts` -- `MenuItem[]` and category list
- `orders.ts` -- order data
- `stats.ts` -- dashboard statistics

A full **shadcn/ui** component library is vendored under `components/ui/`
(button, card, dialog, table, tabs, etc.). Configuration in `components.json`
(new-york style, CSS variables, lucide icons). Utility helper in `lib/utils.ts`.

## Styling

- **Tailwind CSS v4** via `@import "tailwindcss"` in `index.css`.
- Design tokens defined as CSS custom properties in `:root` (oklch color space).
- shadcn/ui components use Tailwind utility classes exclusively.
- A `revert-layer` hack in `index.css` restores Tailwind utility precedence
  over the host page reset styles.
- `@import "tw-animate-css"` provides animation utilities.

## Extension Points

- Add a new tab: define a component, extend the `Tab` type union in `App.tsx`,
  add a nav entry in `app-sidebar.tsx` and `header.tsx`.
- Add a new UI primitive: drop a shadcn/ui component into `components/ui/` and
  it is immediately available via `@/components/ui/...` imports.
- Extend data: add or modify typed arrays in `data/` files; components will
  pick up the changes automatically.

## Constraints

- The `@/` path alias maps to the template root. Use it for all cross-directory
  imports (e.g. `@/components/ui/button`, `@/data/menu-items`).
