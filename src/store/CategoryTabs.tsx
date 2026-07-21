import { CATEGORIES } from '../data/catalog'

export default function CategoryTabs({
  active,
  onChange,
}: {
  active: string
  onChange: (id: string) => void
}) {
  return (
    <div className="s-tabs" role="tablist" aria-label="Categorías">
      <button type="button" className={`s-tab${active === 'todas' ? ' is-active' : ''}`} onClick={() => onChange('todas')}>
        Todas
      </button>
      {CATEGORIES.map((c) => (
        <button
          key={c.id}
          type="button"
          className={`s-tab${active === c.id ? ' is-active' : ''}`}
          onClick={() => onChange(c.id)}
        >
          {c.label}
        </button>
      ))}
    </div>
  )
}
