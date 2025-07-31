
function Home() {
    return (
        <>
            <section className="section main-banner" id="top" data-section="section1">
                <video autoPlay muted loop id="bg-video">
                    <source src="assets/images/course-video.mp4" type="video/mp4" />
                </video>

                <div className="video-overlay header-text">
                    <div className="caption">
                        <h6>Graduate School of Management</h6>
                        <h2>Welcome {localStorage.getItem("name")},</h2>
                        <h2><em>To Your</em> Classroom</h2>
                        <div className="main-button">
                        
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}

export default Home