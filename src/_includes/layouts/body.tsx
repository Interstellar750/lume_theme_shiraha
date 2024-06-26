export default ({ children, comp: { Head }, head, lts, title }: Lume.Data, {}: Lume.Helpers) => (
  <html lang={lts.site.lang} class="h-feed">
    <Head>
      <title>{title ? `${title} - ${lts.site.title}` : lts.site.title}</title>
      {head?.metas?.map((meta, key) => (<meta key={key} {...meta} />))}
      {head?.links?.map((link, key) => (<link key={key} {...link} />))}
    </Head>
    <body class="prose max-w-none bg-surface color-on-surface">
      {children}
    </body>
  </html>
)
