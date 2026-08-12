import { CATEGORIES } from '../data/catalog'

export default function CategoryTabs({
  active,
  onChange,
}: {
  active: string
  onChange: (id: string) => void
}) {
  return (
    // No es un tablist real (no hay tabpanels), así que se expone como grupo de
    // botones de filtro con estado presionado.
    <div className="s-tabs" role="group" aria-label="Filtrar por categoría">
      <button
        type="button"
        className={`s-tab${active === 'todas' ? ' is-active' : ''}`}
        aria-pressed={active === 'todas'}
        onClick={() => onChange('todas')}
      >
        Todas
      </button>
      {CATEGORIES.map((c) => (
        <button
          key={c.id}
          type="button"
          className={`s-tab${active === c.id ? ' is-active' : ''}`}
          aria-pressed={active === c.id}
          onClick={() => onChange(c.id)}
        >
          {c.label}
        </button>
      ))}
    </div>
  )
}
