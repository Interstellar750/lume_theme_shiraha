export type Props = {
  className?: 'h-entry'
}

export default ({ comp: { Footer, Header }, children, className }: Lume.Data & Props) => (
  <main class={`${className ?? ''} w-full max-w-screen-md 2xl:max-w-screen-lg min-h-screen mx-auto p-8 flex flex-col gap-8`}>
    <Header />
    {children}
    <Footer />
  </main>
)
