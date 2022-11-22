import { Link } from "@inertiajs/inertia-react"

const GuestLayout = ({ children }) => {
    return (
        <main>
            <article>{children}</article>
        </main>
    )
}

export default GuestLayout