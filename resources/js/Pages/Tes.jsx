import GuestLayout from "../layouts/GuestLayout"
import { Link } from "@inertiajs/inertia-react"

const Tes = ({ data, nomor }) => {
    console.log(nomor);
    return (
        <div className="container mt-4">
            <h1 className="fw-bold">TEST TOEFL</h1>
            <div className="border border-secondary rounded p-2" style={{ 'width': 'fit-content' }}>
                <label>Sisa Waktu : <span className="fw-bold">0:29:52</span></label>
            </div>

            <div className="row mt-3">
                <div className="col-3">
                    <div style={{ 'background': '#d3d2d2' }} className="p-3 rounded">
                        <p className="fw-bold">NO {nomor}</p>
                        <p >Tipe Soal: <span className="fw-bold">Reading</span> </p>
                        <p >Panduan: <span className="fw-bold">Baca Soal Dengan Teliti dan Pilihlh Jawaban Yang Menurut Anda Paling Benar</span> </p>
                    </div>
                </div>
                <div className="col-9">
                    <div style={{ 'background': '#d1fff9' }} className="p-3 rounded">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, odit sit beatae consequuntur accusantium quasi pariatur veritatis officiis at aperiam.</p>

                        <div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="jawaban_1" id="jawaban1A" />
                                <label className="form-check-label" htmlFor="jawaban1A">
                                    a. Lorem ipsum dolor sit amet.
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="jawaban_1" id="jawaban1B" />
                                <label className="form-check-label" htmlFor="jawaban1B">
                                    b. Lorem ipsum dolor sit amet.
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="jawaban_1" id="jawaban1C" />
                                <label className="form-check-label" htmlFor="jawaban1C">
                                    c. Lorem ipsum dolor sit amet.
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="jawaban_1" id="jawaban1D" />
                                <label className="form-check-label" htmlFor="jawaban1D">
                                    d. Lorem ipsum dolor sit amet.
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-6"><Link href="/tes"><button className="btn btn-secondary">Previous</button></Link></div>
                <div className="col-6 d-flex justify-content-end"><Link href="/tes"><button className="btn btn-secondary">Next</button></Link></div>
            </div>
        </div>
    )
}

Tes.layout = page => <GuestLayout children={page} />


export default Tes