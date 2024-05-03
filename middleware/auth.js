export default function ({ store, redirect }) {
  const account = store.state.auth.account
  if (!account) {
    redirect('/login')
  }
}
