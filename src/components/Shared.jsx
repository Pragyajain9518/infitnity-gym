import assets from '../assets/design-assets.json'

export function Logo() {
  return (
    <span className="brand-mark">
      <img src={assets['1:2531'].img312} alt="Infitnity" />
    </span>
  )
}
export function Button({
  href = '#contact',
  children = 'Consult Today',
  outline = false,
  arrow = true,
  ...props
}) {
  return (
    <a
      className={`button${outline ? ' button--outline' : ''}`}
      href={href}
      {...props}
    >
      {children}
      {arrow && <img src={assets['1:615'].imgIcon} alt="" />}
    </a>
  )
}
export function PageHero({
  title,
  children,
  image = assets['1:752'].imgHero,
  className = '',
  secondary = '#coaches',
  secondaryLabel = 'See Our Coaches',
}) {
  return (
    <section className={`page-hero ${className}`}>
      <div className="page-hero__visual" aria-hidden="true">
        <img src={image} alt="" />
      </div>
      <div className="container page-hero__inner">
        <h1>{title}</h1>
        <div className="page-hero__body">
          <p>{children}</p>
          <div className="button-row">
            <Button />
            <Button href={secondary} outline arrow={false}>
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
export function CallToAction({
  title,
  children = 'Join A Community That Cares About The Years Beyond The Goal.',
}) {
  return (
    <section className="call-to-action">
      <div className="container">
        <h2>{title}</h2>
        <p>{children}</p>
        <Button>Let’s Chat</Button>
      </div>
    </section>
  )
}
