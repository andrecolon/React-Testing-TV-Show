import React from 'react'
import axios from 'axios'

export default function fetchShow() {
    const [show, setShow] = useState(null);
    const [seasons, setSeasons] = useState([]);
    const [selectedSeason, setSelectedSeason] = useState("");
    const episodes = seasons[selectedSeason] || [];
    // fetchShow.js
    export const fetchShow = () => {
        return axios.get
            .then(res => return res) // or res.data, however you want to set that up
    }

    // App.js
    useEffect(() => {
        fetchShow
            .then(res => {
                // set state with the data
            }
}, []);

    return (
        <div>
            
        </div>
    )
}
