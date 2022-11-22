import GuestLayout from "../layouts/GuestLayout";
import { Link } from "@inertiajs/inertia-react"

const Home = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ 'height': '75vh' }} >
            <div>
                <h1 className="text-center fw-bold text-uppercase mb-3">Tes TOEFL</h1>
                <Link href="/tes"><button className="btn btn-primary w-100">Mulai Tes</button></Link>
            </div>
        </div>




    )
}

Home.layout = page => <GuestLayout children={page} />

export default Home