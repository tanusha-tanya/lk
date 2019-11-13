export default function({store, redirect}) {
    if (!store.getters.hasToken || !localStorage.getItem('token')) {
      redirect('/login?message=login')
    }
}
