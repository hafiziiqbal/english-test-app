import GuestLayout from "../layouts/GuestLayout"
import { ReactSession } from 'react-client-session';
import Timer from "./Timer"
import { useState, useEffect } from "react"
import $ from "jquery";

const Tes = ({ data, menit, totalIndexSoal }) => {
    ReactSession.setStoreType("localStorage");

    const [no, setNo] = useState(0);
    const [objectData, setObjectData] = useState('');
    const [jawaban, setJawaban] = useState('');


    useEffect(() => {
        setObjectData(data[no])
        pilihanJawaban(objectData)
        playAudio(objectData)
        showParagraf(objectData)
    }, [objectData])

    const pilihanJawaban = (data) => {
        $("#pilihanJawaban").empty()
        let jawaban = ReactSession.get(data.id);
        let pilihan = ['a', 'b', 'c', 'd']
        if (data != '') {
            pilihan.forEach(e => {
                let isChecked = '';
                if (jawaban == e) {
                    isChecked = 'checked'
                }
                $("#pilihanJawaban").append(
                    '<div class="form-check">' +
                    `<input class="form-check-input" type="radio" name="${data.id}" id="jawaban${e}${data.id}" value="${e}" ${isChecked} />` +
                    `<label class = "form-check-label" for ="jawabanA${data.id}">` +
                    `${e}. ${data.a}</label > </div >`
                );

                $(`#jawaban${e}${data.id}`).on("click", e => {
                    ReactSession.set(e.target.name, e.target.value)

                });
            });
        }
    }

    const playAudio = (data) => {
        $("#contAudio").empty()
        if (data.tipe == 'listening' && ReactSession.get(`audio${data.id}`) != false) {
            $('#soalCOnt').addClass('d-none')
            $("#contAudio").append(
                `<audio id="Audio" src=${data.soal}>` +
                `</audio>` +
                `<button id="btnPlay" type="button">Play Audio</button>`
            );
            $(`#btnPlay`).on("click", e => {
                ReactSession.set(`audio${data.id}`, false)
                $(`#Audio`).get(0).play()
                e.target.remove()
            });
        } else {
            $('#soalCOnt').removeClass('d-none')
        }
    }

    const showParagraf = (data) => {
        $('#paragrafCont').empty()
        if (data.tipe == 'structure') {
            $('#paragrafCont').append(
                '<label class="fw-bold">Paragraf</label>' +
                `<p>${data.paragraf}</p>`
            )
        }
    }

    const goNext = (no, data, totalIndexSoal, objectData) => {

        if (no == totalIndexSoal) {
            setNo(no)
            setObjectData(data[no])
        } else {
            setNo(no + 1)
            setObjectData(data[no] + 1)
        }
        pilihanJawaban(objectData)
        playAudio(objectData)
        showParagraf(objectData)
    }

    const goPrev = (no, data, objectData) => {
        if (no == 0) {
            setNo(0)
            setObjectData(data[0])
        } else {
            setNo(no - 1)
            setObjectData(data[no - 1])

        }
        pilihanJawaban(objectData)
        playAudio(objectData)
        showParagraf(objectData)
    }


    return (
        <div className="container mt-4">
            <h1 className="fw-bold">TEST TOEFL</h1>
            <div className="border border-secondary rounded p-2" style={{ 'width': 'fit-content' }}>
                <label>Sisa Waktu : <Timer duration={(menit * 60) * 1000} /></label>
            </div>

            <div className="row mt-3">
                <div className="col-3">
                    <div style={{ 'background': '#d3d2d2' }} className="p-3 rounded">
                        <p className="fw-bold">NO {no + 1}</p>
                        <p >Tipe Soal: <span className="fw-bold text-capitalize">{objectData.tipe}</span> </p>
                        <p >Panduan: <span className="fw-bold text-capitalize">{objectData.panduan}</span> </p>
                    </div>
                </div>
                <div className="col-9">
                    <div style={{ 'background': '#d1fff9' }} className="p-3 rounded">
                        <div id="contAudio"></div>
                        <div id="paragrafCont"></div>
                        <p id="soalCOnt">{objectData.soal}</p>

                        <div id="pilihanJawaban">
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="row">
                    <div className="col-6"> <button onClick={() => { goPrev(no, data, objectData) }} className="btn btn-secondary">Previous</button></div>
                    <div className="col-6 d-flex justify-content-end"> <button onClick={() => { goNext(no, data, totalIndexSoal, objectData) }} className="btn btn-secondary">Next</button></div>
                </div>

            </div>


        </div >

    )
}

Tes.layout = page => <GuestLayout children={page} />


export default Tes