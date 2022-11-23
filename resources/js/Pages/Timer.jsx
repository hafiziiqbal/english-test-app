import { useState, useEffect } from "react"

const Timer = ({ duration }) => {
    const [time, setTime] = useState(duration);

    if (time != 0) {
        useEffect(() => {
            setTimeout(() => {
                setTime(time - 1000)
            }, 1000)
        }, [time])
    } else {
        useEffect(() => {
            setTime(0)
        }, [time])
    }


    const getFormatedTime = (miliseconds) => {
        let totalSeconds = parseInt(Math.floor(miliseconds / 1000))
        let totalMinutes = parseInt(Math.floor(totalSeconds / 60))
        let seconds = parseInt(totalSeconds % 60)

        totalMinutes = totalMinutes < 10 ? "0" + totalMinutes : totalMinutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;


        return `${totalMinutes} : ${seconds}`
    }
    return (
        <>
            <span className="fw-bold">
                {getFormatedTime(time)} Menit
            </span>
        </>
    )
}

export default Timer