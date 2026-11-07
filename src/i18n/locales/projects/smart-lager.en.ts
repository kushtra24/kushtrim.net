import type { ProjectDetails } from '@/i18n/projectDetails'

const smartLager: ProjectDetails = {
  overview: 'SmartLager ("Lager" is German for warehouse) is a warehouse management web app for small and medium Swiss businesses. Staff use one admin dashboard to manage products, suppliers, clients, shipments and invoices. When a shipment is created, an invoice is generated from it with a Swiss QR-bill for payment. The frontend is built with Nuxt 4, Vue 3 and TypeScript. It talks to a Laravel REST API secured with Sanctum, and the interface is available in German, English and French.',

  whatItDoes: {
    intro: 'The app covers the main warehouse workflow: you record what you stock and where it comes from, then who you sell to, and finally you ship goods and bill for them.',
    groups: [
      {
        title: 'Inventory & Business Partners',
        items: [
          { name: 'Product Catalog', text: 'Register products with type, category, price, size, barcode, unit, initial stock, minimum stock level, storage location and expiration date. Each product is linked to a supplier.' },
          { name: 'Supplier Management', text: 'Create and view suppliers and link them to the products they deliver.' },
          { name: 'Client Management', text: 'Separate client types for companies and private persons, with tax ID, IBAN, contact details, billing address and notes. Each client page shows that client\'s full invoice history.' },
          { name: 'Dashboard', text: 'Summary cards with live counts of users, shipments, invoices, suppliers, clients and products. Each card links to its section.' },
        ],
      },
      {
        title: 'Shipments, Invoicing & Administration',
        items: [
          { name: 'Shipment Builder', text: 'Pick products from a searchable list, set the quantity and unit price per line, and see line and grand totals update live. Clients are found by type-ahead search and shown in an invoice preview.' },
          { name: 'Automatic Invoicing', text: 'Each shipment creates an invoice with an auto-generated number (YYYY-MM-XXXXX), issue and due dates, Swiss VAT (8.1% by default), subtotal, tax and total. Invoice status moves through Pending, In Shipment, Shipped and Delivered.' },
          { name: 'Swiss QR-Bill', text: 'Invoice pages render a QR-bill payment slip that follows the Swiss standard, built from the company\'s IBAN and the client\'s billing address. A print-optimized layout gives a ready-to-send paper invoice.' },
          { name: 'User & Access Management', text: 'Admins invite users by name and email. Invited users set their own password through a tokenized link, and routes are protected for logged-in users and for admins.' },
        ],
      },
    ],
  },

  architecture: {
    intro: 'SmartLager is a single-page Nuxt app that talks to a separate Laravel API. All business data and rules live in the API. The frontend handles the workflow, calculates totals and builds the Swiss QR-bill slip in the browser.',
    diagram: {
      title: 'SmartLager System Overview',
      systems: [
        { name: 'Nuxt 4 Frontend', text: 'Vue 3 + TypeScript app organized by feature (clients, products, suppliers, shipments, invoices, users). Uses PrimeVue components, Tailwind styling, Pinia state and i18n routing in DE/EN/FR.' },
        { name: 'Laravel REST API', text: 'Owns authentication (Sanctum), user invites and password setup, CRUD for all resources, paginated and sortable lists, dashboard stats, and storing shipments together with their invoices.' },
      ],
      channel: 'HTTPS JSON over Axios: Sanctum CSRF cookie plus Bearer token',
      flows: [
        { label: 'Login, CSRF handshake and token exchange', direction: 'one-way' },
        { label: 'Paginated and sorted lists (page, per_page, sort_field, sort_order)', direction: 'one-way' },
        { label: 'Shipment payload: client, product lines and invoice totals', direction: 'one-way' },
        { label: 'Invoice with company IBAN and client billing address, used for the QR-bill', direction: 'two-way' },
        { label: 'Dashboard counts and resource details', direction: 'two-way' },
      ],
      shared: { name: 'Shared Axios Client', text: 'A single Axios instance adds the auth token to every request and clears the session when the API returns 401, so every feature uses the same auth and error handling.' },
    },
    outro: 'Keeping the frontend as a plain API client means the Laravel backend can be scaled, reused or replaced independently. The Nuxt app stays focused on the user experience: language-prefixed routes, route guards, and a shipment draft that survives page reloads.',
  },

  highlights: {
    intro: 'Implementation details that go beyond basic CRUD screens:',
    items: [
      { name: 'Swiss QR-Bill Generation', text: 'Uses the swissqrbill library to build a standard-compliant payment slip as SVG in the browser. It checks that the creditor IBAN exists first and shows readable errors instead of a broken invoice.' },
      { name: 'Reusable Server-Driven Data Table', text: 'One BaseDatatable component, configured with a resource name and columns, gives every list page server-side pagination, sorting and click-through to details.' },
      { name: 'Persistent Shipment Drafts', text: 'The Pinia shipment store keeps selected products, quantities, client and invoice data in localStorage via VueUse useStorage, so a half-finished shipment survives a reload.' },
      { name: 'Laravel Sanctum Auth Flow', text: 'A custom useAuth composable does the CSRF-cookie handshake, logs in with a token, restores the session on startup from a plugin, and protects routes with requiresAuth, requiresAdmin and guestOnly flags.' },
      { name: 'Trilingual by Default', text: 'Full German, English and French translations (300+ keys each) with language-prefixed routes and date formatting that follows the selected language.' },
      { name: 'Print-Ready Invoices', text: 'Tailwind print: variants hide the app chrome and shadows, so the browser\'s print dialog produces a clean invoice with the QR-bill slip.' },
    ],
  },

  techStack: {
    intro: 'A modern Vue stack with deliberately few dependencies:',
    rows: [
      { area: 'Framework', technology: 'Nuxt 4, Vue 3.5', usedFor: 'Routing, layouts, middleware, plugins and auto-imports' },
      { area: 'Language', technology: 'TypeScript (strict)', usedFor: 'Typed stores, composables and components' },
      { area: 'UI Components', technology: 'PrimeVue 4 (Aura theme)', usedFor: 'Data tables, forms, autocomplete, date pickers, toasts, cards' },
      { area: 'Styling', technology: 'Tailwind CSS 4, tailwindcss-primeui', usedFor: 'Responsive layout and print styles' },
      { area: 'State', technology: 'Pinia, VueUse', usedFor: 'Shipment workflow state saved to localStorage' },
      { area: 'HTTP', technology: 'Axios', usedFor: 'Shared API client with auth and 401 interceptors' },
      { area: 'Auth', technology: 'Laravel Sanctum', usedFor: 'CSRF-protected login, bearer tokens, invite-based password setup' },
      { area: 'Payments', technology: 'swissqrbill', usedFor: 'Swiss QR-bill payment slips on invoices' },
      { area: 'i18n', technology: '@nuxtjs/i18n', usedFor: 'German (default), English, French with prefixed routes' },
      { area: 'Icons & Assets', technology: 'Font Awesome, @nuxt/fonts, @nuxt/image', usedFor: 'Navigation icons, font and image optimization' },
      { area: 'Tooling', technology: 'ESLint 9 (@nuxt/eslint), vue-tsc', usedFor: 'Linting and type checking' },
      { area: 'Backend', technology: 'Laravel REST API (separate repository)', usedFor: 'Persistence, business rules, dashboard stats' },
    ],
  },

  scope: {
    intro: 'Scope of the frontend codebase:',
    rows: [
      { measure: 'Business domains', value: '6 (Products, Suppliers, Clients, Shipments, Invoices, Users)' },
      { measure: 'Pages / routes', value: '21' },
      { measure: 'Vue feature and base components', value: '16' },
      { measure: 'API endpoints consumed', value: '~15' },
      { measure: 'Supported languages', value: '3 (DE, EN, FR)' },
      { measure: 'Source lines (Vue/TS/JSON)', value: '~6,400' },
      { measure: 'Tracked files', value: '74' },
    ],
  },
}

export default smartLager
