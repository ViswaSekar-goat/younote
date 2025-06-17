import axios from "axios";

const MainPage = ({link,setLink,transcript,setTranscript}) => {


    function extractYouTubeVideoID(url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }


    const handleSubmit = () => async (e) => {
        e.preventDefault();
        if (!link) {
            alert("Please enter a valid link");
            return;
        }
        const videoId = extractYouTubeVideoID(link);
        console.log("Video ID:", videoId);
        try {
        const res = await axios.post('http://127.0.0.1:5000/get_transcript', {
        video_id: videoId,
        });
        console.log(res.data.transcript);
        setTranscript(JSON.stringify(res.data.transcript)); // Show in UI
        } catch (error) {
            console.error('Error fetching transcript:', error);
        }
    }

    return (
        <>
            <div className="mainPage">
                <form action="submit" className="inputContainer" onSubmit={handleSubmit()}>
                    <input type="text" placeholder="Enter your playlist/video link" 
                    className="searchInput" value={link} onChange={(e)=>setLink(e.target.value)}/>
                    <button type="submit" className="submitButton">Import</button>
                </form>
            </div>
        </>
    )

}


export default MainPage;