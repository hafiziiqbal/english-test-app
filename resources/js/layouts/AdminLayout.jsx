import { Link } from "@inertiajs/inertia-react"

const AdminLayout = ({ children }) => {
    return (
        <main>
            <h1>Admin Layout</h1>
            <aside>
                <Link href="/">Home</Link>
                <Link href="/tes">Tes</Link>
            </aside>
            <article>{children}</article>
        </main>
    )
}

export default AdminLayout