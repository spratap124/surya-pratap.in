type Props = {
  note: string
  name: string
}

export function SiteFooter({ note, name }: Props) {
  return (
    <footer className="site-footer">
      <p className="site-footer__note">{note}</p>
      <p className="site-footer__copy">© {new Date().getFullYear()} {name}</p>
    </footer>
  )
}
