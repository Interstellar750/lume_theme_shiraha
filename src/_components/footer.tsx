export default ({ lts }: Lume.Data, { url }: Lume.Helpers) => (
  <footer class="h-12 mx-auto flex gap-1 place-items-center motion-safe:view-transition-footer">
    <div>
      <span>© {new Date().getUTCFullYear()}</span>
      <a href={url('/')}>{lts.author.name}</a>
      <span class="md-dot">·</span>
      <br class="sm-bk-line" />
      <span>Powered by</span>
      <a href="https://github.com/importantimport/lume_theme_shiraha" target="_blank">Shiraha</a>
      <span>&</span>
      <a href="https://lume.land" target="_blank">Lume</a>
    </div>
  </footer>
)
